import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ChatbotCust from "./features/ChatbotCust";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookDemo from "./pages/BookDemo";
import AppLayout from "./ui/AppLayout";
import LifeSciences from "./pages/LifeSciences";
import Ecommerce from "./pages/Ecommerce";
import Logistics from "./pages/Logistics";
import Healthcare from "./pages/Healthcare";
import Hospitality from "./pages/Hospitality";

import "./App.css";
import Role from "./pages/Role";
import Bfsi from "./pages/BFSI";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Industry from "./pages/Industry";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Home />,
      },
      {
        path: "/chatbot",
        element: <ChatbotCust />,
      },

      {
        path: "/solutions",
        element: <Solutions />,
        children: [
          {
            path: "industry",
            element: <Industry />,
            children: [
              {
                path: "life-sciences",
                element: <LifeSciences />,
              },
              {
                path: "bfsi",
                element: <Bfsi />,
              },
              {
                path: "retail-ecommerce",
                element: <Ecommerce />,
              },
              {
                path: "manufacturing-logistics",
                element: <Logistics />,
              },
              {
                path: "healthcare-life-sciences",
                element: <Healthcare />,
              },
              {
                path: "hospitality",
                element: <Hospitality />,
              },
            ],
          },
          {
            path: "role",
            element: <Role />,
          },
        ],
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
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
