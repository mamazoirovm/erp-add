import React from "react";
import Root from "./layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ConfigProvider } from "antd";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: 'teachers',
        element: <Teachers/>
      },
      {
        path: 'classes',
        element: <Classes/>
      }
    ]
  },
]);
const App = () => {
  return (
    <>
      <ConfigProvider 
      theme={{
        token: {
          colorPrimary: "#bc8e5c",
          fontSize: 16
        }
      }}
      >
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </ConfigProvider>
    </>
  );
};

export default App;