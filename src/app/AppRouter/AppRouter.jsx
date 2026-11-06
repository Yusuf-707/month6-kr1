import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Layaut } from '../Layaut'
import { HomePage } from '../../Components/HomePage'
import { UserPage } from '../../Components/UserPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layaut />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/user/:id',
            element: <UserPage />
          }
        ]
    }
])
export const AppRouter = () => {
  return <RouterProvider router={router} /> 
}
