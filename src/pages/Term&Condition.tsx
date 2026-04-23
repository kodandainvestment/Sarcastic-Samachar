const TermsAndConditions = () => {
  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{ background: "#0e0d0b", color: "rgba(255,255,255,0.85)", fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h1
          className="text-center uppercase mb-2"
          style={{
            fontFamily: "Impact, sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            background: "linear-gradient(90deg, rgb(233,160,35), rgb(252,198,46), rgb(233,160,35))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Terms &amp; Conditions
        </h1>
        <p className="text-center text-sm mb-12" style={{ color: "rgba(252,198,46,0.6)" }}>
          Last Updated: 23/04/2026
        </p>

        <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          Welcome to <span style={{ color: "rgb(252,198,46)" }}>Sarcastic Samachar</span>. By accessing this website, you agree to the following terms:
        </p>

        {/* Sections */}
        {[
          {
            title: "1. Content Usage",
            points: [
              "All memes, content, and articles are for entertainment purposes only.",
              "You may share our content with proper credit.",
              "Reposting without credit or commercial use without permission is not allowed.",
            ],
          },
          {
            title: "2. Satire Disclaimer",
            points: [
              "This platform publishes satirical and humorous content.",
              "Any resemblance to real events or persons is purely coincidental (ya kabhi kabhi intentional 😏).",
            ],
          },
          {
            title: "3. User Submissions",
            intro: "If you submit memes or ideas:",
            points: [
              "You grant us permission to use, edit, and publish them.",
              "We are not obligated to give credit (but we usually do 😉).",
            ],
          },
          {
            title: "4. Collaborations & Promotions",
            points: [
              "Paid promotions and collaborations will be clearly disclosed where required.",
              "We reserve the right to accept or reject collaboration requests.",
            ],
          },
          {
            title: "5. Limitation of Liability",
            intro: "We are not responsible for:",
            points: [
              "Any misunderstanding of satirical content",
              "Any loss caused by reliance on our content",
            ],
          },
          {
            title: "6. Changes to Terms",
            points: [
              "We may update these terms anytime. Keep checking (ya phir ignore karo, but risk tumhara 😌).",
            ],
          },
        ].map((section) => (
          <div
            key={section.title}
            className="mb-8 rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(252,198,46,0.15)",
            }}
          >
            <h2
              className="mb-3 uppercase"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "clamp(15px, 1.5vw, 20px)",
                color: "rgb(252,198,46)",
                fontWeight: 400,
              }}
            >
              {section.title}
            </h2>
            {section.intro && (
              <p className="mb-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {section.intro}
              </p>
            )}
            <ul className="space-y-2">
              {section.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ color: "rgb(252,198,46)", marginTop: "2px" }}>•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div
          className="rounded-2xl p-6 text-center mt-10"
          style={{
            background: "rgba(252,198,46,0.05)",
            border: "1px solid rgba(252,198,46,0.3)",
          }}
        >
          <p className="text-lg mb-1" style={{ color: "rgb(252,198,46)", fontFamily: "Impact, sans-serif", fontWeight: 400, letterSpacing: "0.05em" }}>
            📩 Contact
          </p>
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
            For any legal or privacy concerns:
          </p>
          <a
            href="mailto:info@sarcasticsamachar.com"
            className="text-sm font-semibold transition-colors duration-200"
            style={{ color: "rgb(252,198,46)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(233,160,35)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(252,198,46)")}
          >
            info@sarcasticsamachar.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
