import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, Send, X } from "lucide-react";
// import logo from "@/assets/logo.jpeg";
import { ArrowRight } from "lucide-react";
import character from "@/assets/character.png";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#collaborate" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href) as HTMLElement;
  if (!el) return;
  const navHeight = 55; // sticky navbar height
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{ background: "linear-gradient(90deg, rgb(233,160,35) 0%, rgb(252,198,46) 50%, rgb(233,160,35) 100%)" }}
    >
      {/* <div className="flex items-center justify-between py-3"> */}

     {/* <div className="max-w-7xl mx-auto  flex items-center justify-between py-3   px-10 xl:px-14"> */}

     <div className="max-w-7xl mx-auto relative flex items-center py-2 px-10 xl:px-14">

        {/* Logo */}

        {/* ml-24 */}


        <Link to="/" className="flex  flex items-center gap-3 shrink-0 ">
          <img src={character} alt="Sarcastic Samachar" className="h-9 w-9" />
        </Link>


        {/* Desktop nav */}

        {/* ml-24 */}


        {/* <div className="hidden lg:flex items-center gap-6 "> */}

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">

          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm tracking-wide text-primary-foreground/80  hover:text-white  transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              {link.label}
            </button>
          ))}

      </div>
      <div className="hidden lg:flex ml-auto">

       

       <motion.button
  onClick={() => scrollTo("#collaborate")}
  className="px-5 py-2 rounded-full relative overflow-hidden"
  style={{
    background: "rgb(30,28,32)",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "0.95rem",
    letterSpacing: "0.05em",
    padding: "2px",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 18px 4px rgba(0,0,0,0.7)")}
  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
>

  {/* 🔥 SHIMMER SWEEP EFFECT */}
  <motion.div
    className="absolute inset-0 rounded-full pointer-events-none"
    style={{
      background:
        "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.25), transparent 80%)",
      opacity: 0,
    }}
    // whileHover={{
    //   x: ["-120%", "120%"],
    //   opacity: [0, 1, 0],
    // }}
    // transition={{
    //   duration: 1.2,
    //   ease: "easeInOut",
    // }}
  />



  {/* 🔥 GRADIENT BORDER */}
  <motion.span
    className="absolute inset-0 rounded-full pointer-events-none"
    style={{
      background:
        "linear-gradient(90deg, rgb(222,207,151), rgb(250,242,214), rgb(222,207,151))",
      padding: "2px",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    }}

   
  
  />

  {/* INNER CONTENT */}
  <span
    className="relative block px-4 py-[4px] rounded-full"
    style={{ background: "rgb(30,28,32)" }}
  >
    <span
      className="inline-flex items-center gap-2"
      style={{
        background:
          "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Collaborate

      
        <ArrowRight size={16} />
     
    </span>
  </span>
</motion.button>


          </div>
        </div>

        {/* Collaborate + Hamburger */}
        <div className="flex items-center gap-3 lg:order-2">
          {/* Hamburger (mobile / tablet) */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
            style={{ background: "rgb(233,160,35)" }}
          >
            <div className="container flex flex-col gap-0 pb-4 pt-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setOpen(false); }}
                  className="text-left py-2 px-2 text-primary-foreground/90 hover:text-primary-foreground text-base border-b border-primary-foreground/10 last:border-0"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { scrollTo("#collaborate"); setOpen(false); }}
                className="mt-3 px-5 py-2 rounded-full self-start"
                style={{
                  background: "rgb(30,28,32)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "rgb(252,198,46)",
                  fontSize: "0.95rem",
                }}
              >
                Collaborate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
