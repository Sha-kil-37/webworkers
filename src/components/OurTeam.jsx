import Paragraph from "./Paragraph";
import shakil from "../assets/shakil.png";
import rakibul from "../assets/rakibul.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
export default function OurTeam() {
  //

  const team = [
    {
      name: "Shakil Ahmed",
      role: "Founder & CEO",
      description: "5+ years in web development and business development",
      image: shakil,
    },
    {
      name: "Rakibul Islam",
      role: "Digital Marketor",
      description: "Expert in full-stack development and cloud architecture",
      image: rakibul,
    },
    {
      name: "Mickel Jonson",
      role: "UIUX Designer",
      description: "Award-winning marketing with passion for user experience",
      image: one,
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      description: "Specializes in agile methodologies and team leadership",
      image: two,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dynamic Team
          </span>
        </h2>
        <Paragraph>
          Our diverse team of experts is dedicated to delivering innovative
          solutions and exceptional service. Our diverse team of experts is
          dedicated to delivering innovative solutions and exceptional service.
          Our diverse team of experts is dedicated to delivering innovative
          solutions and exceptional service.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
          {team.map((member, i) => (
            <div
              key={i}
              className="group overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="overflow-hidden h-40 w-full bg-[#F9F8F6]">
                <img
                  className="h-full w-full object-fit"
                  src={member.image}
                  alt={member.role}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <h5 className="text-blue-600 font-medium text-sm mb-3">
                  {member.role}
                </h5>
                <Paragraph>{member.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
