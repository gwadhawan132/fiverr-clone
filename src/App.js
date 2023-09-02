import './app.scss';
import React from 'react'
import Navbar from './components/navbar/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import Add from "./pages/add/Add";
import Gigs from "./pages/gigs/Gigs";
import MyGigs from './pages/myGigs/MyGigs';
import Gig from "./pages/gig/Gig";


function App() {
  const Layout=()=>{
    return (
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    )
  }


  const router =   createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/gigs",
          element:<Gigs/>
        },{
          path:"/gig/:id",
          element:<Gig/>
        },{
          path:"/orders",
          element:<Orders/>
        },{
          path:"/add",
          element:<Add/>
        },{
          path:"/messages",
          element:<Messages/>
        },{
          path:"/message/:id",
          element:<Message/>
        },{
          path:"/mygigs",
          element:<MyGigs/>
        },

      ]
      
    },
  ]);

  return  <RouterProvider router={router}/>

}

export default App;

