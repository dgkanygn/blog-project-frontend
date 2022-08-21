import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(DataContext);

  return isLogin ? children : <Navigate to="/" />;
};

export default PrivateRoute;
