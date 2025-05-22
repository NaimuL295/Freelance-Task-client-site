import {
  createBrowserRouter} from "react-router";
import Layout from "../../MainLayout/Layout";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddTask from "../AddTask/AddTask";
import BrowseTask from "../../BorwserTask/BrowseTask";
import MyTask from "../../MyTask/MyTask";
import Spinner from "../../Spinner/Spinner";
import CartDetails from "../../CartDetails/CartDetails";
import ProtectRouter from "../../context/Protect-Router/ProtectRouter";
import MYPostUpdate from "../../MyPostUpdate/MYPostUpdate";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
  {index:true, Component:Home},
  {path:"login",Component:Login},
  {path:"signup",Component:Signup},
  {path:"/addTask",element:<ProtectRouter> <AddTask></AddTask></ProtectRouter>
     },
  {path:"/browseTask",
    loader:()=>fetch("https://assignment-10-server-side-blond.vercel.app/tasks"),
    Component:BrowseTask,
    hydrateFallbackElement:<Spinner></Spinner>
  },

  {path:"/task/:id",
    loader:({params})=>fetch(`https://assignment-10-server-side-blond.vercel.app/tasks/${params.id}`),
    Component:CartDetails,
  hydrateFallbackElement:<Spinner></Spinner>
  },
   
  {path:"/myTask",element:<ProtectRouter> <MyTask></MyTask>  </ProtectRouter>},
  {path:"/update/:id",loader:({params})=>fetch(`https://assignment-10-server-side-blond.vercel.app/tasks/${params.id}`),
    Component:MYPostUpdate,
    hydrateFallbackElement:<Spinner></Spinner>
  },
  {path:"/*",Component:ErrorPage}

    ]
  },
]);

