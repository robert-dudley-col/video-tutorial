import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Index from './routes';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<Index/>
  }
])

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
