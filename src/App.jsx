import React from "react";
import Root from "./layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { ConfigProvider } from "antd";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";
import Subject from "./pages/Subject";
import Timetable from "./pages/Timetable";
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
      },
      {
        path: 'subject',
        element: <Subject/>
      },
      {
        path: 'timetable',
        element: <Timetable/>
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