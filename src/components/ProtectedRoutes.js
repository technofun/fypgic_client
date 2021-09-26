import React from 'react'
import { Route, Redirect } from 'react-router-dom';
function ProtectedRoutes({ auth, component: Component, ...rest }) {
    const isAuthenticated = localStorage.getItem("user");
    // console.log("this", isAuthenticated);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated  ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    )
}

export default ProtectedRoutes
