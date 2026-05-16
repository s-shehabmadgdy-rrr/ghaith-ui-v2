import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  MessageCircle,
  Package,
  CheckCircle2,
  User,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

export default function DeliveryTracking() {
  const [message, setMessage] = useState("");

  const deliverySteps = [
    { label: "Pickup Confirmed", status: "completed", time: "10:00 AM" },
    { label: "In Transit", status: "active", time: "10:25 AM" },
    { label: "Nearby", status: "pending", time: "ETA 10:45 AM" },
    { label: "Delivered", status: "pending", time: "--" },
  ];

  const chatMessages = [
    {
      sender: "volunteer",
      name: "Sarah Ahmed",
      message: "I'm on my way! Should arrive in 15 minutes.",
      time: "10:25 AM",
    },
    {
      sender: "me",
      name: "You",
      message: "Great! I'll be waiting at the main entrance.",
      time: "10:26 AM",
    },
    {
      sender: "volunteer",
      name: "Sarah Ahmed",
      message: "Perfect, see you soon!",
      time: "10:27 AM",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Live Delivery Tracking</h1>
        <p className="text-[#5F6368] dark:text-[#94a3b8]">Track your donation pickup in real-time</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Tracking Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Map */}
          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Route</CardTitle>
                <Badge variant="success" className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></span>
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-[#F7F9FC] to-[#F3FAF5] dark:from-[#1e3a5f] dark:to-[#1a3d2e] rounded-xl overflow-hidden">
                {/* Mock Map with Route */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-16 h-16 mx-auto mb-4 text-[#609DFF] dark:text-[#7eb3ff] animate-pulse" />
                    <p className="text-[#5F6368] dark:text-[#94a3b8] mb-2">Tracking volunteer location...</p>
                  </div>
                </div>

                {/* Mock Route Line */}
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d="M 50 300 Q 150 200, 250 250 T 450 150"
                    stroke="#609DFF"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 0.7 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>

                {/* Pickup Location Pin */}
                <div className="absolute top-16 left-12">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-[#4CAF50] fill-[#4CAF50]" />
                    <div className="absolute -top-8 left-10 bg-white dark:bg-card px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      <p className="text-xs font-medium">Pickup Point</p>
                    </div>
                  </div>
                </div>

                {/* Volunteer Current Location */}
                <motion.div
                  className="absolute top-32 left-1/2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#609DFF] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-8 left-12 bg-white dark:bg-card px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      <p className="text-xs font-medium">Sarah (Volunteer)</p>
                    </div>
                  </div>
                </motion.div>

                {/* Delivery Destination Pin */}
                <div className="absolute bottom-24 right-16">
                  <div className="relative">
                    <MapPin className="w-8 h-8 text-[#E53935] fill-[#E53935]" />
                    <div className="absolute -top-8 -left-8 bg-white dark:bg-card px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                      <p className="text-xs font-medium">Delivery Point</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Progress */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Delivery Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.status === "completed"
                            ? "bg-[#4CAF50] text-white"
                            : step.status === "active"
                            ? "bg-[#609DFF] text-white animate-pulse"
                            : "bg-[#F7F9FC] dark:bg-[#1e3a5f] text-[#5F6368] dark:text-[#94a3b8]"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>
                      {index < deliverySteps.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            step.status === "completed" ? "bg-[#4CAF50]" : "bg-[#F7F9FC] dark:bg-[#1e3a5f]"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{step.label}</p>
                      <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{step.time}</p>
                    </div>
                    {step.status === "completed" && (
                      <Badge variant="success">Completed</Badge>
                    )}
                    {step.status === "active" && (
                      <Badge variant="primary" className="animate-pulse">
                        In Progress
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* ETA Countdown */}
          <Card variant="elevated">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-[#609DFF] dark:text-[#7eb3ff]" />
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">Estimated Arrival</p>
              <motion.p
                className="text-4xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                15 min
              </motion.p>
              <Badge variant="eco" className="mb-4">
                On Time
              </Badge>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-1">Distance Remaining</p>
                <p className="text-xl font-semibold text-[#000000] dark:text-[#f0f4f8]">2.3 km</p>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Info */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Volunteer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">SA</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">Sarah Ahmed</p>
                  <div className="flex items-center gap-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                    <span>Volunteer</span>
                    <CheckCircle2 className="w-4 h-4 text-[#609DFF]" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                <Package className="w-5 h-5 text-[#609DFF]" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">42 Deliveries</p>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Completed</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
                <Button variant="outline" size="sm" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Volunteer Chat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-64 overflow-y-auto space-y-3">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-xl ${
                        msg.sender === "me"
                          ? "bg-[#609DFF] text-white"
                          : "bg-[#F7F9FC] dark:bg-[#1e3a5f] text-[#000000] dark:text-[#f0f4f8]"
                      }`}
                    >
                      <p className="text-xs opacity-70 mb-1">{msg.name}</p>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl border border-border bg-[#F7F9FC] dark:bg-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
