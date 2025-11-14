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
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('https://online-learning-platform-server-sit.vercel.app/latest-courses'),
        element: <Homepage />
      },
      {
        path: "/allcourses",
        loader: () => fetch('https://online-learning-platform-server-sit.vercel.app/courses'),
        element: <AllCourses />
      },
      {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
          {
            path: 'overview',
            element: <Overview />
          },
          {
            path: 'mycourses',
            element: <MyCourses />
          },
          {
            path: 'students',
            element: <Students />
          }
        ]
      },
      {
        path: '/addcourses',
        element: <PrivateRoutes><AddCourse /></PrivateRoutes>
      },
      {
        path: '/certificate/:id',
        loader: () => fetch('https://online-learning-platform-server-sit.vercel.app/courses'),
        element: <CertificateDownload />
      },
      {
        path: '/details/:id',
        loader: () => fetch('https://online-learning-platform-server-sit.vercel.app/courses'),
        element: <PrivateRoutes><CoursesDetails /></PrivateRoutes>
      },
      {
        path: '/mycourses',
        element: <PrivateRoutes><MyCourses /></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

export default router;