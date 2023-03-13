import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App'
import Company from './routes/Company'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import Home from './routes/Home'
import NewProject from './routes/NewProject'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/newproject",
        element: <NewProject />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
