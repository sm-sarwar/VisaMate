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
import PrivateRoute from './Components/PrivateRoute.jsx';
import AddVisa from './Pages/AddVisa.jsx';
import AllVisa from './Pages/AllVisa.jsx';
import VisaDetailsPage from './Pages/VisaDetailsPage.jsx';
import MyAddedVisa from './Pages/MyAddedVisa.jsx';
import UpdateVisa from './Components/UpdateVisa.jsx';
import MyApplicationVisa from './Pages/MyApplicationVisa.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import SupportPage from './Pages/Support.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
  },
  {
    path:"/add-visa",
    element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>,

  },
  {
    path:"/all-visas",
    element:<AllVisa></AllVisa>,
  },
  {
    path:"/visa-details/:id",
    element:<PrivateRoute><VisaDetailsPage></VisaDetailsPage></PrivateRoute>,
    loader:()=> fetch('https://visa-mate-server.vercel.app/all-visas')
    
  },
  {
    path:"/my-visas",
    element:<PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
  },
  {
    path:"/updateVisas/:id",
    element:<UpdateVisa></UpdateVisa>,
    loader:({params})=> fetch(`https://visa-mate-server.vercel.app/all-visas/${params.id}`)
  },
  {
    path:"/aboutUs",
    element:<AboutUs></AboutUs>
  },
  {
    path:"/support",
    element:<SupportPage></SupportPage>
  },
  {
    path:'/my-applications',
    element:<PrivateRoute><MyApplicationVisa></MyApplicationVisa></PrivateRoute>,
    
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
