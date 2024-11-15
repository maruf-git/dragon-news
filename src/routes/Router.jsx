import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path:"/news",
        element: <NewsLayout></NewsLayout>
    },
    {
        path:"/authentication",
        element:<AuthLayout></AuthLayout>
    }
]);

export default router;