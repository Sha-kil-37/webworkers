import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shakil Ahmed",
    role: "Founder & Full-Stack Developer",
    image: "https://i.pravatar.cc/300?img=12",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Khan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/300?img=32",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "John Doe",
    role: "Frontend Engineer",
    image: "https://i.pravatar.cc/300?img=45",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export default function Test() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A passionate group of designers and developers building
            impactful digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={member.socials.linkedin}
                    className="text-white p-3 bg-white/20 rounded-full hover:bg-primary transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={member.socials.github}
                    className="text-white p-3 bg-white/20 rounded-full hover:bg-primary transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="text-white p-3 bg-white/20 rounded-full hover:bg-primary transition"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
