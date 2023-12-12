import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";
const Test2Content = React.lazy(() => import("../contents/Test2Content"));

const Test2 = () => {
  return (
    <>
      <Header />
      <Body>
        <Test2Content />
      </Body>
    </>
  );
};

export default Test2;
