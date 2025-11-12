import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Homepage from "../Pages/Homepage";
import AllCourses from "../Pages/AllCourses";
import Dashboard from "../Pages/Dashboard";
import Overview from "../Pages/Overview";
import MyCourses from "../Pages/MyCourses";
import Students from "../Pages/Students";
import Login from "../components/Login";
import Register from "../components/Register";
import AddCourse from "../Pages/AddCourse";


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
          path: '/dashboard/overview',
          Component: Overview
        },
        {
          path: '/dashboard/mycourses',
          Component: MyCourses
        },
        {
          path: '/addcourses',
          Component: AddCourse
        },
        {
          path: '/dashboard/mycourses',
          Component: MyCourses
        },
        {
          path: '/dashboard/students',
          Component: Students
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