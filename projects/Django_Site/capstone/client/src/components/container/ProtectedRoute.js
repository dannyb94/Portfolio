import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

export default function ProtectedRoute(props){
    const {path, redirectTo, component: C, token, ...rest} = props
    return token?
    <Routes>
    <Route path = {path} render = {() => <C {...rest} />} /></Routes> :
    <Navigate to = {redirectTo} />
}