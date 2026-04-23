import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ImageIcon, Type, Send, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const templates = [
  { name: "Drake Meme", emoji: "🤷‍♂️" },
  { name: "Distracted BF", emoji: "👀" },
  { name: "Change My Mind", emoji: "☕" },
  { name: "Expanding Brain", emoji: "🧠" },
  { name: "This is Fine", emoji: "🔥" },
  { name: "Stonks", emoji: "📈" },
  { name: "Panik / Kalm", emoji: "😰" },
  { name: "Doge", emoji: "🐕" },
];

const SubmitMeme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"upload" | "template">("template");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl text-gradient-gold mb-3">🎨 Meme Banao</h1>
          <p className="text-muted-foreground text-lg font-body">
            Apna meme banao aur duniya ko hasao. Template choose karo ya apna upload karo!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 justify-center">
          <button
            onClick={() => setActiveTab("template")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display text-lg transition-all ${
              activeTab === "template" ? "bg-gradient-gold text-primary-foreground glow-gold" : "bg-secondary text-muted-foreground"
            }`}
          >
            <Sparkles size={18} /> Template
          </button>
          <button
            onClick={() => setActiveTab("upload")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-display text-lg transition-all ${
              activeTab === "upload" ? "bg-gradient-gold text-primary-foreground glow-gold" : "bg-secondary text-muted-foreground"
            }`}
          >
            <Upload size={18} /> Upload
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Template/Upload */}
          <div className="space-y-6">
            {activeTab === "template" ? (
              <div>
                <p className="font-display text-xl text-foreground mb-4">Choose Template</p>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((t) => (
                    <motion.button
                      key={t.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTemplate(t.name)}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        selectedTemplate === t.name
                          ? "border-primary bg-primary/10 glow-gold"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <p className="text-4xl mb-2">{t.emoji}</p>
                      <p className="text-sm font-medium text-foreground">{t.name}</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <p className="font-display text-xl text-foreground mb-4">Upload Image</p>
                <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer bg-card">
                  <ImageIcon size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="font-display text-lg text-foreground mb-2">Drag & Drop ya Click karo</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG, GIF — Max 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Preview + Text */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="aspect-square bg-secondary relative flex items-center justify-center">
                {selectedTemplate ? (
                  <>
                    {topText && (
                      <p className="absolute top-4 left-0 right-0 text-center font-display text-2xl text-foreground drop-shadow-lg px-4">
                        {topText}
                      </p>
                    )}
                    <p className="text-8xl">
                      {templates.find((t) => t.name === selectedTemplate)?.emoji || "🤷"}
                    </p>
                    {bottomText && (
                      <p className="absolute bottom-4 left-0 right-0 text-center font-display text-2xl text-foreground drop-shadow-lg px-4">
                        {bottomText}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-5xl mb-3">👈</p>
                    <p className="text-muted-foreground font-body">Pehle template ya image select karo</p>
                  </div>
                )}
              </div>
            </div>

            {/* Text inputs */}
            <div className="space-y-3">
              <div className="relative">
                <Type size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  placeholder="Top text likhoo..."
                  className="w-full bg-secondary rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="relative">
                <Type size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  placeholder="Bottom text likhoo..."
                  className="w-full bg-secondary rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-gold text-primary-foreground font-display text-xl px-8 py-4 rounded-xl tracking-wider glow-gold flex items-center justify-center gap-3"
            >
              <Send size={20} /> Submit Meme 🚀
            </motion.button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmitMeme;
