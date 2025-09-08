import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./MainLayout/Login";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Login />
            }
        ]
    }
]);

export default routes;