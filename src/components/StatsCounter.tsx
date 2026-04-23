import { motion } from "framer-motion";
import { Eye, Users, Laugh, Newspaper } from "lucide-react";

const stats = [
  { icon: Eye, value: "4.2M+", label: "Monthly Views", emoji: "👀" },
  { icon: Users, value: "120K+", label: "Active Memers", emoji: "🤡" },
  { icon: Laugh, value: "50K+", label: "Memes Created", emoji: "😂" },
  { icon: Newspaper, value: "10K+", label: "Fake Articles", emoji: "📰" },
];

const StatsCounter = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center space-y-2"
        >
          <p className="text-3xl md:text-4xl">{stat.emoji}</p>
          <p className="font-display text-3xl md:text-4xl text-gradient-gold">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
