import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/auth-context";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
};
export default RequireAuth;
