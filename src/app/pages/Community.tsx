import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import {
  MessageCircle,
  Users,
  Send,
  Search,
  Hash,
  Pin,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";
import { motion } from "motion/react";

export default function Community() {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const channels = [
    { id: "general", name: "General", icon: Hash, unread: 3, members: 1240 },
    { id: "volunteers", name: "Volunteers", icon: Users, unread: 0, members: 850 },
    { id: "donors", name: "Donors", icon: MessageCircle, unread: 5, members: 420 },
    { id: "charities", name: "Charities", icon: Heart, unread: 1, members: 180 },
  ];

  const messages = [
    {
      id: 1,
      user: "Sarah Ahmed",
      avatar: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=50&h=50&fit=crop",
      message: "Just completed my 50th delivery! So grateful to be part of this community 🎉",
      time: "10:30 AM",
      likes: 24,
      replies: 5,
      pinned: true,
    },
    {
      id: 2,
      user: "Mohamed Ali",
      avatar: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=50&h=50&fit=crop",
      message: "Does anyone know if there are pickups available near downtown this afternoon?",
      time: "10:45 AM",
      likes: 3,
      replies: 2,
      pinned: false,
    },
    {
      id: 3,
      user: "Ramses Hilton",
      avatar: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=50&h=50&fit=crop",
      message: "We have extra breakfast items available for pickup. Check the feed!",
      time: "11:00 AM",
      likes: 15,
      replies: 8,
      pinned: false,
      badge: "Verified Donor",
    },
    {
      id: 4,
      user: "Fatima Hassan",
      avatar: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?w=50&h=50&fit=crop",
      message: "Thank you to all the volunteers who helped us this week. You're amazing! ❤️",
      time: "11:15 AM",
      likes: 42,
      replies: 12,
      pinned: false,
      badge: "NGO Partner",
    },
  ];

  const stories = [
    {
      title: "Community Milestone",
      author: "Ahmed Mohamed",
      excerpt: "We've just reached 10,000 meals saved! Here's how our community made it happen...",
      date: "2 hours ago",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=400&h=300&fit=crop",
      likes: 156,
      comments: 24,
    },
    {
      title: "Volunteer Spotlight",
      author: "Sarah Ahmed",
      excerpt: "Meet Ahmed, our volunteer of the month who has completed 200+ deliveries...",
      date: "5 hours ago",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      likes: 89,
      comments: 15,
    },
  ];

  const onlineUsers = [
    { name: "Sarah Ahmed", status: "online", avatar: "SA" },
    { name: "Mohamed Ali", status: "online", avatar: "MA" },
    { name: "Fatima Hassan", status: "away", avatar: "FH" },
    { name: "Ahmed Mohamed", status: "online", avatar: "AM" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Community</h1>
        <p className="text-[#5F6368] dark:text-[#94a3b8]">Connect with volunteers, donors, and charities</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar - Channels */}
        <div className="space-y-6">
          {/* Channels */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                    selectedChannel === channel.id
                      ? "bg-[#609DFF] text-white"
                      : "hover:bg-[#F7F9FC] dark:hover:bg-[#1e3a5f] text-[#000000] dark:text-[#f0f4f8]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <channel.icon className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm font-medium">{channel.name}</p>
                      <p className="text-xs opacity-70">{channel.members} members</p>
                    </div>
                  </div>
                  {channel.unread > 0 && (
                    <Badge variant="danger" className="text-xs">
                      {channel.unread}
                    </Badge>
                  )}
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Online Users */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Online Now</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {onlineUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{user.avatar}</span>
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        user.status === "online" ? "bg-[#4CAF50]" : "bg-[#FFA726]"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">{user.name}</p>
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] capitalize">{user.status}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5F6368] dark:text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white dark:bg-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Messages */}
          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Hash className="w-5 h-5" />
                  {channels.find((c) => c.id === selectedChannel)?.name}
                </CardTitle>
                <Badge variant="info">{channels.find((c) => c.id === selectedChannel)?.members} members</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`p-4 rounded-xl ${
                      msg.pinned
                        ? "bg-[#FFF3E0] dark:bg-[#4a3a2e] border-2 border-[#FFA726]"
                        : "bg-[#F7F9FC] dark:bg-[#1e3a5f]"
                    }`}
                  >
                    <div className="flex gap-3">
                      <img src={msg.avatar} alt={msg.user} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{msg.user}</p>
                          {msg.badge && (
                            <Badge variant="eco" className="text-xs">
                              {msg.badge}
                            </Badge>
                          )}
                          {msg.pinned && (
                            <Pin className="w-4 h-4 text-[#FFA726]" />
                          )}
                          <span className="text-xs text-[#5F6368] dark:text-[#94a3b8] ml-auto">{msg.time}</span>
                        </div>
                        <p className="text-[#000000] dark:text-[#f0f4f8] mb-3">{msg.message}</p>
                        <div className="flex items-center gap-4 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                          <button className="flex items-center gap-1 hover:text-[#E53935] transition-colors">
                            <Heart className="w-4 h-4" />
                            {msg.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#609DFF] transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            {msg.replies}
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#4CAF50] transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">JD</span>
                </div>
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-border bg-white dark:bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button size="md" className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar - Community Stories */}
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Community Stories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <Card variant="glass">
                    <img src={story.image} alt={story.title} className="w-full h-32 object-cover rounded-t-xl" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-[#000000] dark:text-[#f0f4f8] mb-2">{story.title}</h3>
                      <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-3 line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#5F6368] dark:text-[#94a3b8]">
                        <span>{story.author}</span>
                        <span>{story.date}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-xs">
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {story.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {story.comments}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <Button variant="outline" className="w-full">
                View All Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
