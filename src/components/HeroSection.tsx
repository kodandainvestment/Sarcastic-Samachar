import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import character from "@/assets/character.png";
import { ArrowRight } from "lucide-react";

const taglines = [
  { speaker: "Jonny Lever", line: "Meme dekhne ka ab maza ayega na bhidu" },
  { speaker: "Yo Yo Honey Singh", line: "Jo hum abhi meme dikhayenge na vo socha ni hoga kisine ab ab tayari ho gyi hai…" },
  { speaker: "Jethalal", line: "Me Meme nahi dekhti — Chup Chup hoja satvi fail Chup hoja" },
  { speaker: "Sanjay Dutt", line: "Tension Nahi lene ka Apun h na mast meme dikhayenge.." },
  { speaker: "Narendra Modi", line: "Kitne Tejaswi Meme h humare pass kitne shandar Vichar rakhte hai" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glow behind character */}
      <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(ellipse, rgb(249,198,50) 0%, rgba(249,198,50,0.4) 40%, transparent 70%)", opacity: 0.55 }}
        />
        <div className="absolute top-1/2 right-20 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[40px]"
          style={{ background: "radial-gradient(ellipse, rgb(249,198,50) 0%, transparent 70%)", opacity: 0.35 }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center container py-12 md:py-0 min-h-[80vh]">

        {/* LEFT — Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 pl-8 md:pl-16">

          <motion.h1
            className="text-6xl md:text-8xl leading-[0.95] tracking-wide"
            style={{ fontFamily: "'FirstBunny', cursive", fontWeight: 500, fontSize: "clamp(48px, 8vw, 90px)", background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Sarcastic<br />Samachar
          </motion.h1>

          <div className="max-w-md" style={{ height: "80px", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "0.9rem", color: "rgb(252,198,46)", opacity: 0.7, marginBottom: 4 }}>
                  {taglines[index].speaker}
                </p>
                <p style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, fontSize: "1.25rem", color: "rgb(254,248,224)", margin: 0 }}>
                  {taglines[index].line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="flex gap-4 flex-wrap mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://linktr.ee/SarcasticSamachar"
              target="_blank"
              rel="noopener noreferrer"
              onHoverStart={() => setIsCtaHovered(true)}
              onHoverEnd={() => setIsCtaHovered(false)}
              className="px-5 py-2.5 rounded-full font-display text-base tracking-wider relative inline-flex items-center justify-center"
              style={{
                background: isCtaHovered ? "#000000" : "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)",
                color: isCtaHovered ? "rgb(252,198,46)" : "rgb(30,28,32)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                minWidth: 130,
                transition: "all 0.45s ease-in-out",
              }}
            >
              <motion.span
                animate={{ opacity: isCtaHovered ? 1 : 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                aria-hidden
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  padding: "2px",
                  background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              Follow Us
            </motion.a>
            <motion.a
              href="#collaborate"
              onHoverStart={() => setIsCtaHovered(true)}
              onHoverEnd={() => setIsCtaHovered(false)}
              className="px-5 py-2.5 rounded-full font-display text-base tracking-wider relative inline-flex items-center justify-center"
              style={{
                background: isCtaHovered ? "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)" : "#000000",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                minWidth: 130,
                transition: "all 0.45s ease-in-out",
              }}
            >
              {/* Gradient border */}
              <motion.span
                animate={{ opacity: isCtaHovered ? 0 : 1 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                aria-hidden
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  padding: "2px",
                  background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              {/* Gradient text */}
              <span style={{ color: isCtaHovered ? "rgb(30,28,32)" : "rgb(252,198,46)", transition: "color 0.45s ease-in-out" }}>
                Collaborate
                
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — Character */}
        <div className="hidden md:flex w-1/2 items-end justify-center relative h-full min-h-[80vh]">
          <motion.img
            src={character}
            alt="Sarcastic Samachar Character"
            className="absolute bottom-0 right-0 w-auto max-h-[85vh] object-contain"
            style={{ mixBlendMode: "normal" }}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="w-full border-t border-border bg-card/50 py-3 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8 text-sm font-body text-muted-foreground">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>🚨 Char dost goa ka plan cancel krna bhule zabardasti ghumna pada goa.</span>
              <span>•</span>
              <span>📢 EV Scooter hone ke bad bhi ghar valo se petrol ke paise leta rha yuvak.</span>
              <span>•</span>
              <span>🐕  Bheji hui reels par dost ne reply diya dekhi hui h pit pit kar dikhayi vahi reels.</span>
              <span>•</span>
              <span>💀 Manali ghumne gye dost thand ke mare hotel se hi bahar nhi nikle.</span>
              <span>•</span>
              <span>🔥 Sharma ji ka beta finally fail — nation celebrates</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
