import { Instagram, Facebook, Youtube, Heart } from "lucide-react";
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

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="font-display text-lg text-foreground mb-4 invisible">{group.title}</p>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
  );
};

export default Footer;
