import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Homepage from "../Pages/Homepage";
import AllCourses from "../Pages/AllCourses";
import Dashboard from "../Pages/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Homepage
        },
        {
          path:"/allcourses",
          Component: AllCourses 
        },
        {
          path: '/dashboard',
          Component: Dashboard
        },
        {
          path:"/login",
          Component:Login
        },
        {
          path:"/register",
          Component: Register

        }

    ]
    
  },
]);


export default router