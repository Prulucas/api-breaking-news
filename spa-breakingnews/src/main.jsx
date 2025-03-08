import React from 'react'
import ReactDOM from "react-dom/client";
import './globalStyled.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom" 
import { Navbar } from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx'
import { Search } from './pages/search/search.jsx'
import { GlobalStyle } from './globalStyled.jsx'
import ErrorPage from './pages/ErrorPage/errorPage.jsx';
import { Authentication } from './pages/authentication/authentication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
