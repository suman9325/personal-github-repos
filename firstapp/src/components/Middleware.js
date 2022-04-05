import React from "react"
import { Route, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Middleware = ({
    component: Component,
    isAuthProtected,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => {
            if (isAuthProtected && !localStorage.getItem("token")) {
                return (
                    <Redirect to={{ pathname: "/" }} />
                )
            }
            if (isAuthProtected && localStorage.getItem("token")) {
                return (
                    <>
                        <Sidebar />
                        <Navbar />
                        <Component />
                    </>
                )
            }
            return (
                <>
                    <Component />
                </>

            )
        }}
    />
)


export default Middleware;