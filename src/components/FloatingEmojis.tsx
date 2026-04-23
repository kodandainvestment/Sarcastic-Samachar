import { motion } from "framer-motion";

const emojis = ["😂", "🔥", "💀", "🤡", "😤", "🐕", "📰", "🎭", "👀", "🤣"];

const FloatingEmojis = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl select-none opacity-20"
          style={{
            left: `${(i * 11 + 5) % 95}%`,
            top: `${(i * 17 + 10) % 85}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
