import LoginComponent from "components/Auth/Login"
import HomeComponent from "components/Home";
import React from "react";

const routes =[
    {
      path:'/login',
      component: LoginComponent
    },
    {
      path:'/dashboard',
      component: Dashboard
    },
    {
      path:'/',
      component: HomeComponent
    },
  ]
  
  export default routes