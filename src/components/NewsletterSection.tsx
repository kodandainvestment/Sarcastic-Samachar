import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import contact_Ch from "@/assets/contact_Ch.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/sarcastic_samachar", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/sarcastic.samachar.k", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@Sarcastic_Samachar", label: "YouTube" },
];

const contactItems = [
  { icon: Mail, text: "social2.sarcasticsamachar@gmail.com" },
  { icon: MapPin, text: "Kahin India mein, chai ki dukaan ke pass" },
  { icon: Phone, text: "+91 xxxx xxxx (Don't actually call)" },
];

const NewsletterSection = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_douvulj",     // tumhara service ID
      "template_iz069dk",     // apna template ID
      form.current,
      "B7O8K24EapaYM5GPX"
    ).then(
      () => toast.success("Message bhej diya! 🎉", { description: "Hum jald hi reply karenge.", duration: 4000 }),
      () => toast.error("Kuch gadbad ho gayi! 😅", { description: "Thodi der baad try karo.", duration: 4000 })
    );
  };

  return (
    <section id="collaborate" className="py-16 md:py-24 bg-card/30 border-y border-border">
      <div className="container max-w-5xl relative">

        {/* Heading */}
        {/* <h2
          className="text-center mb-4 "
          style={{
            fontSize: "clamp(28px, 4.5vw, 56px)",
            fontFamily: "Impact, sans-serif",
            letterSpacing: "0.06em",
            background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          CONTACT KARO 
        </h2> */}


        <h2
          className="font-display uppercase text-center mb-4 leading-tight"
          style={{ fontSize: "clamp(18px, 2.5vw, 36px)", fontWeight: 500, fontFamily: "Impact, sans-serif", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Contact Karo
        </h2>

        <p className="text-center text-muted-foreground font-body mb-4 md:mb-12 text-sm md:text-base">
          <span className="text-base uppercase tracking-widest font-body" style={{ color: "#ffffff" }}>Manoj Bajoayee</span>{" — "}
          <span className="text-primary font-semibold">
            Ae gadi start kar contact karna hai
          </span>
        </p>

        {/* Main Grid — 3 cols: left | center character | right form */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_190px_1fr] gap-4 items-start relative">

          {/* LEFT — hidden on mobile, shown on desktop */}
          <div className="hidden md:block space-y-6 md:pr-4">
            <p className="text-white font-body text-sm leading-relaxed">
              Koi complaint hai? Meme idea hai? Ya bas hello bolna hai?
              Likh do, hum padh lenge (probably).
            </p>

            {/* Contact Items */}
            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-2 py-1.5 rounded-xl"
                  style={{ background: "rgba(252,198,46,0.08)" }}
                >
                  <div
                    className="w-9 h-9 rounded flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(126,122,121,0.15)", border: "1.2px solid rgba(252,198,46,0.7)" }}
                  >
                    <item.icon size={16} color="rgb(252,198,46)" />
                  </div>
                  <p className="text-gray-300 font-body text-sm break-all">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{ background: "rgba(100,100,100,0.25)" }}
                >
                  <social.icon size={18} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* CENTER — character slot (empty, character is absolute) */}
          <div className="hidden md:block" />

          {/* Mobile paragraph above form */}
          <p className="md:hidden text-white font-body text-sm leading-relaxed mb-2 px-1">
            Koi complaint hai? Meme idea hai? Ya bas hello bolna hai?
            Likh do, hum padh lenge (probably).
          </p>

          {/* RIGHT — FORM */}
          <div className="relative w-full md:max-w-sm md:ml-auto rounded-2xl mt-0 md:mt-0">

            {/* 🔥 Taper Border (top thick → bottom thin) */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                padding: "3px",
                background: `
        linear-gradient(to bottom, 
          rgba(252,198,46,1) 0%, 
          rgba(252,198,46,0.8) 25%, 
          rgba(252,198,46,0.5) 60%, 
          rgba(252,198,46,0.2) 100%
        )
      `,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* ✅ ORIGINAL FORM (unchanged UI) */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative rounded-2xl p-3 space-y-2"
              style={{
                background: "rgba(252,198,46,0.07)",
              }}
            >
              <input
                type="text"
                placeholder="Tumhara naam"
                name="user_name"
                className="w-full rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-white outline-none"
                style={{ background: "rgba(192, 188, 187, 0.15)", border: "none" }}
              />

              <input
                type="email"
                placeholder="Email address"
                name="user_email"
                className="w-full rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-white outline-none"
                style={{ background: "rgba(192, 188, 187, 0.15)", border: "none" }}
              />

              <textarea
                placeholder="Kya bolna hai bolo..."
                rows={6}
                name="message"
                className="w-full rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-white outline-none resize-none"
                style={{ background: "rgba(192, 188, 187, 0.15)", border: "none" }}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full font-display text-xl px-4 py-1 rounded-xl text-gray-800"
                style={{
                  background: "rgb(252,198,46)",
                  fontFamily: "poppins",
                  fontSize: "clamp(18px, 1.8vw, 14px)",
                  letterSpacing: "0.02em",
                }}
              >
                Bhej Do
              </motion.button>
            </form>
          </div>

        </div>

        {/* Mobile-only: paragraph above form is handled via order, contact items below form */}
        <div className="md:hidden mt-6 space-y-3 px-1">
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-2 py-1.5 rounded-xl"
              style={{ background: "rgba(252,198,46,0.08)" }}
            >
              <div
                className="w-9 h-9 rounded flex-shrink-0 flex items-center justify-center"
                style={{ background: "rgba(126,122,121,0.15)", border: "1.2px solid rgba(252,198,46,0.7)" }}
              >
                <item.icon size={16} color="rgb(252,198,46)" />
              </div>
              <p className="text-gray-300 font-body text-sm break-all leading-snug">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Character — centered in middle column */}
        <div className="hidden md:block absolute z-10 pointer-events-none" style={{ bottom: "-95px", left: "50%", transform: "translateX(-50%)" }}>
          <motion.img
            src={contact_Ch}
            alt="character"
            className="w-64 md:w-80 object-contain"
            style={{ filter: "drop-shadow(0 0 80px rgba(252,198,46,0.1))" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}

          />
        </div>

      </div>
    </section>
  );
};

export default NewsletterSection;
