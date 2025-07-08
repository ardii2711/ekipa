import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import halaman
import HomePage from "@/pages/index";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DashboardPage from "@/pages/dashboard";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/auth/login",
      element: <LoginPage />,
    },
    {
      path: "/auth/register",
      element: <RegisterPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
