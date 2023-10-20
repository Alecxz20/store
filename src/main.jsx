import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Shop from './pages/Shop'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Product from './pages/Product'

const router = createBrowserRouter([
  {
    path: '/store',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/store/shop',
    element: <Shop />,
    errorElement: <Error />,
  },
  {
    path: '/store/shop/:category',
    element: <Shop />,
    errorElement: <Error />,
  },
  {
    path: "/store/product/:productName",
    element: <Product />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
