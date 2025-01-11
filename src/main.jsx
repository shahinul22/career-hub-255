import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Routes/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPages from './Components/ErrorPages/ErrorPages.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
