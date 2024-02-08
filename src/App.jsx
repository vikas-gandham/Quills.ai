import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Chatbot from "./pages/Chatbot";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookDemo from "./pages/BookDemo";
import AppLayout from "./ui/AppLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/chatbot",
        element: <Chatbot />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/bookdemo",
        element: <BookDemo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
