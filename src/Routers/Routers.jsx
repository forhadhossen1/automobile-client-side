import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUP/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Details from "../Pages/Details/Details";
import PrivetRouts from "./PrivetRouts";

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
        },
        {
          path : '/addProduct',
          element : <PrivetRouts><AddProduct></AddProduct></PrivetRouts>
        },
        {
          path : '/myCart',
          element : <PrivetRouts><MyCart></MyCart></PrivetRouts>,
          loader : ()=> fetch(' https://assignment10-automotive-server.vercel.app/products')
        },
        {
          path : '/update/:id',
          element : <PrivetRouts><UpdateProduct></UpdateProduct></PrivetRouts>,
          loader : ({params}) => fetch(` https://assignment10-automotive-server.vercel.app/products/${params.id}`)
        },
        {
          path : '/product-details/:brand_name',
          element: <ProductDetails></ProductDetails>,
          loader : () => fetch(' https://assignment10-automotive-server.vercel.app/products')
        },
        {
          path : '/details/:id',
          element: <PrivetRouts><Details></Details></PrivetRouts>,
          loader : ({params}) => fetch(` https://assignment10-automotive-server.vercel.app/products/${params.id}`)
        }
      ]
    },
  ]);

  export default router;