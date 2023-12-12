import React from "react";
import { Navigate } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import { useAppSelector } from "../stores";
const Test1Content = React.lazy(() => import("../contents/Test1Content"));

const Test1 = () => {
  const authState = useAppSelector((state) => state.auth);

  return authState.isAuth && authState.address.length > 0 ? (
    <Navigate to="test2" replace />
  ) : (
    <>
      <Header />
      <Body>
        <Test1Content />
      </Body>
    </>
  );
};

export default Test1;
