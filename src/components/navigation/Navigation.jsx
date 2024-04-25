import { RouterProvider, createBrowserRouter } from "react-router-dom"
import NoPage from "../../pages/noPage/NoPage"
import HomePage from "../../pages/home/HomePage"
import ProductInfo from"../../pages/productInfo/ProductInfo"
import CartPage from"../../pages/cart/CartPage"
import AllProduct from"../../pages/allProduct/AllProduct"
import Signup from "../../pages/registration/Signup"
import Login from "../../pages/registration/Login"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }, {
        path: "/*",
        element: <NoPage />
    },{
        path: "/productinfo",
        element: <ProductInfo />
    },{
        path: "/cart",
        element: <CartPage />
    },{
        path: "/allproduct",
        element: <AllProduct />
    },{
        path: "/signup",
        element: <Signup />
    },{
        path: "/login",
        element: <Login />
    },


])
const Navigation = () => {
    return (
        
        <RouterProvider router={router} />)
}

export default Navigation
