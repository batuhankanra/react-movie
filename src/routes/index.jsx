import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import AddM from "~/pages/addM";
import FavoriteMovie from "~/pages/favorite-movie";
import Home from "~/pages/home";
import Movie from "~/pages/movie";
import NotFound from "~/pages/not-found";
import Soon from "~/pages/soon";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'movie',
                element:<Movie />
            },
            {
                path:'favoriteM',
                element:<FavoriteMovie />
            },
            {
                path:'addM',
                element:<AddM />
            },
            {
                path:'soon',
                element:<Soon />
            },
            {
                path:'*',
                element:<NotFound />
            }
        ]
    },
    
])
export default routes