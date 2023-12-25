import { IoIosAddCircle, IoMdHome } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import { MdAccessTimeFilled, MdOutlineFavorite } from "react-icons/md";

export const mainMenu=[
    {
        path:'/',
        title:'Anasayfa',
        icon:<IoMdHome className="h-[23px] w-[23px]" />
    },
    {
        path:'/movie',
        title:'Filmler',
        icon:<RiMovie2Fill  className="h-[23px] w-[23px]" />
    },
    {
        path:'/favoriteM',
        title:'Favori Filmler',
        icon:<MdOutlineFavorite   className="h-[23px] w-[23px]"/>
    },
    {
        path:'/addM',
        title:'Yeni Film Ekle',
        icon:<IoIosAddCircle />
    },
    {
        path:'/soon',
        title:'Yakında',
        icon:<MdAccessTimeFilled />
    }
    
]