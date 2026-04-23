import { motion } from "framer-motion";
import { Users, Target, Zap, Mail, MapPin, Phone, Send, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const team = [
  { name: "Chief Meme Officer", role: "Founder & Head Bakwaas", emoji: "🐕" },
  { name: "Meme Engineer", role: "Senior Nonsense Developer", emoji: "🤖" },
  { name: "Sarcasm Specialist", role: "Content Head", emoji: "😏" },
  { name: "Chai Coordinator", role: "Office Management", emoji: "☕" },
];

const values = [
  { icon: Zap, title: "Speed of Bakwaas", desc: "Memes faster than your WiFi" },
  { icon: Target, title: "On Point Sarcasm", desc: "We aim, we roast, we conquer" },
  { icon: Users, title: "Community First", desc: "By memers, for memers" },
];

const About = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
        <div className="container relative text-center max-w-3xl">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={logo}
            alt="Sarcastic Samachar"
            className="w-32 h-32 rounded-full mx-auto mb-6 glow-gold"
          />
          <h1 className="text-4xl md:text-6xl text-gradient-gold mb-4">Hum Kaun Hain?</h1>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Hum woh log hain jo news padhte waqt hasne lage aur socha — "Yeh toh meme ban sakta hai!"
            Aur bas, Sarcastic Samachar ka janam ho gaya. India ka unofficial, unverified, aur unapologetically funny news portal. 🐶🔥
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-gradient-gold text-center mb-12">Hamari Values 💪</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <val.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-gradient-gold text-center mb-12">The Bakwaas Team 🤡</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center card-hover"
              >
                <p className="text-5xl mb-3">{member.emoji}</p>
                <h3 className="font-display text-lg text-foreground">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* <section id="contact" className="py-16 md:py-24 bg-card/30 border-y border-border">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-gradient-gold text-center mb-12">📬 Contact Karo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info */}
            {/* <div className="space-y-6">
              <p className="text-muted-foreground font-body">
                Koi complaint hai? Meme idea hai? Ya bas hello bolna hai? Likh do, hum padh lenge (probably). 🐶
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={18} className="text-primary" />
                  <span className="text-muted-foreground">hello@sarcasticsamachar.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-muted-foreground">Kahin India mein, chai ki dukaan ke paas</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={18} className="text-primary" />
                  <span className="text-muted-foreground">+91 XXXX XXXX (Don't actually call)</span>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div> */}

            {/* Form */}
            {/* <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Tumhara naam"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Kya bolna hai bolo..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-gold text-primary-foreground font-display text-lg px-6 py-3 rounded-lg glow-gold flex items-center justify-center gap-2"
              >
                <Send size={18} /> Bhej Do 🚀
              </motion.button>
            </div>
          </div>
        </div>
      </section> */} 

      <Footer />
    </div>
  );
};

export default About;
