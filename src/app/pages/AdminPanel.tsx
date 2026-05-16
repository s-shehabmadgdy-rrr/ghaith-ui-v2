import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  Users,
  Package,
  TrendingUp,
  AlertCircle,
  Activity,
  MapPin,
  DollarSign,
  Shield,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "motion/react";

export default function AdminPanel() {
  const stats = [
    { label: "Total Users", value: "12,450", icon: Users, color: "from-[#609DFF] to-[#013180]", change: "+8.2%" },
    { label: "Active Donations", value: "245", icon: Package, color: "from-[#4CAF50] to-[#2D7A4A]", change: "+12%" },
    { label: "Platform Revenue", value: "LE 45K", icon: DollarSign, color: "from-[#FFA726] to-[#F57C00]", change: "+15%" },
    { label: "Fraud Reports", value: "3", icon: Shield, color: "from-[#E53935] to-[#B71C1C]", change: "-2" },
  ];

  const userGrowth = [
    { month: "Jan", users: 8500 },
    { month: "Feb", users: 9200 },
    { month: "Mar", users: 10100 },
    { month: "Apr", users: 11200 },
    { month: "May", users: 12450 },
  ];

  const userTypes = [
    { name: "Volunteers", value: 5200, color: "#609DFF" },
    { name: "Donors", value: 3800, color: "#4CAF50" },
    { name: "Charities", value: 2100, color: "#FFA726" },
    { name: "Restaurants", value: 1350, color: "#E53935" },
  ];

  const recentActivity = [
    { action: "New donation posted", user: "Ramses Hilton", time: "2 min ago", type: "donation" },
    { action: "User registered", user: "Ahmed Mohamed", time: "5 min ago", type: "user" },
    { action: "Delivery completed", user: "Sarah Ahmed", time: "12 min ago", type: "delivery" },
    { action: "Report submitted", user: "System Alert", time: "30 min ago", type: "alert" },
  ];

  const locationData = [
    { city: "Cairo", donations: 145, users: 5800 },
    { city: "Alexandria", donations: 68, users: 3200 },
    { city: "Giza", donations: 32, users: 2100 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Admin Panel</h1>
        <p className="text-[#5F6368] dark:text-[#94a3b8]">Platform analytics and system management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant={stat.label.includes("Fraud") ? "danger" : "success"}>{stat.change}</Badge>
                </div>
                <p className="text-3xl font-bold text-[#000000] dark:text-[#f0f4f8] mb-1">{stat.value}</p>
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F7F9FC" />
                <XAxis dataKey="month" stroke="#5F6368" />
                <YAxis stroke="#5F6368" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #F7F9FC",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="users" fill="#609DFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Distribution */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userTypes}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={(entry) => entry.name}
                >
                  {userTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Location Heatmap */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Regional Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={location.city} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#609DFF]" />
                      <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{location.city}</p>
                    </div>
                    <div className="flex gap-4 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                      <span>{location.donations} donations</span>
                      <span>{location.users} users</span>
                    </div>
                  </div>
                  <div className="h-2 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(location.users / 5800) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-[#609DFF] to-[#4CAF50]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity and Moderation */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Activity className="w-5 h-5 text-[#609DFF]" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl"
              >
                <div
                  className={`w-2 h-2 mt-2 rounded-full ${
                    activity.type === "alert" ? "bg-[#E53935]" : "bg-[#4CAF50]"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">{activity.action}</p>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* User Moderation */}
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Moderation Queue</CardTitle>
              <Badge variant="warning">3 Pending</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { user: "Suspicious Account #1234", reason: "Multiple flagged posts", priority: "high" },
              { user: "Report: Fake Donation", reason: "User reported fraud", priority: "high" },
              { user: "New Verification Request", reason: "Restaurant verification", priority: "medium" },
            ].map((item, index) => (
              <Card key={index} variant="default" className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-[#000000] dark:text-[#f0f4f8] mb-1">{item.user}</p>
                    <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{item.reason}</p>
                  </div>
                  <Badge variant={item.priority === "high" ? "danger" : "warning"}>
                    {item.priority}
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Dismiss
                  </Button>
                  <Button variant="primary" size="sm" className="flex-1">
                    Review
                  </Button>
                </div>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
