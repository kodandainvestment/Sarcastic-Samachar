import { useState } from "react";
import { Instagram, Facebook, Youtube, Heart, X } from "lucide-react";
import logo from "@/assets/Meme Logo(square).png";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "hero" },
      { label: "Brands", href: "brands" },
      { label: "Services", href: "services" },
      { label: "Viral Memes", href: "memes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "about" },
      { label: "Contact", href: "collaborate" },
      { label: "Testimonials", href: "testimonials" },
      { label: "Process", href: "process" },
    ],
  },
  {
    title: "Legal",
    links: [],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/sarcastic_samachar", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/sarcastic.samachar.k", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@Sarcastic_Samachar", label: "YouTube" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const termsSections = [
  { title: "1. Content Usage", points: ["All memes, content, and articles are for entertainment purposes only.", "You may share our content with proper credit.", "Reposting without credit or commercial use without permission is not allowed."] },
  { title: "2. Satire Disclaimer", points: ["This platform publishes satirical and humorous content.", "Any resemblance to real events or persons is purely coincidental (ya kabhi kabhi intentional 😏)."] },
  { title: "3. User Submissions", intro: "If you submit memes or ideas:", points: ["You grant us permission to use, edit, and publish them.", "We are not obligated to give credit (but we usually do 😉)."] },
  { title: "4. Collaborations & Promotions", points: ["Paid promotions and collaborations will be clearly disclosed where required.", "We reserve the right to accept or reject collaboration requests."] },
  { title: "5. Limitation of Liability", intro: "We are not responsible for:", points: ["Any misunderstanding of satirical content", "Any loss caused by reliance on our content"] },
  { title: "6. Changes to Terms", points: ["We may update these terms anytime. Keep checking (ya phir ignore karo, but risk tumhara 😌)."] },
];

const privacySections = [
  { title: "1. Information We Collect", points: ["Name (if you fill contact form)", "Email address", "Message content"] },
  { title: "2. How We Use Your Data", points: ["To respond to your queries", "For collaboration communication", "To improve our content and services"] },
  { title: "3. Data Protection", points: ["Your data is सुरक्षित (safe hai, tension mat lo)", "We do not sell your data to third parties"] },
  { title: "4. Cookies", points: ["We may use cookies to improve user experience", "You can disable cookies in your browser settings"] },
  { title: "5. Third-Party Links", points: ["Our site may contain links to external platforms (Instagram, etc.)", "We are not responsible for their privacy practices"] },
  { title: "6. Your Rights", points: ["You can request deletion of your data anytime", "Just contact us at: info@sarcasticsamachar.com"] },
  { title: "7. Updates to Policy", points: ["We may update this policy occasionally"] },
];

const Modal = ({ title, subtitle, sections, tagline, onClose }: { title: string; subtitle?: string; sections: any[]; tagline?: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)" }}
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8"
      style={{ background: "#0e0d0b", border: "1px solid rgba(252,198,46,0.25)" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 rounded-full transition-colors"
        style={{ color: "rgba(252,198,46,0.7)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(252,198,46)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(252,198,46,0.7)")}
      >
        <X size={20} />
      </button>

      {/* Header */}
      <h2
        className="text-center uppercase mb-1"
        style={{ fontFamily: "Impact, sans-serif", fontSize: "clamp(22px, 3vw, 36px)", background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-center text-xs mb-6" style={{ color: "rgba(252,198,46,0.5)" }}>{subtitle}</p>}

      {/* Sections */}
      {sections.map((s) => (
        <div key={s.title} className="mb-5 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(252,198,46,0.1)" }}>
          <h3 className="mb-2 uppercase" style={{ fontFamily: "Impact, sans-serif", fontSize: "15px", color: "rgb(252,198,46)", fontWeight: 400 }}>{s.title}</h3>
          {s.intro && <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.intro}</p>}
          <ul className="space-y-1">
            {s.points.map((p: string, i: number) => (
              <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                <span style={{ color: "rgb(252,198,46)" }}>•</span>{p}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Contact */}
      <div className="rounded-xl p-4 text-center mt-4" style={{ background: "rgba(252,198,46,0.05)", border: "1px solid rgba(252,198,46,0.2)" }}>
        <p className="text-sm mb-1" style={{ color: "rgb(252,198,46)", fontFamily: "Impact, sans-serif", fontWeight: 400 }}>📩 Contact</p>
        <a href="mailto:info@sarcasticsamachar.com" className="text-xs" style={{ color: "rgba(252,198,46,0.8)" }}>info@sarcasticsamachar.com</a>
      </div>

      {tagline && <p className="text-center mt-4 text-xs italic" style={{ color: "rgba(252,198,46,0.6)" }}>{tagline}</p>}
    </div>
  </div>
);

const Footer = () => {
  const [modal, setModal] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <footer className="border-t border-border bg-card/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Sarcastic Samachar" className="h-12 w-12 rounded-full" />
                <span className="font-display text-2xl text-gradient-gold">Sarcastic Samachar</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm font-body">
                India ka #1 satirical meme portal. Hum kisi ki nahi sunte, bas memes banate hain.
              </p>
              <p className="text-sm font-body" style={{ fontFamily: "'FirstBunny', cursive", color: "rgb(249,198,50)" }}>
                Memes banate hain… aur kabhi kabhi brands ko famous bhi 😌
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links — 3 col on mobile, in grid on desktop */}
            <div className="grid grid-cols-3 md:contents gap-8">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <ul className="space-y-2">
                    {group.title === "Legal" ? (
                      <>
                        <li><button onClick={() => setModal("terms")} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Terms & Conditions</button></li>
                        <li><button onClick={() => setModal("privacy")} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer text-left">Privacy Policy</button></li>
                      </>
                    ) : (
                      group.links.map((link) => (
                        <li key={link.label}>
                          <button onClick={() => scrollTo(link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{link.label}</button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© 2026 Sarcastic Samachar. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart size={12} className="text-destructive" /> and lots of Meme
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modal === "terms" && (
        <Modal
          title="Terms & Conditions"
          subtitle="Last Updated: 23/04/2026"
          sections={termsSections}
          onClose={() => setModal(null)}
        />
      )}
      {modal === "privacy" && (
        <Modal
          title="Privacy Policy"
          subtitle="Last Updated: 23/04/2026"
          sections={privacySections}
          tagline='"Hum memes banate hain… data nahi bechte 😌"'
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
};

export default Footer;
