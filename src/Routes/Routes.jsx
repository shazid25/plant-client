import React from 'react'

import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Plants from '../components/Plants/Plants';
import AuthLayout from '../components/Layouts/AuthLayout';
import Login from '../components/Login/Login';
import Registation from '../components/Registation/Registation';
import { Component } from 'react';
import MyPlant from '../pages/MyPlant/MyPlant';
import MyplantLayout from '../components/Layouts/MyplantLayout';
import addPlantLayout from '../components/Layouts/addPlantLayout';
import AddPlant from '../pages/AddPlant/AddPlant';
import Details from '../pages/Details/Details';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path:"/",
        Component:Home
      },
      {
        path: "/plant",
        Component: Plants
      },

    ]
  },

  {
    path:"/auth",
    Component: AuthLayout,
    children: [
      {
        path:"/auth/login",
        Component: Login
      },
      {
        path: "/auth/registation",
        Component: Registation
      }
    ]
  },

  {
    path:"/my",
    Component: MyplantLayout,
    children: [
     {
      path:"/my/plant",
      Component: MyPlant
     }
    ]
  },

  {
    path:"/add",
    Component: addPlantLayout,
    children: [
      {
        path:"/add/yourPlant",
        Component: AddPlant
      }
    ]
  },


{
  path: "/details",
  Component: Details
}

  
]);







