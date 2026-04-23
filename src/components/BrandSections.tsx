import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import munnaBhaiya from "@/assets/MunnaBhaiya.png";
import csMunnaBhaiya from "@/assets/CSmunnabhaiya.png";
import emojiImg from "@/assets/emoji.png";
import section4 from "@/assets/section4.png";
import section5 from "@/assets/section5.png";
import section7 from "@/assets/section7.png";
import section8 from "@/assets/section8.png";
import memeImg from "@/assets/meme.png";
import aboutImg from "@/assets/about_section .png";
import first from "@/assets/processicons/first.png";
import second from "@/assets/processicons/second.png";
import third from "@/assets/processicons/third.png";
import fourth from "@/assets/processicons/fourth.png";
import m1 from "@/assets/memes/m1.png";
import m2 from "@/assets/memes/m2.png";
import m3 from "@/assets/memes/m3.png";
import m4 from "@/assets/memes/m4.png";
import m5 from "@/assets/memes/m5.png";
import meme_m from "@/assets/service/meme_m.png";
import Brand_p from "@/assets/service/Brand_p.png";
import page_s from "@/assets/service/page_s.png";
import social_m from "@/assets/service/social_m.png";
import { FaLaughSquint, FaUsers } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { RiBarChartFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";



const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const SectionTitle = ({ quote, speaker, sub }: { quote: string; speaker: string; sub?: string }) => (
  <div className="text-center mb-12 space-y-2">
    <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>{speaker}</p>
    <h2
      className="uppercase leading-tight"
      style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}
      dangerouslySetInnerHTML={{ __html: quote }}
    />
    {sub && <p className="text-muted-foreground font-body text-sm max-w-xl mx-auto">{sub}</p>}
  </div>
);

/* ─── 3. BRANDS ─────────────────────────────────────────────── */
export const BrandsSection = () => (
  <section id="brands" className="py-20 border-b border-border overflow-hidden relative">
    <div className="container relative">

      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>BRANDS</p>
        <h2
          className="font-display uppercase leading-tight"
          style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          " Hum Karte Hain Prabandh… Sabko Viral Kiya Hai,
          <br />Aapko Bhi Kar Denge "
        </h2>
      </motion.div>

      {/* Card + Character */}
      <div className="relative flex items-end justify-center">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl px-4 pb-12 mr-24  w-full z-10"
          // style={{
          //   maxWidth: "620px",
          //   background: "rgba(65, 60, 53, 0.95)",
          //   border: "5px solid rgb(252,198,46)",
          //   boxShadow: "0 0 80px rgba(252,198,46,0.1)",
          // }}

          style={{
            maxWidth: "620px",
            background: "rgba(254,248,224,0.03)",   // same as case study
            // backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "5px solid rgb(252,198,46)", // NOT 5px solid
            boxShadow: "0 0 20px rgba(249,198,50,0.1)",
          }}

        >
          {/* Emoji */}
          <div className="flex justify-center">
            <img src={emojiImg} alt="emoji" className="w-24 h-24 object-contain" />
          </div>

          {/* Quote */}
          <p
            className="text-center font-display text-foreground uppercase mb-1"
            style={{ fontSize: "clamp(13px, 1.6vw, 18px)", fontWeight: 500, letterSpacing: "0.02em", fontFamily: "Impact, sans-serif" }}
          >
            Startups se leke bade logon tak, sabko viral kiya hai
          </p>
          <p className="text-center text-muted-foreground font-body text-sm mb-8">
            (naam nahi bata sakte)
          </p>

          {/* Industry tags — 3 col grid */}
          <div className="grid grid-cols-3 gap-6 px-8">
            {["FMCG", "Ed Tech", "Fashion", "Manufacture Sector", "D2C Brands", "Startups"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.07 }}
                whileHover={{ scale: 1.06 }}
                className="flex items-center justify-center px-3 py-2.5 rounded-xl text-sm font-body text-primary cursor-default text-center"
                style={{ border: "1.5px solid rgb(252,198,46)", background: "transparent" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Munna Bhaiya — right side, absolute to section edge */}
        <motion.img
          src={munnaBhaiya}
          alt="Munna Bhaiya"
          className="hidden md:block absolute bottom-0 w-auto object-contain pointer-events-none select-none"
          style={{ height: "clamp(300px, 42vw, 500px)", zIndex: 20, right: "170px", bottom: "-90px" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        />
      </div>

    </div>
  </section>
);

/* ─── 4. CASE STUDIES ────────────────────────────────────────── */
const cases = [
  { brand: "Brand A", category: "D2C Fashion", result: "1.5M+ Reach", engagement: "100K+ Shares", desc: "Ek meme, ek raat, aur brand ka naam har jagah.", highlight: false },
  { brand: "Brand B", category: "Manufacture Sector", result: "800K+ Reach", engagement: "60K+ Shares", desc: "Product launch ko meme se itna viral kiya ki stock khatam ho gaya.", highlight: true },
  { brand: "Brand C", category: "Ed Tech", result: "2.5M+ Impressions", engagement: "120K+ Saves", desc: "Boring course ko relatable meme ne cool bana diya.", highlight: false },
];

export const CaseStudiesSection = () => {
  const [order, setOrder] = useState([0, 1, 2]);

  const handleClick = (pos: number) => {
    if (pos === 1) return;
    setOrder(prev => {
      if (pos === 0) {
        // left card clicked → bring it to center: [A,B,C] → [C,A,B]
        return [prev[2], prev[0], prev[1]];
      } else {
        // right card clicked → bring it to center: [A,B,C] → [B,C,A]
        return [prev[1], prev[2], prev[0]];
      }
    });
  };

  return (
    <section id="case-studies" className="py-20 border-b border-border bg-card/20 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col items-center">
          <motion.div {...fadeUp()} className="text-center mb-6">
            {/* <p className="text-xs uppercase tracking-widest text-white font-body mb-3">Case Studies</p> */}

            <p className="text-base uppercase tracking-widest mb-4" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>CASE STUDIES</p>
            <h2
              className="uppercase leading-tight block"
              style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              {/* Case Studies Padh Le Bhai, Sirf Baatein Sunke<br />Ghar Nahi Chalta */}
              " 50 baar bola hai case study padhne par dhyan do "
            </h2>
          </motion.div>

          {/* Cards */}
          {/* CS Munna Bhaiya — absolute left, does not affect card layout */}
          <motion.img
            src={csMunnaBhaiya}
            alt="CS Munna Bhaiya"
            className="hidden md:block absolute bottom-0 left-0 w-auto object-contain pointer-events-none select-none"
            style={{ height: "clamp(260px, 32vw, 420px)", zIndex: 20, bottom: "-55px", left: "calc(26% - 290px)" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          />
          {/* <motion.div layout className="w-full grid grid-cols-1 md:grid-cols-3" style={{ gap: "8px", maxWidth: "900px", margin: "0 auto", alignItems: "center" }}> */}

          <motion.div
            layout
            className="w-full grid grid-cols-1 md:grid-cols-3"
            style={{
              gap: "8px",
              maxWidth: "900px",
              margin: "0 auto",
              alignItems: "center",
              perspective: "1200px", // 🔥 IMPORTANT
            }}
          >

            {order.map((dataIndex, pos) => {
              const c = cases[dataIndex];
              const isCenter = pos === 1;
              return (
                <motion.div
                  key={dataIndex}
                  layoutId={`card-${dataIndex}`}
                  onClick={() => handleClick(pos)}
                  className="p-4 py-8 flex flex-col justify-center gap-4 w-full cursor-pointer mt-8 rounded-3xl h-72"
                  // animate={{ scale: isCenter ? 1.18 : 0.92 }}

                  animate={{
                    scale: isCenter ? 1.0 : 0.88,
                    rotateY: pos === 0 ? 18 : pos === 2 ? -18 : 0,
                    x: pos === 0 ? 10 : pos === 2 ? -10 : 0,
                    z: isCenter ? 100 : -40,
                  }}

                  transition={{ type: "spring", stiffness: 120, damping: 30 }}
                  //             style={{
                  //                transformStyle: "preserve-3d",
                  //               //  filter: isCenter ? "none" : "blur(1px)",
                  //               background: isCenter ? "linear-gradient(135deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))" : "rgba(255,255,255,0.05)",
                  //               borderRadius: "1.5rem",
                  //               zIndex: isCenter ? 10 : 7,
                  //               // boxShadow: isCenter ? "0 0 10px 2px rgba(249,198,50,0.1), 0 0 20px 4px rgba(249,198,50,0.05)" : "none",
                  //               boxShadow: isCenter
                  // ? "0 20px 40px rgba(0,0,0,0.35), 0 0 25px rgba(249,198,50,0.25)"
                  // : "0 5px 15px rgba(0,0,0,0.2)",
                  //               backdropFilter: isCenter ? "none" : "blur(12px)",
                  //               WebkitBackdropFilter: isCenter ? "none" : "blur(12px)",
                  //               border: isCenter ? "none" : "2px solid rgba(249,198,50,0.6)",

                  //             }}


                  style={{
                    transformStyle: "preserve-3d",
                    borderRadius: "1.5rem",
                    zIndex: isCenter ? 10 : 7,

                    background: isCenter
                      ? "linear-gradient(135deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))"
                      : pos === 0
                        ? "linear-gradient(rgb(38,36,32), rgb(38,36,32)) padding-box, linear-gradient(to bottom, rgba(252,198,46,0.9) 0%, rgba(252,198,46,0) 100%) border-box"
                        : "linear-gradient(rgb(38,36,32), rgb(38,36,32)) padding-box, linear-gradient(to top, rgba(252,198,46,0.9) 0%, rgba(252,198,46,0) 100%) border-box",

                    border: isCenter ? "none" : "2px solid transparent",

                    boxShadow: isCenter
                      ? "0 20px 40px rgba(0,0,0,0.35), 0 0 25px rgba(249,198,50,0.25)"
                      : "0 10px 25px rgba(0,0,0,0.25)",

                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }} >

                  <div>
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span
                        className="font-display text-2xl uppercase"
                        style={isCenter
                          ? { color: "#1a1a1a", fontWeight: 400, fontFamily: "Impact, sans-serif" }
                          : {
                            background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text", fontWeight: 400, fontFamily: "Impact, sans-serif"
                          }
                        }
                      >
                        {c.brand}
                      </span>
                      {/* <span
                    className="px-3 py-1 rounded-full text-xs font-body text-center"
                    style={isCenter
                      ? { border: "1.5px solid rgba(255,255,255,0.7)", color: "#1a1a1a", fontFamily: "Poppins, sans-serif", minWidth: "80px", display: "inline-block", fontSize: "11px" }
                      : { border: "1.5px solid rgba(252,198,46,0.6)", color: "rgba(252,198,46,0.85)", fontFamily: "Poppins, sans-serif", minWidth: "80px", display: "inline-block", fontSize: "11px" }
                    }
                  >
                    {c.category}
                  </span> */}


                      <span
                        className="rounded-full text-xs font-body"
                        style={{
                          // ✅ SAME SIZE
                          width: "150px",
                          height: "28px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",

                          // ✅ ALWAYS WHITE BORDER
                          border: "1.5px solid rgba(255,255,255,0.8)",

                          // ✅ TEXT COLOR FOLLOWS CARD
                          color: isCenter
                            ? "#1a1a1a"
                            : "rgba(252,198,46,0.9)",

                          fontFamily: "Poppins, sans-serif",
                          fontSize: "11px",

                          transition: "all 0.3s ease", // ✨ smooth color change
                        }}
                      >
                        {c.category}
                      </span>


                    </div>
                    <p className="font-body text-sm leading-relaxed" style={isCenter ? { color: "#1a1a1a", fontFamily: "Poppins, sans-serif", fontWeight: 300 } : { color: "rgba(252,198,46,0.85)", fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>
                      {c.desc}
                    </p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="font-display text-lg uppercase" style={isCenter ? { color: "#1a1a1a", fontWeight: 400, fontFamily: "Impact, sans-serif" } : { color: "rgba(252,198,46,0.9)", fontWeight: 400, fontFamily: "Impact, sans-serif" }}>{c.result}</p>
                      {/* <p className="text-xs" style={isCenter ? { color: "#333", fontFamily: "Poppins, sans-serif", fontWeight: 300 } : { color: "rgba(252,198,46,0.75)", fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>Reach</p> */}
                    </div>
                    <div>
                      <p className="font-display text-lg uppercase" style={isCenter ? { color: "#1a1a1a", fontWeight: 400, fontFamily: "Impact, sans-serif" } : { color: "rgba(252,198,46,0.9)", fontWeight: 400, fontFamily: "Impact, sans-serif" }}>{c.engagement}</p>
                      {/* <p className="text-xs" style={isCenter ? { color: "#333", fontFamily: "Poppins, sans-serif", fontWeight: 300 } : { color: "rgba(252,198,46,0.75)", fontFamily: "Poppins, sans-serif", fontWeight: 300 }}>Engagement</p> */}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── 5. SERVICES ────────────────────────────────────────────── */
const services: { icon: React.ReactNode; title: string; desc: string }[] = [
  { icon: <FaLaughSquint size={30} />, title: "Meme Marketing Campaigns", desc: "Memes ke through apka product dikhega bhi or pure india me bikega bhi... " },
  { icon: <MdCampaign size={32} />, title: "Brand\nPromotions", desc: "Promotions ese ki audience bolne pe majboor ho jaye mast brand h re baba." },
  { icon: <FaUsers size={32} />, title: "Page\nShoutouts", desc: "Shoutout to bahana hai asli kam toh apke page ki Engagement badhana hai ." },
  { icon: <RiBarChartFill size={32} />, title: "Social\nMedia Growth", desc: "Kursi ki peti bandh lijiye kuki apki social media growth badhne vali hai ." },
];

export const ServicesSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState<number | null>(null);
  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector('.icon-circle') as HTMLElement;
    if (icon) icon.style.color = 'rgb(249,198,50)';
  };
  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector('.icon-circle') as HTMLElement;
    if (icon) icon.style.color = 'white';
  };
  return (
    <section id="services" className="py-24 border-b border-border">
      <div className="container">
        {/* <motion.div {...fadeUp()}>
        <SectionTitle
          speaker="SERVICES"
          quote="Ae Ae safed kapda  ye dekho hamari services"
        />
      </motion.div> */}

        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>SERVICES</p>
          <h2
            className="font-display uppercase leading-tight"
            style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            " Ae Ae safed kapda  ye dekho hamari services "
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 isolate sm:grid-cols-2 pt-8 lg:grid-cols-4 gap-24 mb-10" style={{ maxWidth: "950px", margin: "0 auto 40px" }}>
          {services.map((s, i) => (
            <div key={s.title} className="relative">
              {/* left gold accent bar - sibling to card, half outside */}
              <div
                className="absolute top-7 bottom-40 rounded-full"
                style={{ background: "rgba(249,198,50,0.9)", width: "10px", left: "-5px", zIndex: 5 }}
              />
              <motion.div
                {...fadeUp(i * 0.1)}
                className="relative z-10 rounded-3xl p-6 flex flex-col items-center text-center w-[220px] h-[260px] gap-3 group cursor-default overflow-hidden min-h-[200px] border border-transparent hover:border-1 transition-all duration-0"
                style={{ background: "rgb(62, 62, 58)" }}
                whileHover={{ borderColor: "rgb(249, 198, 50)" }}
                onMouseEnter={handleCardEnter}
                onMouseLeave={handleCardLeave}
              >

                <div
                  className="relative w-14 h-24 z-10 rounded-full flex items-center justify-center transition-colors duration-300 icon-circle mt-0 text-white group-hover:text-[rgb(249,198,50)]"
                  style={{ background: "rgba(23, 23, 21, 0.21)" }}
                >
                  {s.icon}
                </div>


                {/* title */}
                <p
                  className="font-display relative z-10 whitespace-pre-line uppercase tracking-wide leading-snug transition-colors duration-300 group-hover:text-[rgb(249,198,50)] text-white mb-2"
                  style={{ fontFamily: "Impact, sans-serif", fontWeight: 400, fontSize: "clamp(14px, 1.2vw, 18px)" }}
                >
                  {s.title}
                </p>

                {/* desc */}
                <p className="text-sm text-white relative z-10 font-body mb-4 leading-relaxed transition-colors duration-300 group-hover:text-[rgb(249,198,50)] text-white">
                  {s.desc}
                </p>

                <button
                  onClick={() => {
                    const el = document.getElementById('collaborate');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2
  px-6 py-0 rounded-full text-sm font-semibold
  flex items-center gap-1 whitespace-nowrap
  opacity-0 translate-y-4
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 ease-out
  hover:scale-105 hover:brightness-110 hover:shadow-[0_0_12px_rgba(249,198,50,0.6)] active:scale-95"
                  style={{
                    background: "linear-gradient(to right, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))",
                    color: "#363333"
                  }}
                >
                  Collab kro <FaRegHandshake/>
                </button>

              </motion.div>
            </div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.4)}
          className="text-center uppercase font-display text-xl md:text-2xl pt-8 text-gradient-gold"
          style={{ fontSize: "clamp(12px, 1.5vw, 34px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Ad nahi banate… meme banate hain jo ad lagta hi nahi.
        </motion.p>
      </div>
    </section>
  );
};

/* ─── 6. WHY CHOOSE US ───────────────────────────────────────── */
const whyPoints = [
  "Audience ko samajhte hain (kyunki hum bhi wahi hain)",
  "Relatable content > cringe ads",
  "Trend pakadte hain, late nahi hote",
  "Memes jo skip nahi, share hote hain",
];

export const WhyUsSection = () => (
  <section id="why-us" className="py-24 pb-32 border-b border-border text-white bg-card/20">
    <div className="container relative">
      {/* <motion.div {...fadeUp()}>
        <SectionTitle
          speaker="Babu Rao"
          quote="Dusra meme brand ko choose karne ka bilkul risk<br/>nahi lene ka re baba"
        />
      </motion.div> */}

      <div className="mb-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >

          <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>WHY CHOOSE US</p>
          <h2
            className="font-display uppercase leading-tight mb-12"
            style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            " Dusra meme brand ko choose karne ka bilkul risk<br />nahi lene ka re baba "

          </h2>

        </motion.div>
      </div>

      {/* Section4 character — absolute left, does not affect layout */}
      {/* <motion.img
        src={section4}
        alt="Why Us Character"
        className="hidden md:block absolute bottom-0 left-0 w-auto object-contain pointer-events-none select-none  "
        style={{ height: "clamp(260px, 32vw, 480px)", zIndex: 20, bottom: "-90px", left: "0px", filter: "drop-shadow(drop-shadow(0 0 12px rgba(164, 132, 33, 0.35))" }}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      /> */}


      <motion.img
        src={section4}
        alt="Why Us Character"
        className="hidden md:block absolute bottom-0 object-contain pointer-events-none select-none"
        style={{
          height: "clamp(260px, 32vw, 480px)",
          zIndex: 20,
          bottom: "-90px",
          left: "50%",
          transform: "translateX(-90%)", // 👈 center perfectly
          // filter: "drop-shadow(0 0 12px rgba(164, 132, 33, 0.35))"
        }}
      />

      <div className="flex flex-col items-center gap-4 max-w-xl mt-16 mx-auto" style={{ paddingLeft: "140px" }} >
        {whyPoints.map((point, i) => (
          <motion.div
            key={i}
            {...fadeUp(i * 0.12)}
            className="flex pr-0  gap-0 w-full"
            style={{ marginLeft: i % 2 !== 0 ? `${(i + 1) * 40}px` : "0px" }}
          >
            {/* <span
              className="shrink-0 font-display"
              style={{ fontFamily: "poppin, sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 200, minWidth: "48px", color: "rgba(255,255,255,0.9)", WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 80%)", maskImage: "linear-gradient(to bottom, black 10%, transparent 80%)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span> */}



            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex-1 px-5 py-4 rounded-2xl font-body text-base text-white/90"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "2px solid rgba(249,198,50,0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)"
              }}
            >
              {point}
            </motion.div>

            {/* <div
              className="flex-1 px-5 py-4 rounded-2xl font-body text-base text-white/90"
              style={{ background: "rgba(255,255,255,0.05)", border: "2px solid rgba(249,198,50,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            >
              {point}
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 7. VIRAL MEMES ─────────────────────────────────────────── */

export const ViralMemesSection = () => {
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const memeImages = [m1, m2, m3, m4, m5];

  const handleCardClick = (pos: number) => {
    if (pos === 2) return;

    setOrder((prev) => {
      const center = 2;
      const move = pos - center;
      const len = prev.length;
      const shiftLeftBy = ((move % len) + len) % len;
      return [...prev.slice(shiftLeftBy), ...prev.slice(0, shiftLeftBy)];
    });
  };

  return (
    <section id="memes" className="py-24 border-b border-border">
      <div className="container">
        <div className="mb-16">
          {/* <motion.div {...fadeUp()}>
          <SectionTitle
            speaker="VIRAL MEMES"
            quote="Kya baat hai sir, kya baat hai sir <br /> kya meme dikhaye hain!"
          />
        </motion.div> */}

          {/* Header */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>VIRAL MEMES</p>
            <h2
              className="font-display uppercase leading-tight"
              style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              " Kya baat hai sir, kya baat hai sir <br /> kya meme dikhaye hain! "
            </h2>
          </motion.div>


        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative w-full mt-8" style={{ maxWidth: "1000px", height: "390px", margin: "0 auto" }}>
            {order.map((cardIndex, pos) => {
              const isCenter = pos === 2;
              const stackShiftX = -250;
              const xOffsets = [-285, -140, 0, 140, 285];
              const scales = [0.78, 0.9, 1.08, 0.9, 0.78];
              const opacities = [0.72, 0.86, 1, 0.86, 0.72];
              const zIndexes = [1, 3, 10, 3, 1];

              return (
                <motion.img
                  key={cardIndex}
                  onClick={() => handleCardClick(pos)}
                  src={memeImages[cardIndex]}
                  alt="Meme"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    x: xOffsets[pos] + stackShiftX,
                    scale: scales[pos],
                    opacity: opacities[pos],
                  }}
                  transition={{ type: "spring", stiffness: 160, damping: 22 }}
                  className="rounded-2xl object-contain w-[280px] absolute left-1/2 -translate-x-1/2 cursor-pointer"
                  style={{
                    top: "0px",
                    zIndex: zIndexes[pos],
                    rotate: "0deg",
                    boxShadow: isCenter ? "0 0 0 3px rgb(249,198,50), 0 0 40px rgba(249,198,50,0.5)" : "0 0 0 3px rgb(249,198,50)",
                  }}
                />
              );
            })}
          </div>

          {/* Munna Bhaiya — right side, absolute to section edge */}
          <motion.img
            src={section5}
            alt="Munna Bhaiya"
            className="hidden md:block absolute bottom-0 w-auto object-contain pointer-events-none select-none"
            style={{ height: "clamp(300px, 42vw, 500px)", zIndex: 20, right: "90px", bottom: "-50px" }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};





/* ─── 8. TESTIMONIALS ────────────────────────────────────────── */
const testimonials = [
  { text: "Bhai yeh too real hai ", handle: "@meme_addict_99", stars: 5 },
  { text: "Best meme page rn, no cap ", handle: "@viral_seeker", stars: 5 },
  { text: "Tag karte karte thak gaya yaar", handle: "@tagging_machine", stars: 5 },
  { text: "Bhai yeh too real hai ", handle: "@meme_addict_99", stars: 5 },
  { text: "Best meme page rn, no cap ", handle: "@viral_seeker", stars: 5 },
  { text: "Tag karte karte thak gaya yaar", handle: "@tagging_machine", stars: 5 },
];


export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 border-b border-border bg-card/20">
      <div className="container ">

        {/* <motion.div {...fadeUp()}>
          <div className="mb-24">
          <SectionTitle
            speaker="TESTIMONIALS"
            quote="Itne log mere pe bharosa karke gaye hain re baba"
          />
          </div>
        </motion.div> */}




        {/* Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>TESTIMONIALS</p>
          <h2
            className="font-display uppercase leading-tight"
            style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            " Itne log mere pe bharosa karke gaye hain re baba "
          </h2>
        </motion.div>


        {/* ✅ GRID LAYOUT (No Scroll) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch justify-items-center max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              {...fadeUp(i * 0.08)}
              className="rounded-2xl border border-border bg-card/60 p-6 text-center flex flex-col items-center space-y-3  h-full min-h-[150px] w-[280px] border-primary/80 transition-colors relative overflow-hidden"
            >
              {/* center glow */}
              <div className="absolute inset-0 pointer-events-none  z-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(249,198,50,0.18) 0%, transparent 70%)" }} />
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="font-body text-foreground text-base">
                {t.text}
              </p>

              <p className="text-xs text-white text-muted-foreground font-body">
                {t.handle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};



/* ─── 9. AUDIENCE ────────────────────────────────────────────── */
const audienceStats = [
  { icon: "🇮🇳", label: "India", value: "PAN" },
  { icon: "🎯", label: "Age 18–30", value: "Core" },
  { icon: "📱", label: "Instagram", value: "Primary" },
  { icon: "⚡", label: "Engagement", value: "High" },
];





export const AudienceSection = () => (
  <section id="audience" className="py-20 border-b border-border">
    <div className="container">

      {/* 
      <motion.div {...fadeUp()}>
        <SectionTitle
          speaker="AUDIENCE"
          quote="Dekh rha hai Binod sabka content kaha <br />  kaha viral kiya jayega"
        />
      </motion.div> */}



      {/* > */}



      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>AUDIENCE</p>
        <h2
          className="font-display uppercase leading-tight"
          style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          " Dekh rha hai Binod sabka content kaha <br />  kaha viral kiya jayega "
        </h2>
      </motion.div>



      {/* 🔥 Main 2 Column Layout */}
      <div className="grid md:grid-cols-2 gap-0 items-center  max-w-5xl mx-auto">


        {/* ✅ RIGHT SIDE → CHARACTER IMAGE */}
        <div className="flex justify-center md:justify-center relative">
          <motion.img
            src={section7}
            alt="Audience character"
            className="hidden md:block  bottom-0 left-0 w-auto object-contain pointer-events-none select-none "
            style={{ height: "clamp(260px, 32vw, 480px)", zIndex: 20, bottom: "-80px", left: "0px" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          />
        </div>


        {/* ✅ LEFT SIDE → CARDS */}
        <div className="flex flex-col gap-6 md:-ml-24">

          {/* 🔹 Row 1 */}
          <div className="flex gap-4">
            {audienceStats.slice(0, 2).map((a, i) => (
              <motion.div
                key={a.label}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl w-44 h-36 border border-border bg-card/60 
        flex flex-col justify-center items-center text-center
        hover:border-primary/30 transition-colors"
                style={{

                  border: "2px solid rgba(252,198,46,0.85)",
                }}
              >
                {/* <p className="text-4xl">{a.icon}</p> */}
                <p className="text-2xl text-gradient-gold "
                  style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >

                  {i === 0 ? (
                    <>
                      <span style={{ fontSize: "0.58em", marginRight: "6px" }}>IN</span>
                      {a.value}
                    </>
                  ) : (
                    a.value
                  )}
                </p>
                <p className="text-sm text-white/90 pt-2">
                  {a.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Row 2 */}
          <div className="flex gap-4">
            {audienceStats.slice(2, 4).map((a, i) => (
              <motion.div
                key={a.label}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl w-44 h-36 border border-border bg-card/60 
        flex flex-col justify-center items-center text-center
        hover:border-primary/30 transition-colors"
                style={{

                  border: "2px solid rgba(252,198,46,0.85)",
                }}
              >
                {/* <p className="text-4xl">{a.icon}</p> */}
                <p className="text-2xl text-gradient-gold "
                  style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >

                  {a.value}
                </p>
                <p className="text-sm text-white/90 pt-1 ">
                  {a.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  </section>
);

/* ─── 10. ABOUT / STORY ──────────────────────────────────────── */
export const AboutSection = () => (
  <section id="about" className="py-20 border-b border-border bg-card/20">
    <div className="container">
      {/* <motion.div {...fadeUp()}>
        <SectionTitle
          speaker="ABOUT & STORY"
          quote="Story ho toh aisi ho - varna meme brand <br /> toh aur bhi hain"
        />
      </motion.div> */}


      <div className="mb-12">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-base uppercase tracking-widest mb-3" style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}></p>ABOUT & STORY
          <h2
            className="font-display uppercase leading-tight mt-2"
            style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            " Story ho toh aisi ho  varna meme brand <br /> toh aur bhi hain "
          </h2>
        </motion.div>
      </div>


      {/* 3-col: left card | character | right card */}
      <div className="relative flex flex-col md:flex-row items-center justify-center  mt-4" style={{ alignItems: "center", marginTop: "-20px", gap: "0px" }}>

        {/* Left card */}



        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl w-[240px] md:w-[300px] p-6 glass-card md:-mr-16
  font-body text-base leading-relaxed text-center
  bg-[linear-gradient(90deg,rgb(233,160,35)_0%,rgb(252,198,46)_50%,rgb(233,160,35)_100%)] 
  bg-clip-text text-transparent"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)", // keep card bg separate
            border: "1.5px solid rgb(252,198,46)",
            minHeight: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          Content aisa jo sirf scroll na ho, balki save aur share hokar har kisi ke inbox mein apni jagah banaye.
        </motion.div>

        {/* Center character */}
        <motion.img
          src={section8}
          alt="About character"
          {...fadeUp(0.2)}
          className="w-auto object-contain pointer-events-none select-none z-10"
          style={{ height: "clamp(280px, 36vw, 460px)", marginTop: "-18px" }}
        />

        {/*         {/* Right card */}

        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl w-[240px] md:w-[300px] p-6 md:-ml-9
  font-body text-base leading-relaxed text-center
  bg-[linear-gradient(90deg,rgb(233,160,35)_0%,rgb(252,198,46)_50%,rgb(233,160,35)_100%)] 
  bg-clip-text text-transparent"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)", // keep card bg separate
            border: "1.5px solid rgb(252,198,46)",
            minHeight: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          Hum sirf content nahi, Viral Trends banate hain jo scroll ko Stop aur fingers ko Share dabane par majboor karte hain
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.p
        {...fadeUp(0.3)}
        className="text-center font-body mt-10"
        style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 1.2vw, 18px)" }}
      >
        Taki ap bhi bole — Bharosa ek bar kiye the lekin ab maza aa rha hai ...
      </motion.p>
    </div>
  </section>
);

/* ─── 11. PROCESS ────────────────────────────────────────────── */
const steps = [
  { icon: first, title: "Aap message \n karo" },
  { icon: second, title: "Hum idea \n banayenge" },
  { icon: third, title: "Meme live \n hoga" },
  { icon: fourth, title: "Or Feed Pe Sirf \n Aap dikhoge" },
];

const iconGradStyle = {};

export const ProcessSection = () => (
  <section id="process" className="py-24 border-b border-border overflow-hidden">
    <div className="container">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(222,207,151)" />
            <stop offset="50%" stopColor="rgb(250,242,214)" />
            <stop offset="100%" stopColor="rgb(222,207,151)" />
          </linearGradient>
        </defs>
      </svg>


      <div className="mb-12">
        {/* <motion.div {...fadeUp()}>
        <SectionTitle
          speaker="PROCESS"
          quote="Meme live hone ke baad reach rukkega nahi sala!<br/>Flower nahi, Fire hai ye process"
        />
      </motion.div> */}



        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-base uppercase tracking-widest mb-3  " style={{ color: "#ffffff", fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}></p>PROCESS
          <h2
            className="font-display uppercase leading-tight pt-4"
            style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            " Meme live hone ke baad reach rukkega nahi sala!<br />Flower nahi, Fire hai ye process "
          </h2>
        </motion.div>

      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 p-0"
        style={{
          maxWidth: "920px", margin: "0 auto"

        }}>

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeUp(i * 0.1)}
            className="flex flex-col items-center justify-center text-center p-12 process-card relative"
            style={{
              background: "rgb(50, 50, 46)",
              borderRadius: "18px",
              width: "160px",
              height: "160px",
              padding: "14px 10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
              position: "relative",
            }}
          >
            {/* Top-left: horizontal fade */}
            <span style={{ position:"absolute", top:0, left:18, width:"calc(50% - 18px)", height:"2px", background:"linear-gradient(to right, rgb(200,155,40) 0%, transparent 100%)" }} />
            {/* Top-left: vertical fade */}
            <span style={{ position:"absolute", top:18, left:0, width:"2px", height:"calc(50% - 18px)", background:"linear-gradient(to bottom, rgb(200,155,40) 0%, transparent 100%)" }} />
            {/* Top-left: corner arc via border */}
            <span style={{ position:"absolute", top:0, left:0, width:"18px", height:"18px", borderTop:"2px solid rgb(200,155,40)", borderLeft:"2px solid rgb(200,155,40)", borderTopLeftRadius:"18px" }} />

            {/* Bottom-right: horizontal fade */}
            <span style={{ position:"absolute", bottom:0, right:18, width:"calc(50% - 18px)", height:"2px", background:"linear-gradient(to left, rgb(200,155,40) 0%, transparent 100%)" }} />
            {/* Bottom-right: vertical fade */}
            <span style={{ position:"absolute", bottom:18, right:0, width:"2px", height:"calc(50% - 18px)", background:"linear-gradient(to top, rgb(200,155,40) 0%, transparent 100%)" }} />
            {/* Bottom-right: corner arc via border */}
            <span style={{ position:"absolute", bottom:0, right:0, width:"18px", height:"18px", borderBottom:"2px solid rgb(200,155,40)", borderRight:"2px solid rgb(200,155,40)", borderBottomRightRadius:"18px" }} />

            <img
              src={s.icon}
              alt={s.title}
              className="w-[80px] h-[80px] mx-auto object-contain mb-2 relative z-10"
            />

            <p
              className="font-body text-[rgb(252,198,46)] break-words mb-4 whitespace-normal relative z-10"
              style={{ whiteSpace: "pre-line", lineHeight: 1.1, fontSize: "clamp(12px, 1.20vw, 14px)", fontFamily: "Poppins, sans-serif", fontWeight: 200 }}
            >
              {s.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
