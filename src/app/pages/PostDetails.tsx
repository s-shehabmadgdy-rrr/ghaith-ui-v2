import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  MessageCircle,
  Share2,
  AlertCircle,
  Calendar,
  Weight,
  Timer,
  Shield,
  ArrowLeft,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

export default function PostDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [comment, setComment] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  ];

  const items = [
    { name: "10 Pizza", icon: Package },
    { name: "20 glazed donuts", icon: Package },
    { name: "7 cans", icon: Package },
    { name: "Fresh fruit", icon: Package },
    { name: "Bread packs", icon: Package },
  ];

  const comments = [
    {
      user: "Sarah Ahmed",
      avatar: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=50&h=50&fit=crop",
      comment: "This is amazing! I can pick it up in 30 minutes.",
      time: "5 min ago",
    },
    {
      user: "Mohamed Ali",
      avatar: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=50&h=50&fit=crop",
      comment: "Thank you for contributing to reducing food waste!",
      time: "15 min ago",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate("/app/feed")} className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Feed
      </Button>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Donor Header */}
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=100&h=100&fit=crop"
                    alt="Ramses Hilton"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-[#000000] dark:text-[#f0f4f8]">Ramses Hilton</h2>
                      <CheckCircle2 className="w-5 h-5 text-[#609DFF] dark:text-[#7eb3ff]" />
                    </div>
                    <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">Type: Hotel</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#FFA726] text-[#FFA726]" />
                        <Star className="w-4 h-4 fill-[#FFA726] text-[#FFA726]" />
                        <Star className="w-4 h-4 fill-[#FFA726] text-[#FFA726]" />
                        <Star className="w-4 h-4 fill-[#FFA726] text-[#FFA726]" />
                        <Star className="w-4 h-4 fill-[#BEC0BF] text-[#BEC0BF]" />
                        <span className="text-sm text-[#5F6368] dark:text-[#94a3b8] ml-2">4.0 Rating</span>
                      </div>
                      <Badge variant="eco">Sustainability Score: 95</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Gallery */}
          <Card variant="elevated">
            <CardContent className="p-6">
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <img
                  src={images[selectedImage]}
                  alt="Food donation"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-4 ring-[#609DFF]" : ""
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Item Inventory */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Available Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card variant="glass" className="p-4 text-center">
                      <item.icon className="w-8 h-8 mx-auto mb-2 text-[#609DFF] dark:text-[#7eb3ff]" />
                      <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">{item.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Pickup Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-gradient-to-br from-[#F7F9FC] to-[#F3FAF5] dark:from-[#1e3a5f] dark:to-[#1a3d2e] rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#609DFF] dark:text-[#7eb3ff]" />
                    <p className="text-[#5F6368] dark:text-[#94a3b8] mb-2">Downtown Cairo, Egypt</p>
                    <Badge variant="info">0.8 km away</Badge>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-[#E53935] rounded-full border-4 border-white shadow-lg animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Comments & Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Comment Input */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment or question..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-xl border border-border bg-[#F7F9FC] dark:bg-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="sm" className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Comments List */}
              {comments.map((c, index) => (
                <div key={index} className="flex gap-3 p-4 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                  <img src={c.avatar} alt={c.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-sm text-[#000000] dark:text-[#f0f4f8]">{c.user}</p>
                      <span className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{c.time}</span>
                    </div>
                    <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{c.comment}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Donation Details Card */}
        <div className="space-y-6">
          <Card variant="elevated" className="sticky top-6">
            <CardHeader>
              <CardTitle>Donation Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#f0f4f8]">
                  Our extra food is ready for collection
                </h3>
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                  Fresh meals from today's breakfast service. Includes pastries, fruits, and hot dishes. All items
                  are temperature controlled and safe for immediate consumption.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Weight className="w-4 h-4 text-[#609DFF]" />
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Total Weight</p>
                  </div>
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">15 kg</p>
                </div>

                <div className="p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-[#4CAF50]" />
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Posted</p>
                  </div>
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">Today</p>
                </div>

                <div className="p-3 bg-[#FFF3E0] dark:bg-[#4a3a2e] rounded-xl col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Timer className="w-4 h-4 text-[#FFA726]" />
                    <p className="text-xs text-[#E65100] dark:text-[#ffc875]">Pickup Deadline</p>
                  </div>
                  <p className="font-semibold text-[#E65100] dark:text-[#ffc875] flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    2 hours remaining
                  </p>
                </div>

                <div className="p-3 bg-[#E8F5E9] dark:bg-[#2e4a33] rounded-xl col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-4 h-4 text-[#4CAF50]" />
                    <p className="text-xs text-[#2D7A4A] dark:text-[#5dd480]">Safety Status</p>
                  </div>
                  <p className="font-semibold text-[#2D7A4A] dark:text-[#5dd480]">Temperature Controlled</p>
                </div>

                <div className="p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className="w-4 h-4 text-[#609DFF]" />
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Estimated Servings</p>
                  </div>
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">~50 people</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-border">
                <Button variant="success" className="w-full" size="lg">
                  Reserve Donation
                </Button>
                <Button variant="primary" className="w-full" size="lg">
                  Pick Up Now
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="md" className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Chat
                  </Button>
                  <Button variant="outline" size="md" className="flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
                <Button variant="ghost" size="md" className="w-full text-[#E53935]">
                  Report Issue
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
