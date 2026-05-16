import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Package,
  MapPin,
  Clock,
  Heart,
  Share2,
  Bookmark,
  CheckCircle2,
  Timer,
  Users,
  Filter,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

export default function FoodFeed() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All", count: 45 },
    { id: "meals", label: "Meals", count: 18 },
    { id: "bakery", label: "Bakery", count: 12 },
    { id: "produce", label: "Produce", count: 8 },
    { id: "drinks", label: "Drinks", count: 7 },
  ];

  const donations = [
    {
      id: 1,
      donor: "Ramses Hilton",
      donorType: "Hotel",
      donorImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=100&h=100&fit=crop",
      verified: true,
      posted: "10 min ago",
      title: "Our extra food is ready for collection",
      description: "Fresh meals from today's breakfast service. Includes pastries, fruits, and hot dishes.",
      category: "Meals",
      items: ["10 Pizza", "20 glazed donuts", "7 cans", "Fresh fruit", "Bread packs"],
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      weight: "15 kg",
      expiry: "2 hours",
      distance: "0.8 km",
      volunteers: 3,
      pickupUrgent: true,
      safety: "Temperature Controlled",
    },
    {
      id: 2,
      donor: "Downtown Bakery",
      donorType: "Bakery",
      donorImage: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=100&h=100&fit=crop",
      verified: true,
      posted: "25 min ago",
      title: "Excess bakery items available",
      description: "End of day fresh pastries and bread. All items baked this morning.",
      category: "Bakery",
      items: ["30 Croissants", "25 Baguettes", "15 Muffins"],
      image: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      weight: "8 kg",
      expiry: "4 hours",
      distance: "1.2 km",
      volunteers: 5,
      pickupUrgent: false,
      safety: "Fresh Today",
    },
    {
      id: 3,
      donor: "Green Grocer",
      donorType: "Supermarket",
      donorImage: "https://images.unsplash.com/photo-1643321613219-6d50e1372c0a?w=100&h=100&fit=crop",
      verified: false,
      posted: "1 hr ago",
      title: "Fresh meals available near downtown",
      description: "Slightly imperfect but perfectly edible produce. Great for soup kitchens.",
      category: "Produce",
      items: ["Vegetables", "Fruits", "Herbs"],
      image: "https://images.unsplash.com/photo-1588822534638-028d5ddc07ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      weight: "12 kg",
      expiry: "6 hours",
      distance: "2.1 km",
      volunteers: 2,
      pickupUrgent: false,
      safety: "Inspected",
    },
    {
      id: 4,
      donor: "Local Restaurant",
      donorType: "Restaurant",
      donorImage: "https://images.unsplash.com/photo-1643321610692-719deb378a33?w=100&h=100&fit=crop",
      verified: true,
      posted: "2 hrs ago",
      title: "Got some extra Orange...",
      description: "Fresh orange juice and fruit portions from lunch service.",
      category: "Drinks",
      items: ["20 Orange Juice bottles", "Fresh oranges"],
      image: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      weight: "6 kg",
      expiry: "3 hours",
      distance: "1.5 km",
      volunteers: 1,
      pickupUrgent: false,
      safety: "Sealed",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Food Donations</h1>
        <p className="text-[#5F6368] dark:text-[#94a3b8]">
          Real-time feed of available food donations in your area
        </p>
      </div>

      {/* Search and Filters */}
      <Card variant="elevated">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5F6368] dark:text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search donations by location, type, or donor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-[#F7F9FC] dark:bg-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Button */}
            <Button variant="outline" size="md" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#609DFF] text-white shadow-lg shadow-blue-500/20"
                    : "bg-[#F7F9FC] dark:bg-[#1e3a5f] text-[#5F6368] dark:text-[#94a3b8] hover:bg-[#609DFF]/10"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Donation Feed */}
      <div className="space-y-6">
        {donations.map((donation, index) => (
          <motion.div
            key={donation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card variant="elevated" className="overflow-hidden hover:shadow-2xl transition-shadow">
              {/* Donor Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={donation.donorImage}
                      alt={donation.donor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{donation.donor}</h3>
                        {donation.verified && (
                          <CheckCircle2 className="w-4 h-4 text-[#609DFF] dark:text-[#7eb3ff]" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                        <span>{donation.donorType}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {donation.posted}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={donation.pickupUrgent ? "danger" : "eco"}>
                    {donation.category}
                  </Badge>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#f0f4f8]">
                    {donation.title}
                  </h4>
                  <p className="text-[#5F6368] dark:text-[#94a3b8]">{donation.description}</p>
                </div>
              </div>

              {/* Donation Image */}
              <div className="relative">
                <img src={donation.image} alt={donation.title} className="w-full h-80 object-cover" />
                {donation.pickupUrgent && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="danger" className="px-4 py-2 text-sm shadow-lg">
                      <Timer className="w-4 h-4 mr-2 inline" />
                      Urgent Pickup
                    </Badge>
                  </div>
                )}
              </div>

              {/* Details Grid */}
              <div className="p-6 bg-[#F7F9FC] dark:bg-[#1e3a5f] grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-1">Total Weight</p>
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{donation.weight}</p>
                </div>
                <div>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-1">Pickup Deadline</p>
                  <p className="font-semibold text-[#E53935] dark:text-[#ff6b6b] flex items-center gap-1">
                    <Timer className="w-4 h-4" />
                    {donation.expiry}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-1">Distance</p>
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8] flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {donation.distance}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mb-1">Safety Status</p>
                  <p className="font-semibold text-[#4CAF50] dark:text-[#5dd480]">{donation.safety}</p>
                </div>
              </div>

              {/* Items Inventory */}
              <div className="p-6 border-t border-border">
                <p className="text-sm font-medium mb-3 text-[#000000] dark:text-[#f0f4f8]">Available Items:</p>
                <div className="flex flex-wrap gap-2">
                  {donation.items.map((item, i) => (
                    <Badge key={i} variant="info" className="px-3 py-1">
                      <Package className="w-3 h-3 mr-1 inline" />
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 bg-white dark:bg-card border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-[#5F6368] dark:text-[#94a3b8] hover:text-[#E53935] transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">Support</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#5F6368] dark:text-[#94a3b8] hover:text-[#609DFF] transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">Share</span>
                  </button>
                  <button className="flex items-center gap-2 text-[#5F6368] dark:text-[#94a3b8] hover:text-[#FFA726] transition-colors">
                    <Bookmark className="w-5 h-5" />
                    <span className="text-sm">Save</span>
                  </button>
                  <div className="flex items-center gap-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                    <Users className="w-4 h-4" />
                    {donation.volunteers} volunteers interested
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={() => navigate(`/app/post/${donation.id}`)}>
                    View Details
                  </Button>
                  <Button variant="success" size="sm" onClick={() => navigate(`/app/post/${donation.id}`)}>
                    Reserve
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" size="lg">
          Load More Donations
        </Button>
      </div>
    </div>
  );
}
