import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import FoodFeed from "./pages/FoodFeed";
import PostDetails from "./pages/PostDetails";
import UserProfile from "./pages/UserProfile";
import DonorDashboard from "./pages/DonorDashboard";
import DeliveryTracking from "./pages/DeliveryTracking";
import AdminPanel from "./pages/AdminPanel";
import Rewards from "./pages/Rewards";
import AIAnalyzer from "./pages/AIAnalyzer";
import Community from "./pages/Community";
import DashboardLayout from "./components/layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: VolunteerDashboard,
      },
      {
        path: "feed",
        Component: FoodFeed,
      },
      {
        path: "post/:id",
        Component: PostDetails,
      },
      {
        path: "profile",
        Component: UserProfile,
      },
      {
        path: "donor",
        Component: DonorDashboard,
      },
      {
        path: "tracking",
        Component: DeliveryTracking,
      },
      {
        path: "admin",
        Component: AdminPanel,
      },
      {
        path: "rewards",
        Component: Rewards,
      },
      {
        path: "ai-analyzer",
        Component: AIAnalyzer,
      },
      {
        path: "community",
        Component: Community,
      },
    ],
  },
]);
