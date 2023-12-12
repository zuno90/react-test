import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../stores";

const Protected: React.FC = () => {
  const location = useLocation();
  const authState = useAppSelector((state) => state.auth);

  return !authState.isAuth && authState.address.length === 0 ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default Protected;
