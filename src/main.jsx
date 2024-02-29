import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, NavLink,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from "./pages/error-page";
import AboutPage from "./pages/about-page.jsx";
import Card from "./shared/Card.jsx";
import RootPage from "./pages/root-page.jsx";
import ParamsDemoPage from "./pages/params-demo-page.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'app',
                element: <App />
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'params/:id/:name',
                element: <ParamsDemoPage />
            }
        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
