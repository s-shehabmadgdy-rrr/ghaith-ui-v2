import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  Award,
  Trophy,
  Star,
  Zap,
  Target,
  Gift,
  Crown,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

export default function Rewards() {
  const handleClaimReward = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const levels = [
    { name: "Bronze", points: 0, color: "from-[#CD7F32] to-[#8B5A00]", unlocked: true },
    { name: "Silver", points: 500, color: "from-[#C0C0C0] to-[#808080]", unlocked: true },
    { name: "Gold", points: 1000, color: "from-[#FFD700] to-[#FFA500]", unlocked: true },
    { name: "Platinum", points: 2500, color: "from-[#E5E4E2] to-[#B9B7B5]", unlocked: false },
    { name: "Diamond", points: 5000, color: "from-[#B9F2FF] to-[#00CED1]", unlocked: false },
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first donation",
      icon: Star,
      points: 50,
      unlocked: true,
      date: "Jan 15, 2026",
    },
    {
      title: "Helping Hand",
      description: "Complete 10 deliveries",
      icon: Award,
      points: 100,
      unlocked: true,
      date: "Feb 8, 2026",
    },
    {
      title: "Community Hero",
      description: "Save 100kg of food",
      icon: Trophy,
      points: 200,
      unlocked: true,
      date: "Mar 12, 2026",
    },
    {
      title: "Speed Demon",
      description: "Complete 5 deliveries in one day",
      icon: Zap,
      points: 150,
      unlocked: false,
      progress: 3,
      total: 5,
    },
    {
      title: "Marathon Runner",
      description: "Complete 50 total deliveries",
      icon: Target,
      points: 300,
      unlocked: false,
      progress: 42,
      total: 50,
    },
    {
      title: "Environmental Champion",
      description: "Reduce 1 ton of CO₂",
      icon: TrendingUp,
      points: 500,
      unlocked: false,
      progress: 850,
      total: 1000,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Ahmed Mohamed", points: 8450, avatar: "AM" },
    { rank: 2, name: "Sarah Hassan", points: 7820, avatar: "SH" },
    { rank: 3, name: "Mohamed Ali", points: 6590, avatar: "MA" },
    { rank: 4, name: "Fatima Ahmed", points: 5240, avatar: "FA" },
    { rank: 5, name: "You", points: 2450, avatar: "JD", highlight: true },
  ];

  const weeklyChallenges = [
    {
      title: "Weekend Warrior",
      description: "Complete 5 deliveries this weekend",
      points: 200,
      progress: 2,
      total: 5,
      timeLeft: "2 days",
    },
    {
      title: "Early Bird",
      description: "Complete 3 morning pickups",
      points: 150,
      progress: 1,
      total: 3,
      timeLeft: "4 days",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#013180] dark:text-[#7eb3ff] mb-2">Rewards & Achievements</h1>
          <p className="text-[#5F6368] dark:text-[#94a3b8]">Track your progress and earn rewards</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-1">Your Points</p>
          <p className="text-4xl font-bold text-[#FFA726] dark:text-[#ffc875]">2,450</p>
        </div>
      </div>

      {/* Sustainability Level Progress */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Sustainability Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6 mb-6">
            {levels.map((level, index) => (
              <div key={level.name} className="flex-1 text-center">
                <div className="relative mb-2">
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center ${
                      !level.unlocked && "opacity-30"
                    }`}
                  >
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  {level.unlocked && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#000000] dark:text-[#f0f4f8]">{level.name}</p>
                <p className="text-xs text-[#5F6368] dark:text-[#94a3b8]">{level.points} pts</p>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="h-3 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "49%" }}
                transition={{ duration: 1.5 }}
                className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
              />
            </div>
            <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mt-2 text-center">
              550 points to next level (Platinum)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Challenges */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Weekly Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {weeklyChallenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card variant="glass">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#000000] dark:text-[#f0f4f8] mb-1">{challenge.title}</h3>
                      <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-3">{challenge.description}</p>
                      <Badge variant="success" className="flex items-center gap-1 w-fit">
                        <Gift className="w-3 h-3" />
                        {challenge.points} points
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#5F6368] dark:text-[#94a3b8]">
                        Progress: {challenge.progress}/{challenge.total}
                      </span>
                      <span className="text-[#FFA726] dark:text-[#ffc875]">{challenge.timeLeft} left</span>
                    </div>
                    <div className="h-2 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#609DFF] to-[#4CAF50]"
                        style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-[#000000] dark:text-[#f0f4f8]">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card variant={achievement.unlocked ? "eco" : "default"} className={!achievement.unlocked ? "opacity-60" : ""}>
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-[#FFA726] to-[#F57C00]"
                        : "bg-[#BEC0BF]"
                    } rounded-full flex items-center justify-center`}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-[#000000] dark:text-[#f0f4f8]">{achievement.title}</h3>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8] mb-3">{achievement.description}</p>
                  <Badge variant={achievement.unlocked ? "success" : "info"}>
                    {achievement.points} points
                  </Badge>
                  {achievement.unlocked ? (
                    <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-2">Unlocked: {achievement.date}</p>
                  ) : (
                    <div className="mt-3">
                      <div className="h-1.5 bg-[#F7F9FC] dark:bg-[#1e3a5f] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#609DFF]"
                          style={{ width: `${((achievement.progress || 0) / (achievement.total || 1)) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-[#5F6368] dark:text-[#94a3b8] mt-1">
                        {achievement.progress}/{achievement.total}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <Card variant="elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Community Leaderboard</CardTitle>
            <Badge variant="eco">This Month</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  user.highlight
                    ? "bg-[#609DFF]/10 dark:bg-[#609DFF]/20 border-2 border-[#609DFF]"
                    : "bg-[#F7F9FC] dark:bg-[#1e3a5f]"
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {user.rank <= 3 ? (
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        user.rank === 1
                          ? "bg-[#FFD700]"
                          : user.rank === 2
                          ? "bg-[#C0C0C0]"
                          : "bg-[#CD7F32]"
                      }`}
                    >
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <span className="text-xl font-bold text-[#5F6368] dark:text-[#94a3b8]">#{user.rank}</span>
                  )}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#609DFF] to-[#4CAF50] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{user.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#000000] dark:text-[#f0f4f8]">{user.name}</p>
                  <p className="text-sm text-[#5F6368] dark:text-[#94a3b8]">{user.points.toLocaleString()} points</p>
                </div>
                {user.highlight && (
                  <Button variant="success" size="sm" onClick={handleClaimReward}>
                    Claim Reward
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
