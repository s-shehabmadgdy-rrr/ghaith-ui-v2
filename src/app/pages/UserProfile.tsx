import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import {
  Camera,
  Edit,
  Save,
  MapPin,
  Mail,
  Phone,
  Award,
  TrendingUp,
  Leaf,
  Heart,
  DollarSign,
  Settings,
  LogOut,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

export default function UserProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    accountType: "Volunteer",
    address: "Downtown Cairo, Egypt",
    pickupRadius: "5 km",
  });

  const metrics = [
    {
      label: "Credit Balance",
      value: "LE 250",
      icon: DollarSign,
      color: "from-[#609DFF] to-[#013180]",
      change: "+LE 50",
    },
    {
      label: "Total Food Saved",
      value: "1,250 kg",
      icon: Leaf,
      color: "from-[#4CAF50] to-[#2D7A4A]",
      change: "+120 kg",
    },
    {
      label: "CO₂ Emissions Reduced",
      value: "850 kg",
      icon: TrendingUp,
      color: "from-[#FFA726] to-[#F57C00]",
      change: "+85 kg",
    },
    {
      label: "Volunteer Hours",
      value: "124 hrs",
      icon: Heart,
      color: "from-[#E53935] to-[#B71C1C]",
      change: "+12 hrs",
    },
  ];

  const achievements = [
    { title: "First Donation", icon: Award, unlocked: true, date: "Jan 2026" },
    { title: "10 Deliveries", icon: CheckCircle2, unlocked: true, date: "Feb 2026" },
    { title: "50 Meals Saved", icon: Leaf, unlocked: true, date: "Mar 2026" },
    { title: "Community Hero", icon: Heart, unlocked: false, date: "Locked" },
  ];

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card variant="elevated" className="relative overflow-hidden">
        {/* Cover Image */}
        <div className="h-32 bg-gradient-to-br from-[#609DFF] via-[#4CAF50] to-[#FFA726]"></div>

        <CardContent className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="relative -mt-16 mb-4">
            <div className="w-32 h-32 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full border-4 border-white dark:border-card flex items-center justify-center">
              <span className="text-white text-4xl font-bold">JD</span>
            </div>
            <button className="absolute bottom-2 right-2 w-10 h-10 bg-white dark:bg-card rounded-full flex items-center justify-center shadow-lg border border-border hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] transition-colors">
              <Camera className="w-5 h-5 text-[#609DFF]" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-[#000000] dark:text-[#f0f4f8]">{formData.fullName}</h1>
                <CheckCircle2 className="w-6 h-6 text-[#609DFF] dark:text-[#7eb3ff]" />
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {formData.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {formData.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {formData.address}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <Badge variant="eco" className="px-4 py-2">
                {formData.accountType}
              </Badge>
              <Badge variant="success" className="px-4 py-2">
                Sustainability Level: Gold
              </Badge>
            </div>
          </div>

          {/* Profile Completion Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">Profile Completion</p>
              <p className="text-sm font-medium text-[#4CAF50] dark:text-[#5dd480]">85%</p>
            </div>
            <div className="h-2 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-[#4CAF50] to-[#2D7A4A]"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Dashboard */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center`}
                    >
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="success" className="text-xs">
                      {metric.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-[#000000] dark:text-[#f0f4f8] mb-1">{metric.value}</p>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{metric.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Achievements & Rewards</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => navigate("/app/rewards")}>
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  variant={achievement.unlocked ? "eco" : "default"}
                  className={`p-4 text-center ${achievement.unlocked ? "" : "opacity-50"}`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-3 ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-[#FFA726] to-[#F57C00]"
                        : "bg-[#BEC0BF]"
                    } rounded-full flex items-center justify-center`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-[#000000] dark:text-[#f0f4f8]">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{achievement.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Information */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Personal Information</CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="flex items-center gap-2"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4" />
                  Edit
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              disabled={!isEditing}
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={!isEditing}
            />
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!isEditing}
            />
            <Input
              label="Account Type"
              value={formData.accountType}
              disabled={true}
            />
            <Input
              label="Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              disabled={!isEditing}
            />
            <Input
              label="Preferred Pickup Radius"
              value={formData.pickupRadius}
              onChange={(e) => setFormData({ ...formData, pickupRadius: e.target.value })}
              disabled={!isEditing}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Area */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Support the Platform</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#F3FAF5] dark:bg-[#1a3d2e] rounded-xl">
            <div>
              <h3 className="font-semibold mb-1 text-[#000000] dark:text-[#f0f4f8]">Donate to Ghaith</h3>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Help us grow the platform and reach more communities
              </p>
            </div>
            <Button variant="success">Donate</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
            <div>
              <h3 className="font-semibold mb-1 text-[#000000] dark:text-[#f0f4f8]">Upgrade Account</h3>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Get premium features and analytics
              </p>
            </div>
            <Button variant="primary">Upgrade</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
            <div>
              <h3 className="font-semibold mb-1 text-[#000000] dark:text-[#f0f4f8]">Become a Partner</h3>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Join our network of verified organizations
              </p>
            </div>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
            <div>
              <h3 className="font-semibold mb-1 text-[#000000] dark:text-[#f0f4f8]">Contact Support</h3>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Get help with your account or platform features
              </p>
            </div>
            <Button variant="outline">Contact</Button>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="text-[#E53935]">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-between border-[#E53935] text-[#E53935] hover:bg-[#E53935] hover:text-white"
            onClick={() => navigate("/")}
          >
            <span className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </span>
          </Button>
          <Button
            variant="danger"
            className="w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Delete Account
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
