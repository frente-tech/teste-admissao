import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/App/Home';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import PrivateRoutes from './PrivateRoutes';
// import AdminRoutes from './AdminRoutes';
// import UserRoutes from './UserRoutes';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <PrivateRoutes /> }>
        <Route index element={ <Home /> } />
      </Route>
      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={ <Signup /> } />
      <Route path="*" element={ <Navigate to="/login" /> } />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
