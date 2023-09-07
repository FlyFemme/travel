import { createBrowserRouter } from "react-router-dom";
import ShowLogged from '../pages/show_logged/ShowLogged';
import Signin from '../pages/signin/Signin';
import Edit from '../pages/edit/Edit';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Create from '../pages/create/Create';
import Roles from '../pages/roles/RolPage';



const routes = [
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/show-logged/:id",
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

    {
        path: "/login",
        element: <Login />,
    },

    {
        path:"/roles",
        element:<Roles />,
    }

]

const router = createBrowserRouter(routes);

export default router;