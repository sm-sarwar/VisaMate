import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import NotFound from './Components/NotFound.jsx';
import AuthLayout from './Layout/AuthLayout.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
