import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateAccount from './Components/CreateAccount.jsx'
import AllreadyUser from './Components/AllreadyUser.jsx'
import SignInUser from './Components/SignInUser.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/create_account",
    element:<CreateAccount/>
  },
  {
    path:"/allreadyUser",
    element:<AllreadyUser/>
  },
  {
    path:"/signInUser",
    element:<SignInUser/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
