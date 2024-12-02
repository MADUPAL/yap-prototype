import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import ErrorPage from "./pages/ErrorPage";
import Playground from "./pages/Playground";
import NotePage from "./pages/NotePage";
import PlanPage from "./pages/PlanPage";
import BlackboardPage from "./pages/BlackboardPage";
import FeedPage from "./pages/FeedPage";
import SchedulePage from "./pages/SchedulePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "playground", element: <Playground /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <Profile /> },
      { path: "logout", element: <Logout /> },
      {
        path: "playground/note",
        element: <Playground children={<NotePage />} />,
      },
      {
        path: "playground/plan",
        element: <Playground children={<PlanPage />} />,
      },
      {
        path: "playground/blackboard",
        element: <Playground children={<BlackboardPage />} />,
      },
      {
        path: "playground/feed",
        element: <Playground children={<FeedPage />} />,
      },
      {
        path: "playground/schedule",
        element: <Playground children={<SchedulePage />} />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
