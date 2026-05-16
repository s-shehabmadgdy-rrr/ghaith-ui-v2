import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Package,
  Truck,
  MapPin,
  AlertCircle,
  TrendingUp,
  Award,
  Leaf,
  Clock,
  Navigation,
} from "lucide-react";
import { motion } from "motion/react";

export default function VolunteerDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      label: "Deliveries Completed",
      value: "42",
      icon: Truck,
      color: "from-[#609DFF] to-[#013180]",
      change: "+12%",
    },
    {
      label: "Food Saved",
      value: "1.2K kg",
      icon: Package,
      color: "from-[#4CAF50] to-[#2D7A4A]",
      change: "+18%",
    },
    {
      label: "CO₂ Reduced",
      value: "850 kg",
      icon: Leaf,
      color: "from-[#FFA726] to-[#F57C00]",
      change: "+15%",
    },
    {
      label: "Reward Points",
      value: "2,450",
      icon: Award,
      color: "from-[#E53935] to-[#B71C1C]",
      change: "+25",
    },
  ];

  const actions = [
    {
      title: "Pack",
      description: "Prepare food packages",
      icon: Package,
      color: "from-[#609DFF] to-[#013180]",
      count: "3 pending",
    },
    {
      title: "Pick Up",
      description: "Collect from donors",
      icon: MapPin,
      color: "from-[#4CAF50] to-[#2D7A4A]",
      count: "5 available",
    },
    {
      title: "Deliver",
      description: "Transport to charities",
      icon: Truck,
      color: "from-[#FFA726] to-[#F57C00]",
      count: "2 active",
    },
    {
      title: "Emergency",
      description: "Urgent requests",
      icon: AlertCircle,
      color: "from-[#E53935] to-[#B71C1C]",
      count: "1 urgent",
      badge: "urgent",
    },
    {
      title: "Nearby",
      description: "Local donations",
      icon: Navigation,
      color: "from-[#9C27B0] to-[#6A1B9A]",
      count: "8 nearby",
    },
    {
      title: "Route Plan",
      description: "Optimize deliveries",
      icon: TrendingUp,
      color: "from-[#00BCD4] to-[#0097A7]",
      count: "Plan route",
    },
  ];

  const nearbyDonations = [
    {
      donor: "Ramses Hilton",
      type: "Hotel",
      distance: "0.8 km",
      items: "15 meals",
      time: "10 min ago",
      verified: true,
    },
    {
      donor: "Downtown Bakery",
      type: "Bakery",
      distance: "1.2 km",
      items: "25 pastries",
      time: "25 min ago",
      verified: true,
    },
    {
      donor: "Green Grocer",
      type: "Supermarket",
      distance: "2.1 km",
      items: "Fresh produce",
      time: "1 hr ago",
      verified: false,
    },
  ];

  const activityFeed = [
    { action: "Completed delivery", detail: "Downtown Food Bank", time: "2 hours ago", points: "+50" },
    { action: "Picked up donation", detail: "Ramses Hilton", time: "4 hours ago", points: "+30" },
    { action: "Achievement unlocked", detail: "50 Deliveries Milestone", time: "Yesterday", points: "+100" },
    { action: "Received review", detail: "5 stars from Sarah", time: "Yesterday", points: "+20" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">
            Welcome back, Volunteer
          </h1>
          <p className="text-[#5F6368] dark:text-[#94a3b8]">
            You're making a real difference in your community!
          </p>
        </div>
        <Badge variant="eco" className="px-4 py-2">
          Community Rank: #12
        </Badge>
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
            <Card variant="elevated" className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="success" className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <p className="text-3xl font-bold text-[#000000] dark:text-[#f0f4f8] mb-1">{stat.value}</p>
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Action Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                variant="glass"
                className="cursor-pointer hover:shadow-xl transition-all relative overflow-hidden"
                onClick={() => navigate("/app/feed")}
              >
                <CardContent className="p-4 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-[#000000] dark:text-[#f0f4f8]">{action.title}</h3>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-2">{action.description}</p>
                  <Badge variant={action.badge === "urgent" ? "danger" : "info"} className="text-xs">
                    {action.count}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map and Nearby Donations */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Map Section */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Live Donation Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-gradient-to-br from-[#F7F9FC] to-[#F3FAF5] dark:from-[#1e3a5f] dark:to-[#1a3d2e] rounded-xl overflow-hidden">
              {/* Mock Map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-[#609DFF] dark:text-[#7eb3ff]" />
                  <p className="text-[#5F6368] dark:text-[#94a3b8] mb-2">Interactive map with donation pins</p>
                  <Button size="sm" variant="outline">
                    View Full Map
                  </Button>
                </div>
              </div>

              {/* Mock Pin Markers */}
              <div className="absolute top-12 left-16 w-4 h-4 bg-[#4CAF50] rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute top-24 right-20 w-4 h-4 bg-[#609DFF] rounded-full border-2 border-white shadow-lg animate-pulse"></div>
              <div className="absolute bottom-16 left-24 w-4 h-4 bg-[#FFA726] rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            </div>
          </CardContent>
        </Card>

        {/* Nearby Donations */}
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Nearby Donations</CardTitle>
              <Button size="sm" variant="ghost" onClick={() => navigate("/app/feed")}>
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {nearbyDonations.map((donation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant="default" className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{donation.donor}</p>
                          {donation.verified && (
                            <Badge variant="success" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{donation.type}</p>
                      </div>
                    </div>
                    <Badge variant="info" className="text-xs">
                      {donation.distance}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#5F6368] dark:text-[#94a3b8] mt-3">
                    <span className="flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {donation.items}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {donation.time}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityFeed.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-[#F7F9FC] dark:bg-[#1e3a5f] hover:bg-[#F3FAF5] dark:hover:bg-[#1a3d2e] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                  <div>
                    <p className="font-medium text-[#000000] dark:text-[#f0f4f8]">{activity.action}</p>
                    <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{activity.detail}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="success">{activity.points}</Badge>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
