import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const AdminRoutes = () => (
  <>
    <Route
      path="/admin"
      element={
        <div>
          <p>Admin</p>
        </div>
      }
    >
      <Route
        path="/users"
        element={
          <div>
            <p>Users</p>
          </div>
        }
      />
      <Route
        path="/orders"
        element={
          <div>
            <p>Orders</p>
          </div>
        }
      />
    </Route>
    <Route path="*" element={ <Navigate to="/admin" /> } />
  </>
);

export default AdminRoutes;
