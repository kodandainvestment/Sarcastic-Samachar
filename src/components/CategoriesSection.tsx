import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { name: "Desi Memes", emoji: "🇮🇳", count: 1240, color: "from-orange-500/20 to-orange-600/5" },
  { name: "Tech Humor", emoji: "💻", count: 890, color: "from-blue-500/20 to-blue-600/5" },
  { name: "Office Life", emoji: "🏢", count: 670, color: "from-green-500/20 to-green-600/5" },
  { name: "Bollywood", emoji: "🎬", count: 1520, color: "from-pink-500/20 to-pink-600/5" },
  { name: "Cricket", emoji: "🏏", count: 980, color: "from-emerald-500/20 to-emerald-600/5" },
  { name: "Politics", emoji: "🗳️", count: 2100, color: "from-red-500/20 to-red-600/5" },
  { name: "Relationship", emoji: "💔", count: 1340, color: "from-purple-500/20 to-purple-600/5" },
  { name: "Student Life", emoji: "📚", count: 760, color: "from-yellow-500/20 to-yellow-600/5" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gradient-gold mb-3">🗂️ Meme Categories</h2>
          <p className="text-muted-foreground font-body text-lg">Har mood ke liye meme hai bhai</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/gallery?category=${encodeURIComponent(cat.name)}`}
                className={`block p-5 rounded-xl border border-border bg-gradient-to-br ${cat.color} hover:border-primary/50 transition-all hover:scale-105 group`}
              >
                <p className="text-4xl mb-2">{cat.emoji}</p>
                <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{cat.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cat.count.toLocaleString()} memes</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
