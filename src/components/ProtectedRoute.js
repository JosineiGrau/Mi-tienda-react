// import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  // const { user } = useAuth();
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};
