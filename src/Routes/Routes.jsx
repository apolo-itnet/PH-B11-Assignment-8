import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import LawyerProfile from '../Pages/LawyerProfile/LawyerProfile';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('/lawyersData.json'),
        path: "/",
        Component: Home
      },
      {
        path: "/my-bookings",
        Component: MyBookings
      },
      {
        path: "/blogs",
        Component: Blogs
      },
      
      {
        path: "/lawyerProfile/:license",
        loader: () => fetch('/lawyersData.json'),
        element: <LawyerProfile></LawyerProfile>
        
      }
    ]
  },
]);
