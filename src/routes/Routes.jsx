import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorElement from "../layouts/ErrorElement";
import Bloges from "../pages/Blogs/Bloges";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import RecipeLayout from "../RecipeLayout/RecipeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blogs",
            element: <Bloges></Bloges>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/registration",
            element: <Registration></Registration>
        },
        {
            path: "recipe",
            element: <RecipeLayout></RecipeLayout>
        },
      ]
    },
  ]);

  export default router;