import Paragraph from "./Paragraph";
import shakil from "../assets/shakil.png";
import rakibul from "../assets/rakibul.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import { Link } from "react-router";
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <Paragraph className="max-w-xl">
          Our diverse team of experts is dedicated to delivering innovative
          solutions and exceptional service. Our diverse team of experts is
          dedicated to delivering innovative solutions and exceptional service.
          Our diverse team of experts is dedicated to delivering innovative
          solutions and exceptional service.
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {team.map((member, i) => (
            <div key={i} className="">
              {/* Avatar */}
              <div className="overflow-hidden h-40 w-full">
                <img
                  className="h-full w-full object-cover"
                  src={member.image}
                  alt={member.role}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <Link className="text-xl font-semibold mb-1">
                  {member.name}
                </Link>
                <h5 className="mb-3">{member.role}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
