import { createBrowserRouter } from "react-router-dom";
import ShowLogged from '../pages/card/Card';
import Signin from '../pages/signin/Signin';
import Edit from '../pages/edit/Edit';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Create from '../pages/create/Create';


const routes = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/card/:id",
        element: <ShowLogged />,
    },

    {
        path: "/create",
        element: <Create />,
    },

    {
        path: "/edit/:id",
        element: <Edit />,
    },

    {
        path: "/signin",
        element: <Signin />,
    },

    {
        path: "/login",
        element: <Login />,
    },
]

const router = createBrowserRouter(routes);

export default router;