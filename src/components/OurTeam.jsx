import { FaDiscord } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";

//
export default function OurTeam() {
  //
  const teamMembers = [
    {
      name: "Shakil Ahmed",
      role: "Founder & Full-Stack Developer",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767114313/agency/team/shakil_ta6xay.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/shakil-ahmed-aba241317/",
        discord: "https://discord.gg/1420788964641603706",
        facebook: "https://www.facebook.com/shak.sakil.96",
      },
    },
    {
      name: "NH Anik",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=32",
      socials: {
        linkedin: "https://www.linkedin.com/in/nh-anik/",
        discord: "#",
        facebook: "https://www.facebook.com/NHANIK11",
      },
    },
    {
      name: "Rakibul Islam",
      role: "digital marketer specialist",
      image:
        "https://res.cloudinary.com/dmbkgbtqj/image/upload/v1767114313/agency/team/rakibul_qighom.png",
      socials: {
        linkedin: "#",
        discord: "#",
        facebook: "https://www.facebook.com/share/16cJQXJZwV/",
      },
    },
    {
      name: "Inni Akter",
      role: "It Specalist",
      image: "https://i.pravatar.cc/300?img=45",
      socials: {
        linkedin: "#",
        discord: "#",
        facebook: "#",
      },
    },
  ];
  //
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <aside className="md:col-span-1 xl:border-r border-[#F5F5F7]">
            <div className="sticky top-0">
              <h2 className="tracking-wide text-6xl font-bold w-xl text-[#082032]">
                Let's Get To Know Our Professional Team Members.
              </h2>
            </div>
          </aside>
          {/* Right scrollable column */}
          <main className="md:col-span-1">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group  rounded-2xl overflow-hidden my-4"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-130 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex justify-between bg-[#F5F5F7]">
                  <div>
                    <h3 className="font-medium text-[#082032] text-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#082032]">{member.role}</p>
                  </div>
                  <div className="flex gap-x-3">
                    <Link target="_blank" to={member.socials.linkedin}>
                      <FaLinkedinIn className="text-xl text-[#082032]" title="LinkedinIn" />
                    </Link>
                    <Link target="_blank" to={member.socials.discord}>
                      <FaDiscord className="text-xl text-[#082032]" title="Discord" />
                    </Link>
                    <Link target="_blank" to={member.socials.facebook}>
                      <FaFacebook className="text-xl text-[#082032]" title="facebook" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </motion.section>
  );
}
