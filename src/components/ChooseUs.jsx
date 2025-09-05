import  { useEffect, useState } from "react";

const features = [
  {
    title: "Creative & Result-Driven Approach",
    desc: "We craft experiences that match your audience and deliver measurable results.",
  },
  {
    title: "Experienced & Skilled Team",
    desc: "Designers, developers and marketers who bring strategic vision to execution.",
  },
  {
    title: "Customized Solutions for Your Business",
    desc: "We create tailored strategies and designs that match brand identity and goals.",
  },
  {
    title: "End-to-End Services",
    desc: "From idea to launch — development, UX/UI design, and digital marketing under one roof.",
  },
  {
    title: "Transparent & Client-Focused",
    desc: "Our process is transparent with regular updates and a focus on delivering exactly what you need.",
  },
  {
    title: "Long-Term Growth Partner",
    desc: "We build lasting relationships; our goal is to help your business grow sustainably.",
  },
  {
    title: "Performance Driven",
    desc: "Data-informed design and optimization to improve conversions and engagement.",
  },
  {
    title: "Scalable Solutions",
    desc: "Architectures and strategies that scale as your product and audience grow.",
  },
];

function Icon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#111827"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M8 12h8M8 16h8M8 8h8"
        stroke="#111827"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ChooseUs() {
  const [cols, setCols] = useState(getCols());
// Update cols on window resize
  useEffect(() => {
    function onResize() {
      setCols(getCols());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, []);

  const styles = {
    grid: {
      marginTop: "40px",
      display: "grid",
      gap: 20,
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      alignItems: "start",
    },
    card: {
      background: "#f3f4f6",
      borderRadius: 10,
      padding: 16,
      boxShadow: "0 1px 0 rgba(0,0,0,0.03) inset",
      textAlign: "left",
      minHeight: 120,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    icon: {
      width: 44,
      height: 44,
      borderRadius: 9999,
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 6px rgba(16,24,40,0.06)",
      marginBottom: 6,
    },
    cardTitle: {
      fontWeight: 600,
      fontSize: 15,
      margin: 0,
    },
    cardDesc: {
      color: "#4b5563",
      fontSize: 13,
      marginTop: 4,
    },
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center">
          Why Choose Us
        </h2>
        <p className="mt-5 max-w-[700px] mx-auto text-center text-lg font-normal">
          WebWorkers Digital Agency is your trusted partner for digital growth.
          We are a team of creative professionals delivering innovative web
          development, user-focused design, and result-driven marketing
          solutions.
        </p>
        <div style={styles.grid} role="list">
          {features.map((f, i) => (
            <article style={styles.card} key={i} role="listitem">
              <div style={styles.icon} aria-hidden>
                <Icon />
              </div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function getCols() {
  if (typeof window === "undefined") return 4;
  const w = window.innerWidth;
  if (w <= 640) return 1; // mobile
  if (w <= 1024) return 2; // tablet
  return 4; // desktop
}
