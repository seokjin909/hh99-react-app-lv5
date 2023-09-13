import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TodoList from "./pages/TodoList";
import ProtectedRoute from "./pages/ProtectedRoute";
import TodoDetail from "./pages/TodoDetail";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import UpdatePost from "./pages/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/todos",
        element: (
          <ProtectedRoute>
            <TodoList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/todos/:id",
        element: (
          <ProtectedRoute>
            <TodoDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/posts/new",
        element: (
          <ProtectedRoute>
            <NewPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update/post/:id",
        element: (
          <ProtectedRoute>
            <UpdatePost />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
