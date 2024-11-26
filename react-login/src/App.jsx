import React from 'react';
import Signin from './Components/Signin.jsx';
import Login from './Components/Login.jsx'; // Corrected the component name to uppercase
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Signin />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
