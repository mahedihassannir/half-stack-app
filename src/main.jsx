import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Contex from './components/contex/Contex';

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "Login",
        element: <Login></Login>
      },
      {
        path: "Register",
        element: <Register></Register>
      },

    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contex>
      <RouterProvider router={router}></RouterProvider>
    </Contex>
  </React.StrictMode>,
)
