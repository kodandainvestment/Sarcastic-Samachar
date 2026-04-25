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
        <div className="absolute right-10 w-[600px] h-[600px] rounded-full blur-[80px] top-[-10%] md:top-[10%]"
          style={{ background: "radial-gradient(ellipse, rgb(249,198,50) 0%, rgba(249,198,50,0.4) 40%, transparent 70%)", opacity: 0.55 }}
        />
        <div className="absolute right-20 w-[300px] h-[300px] rounded-full blur-[40px] top-[-10%] md:top-[10%]"
          style={{ background: "radial-gradient(ellipse, rgb(255, 191, 0) 0%, transparent 70%)", opacity: 0.35 }}
        />
      </div>

      {/* Mobile layout: heading → image → tagline+buttons */}
      <div className="flex flex-col md:hidden z-10 px-6 py-4 text-center flex-1 justify-center mt-8">
        <motion.h1
          style={{ fontFamily: "'FirstBunny', cursive", fontWeight: 500, fontSize: "clamp(40px, 16vw, 100px)", background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 0.95 }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Sarcastic<br />Samachar
        </motion.h1>

        <div className="flex items-end justify-center relative h-[280px] my-2">
          <motion.img
            src={character}
            alt="Sarcastic Samachar Character"
            className="w-auto h-full max-h-[300px] object-contain"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        </div>

        <div className="flex flex-col gap-6 pt-12">
          <div style={{ height: "80px", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "0.9rem", color: "rgb(252,198,46)", opacity: 0.7, marginBottom: 4 }}>{taglines[index].speaker}</p>
                <p style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, fontSize: "1.25rem", color: "rgb(254,248,224)", margin: 0 }}>{taglines[index].line}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div className="flex gap-4 flex-wrap justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <a href="https://linktr.ee/SarcasticSamachar" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full inline-flex items-center justify-center transition-all duration-300"
              style={{ background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", color: "rgb(30,28,32)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, minWidth: 130 }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 18px 4px rgba(249,198,50,0.55)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >Follow Us</a>
            <a href="#collaborate"
              className="px-5 py-2.5 rounded-full inline-flex items-center justify-center relative transition-all duration-300"
              style={{ background: "#000000", fontFamily: "'Poppins', sans-serif", fontWeight: 700, minWidth: 130 }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 18px 4px rgba(249,198,50,0.55)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              <span aria-hidden className="absolute inset-0 rounded-full pointer-events-none" style={{ padding: "2px", background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <span style={{ color: "rgb(252,198,46)" }}>Collaborate</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-1 flex-row items-center container py-12 md:py-0 min-h-[80vh]">
        <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 px-6 md:pl-16 text-left">
          <motion.h1
            className="text-6xl md:text-8xl leading-[0.95] tracking-wide"
            style={{ fontFamily: "'FirstBunny', cursive", fontWeight: 500, fontSize: "clamp(40px, 10vw, 90px)", background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Sarcastic<br />Samachar
          </motion.h1>
          <div className="flex flex-col gap-6">
            <div className="max-w-md" style={{ height: "80px", overflow: "hidden" }}>
              <AnimatePresence mode="wait">
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                  <p style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: "0.9rem", color: "rgb(252,198,46)", opacity: 0.7, marginBottom: 4 }}>{taglines[index].speaker}</p>
                  <p style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 400, fontSize: "1.25rem", color: "rgb(254,248,224)", margin: 0 }}>{taglines[index].line}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.div className="flex gap-4 flex-wrap mt-6 justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <a href="https://linktr.ee/SarcasticSamachar" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full inline-flex items-center justify-center transition-all duration-300"
                style={{ background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", color: "rgb(30,28,32)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, minWidth: 130 }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 18px 4px rgba(249,198,50,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >Follow Us</a>
              <a href="#collaborate"
                className="px-5 py-2.5 rounded-full inline-flex items-center justify-center relative transition-all duration-300"
                style={{ background: "#000000", fontFamily: "'Poppins', sans-serif", fontWeight: 700, minWidth: 130 }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 18px 4px rgba(249,198,50,0.55)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <span aria-hidden className="absolute inset-0 rounded-full pointer-events-none" style={{ padding: "2px", background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                <span style={{ color: "rgb(252,198,46)" }}>Collaborate</span>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="flex md:w-1/2 items-end justify-center relative h-[280px] md:h-full md:min-h-[85vh] mb-2 md:mb-0">
          <motion.img
            src={character}
            alt="Sarcastic Samachar Character"
            className="w-auto h-full max-h-[300px] md:max-h-[85vh] object-contain md:absolute md:bottom-0 md:right-0"
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
