import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from './auth';

const PrivateRoute = () => {
    const auth = isAuth();

   //outlet navega nos componentes filhos
    return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;