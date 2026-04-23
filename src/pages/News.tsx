import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, Eye, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const newsArticles = [
  { id: 1, headline: "BREAKING: Chai ki dukaan pe GDP discussion — economists shooketh", time: "2 min ago", tag: "Economy", views: "12K", emoji: "☕", excerpt: "Local chai tapri pe uncle ne aise GDP explain kiya ki RBI governor ne apna resignation letter type karna shuru kar diya." },
  { id: 2, headline: "Man googles 'how to adult' for the 47th time this week", time: "15 min ago", tag: "Lifestyle", views: "8.5K", emoji: "🧑‍💻", excerpt: "25 saal ka banda abhi bhi samajh nahi paya ki electricity bill kaise bharte hain. Google ne uski search history dekh ke therapy suggest kiya." },
  { id: 3, headline: "Intern accidentally deploys to production, gets promoted to CTO", time: "1 hr ago", tag: "Tech", views: "45K", emoji: "💻", excerpt: "Company ka pura system crash ho gaya lekin CEO itna impress hua ki usne intern ko direct CTO bana diya. 'At least usne kuch toh kiya,' CEO ne bola." },
  { id: 4, headline: "Aunty ji asks 'shaadi kab' — scientists declare it a natural disaster", time: "3 hrs ago", tag: "Society", views: "23K", emoji: "👰", excerpt: "UNESCO ne officially 'Aunty ki shaadi wali inquiry' ko natural disaster ghoshit kar diya. Relief fund announced." },
  { id: 5, headline: "Student discovers ctrl+Z doesn't work in real life, devastated", time: "5 hrs ago", tag: "Education", views: "18K", emoji: "📚", excerpt: "Engineering student ne real life mein undo karne ki koshish ki. Results: 3 broken relationships aur 1 failed exam." },
  { id: 6, headline: "IPL match mein umpire ne apni team ko out diya — plot twist of the century", time: "8 hrs ago", tag: "Sports", views: "67K", emoji: "🏏", excerpt: "Umpire sahab itne honest nikle ki apni favourite team ko hi out de diya. Social media pe hero ban gaye, ghar pe kutta bhi nahi bola." },
  { id: 7, headline: "Zomato delivery guy arrives before you finish ordering", time: "12 hrs ago", tag: "Tech", views: "34K", emoji: "🛵", excerpt: "AI itni advanced ho gayi ki Zomato ne predictive delivery shuru kar diya. Order se pehle khana aa jata hai." },
  { id: 8, headline: "Government announces holiday on Monday — nation's productivity unchanged", time: "1 day ago", tag: "Politics", views: "89K", emoji: "🏛️", excerpt: "Studies show ki Monday holiday ya no holiday, productivity same rehti hai. Scientists shocked, employees not so much." },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-gradient-gold mb-3">📰 Sarcastic News</h1>
          <p className="text-muted-foreground text-lg font-body">
            Real news is boring. Hamari news pehle hasayegi, phir sochne pe majboor karegi.
          </p>
        </div>

        {/* Featured article */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-card border border-border rounded-2xl overflow-hidden mb-8 card-hover"
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-secondary flex items-center justify-center text-8xl p-12">
              {newsArticles[0].emoji}
            </div>
            <div className="md:w-2/3 p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-destructive/20 text-destructive text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  🔴 BREAKING
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {newsArticles[0].time}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground">{newsArticles[0].headline}</h2>
              <p className="text-muted-foreground font-body">{newsArticles[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Eye size={14} /> {newsArticles[0].views} views</span>
                <span className="flex items-center gap-1"><Tag size={14} /> {newsArticles[0].tag}</span>
                <button className="flex items-center gap-1 hover:text-primary transition-colors"><Share2 size={14} /> Share</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {newsArticles.slice(1).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 card-hover group cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center text-3xl shrink-0">
                  {article.emoji}
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-0.5 rounded-full">{article.tag}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={10} /> {article.time}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                    {article.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                    <span className="flex items-center gap-1"><Eye size={12} /> {article.views}</span>
                    <span className="flex items-center gap-1 ml-auto group-hover:text-primary transition-colors">Read more <ArrowRight size={12} /></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
