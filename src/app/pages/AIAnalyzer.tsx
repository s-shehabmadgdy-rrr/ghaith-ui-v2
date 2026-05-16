import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import {
  Camera,
  Upload,
  Sparkles,
  Package,
  Calendar,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

export default function AIAnalyzer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        analyzeFood();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResults({
        foodType: "Mixed Meals",
        items: [
          { name: "Pizza slices", quantity: "8-10 pieces", confidence: 95 },
          { name: "Pasta dishes", quantity: "~3 servings", confidence: 92 },
          { name: "Salad portions", quantity: "4-5 servings", confidence: 88 },
        ],
        estimatedWeight: "4.2 kg",
        servingSize: "12-15 people",
        expiryEstimate: "4-6 hours (fresh)",
        safetyCheck: "Pass",
        suggestions: [
          "Food appears fresh and properly stored",
          "Recommend temperature-controlled transport",
          "Suitable for immediate distribution",
        ],
      });
      setAnalyzing(false);
    }, 2000);
  };

  const recentAnalyses = [
    {
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=100&h=100&fit=crop",
      type: "Bakery Items",
      date: "Today, 10:30 AM",
      weight: "3.5 kg",
      status: "Approved",
    },
    {
      image: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?w=100&h=100&fit=crop",
      type: "Fresh Produce",
      date: "Yesterday",
      weight: "5.8 kg",
      status: "Approved",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2 flex items-center gap-2">
          <Sparkles className="w-8 h-8" />
          AI Food Analyzer
        </h1>
        <p className="text-[#5F6368] dark:text-[#94a3b8]">
          Upload food photos to automatically detect type, quantity, and expiry
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-6">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Upload Food Photo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {uploadedImage ? (
                  <div className="relative">
                    <img src={uploadedImage} alt="Uploaded food" className="w-full h-80 object-cover rounded-xl" />
                    {analyzing && (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
                          </motion.div>
                          <p className="text-white font-medium">Analyzing food...</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-[#609DFF] rounded-xl p-12 text-center hover:bg-[#609DFF]/5 transition-colors">
                      <Upload className="w-16 h-16 mx-auto mb-4 text-[#609DFF] dark:text-[#7eb3ff]" />
                      <p className="text-lg font-medium text-[#000000] dark:text-[#f0f4f8] mb-2">
                        Upload Food Photo
                      </p>
                      <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-4">
                        Click to browse or drag and drop
                      </p>
                      <Badge variant="info">Supports JPG, PNG up to 10MB</Badge>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {uploadedImage && !analyzing && (
                <div className="mt-4 flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setUploadedImage(null)}>
                    Upload New
                  </Button>
                  <label className="flex-1">
                    <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                      <Camera className="w-4 h-4" />
                      Take Photo
                    </Button>
                  </label>
                </div>
              )}
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { step: 1, text: "Upload a photo of your food donation" },
                { step: 2, text: "AI analyzes the image and identifies food types" },
                { step: 3, text: "Get estimated quantity and expiry predictions" },
                { step: 4, text: "Receive safety recommendations and suggestions" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{item.step}</span>
                  </div>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{item.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {results ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="elevated">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Analysis Results</CardTitle>
                    <Badge variant="success" className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Verified
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Food Type */}
                  <div>
                    <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-2">Detected Food Type</p>
                    <p className="text-2xl font-bold text-[#013180] dark:text-[#7eb3ff]">{results.foodType}</p>
                  </div>

                  {/* Detected Items */}
                  <div>
                    <p className="text-sm font-medium mb-3 text-[#000000] dark:text-[#f0f4f8]">Detected Items</p>
                    <div className="space-y-2">
                      {results.items.map((item: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                          <div className="flex items-center gap-3">
                            <Package className="w-5 h-5 text-[#609DFF]" />
                            <div>
                              <p className="font-medium text-[#000000] dark:text-[#f0f4f8]">{item.name}</p>
                              <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{item.quantity}</p>
                            </div>
                          </div>
                          <Badge variant="success">{item.confidence}%</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estimates */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F3FAF5] dark:bg-[#1a3d2e] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
                        <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Est. Weight</p>
                      </div>
                      <p className="text-xl font-bold text-[#2D7A4A] dark:text-[#5dd480]">{results.estimatedWeight}</p>
                    </div>
                    <div className="p-4 bg-[#FFF3E0] dark:bg-[#4a3a2e] rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#FFA726]" />
                        <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">Expiry Est.</p>
                      </div>
                      <p className="text-sm font-bold text-[#FFA726] dark:text-[#ffc875]">{results.expiryEstimate}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#E8F5E9] dark:bg-[#2e4a33] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                      <p className="font-medium text-[#2D7A4A] dark:text-[#5dd480]">Safety Check: {results.safetyCheck}</p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div>
                    <p className="text-sm font-medium mb-3 text-[#000000] dark:text-[#f0f4f8]">AI Suggestions</p>
                    <div className="space-y-2">
                      {results.suggestions.map((suggestion: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#609DFF] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="success" className="w-full">
                    Create Donation Post
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <Card variant="glass">
              <CardContent className="p-12 text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-[#BEC0BF]" />
                <p className="text-[#5F6368] dark:text-[#94a3b8]">
                  Upload a photo to see AI analysis results
                </p>
              </CardContent>
            </Card>
          )}

          {/* Recent Analyses */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAnalyses.map((analysis, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-xl">
                  <img src={analysis.image} alt={analysis.type} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="font-medium text-[#000000] dark:text-[#f0f4f8]">{analysis.type}</p>
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{analysis.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">{analysis.weight}</p>
                    <Badge variant="success" className="mt-1">{analysis.status}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
