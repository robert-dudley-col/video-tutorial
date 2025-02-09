import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './routes';
import StaffLogin from './routes/staff/login';
import StaffIndex from './routes/staff';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<Index/>
  },
  {
    path:'/staff/login',
    element:<StaffLogin/>
  },
  {
    path:'/staff',
    element:<StaffIndex/>
  }
])

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
