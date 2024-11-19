import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Deshboard from './components/Deshboard/Deshboard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import DeshboardCard from './components/DeshboardCard/DeshboardCard.jsx';
import DeshboardWishlist from './components/DeshboardWishlist/DeshboardWishlist.jsx';
import DataProvider from './components/Provider/DataProvider.jsx';
import PreOrder from './components/PreOrder/PreOrder.jsx';
import React from "react";
import {Helmet} from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/dashboard',
        element : <Deshboard></Deshboard>,
        children : [
          {
            path : '/dashboard/card',
            element : <DeshboardCard></DeshboardCard>,
    
          },
          {
            path : '/dashboard/wishlist',
            element : <DeshboardWishlist></DeshboardWishlist>
          }

        ]
      },
      {
        path : '/preorder',
        element : <PreOrder></PreOrder>
      },
      {
        path : 'products/:id',
        element : <ProductDetails></ProductDetails>,
        loader : () => fetch('/phonesData.json')
      },
      
    ],
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
)
