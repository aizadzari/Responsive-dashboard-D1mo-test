import React from "react";
import { Redirect } from "react-router-dom";
import dashboard from "../Page/Dashboard/Dashboard";
import Login from '../Page/Login/Login'

const authProtectedRoutes = [
    { path: "/dashboard", component: dashboard },
    { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
]

const publicRoutes = [
    { path: "/login", component: Login },
]

export { authProtectedRoutes, publicRoutes };