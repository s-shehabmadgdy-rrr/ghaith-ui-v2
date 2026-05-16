import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { Leaf, User, Heart, Building2, Hotel, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

type AccountType = "donor" | "volunteer" | "charity" | "restaurant" | "hotel";

export default function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<AccountType>("volunteer");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: "",
    organization: "",
  });

  const accountTypes = [
    { id: "volunteer", label: "Volunteer", icon: User, color: "from-[#609DFF] to-[#013180]" },
    { id: "donor", label: "Donor", icon: Heart, color: "from-[#4CAF50] to-[#2D7A4A]" },
    { id: "charity", label: "Charity", icon: Heart, color: "from-[#FFA726] to-[#F57C00]" },
    { id: "restaurant", label: "Restaurant", icon: Building2, color: "from-[#E53935] to-[#B71C1C]" },
    { id: "hotel", label: "Hotel", icon: Hotel, color: "from-[#9C27B0] to-[#6A1B9A]" },
  ];

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { strength: 0, label: "", color: "" };
    if (password.length < 6) return { strength: 1, label: "Weak", color: "bg-red-500" };
    if (password.length < 10) return { strength: 2, label: "Medium", color: "bg-yellow-500" };
    return { strength: 3, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

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
              src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="People helping with food donations"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#013180] dark:text-[#7eb3ff]">50K+</p>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">Meals Saved</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Sign Up Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="elevated" className="p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-[#013180] dark:text-[#7eb3ff]">Ghaith - غيث</h1>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-[#000000] dark:text-[#f0f4f8]">Create Your Account</h2>
              <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">
                Join our community and start making a difference
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        s <= step
                          ? "bg-[#609DFF] text-white"
                          : "bg-[#F7F9FC] dark:bg-[#1e3a5f] text-[#5F6368] dark:text-[#94a3b8]"
                      }`}
                    >
                      {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 ${
                          s < step ? "bg-[#609DFF]" : "bg-[#F7F9FC] dark:bg-[#1e3a5f]"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-[#5F6368] dark:text-[#94a3b8]">
                <span>Account Type</span>
                <span>Information</span>
                <span>Complete</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Account Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium mb-3 text-[#000000] dark:text-[#f0f4f8]">
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {accountTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setAccountType(type.id as AccountType)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          accountType === type.id
                            ? "border-[#609DFF] bg-[#609DFF]/5 dark:bg-[#609DFF]/10"
                            : "border-border hover:border-[#609DFF]/50"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center`}
                        >
                          <type.icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm font-medium text-[#000000] dark:text-[#f0f4f8]">{type.label}</p>
                      </button>
                    ))}
                  </div>
                  <Button type="button" onClick={handleNext} className="w-full mt-6">
                    Continue
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                  <Input
                    label="Username"
                    type="text"
                    placeholder="johndoe123"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Input
                    label="Location"
                    type="text"
                    placeholder="New York, NY"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                  {(accountType === "restaurant" || accountType === "hotel" || accountType === "charity") && (
                    <Input
                      label="Organization Name"
                      type="text"
                      placeholder="Organization name"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  )}
                  <div className="flex gap-3">
                    <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button type="button" onClick={handleNext} className="flex-1">
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Password & Complete */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex-1 h-1 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
                            <div
                              className={`h-full ${passwordStrength.color} transition-all`}
                              style={{ width: `${(passwordStrength.strength / 3) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-[#5F6368] dark:text-[#94a3b8]">
                            {passwordStrength.label}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    error={
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? "Passwords do not match"
                        : ""
                    }
                    required
                  />
                  <div className="flex items-start gap-2 p-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-lg">
                    <input type="checkbox" required className="mt-1" />
                    <label className="text-xs text-[#5F6368] dark:text-[#94a3b8]">
                      I agree to the{" "}
                      <a href="#" className="text-[#609DFF] hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#609DFF] hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button type="submit" variant="success" className="flex-1">
                      Create Account
                    </Button>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Social Login */}
            {step === 1 && (
              <div className="mt-6">
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-white dark:bg-card text-[#5F6368] dark:text-[#94a3b8]">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button type="button" variant="outline" className="w-full">
                    Google
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Facebook
                  </Button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-[#5F6368] dark:text-[#94a3b8]">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[#609DFF] hover:underline font-medium"
              >
                Sign In
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
