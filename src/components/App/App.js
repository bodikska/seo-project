import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import HomeLayout from "../pages/Layout/HomeLayout";
import PageLayout from "../pages/Layout/PageLayout";
import PostLayout from "../pages/Layout/PostLayout";
import AboutUs from "../pages/AboutUs";
import './App.css';

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    element: <PageLayout />,
    children: [
       // { path: "old-home", element: <Navigate to={"/"} /> },
      { path: "about", element: <AboutUs /> },
      // { path: "blog", element: <Blog/> },
      // { path: "thanks", element: <Thanks /> },
      // { path: "category/:categoryId", element: <Category /> },
      // { path: "product/:productId", element: <ProductDetails /> },
      // { path: "*", element: <NotFound /> },
      // { path: "*", element: <Navigate to="/" /> },
    ]
  },
  {
    element:<PostLayout/>,
    children: [

    ]
  }
]);

function App() {
  return <RouterProvider router={router} className='App'/>;
}

export default App;
