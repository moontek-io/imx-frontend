import React from "react";
import { setToken } from "helpers/http/client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  authorize: (token: string) => void;
  isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContextType>({
  authorize: () => {},
  isAuthenticated: false,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isBootstrapped, setIsBootstrapped] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
      setIsAuthenticated(true);
      setIsBootstrapped(true);
      return;
    }
    setIsBootstrapped(true);
  }, []);

  const authorize = React.useCallback((token: string) => {
    Cookies.set("token", token);
    setIsAuthenticated(true);
    setToken(token);
    navigate("/discord");
  }, [navigate]);

  const value = React.useMemo(
    () => ({ authorize, isAuthenticated }),
    [authorize, isAuthenticated]
  );

  return isBootstrapped ? (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  ) : null;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
