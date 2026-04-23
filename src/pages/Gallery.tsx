import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List, Heart, Share2, MessageCircle, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Desi Memes", "Tech Humor", "Office Life", "Bollywood", "Cricket", "Politics", "Relationship", "Student Life"];

const allMemes = [
  { id: 1, title: "Jab boss bole 'we are family' but salary na de", category: "Office Life", emoji: "🤡", likes: 4200, comments: 312, shares: 89 },
  { id: 2, title: "Monday motivation? Bhai Monday ko hi motivation chahiye", category: "Office Life", emoji: "💀", likes: 6900, comments: 420, shares: 234 },
  { id: 3, title: "Sharma ji ka beta vs Me — an eternal saga", category: "Desi Memes", emoji: "😤", likes: 12000, comments: 890, shares: 567 },
  { id: 4, title: "AI will replace developers... developers after 5pm:", category: "Tech Humor", emoji: "🤖", likes: 8100, comments: 567, shares: 345 },
  { id: 5, title: "Ghar pe khaana nahi bana, Swiggy: allow me", category: "Desi Memes", emoji: "🍕", likes: 3500, comments: 234, shares: 123 },
  { id: 6, title: "Baarish mein bike chalana = free swimming", category: "Desi Memes", emoji: "🌧️", likes: 5700, comments: 345, shares: 190 },
  { id: 7, title: "India wins toss, Twitter crashes before match starts", category: "Cricket", emoji: "🏏", likes: 15000, comments: 1200, shares: 890 },
  { id: 8, title: "College attendance 75%? Impossible mission accepted", category: "Student Life", emoji: "📚", likes: 9800, comments: 678, shares: 456 },
  { id: 9, title: "Salman bhai ki film flop, fans blame audience", category: "Bollywood", emoji: "🎬", likes: 11000, comments: 890, shares: 567 },
  { id: 10, title: "Politicians promise WiFi, village still waiting for water", category: "Politics", emoji: "🗳️", likes: 7600, comments: 543, shares: 321 },
  { id: 11, title: "GF says 'I'm fine' — narrator: she was not fine", category: "Relationship", emoji: "💔", likes: 13400, comments: 1100, shares: 780 },
  { id: 12, title: "npm install: downloading the entire internet since 2010", category: "Tech Humor", emoji: "📦", likes: 8900, comments: 670, shares: 445 },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"likes" | "comments" | "newest">("likes");

  const filtered = allMemes
    .filter((m) => activeCategory === "All" || m.category === activeCategory)
    .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "comments") return b.comments - a.comments;
      return b.id - a.id;
    });

  const formatNum = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n.toString());

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl text-gradient-gold mb-3">😂 Meme Gallery</h1>
          <p className="text-muted-foreground text-lg font-body">Browse, laugh, share, repeat.</p>
        </div>

        {/* Search & Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search memes..."
                className="w-full bg-secondary rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-gold text-primary-foreground glow-gold"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 text-sm">
            <Filter size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">Sort:</span>
            {(["likes", "comments", "newest"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  sortBy === s ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s === "likes" ? "🔥 Most Liked" : s === "comments" ? "💬 Most Discussed" : "🆕 Newest"}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">{filtered.length} memes found</p>

        {/* Grid / List view */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((meme, i) => (
              <motion.div
                key={meme.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
              >
                <div className="aspect-square bg-secondary flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
                  {meme.emoji}
                </div>
                <div className="p-4 space-y-3">
                  <span className="inline-block text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {meme.category}
                  </span>
                  <h3 className="font-display text-lg text-foreground leading-snug">{meme.title}</h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm pt-2 border-t border-border">
                    <button className="flex items-center gap-1 hover:text-destructive transition-colors">
                      <Heart size={14} /> {formatNum(meme.likes)}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageCircle size={14} /> {formatNum(meme.comments)}
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Share2 size={14} /> {formatNum(meme.shares)}
                    </button>
                    <button className="ml-auto hover:text-primary transition-colors">
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((meme, i) => (
              <motion.div
                key={meme.id}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 card-hover group"
              >
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center text-3xl shrink-0">
                  {meme.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full mb-1">
                    {meme.category}
                  </span>
                  <h3 className="font-display text-lg text-foreground truncate group-hover:text-primary transition-colors">
                    {meme.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm shrink-0">
                  <span className="flex items-center gap-1"><Heart size={14} /> {formatNum(meme.likes)}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={14} /> {formatNum(meme.comments)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🥲</p>
            <p className="font-display text-2xl text-foreground">Koi meme nahi mila</p>
            <p className="text-muted-foreground mt-2">Try a different search or category</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
