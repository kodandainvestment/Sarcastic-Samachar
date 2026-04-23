import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";

const links = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
