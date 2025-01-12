import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Routes/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPages from './Components/ErrorPages/ErrorPages.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import JobDetails from './Components/JonDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"), // Correct path for public folder
      },
      {
        path: "/jobD/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"), // Correct path for public folder
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
