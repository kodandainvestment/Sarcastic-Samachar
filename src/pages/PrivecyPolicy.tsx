const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p className="text-center text-sm mb-6" style={{ color: "rgba(252,198,46,0.6)" }}>
          Last Updated: 23/04/2026
        </p>
        <p className="text-center mb-12 text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
          We respect your privacy <span style={{ color: "rgb(252,198,46)" }}>(haan sach mein)</span>.
        </p>

        {/* Sections */}
        {[
          {
            title: "1. Information We Collect",
            points: [
              "Name (if you fill contact form)",
              "Email address",
              "Message content",
            ],
          },
          {
            title: "2. How We Use Your Data",
            points: [
              "To respond to your queries",
              "For collaboration communication",
              "To improve our content and services",
            ],
          },
          {
            title: "3. Data Protection",
            points: [
              "Your data is सुरक्षित (safe hai, tension mat lo)",
              "We do not sell your data to third parties",
            ],
          },
          {
            title: "4. Cookies",
            points: [
              "We may use cookies to improve user experience",
              "You can disable cookies in your browser settings",
            ],
          },
          {
            title: "5. Third-Party Links",
            points: [
              "Our site may contain links to external platforms (Instagram, etc.)",
              "We are not responsible for their privacy practices",
            ],
          },
          {
            title: "6. Your Rights",
            points: [
              "You can request deletion of your data anytime",
              "Just contact us at: info@sarcasticsamachar.com",
            ],
          },
          {
            title: "7. Updates to Policy",
            points: [
              "We may update this policy occasionally",
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

        {/* Tagline */}
        <p
          className="text-center mt-10 text-base italic"
          style={{ color: "rgba(252,198,46,0.7)", fontFamily: "'Poppins', sans-serif" }}
        >
          "Hum memes banate hain… data nahi bechte 😌"
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
