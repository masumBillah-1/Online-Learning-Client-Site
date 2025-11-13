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
import CoursesDetails from "../Pages/CoursesDetails";
import CertificateDownload from "../Pages/CertificateDownload";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            loader: ()=> fetch('http://localhost:4000/latest-courses'),
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
          path: '/certificate/:id',
          loader: ()=> fetch('http://localhost:4000/courses'),
          Component: CertificateDownload
        },
        {
          path: '/details/:id',
          loader: ()=> fetch('http://localhost:4000/courses'),
          Component: CoursesDetails
          
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