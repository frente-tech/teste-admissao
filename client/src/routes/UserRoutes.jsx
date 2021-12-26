import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const UserRoutes = () => (
  <>
    <Route path="/home" element={ <div><p>Home</p></div> } />
    <Route path="/orders" element={ <div><p>Orders</p></div> } />
    <Route path="/profile" element={ <div><p>Profile</p></div> } />
    <Route path="*" element={ <Navigate to="/home" /> } />
  </>
);

export default UserRoutes;
