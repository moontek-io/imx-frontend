import React from "react";
import { setToken } from "helpers/http/client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getProfile } from "helpers/http/apis";
import { UserType } from "modules/add-email/types";

interface AuthContextType {
  authorize: (token: string) => void;
  isAuthenticated: boolean;
  user: UserType | null;
}

const AuthContext = React.createContext<AuthContextType>({
  authorize: () => {},
  user: null,
  isAuthenticated: false,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isBootstrapped, setIsBootstrapped] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<UserType | null>(null);

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
      getProfile()
        .then((res) => {
          setUser(res.data);
          setIsAuthenticated(true);
          setIsBootstrapped(true);
        })
        .catch((err) => {
          console.log(err);
          setIsBootstrapped(true);
        });
      return;
    }
    setIsBootstrapped(true);
  }, []);

  const authorize = React.useCallback(
    (token: string) => {
      Cookies.set("token", token, { expires: 30 });
      setIsAuthenticated(true);
      setToken(token);
      navigate("/discord");
    },
    [navigate]
  );

  const value = React.useMemo(
    () => ({ authorize, isAuthenticated, user }),
    [authorize, isAuthenticated, user]
  );

  return isBootstrapped ? (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  ) : null;
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
