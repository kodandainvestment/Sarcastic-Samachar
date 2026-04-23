import { motion } from "framer-motion";
import { Heart, Share2, MessageCircle } from "lucide-react";

interface MemeCardProps {
  title: string;
  category: string;
  emoji: string;
  likes: string;
  comments: string;
  delay?: number;
}

const MemeCard = ({ title, category, emoji, likes, comments, delay = 0 }: MemeCardProps) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card border border-border rounded-lg overflow-hidden card-hover group"
    >
      {/* Meme placeholder visual */}
      <div className="aspect-square bg-secondary flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
        {emoji}
      </div>

      <div className="p-4 flex flex-col gap-3 h-[140px]">
        <span className="inline-block text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded-full w-fit">
          {category}
        </span>
        <h3 className="font-display text-xl text-foreground leading-snug line-clamp-2 flex-1">{title}</h3>

        <div className="flex items-center gap-4 text-muted-foreground text-sm pt-2 border-t border-border">
          <button className="flex items-center gap-1 hover:text-destructive transition-colors">
            <Heart size={16} /> {likes}
          </button>
          <button className="flex items-center gap-1 hover:text-primary transition-colors">
            <MessageCircle size={16} /> {comments}
          </button>
          <button className="ml-auto hover:text-primary transition-colors">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MemeCard;
