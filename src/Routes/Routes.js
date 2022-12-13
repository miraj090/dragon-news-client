import { createBrowserRouter } from "react-router-dom";
import Category from "../Layout/Category/Category/Category";
import Home from "../Layout/Home/Home/Home";
import Main from "../Layout/Main";
import News from "../Layout/News/News/News";

export const routes = createBrowserRouter([
    {
        path : '/' ,
        element : <Main/>,
        children:[
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/category/:id',
                element : <Category/>
            },
            {
                path : '/news/:id',
                element : <News/>
            },
        ]
    }
])