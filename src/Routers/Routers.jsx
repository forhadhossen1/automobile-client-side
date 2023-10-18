import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUP/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts></Layouts>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : () => fetch('/brand.json')
        },
        {
          path : '/signUp',
          element : <SignUp></SignUp>
        },
        {
          path : '/login',
          element : <Login></Login>
        }
      ]
    },
  ]);

  export default router;