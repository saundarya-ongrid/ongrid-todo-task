import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export const PublicRoutes = ({
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />           
        ): (
            <Component {...props} />
        )
    )} />
)