import { FaAward, FaTrophy, FaCheckCircle, FaStar } from "react-icons/fa";
import Paragraph from "./Paragraph";
//
export default function Credibility() {
  //
  const credentials = [
    {
      icon: FaAward,
      title: "Industry Certified",
      description: "ISO 9001 certified quality management and best practices",
    },
    {
      icon: FaTrophy,
      title: "Award-Winning",
      description: "Multiple awards for design excellence and innovation",
    },
    {
      icon: FaCheckCircle,
      title: "100% Verified",
      description: "All team members verified and background checked",
    },
    {
      icon: FaStar,
      title: "Top Rated",
      description: "Consistently 5-star rated by clients and partners",
    },
  ];
  //

  //

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <p>
          We deliver high-quality digital solutions across web development,
          UI/UX design, app development, digital marketing, SEO, business
          consultation, and custom software. Driven by innovation, transparency,
          and measurable results, we take a client-first approach to build
          solutions that strengthen your brand, improve performance, and support
          long-term growth
        </p>
        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-y-6">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div key={i} className="">
                {/* Icon Container */}
                <div className="h-30 w-full">
                  <Icon className="text-orange-200 h-full w-full" size={28} />
                </div>
                <h3 className="text-center text-4xl mt-3">{cred.title}</h3>
                <Paragraph className="text-center mt-2">
                  {cred.description}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
