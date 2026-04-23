import MemeCard from "./MemeCard";

const memes = [
  { title: "Jab boss bole 'we are family' but salary na de", category: "Office Humor", emoji: "🤡", likes: "4.2K", comments: "312" },
  { title: "Monday motivation? Bhai Monday ko hi motivation chahiye", category: "Relatable", emoji: "💀", likes: "6.9K", comments: "420" },
  { title: "Sharma ji ka beta vs Me — an eternal saga", category: "Desi Memes", emoji: "😤", likes: "12K", comments: "890" },
  { title: "AI will replace developers... developers after 5pm:", category: "Tech Memes", emoji: "🤖", likes: "8.1K", comments: "567" },
  { title: "Ghar pe khaana nahi bana, Swiggy: allow me to introduce myself", category: "Food", emoji: "🍕", likes: "3.5K", comments: "234" },
  { title: "Baarish mein bike chalana = free swimming lesson", category: "Monsoon Special", emoji: "🌧️", likes: "5.7K", comments: "345" },
];

const TrendingSection = () => {
  return (
    <section id="memes" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gradient-gold mb-3">
            🔥 Trending Memes
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Yeh memes dekhke hasoge ya royoge — guarantee nahi hai
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {memes.map((meme, i) => (
            <div key={i} className="min-w-[280px] max-w-[280px]">
              <MemeCard {...meme} delay={i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
