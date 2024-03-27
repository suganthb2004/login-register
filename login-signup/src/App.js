import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import { Home } from './components/home';
import Product from './components/product';

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/products",
    element:<Product />
  }
])

export default App;
