import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F7F9FC] to-[#F3FAF5] dark:from-[#0a1628] dark:via-[#132340] dark:to-[#1a3d2e] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Person sharing food"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl">
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-1">احفظ النعمه تدوم....</p>
              <p className="text-xl font-bold text-[#4CAF50] dark:text-[#5dd480]">Join the Movement</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="elevated" className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#013180] dark:text-[#7eb3ff]">Ghaith - غيث</h1>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#000000] dark:text-[#f0f4f8]">Welcome Back</h2>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Sign in to continue making a difference
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <div>
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={formData.remember}
                      onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
                      className="rounded"
                    />
                    <label htmlFor="remember" className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-[#609DFF] hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white dark:bg-card text-[#5F6368] dark:text-[#94a3b8]">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button type="button" variant="outline">
                Google
              </Button>
              <Button type="button" variant="outline">
                Facebook
              </Button>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-[#5F6368] dark:text-[#94a3b8]">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-[#609DFF] hover:underline font-medium"
              >
                Sign Up
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
