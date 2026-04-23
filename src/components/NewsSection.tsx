import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const news = [
  {
    headline: "BREAKING: Chai ki dukaan pe GDP discussion — economists shooketh",
    time: "2 min ago",
    tag: "Economy",
  },
  {
    headline: "Man googles 'how to adult' for the 47th time this week",
    time: "15 min ago",
    tag: "Lifestyle",
  },
  {
    headline: "Intern accidentally deploys to production, gets promoted to CTO",
    time: "1 hr ago",
    tag: "Tech",
  },
  {
    headline: "Aunty ji asks 'shaadi kab' — scientists declare it a natural disaster",
    time: "3 hrs ago",
    tag: "Society",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 md:py-24 bg-card/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gradient-gold mb-3">
            📰 Sarcastic Headlines
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Real news is boring. Hamari news pehle hasayegi, phir rulayegi.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-5 flex items-center gap-4 card-hover cursor-pointer group"
            >
              <span className="hidden sm:inline-block text-xs font-semibold bg-primary/20 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                {item.tag}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg text-foreground truncate group-hover:text-primary transition-colors">
                  {item.headline}
                </h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock size={12} /> {item.time}
                </span>
              </div>
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
