import React from "react";

const Test1 = React.lazy(() => import("../pages/Test1"));
const Test2 = React.lazy(() => import("../pages/Test2"));

const routes = [
  {
    path: "",
    index: true,
    title: "Test 1",
    element: Test1,
  },
  {
    path: "test2",
    title: "Test 2",
    element: Test2,
  },
];
export default routes;
