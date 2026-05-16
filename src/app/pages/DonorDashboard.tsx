import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  TrendingUp,
  Package,
  DollarSign,
  Users,
  Calendar,
  Clock,
  Plus,
  BarChart3,
} from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function DonorDashboard() {
  const stats = [
    {
      label: "Total Donations",
      value: "148",
      icon: Package,
      color: "from-[#609DFF] to-[#013180]",
      change: "+12 this month",
    },
    {
      label: "Food Waste Reduced",
      value: "2.5 Tons",
      icon: TrendingUp,
      color: "from-[#4CAF50] to-[#2D7A4A]",
      change: "+320 kg this month",
    },
    {
      label: "Tax Deduction Value",
      value: "LE 12,500",
      icon: DollarSign,
      color: "from-[#FFA726] to-[#F57C00]",
      change: "+LE 1,200",
    },
    {
      label: "People Fed",
      value: "3,200+",
      icon: Users,
      color: "from-[#E53935] to-[#B71C1C]",
      change: "+450 this month",
    },
  ];

  const monthlyData = [
    { month: "Jan", donations: 15, waste: 180 },
    { month: "Feb", donations: 18, waste: 220 },
    { month: "Mar", donations: 22, waste: 280 },
    { month: "Apr", donations: 25, waste: 320 },
    { month: "May", donations: 28, waste: 350 },
  ];

  const recentDonations = [
    { id: 1, title: "Breakfast Items", date: "Today, 9:00 AM", items: "20 items", status: "Collected", volunteers: 2 },
    { id: 2, title: "Lunch Meals", date: "Today, 2:00 PM", items: "35 items", status: "Reserved", volunteers: 1 },
    { id: 3, title: "Bakery Goods", date: "Yesterday", items: "15 items", status: "Delivered", volunteers: 3 },
    { id: 4, title: "Fresh Produce", date: "2 days ago", items: "28 items", status: "Delivered", volunteers: 2 },
  ];

  const scheduledPickups = [
    { time: "10:00 AM", volunteer: "Sarah Ahmed", items: "Breakfast leftovers", eta: "15 min" },
    { time: "3:00 PM", volunteer: "Mohamed Ali", items: "Lunch meals", eta: "2 hrs" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Donor Dashboard</h1>
          <p className="text-[#5F6368] dark:text-[#94a3b8]">
            Track your donations, impact, and tax benefits
          </p>
        </div>
        <Button variant="success" size="lg" className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Donation
        </Button>
      </div>

      {/* Stats Cards */}
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
                  <BarChart3 className="w-5 h-5 text-[#5F6368] dark:text-[#94a3b8]" />
                </div>
                <p className="text-3xl font-bold text-[#000000] dark:text-[#f0f4f8] mb-1">{stat.value}</p>
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">{stat.label}</p>
                <Badge variant="success" className="text-xs">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Donation Trend */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Donation Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
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
                <Line type="monotone" dataKey="donations" stroke="#609DFF" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Waste Reduction */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Food Waste Reduced (kg)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
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
                <Bar dataKey="waste" fill="#4CAF50" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Donations and Scheduled Pickups */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Donations */}
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Donations</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentDonations.map((donation, index) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="default" className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-[#000000] dark:text-[#f0f4f8] mb-1">{donation.title}</h3>
                      <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {donation.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        donation.status === "Delivered"
                          ? "success"
                          : donation.status === "Collected"
                          ? "eco"
                          : "warning"
                      }
                    >
                      {donation.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#5F6368] dark:text-[#94a3b8]">
                    <span className="flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {donation.items}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {donation.volunteers} volunteers
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Scheduled Pickups */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Scheduled Pickups Today</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {scheduledPickups.map((pickup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="eco" className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{pickup.time}</p>
                        <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{pickup.volunteer}</p>
                      </div>
                    </div>
                    <Badge variant="info">{pickup.eta}</Badge>
                  </div>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{pickup.items}</p>
                </Card>
              </motion.div>
            ))}

            <Button variant="outline" className="w-full">
              Schedule New Pickup
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Tax Insights */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Tax Deduction Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-[#F3FAF5] dark:bg-[#1a3d2e] rounded-xl">
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">This Month</p>
              <p className="text-2xl font-bold text-[#2D7A4A] dark:text-[#5dd480]">LE 1,200</p>
              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-1">Eligible deductions</p>
            </div>
            <div className="p-4 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">Year to Date</p>
              <p className="text-2xl font-bold text-[#609DFF] dark:text-[#7eb3ff]">LE 12,500</p>
              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-1">Total deductions</p>
            </div>
            <div className="p-4 bg-[#FFF3E0] dark:bg-[#4a3a2e] rounded-xl">
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">Projected Annual</p>
              <p className="text-2xl font-bold text-[#FFA726] dark:text-[#ffc875]">LE 30,000</p>
              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-1">Estimated savings</p>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="w-full md:w-auto">
              Download Tax Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
