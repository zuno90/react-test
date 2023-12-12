import React from "react";
import Loader from "./components/Loader";
import { HashRouter, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
const Test1 = React.lazy(() => import("./pages/Test1"));
const Test2 = React.lazy(() => import("./pages/Test2"));

const App: React.FC = () => {
  return (
    <main className="container-md">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <Test1 />
              </React.Suspense>
            }
          />
          <Route
            element={
              <React.Suspense fallback={<Loader />}>
                <Protected />
              </React.Suspense>
            }
          >
            <Route
              path="test2"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Test2 />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;
