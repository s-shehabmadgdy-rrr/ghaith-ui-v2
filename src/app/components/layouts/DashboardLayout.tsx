import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  LayoutDashboard,
  Package,
  Heart,
  Users,
  Truck,
  BarChart3,
  Award,
  MessageSquare,
  Bell,
  Settings,
  Leaf,
  Search,
  Plus,
  Cloud,
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/app", badge: null },
    { icon: Package, label: "Food Posts", path: "/app/feed", badge: "12" },
    { icon: Heart, label: "Donations", path: "/app/donor", badge: null },
    { icon: Users, label: "Volunteers", path: "/app", badge: null },
    { icon: Truck, label: "Deliveries", path: "/app/tracking", badge: "3" },
    { icon: BarChart3, label: "Analytics", path: "/app/admin", badge: null },
    { icon: Award, label: "Rewards", path: "/app/rewards", badge: null },
    { icon: MessageSquare, label: "Messages", path: "/app/community", badge: "5" },
    { icon: Bell, label: "Notifications", path: "/app", badge: "8" },
    { icon: MessageCircle, label: "Community", path: "/app/community", badge: null },
    { icon: Settings, label: "Settings", path: "/app/profile", badge: null },
  ];

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-[#F7F9FC] dark:bg-[#0a1628]" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 bg-white dark:bg-[#0f1f38] border-r border-border flex flex-col overflow-hidden`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#013180] dark:text-[#7eb3ff]">Ghaith</h1>
              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">غيث</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive(item.path)
                  ? "bg-[#609DFF] text-white shadow-lg shadow-blue-500/20"
                  : "text-[#5F6368] dark:text-[#94a3b8] hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f]"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left text-sm font-medium">{item.label}</span>
              {item.badge && (
                <Badge variant="danger" className="text-xs">
                  {item.badge}
                </Badge>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-border space-y-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#5F6368] dark:text-[#94a3b8] hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-all"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="flex-1 text-left text-sm font-medium">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#5F6368] dark:text-[#94a3b8] hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-all"
          >
            <Globe className="w-5 h-5" />
            <span className="flex-1 text-left text-sm font-medium">
              {language === "en" ? "العربية" : "English"}
            </span>
          </button>

          {/* User Profile Mini Card */}
          <button
            onClick={() => navigate("/app/profile")}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#F3FAF5] dark:bg-[#1a3d2e] hover:bg-[#4CAF50]/10 transition-all"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">JD</span>
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">John Doe</p>
              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Volunteer</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white dark:bg-[#0f1f38] border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-all"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Global Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5F6368] dark:text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="Search donations, volunteers..."
                  className="pl-10 pr-4 py-2 w-96 rounded-xl border border-border bg-[#F7F9FC] dark:bg-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Weather Widget */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F7F9FC] dark:bg-[#1e3a5f]">
                <Cloud className="w-4 h-4 text-[#609DFF]" />
                <span className="text-sm text-[#5F6368] dark:text-[#94a3b8]">22°C</span>
              </div>

              {/* Food Saved Today Counter */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F3FAF5] dark:bg-[#1a3d2e]">
                <Sparkles className="w-4 h-4 text-[#4CAF50]" />
                <span className="text-sm font-medium text-[#2D7A4A] dark:text-[#5dd480]">
                  245 Meals Today
                </span>
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-all">
                <Bell className="w-5 h-5 text-[#5F6368] dark:text-[#94a3b8]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#E53935] rounded-full"></span>
              </button>

              {/* Quick Action Button */}
              <Button size="sm" onClick={() => navigate("/app/feed")} className="hidden md:flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Donation
              </Button>

              {/* User Profile Dropdown */}
              <button
                onClick={() => navigate("/app/profile")}
                className="flex items-center gap-2 p-1 rounded-lg hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JD</span>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
