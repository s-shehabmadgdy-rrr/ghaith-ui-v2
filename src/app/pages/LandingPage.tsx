import { useNavigate } from "react-router";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Leaf, Users, Package, TrendingUp, Heart, Award } from "lucide-react";
import { motion } from "motion/react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F7F9FC] to-[#F3FAF5] dark:from-[#0a1628] dark:via-[#132340] dark:to-[#1a3d2e]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-[#609DFF]/20 dark:bg-[#7eb3ff]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#4CAF50]/20 dark:bg-[#5dd480]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFA726]/15 dark:bg-[#ffc875]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-2xl flex items-center justify-center shadow-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#013180] to-[#4CAF50] dark:from-[#7eb3ff] dark:to-[#5dd480] bg-clip-text text-transparent">
                Ghaith
              </h1>
            </div>
            <p className="text-5xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">
              غيث
            </p>
          </motion.div>

          {/* Main Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-[#5F6368] dark:text-[#94a3b8] mb-12 max-w-3xl mx-auto"
          >
            احفظ النعمه تدوم....
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-[#5F6368] dark:text-[#94a3b8] mb-8 max-w-2xl mx-auto"
          >
            Connect restaurants, hotels, and communities to reduce food waste and
            feed those in need
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button size="lg" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button size="lg" variant="secondary" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/app")}>
              Continue as Guest
            </Button>
          </motion.div>

          {/* Trust Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: "50K+", label: "Meals Saved", icon: Package },
              { value: "2.5K+", label: "Volunteers", icon: Users },
              { value: "120+", label: "Partners", icon: Heart },
              { value: "15 Tons", label: "CO₂ Reduced", icon: TrendingUp },
            ].map((stat, index) => (
              <Card key={index} variant="glass" className="p-4 text-center hover:scale-105 transition-transform">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#609DFF] dark:text-[#7eb3ff]" />
                <p className="text-2xl font-bold text-[#013180] dark:text-[#7eb3ff]">{stat.value}</p>
                <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#013180] dark:text-[#7eb3ff]">
            How It Works
          </h2>
          <p className="text-center text-[#5F6368] dark:text-[#94a3b8] mb-12 max-w-2xl mx-auto">
            Join our community and make a difference in three simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Post Food",
                description: "Restaurants and donors post available food items with photos and details",
                icon: Package,
                color: "from-[#609DFF] to-[#013180]",
              },
              {
                title: "Connect",
                description: "Volunteers and charities see nearby donations and reserve items instantly",
                icon: Users,
                color: "from-[#4CAF50] to-[#2D7A4A]",
              },
              {
                title: "Deliver",
                description: "Real-time tracking ensures food reaches those in need safely and quickly",
                icon: Award,
                color: "from-[#FFA726] to-[#F57C00]",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#000000] dark:text-[#f0f4f8]">
                    {step.title}
                  </h3>
                  <p className="text-[#5F6368] dark:text-[#94a3b8]">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 px-4 bg-[#F3FAF5] dark:bg-[#1a3d2e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#013180] dark:text-[#7eb3ff]">
            Environmental Impact
          </h2>
          <p className="text-center text-[#5F6368] dark:text-[#94a3b8] mb-12 max-w-2xl mx-auto">
            Together we're creating a sustainable future and fighting food waste
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjB2b2x1bnRlZXJzJTIwc3VzdGFpbmFiaWxpdHl8ZW58MXx8fHwxNzc4OTQ3MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteers sorting food donations"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              {[
                { label: "Food Waste Prevented", value: "15 Tons/Month" },
                { label: "People Fed", value: "10,000+ Monthly" },
                { label: "Carbon Emissions Saved", value: "25 Tons CO₂" },
                { label: "Partner Organizations", value: "120+ Active" },
              ].map((metric, index) => (
                <Card key={index} variant="eco" className="p-4">
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-1">{metric.label}</p>
                  <p className="text-2xl font-bold text-[#2D7A4A] dark:text-[#5dd480]">{metric.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#013180] dark:text-[#7eb3ff]">
            Community Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Ahmed",
                role: "Volunteer Coordinator",
                text: "Ghaith has transformed how we connect with local restaurants. We've saved thousands of meals!",
                image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=150&h=150&fit=crop",
              },
              {
                name: "Mohamed Ali",
                role: "Restaurant Manager",
                text: "Instead of wasting food, we now help feed families in need. It's incredibly fulfilling.",
                image: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=150&h=150&fit=crop",
              },
              {
                name: "Fatima Hassan",
                role: "NGO Director",
                text: "The platform makes food rescue efficient and trackable. A game-changer for our mission.",
                image: "https://images.unsplash.com/photo-1710092784814-4a6f158913b8?w=150&h=150&fit=crop",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{testimonial.name}</p>
                      <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#5F6368] dark:text-[#94a3b8] italic">"{testimonial.text}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-20 px-4 bg-[#F7F9FC] dark:bg-[#132340]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#013180] dark:text-[#7eb3ff]">
            Trusted Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Hotels", "Restaurants", "Supermarkets", "Bakeries", "Cafes", "NGOs", "Charities", "Communities"].map(
              (partner, index) => (
                <Card key={index} variant="glass" className="p-6 text-center hover:scale-105 transition-transform">
                  <p className="font-semibold text-[#013180] dark:text-[#7eb3ff]">{partner}</p>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">About</h4>
              <ul className="space-y-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                <li>Our Mission</li>
                <li>How It Works</li>
                <li>Impact Report</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Get Involved</h4>
              <ul className="space-y-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                <li>Become a Volunteer</li>
                <li>Partner With Us</li>
                <li>Donate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Support</h4>
              <ul className="space-y-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Legal</h4>
              <ul className="space-y-2 text-sm text-[#5F6368] dark:text-[#94a3b8]">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-[#5F6368] dark:text-[#94a3b8]">
            <p>© 2026 Ghaith - غيث. All rights reserved. Fighting food waste, feeding hope.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
