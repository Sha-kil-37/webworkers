import { FaDiscord } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import Paragraph from "./Paragraph";

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
        linkedin: "https://www.linkedin.com/in/rakibul-islam-4610953a5/",
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
      className="xl:py-10 lg:py-10"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto">
        <div className="xl:grid xl:grid-cols-2 xl:gap-12 lg:grid lg:grid-cols-2 lg:gap-10">
          <aside className="md:col-span-1 xl:border-r border-[#F5F5F7]">
            <div className="xl:sticky xl:top-16 lg:sticky lg:top-16">
              <h2 className="xl:tracking-wide text-3xl font-bold font-primary lg:text-3xl lg:tracking-wide">
                Our <span className="text-[#0076DF]">Professional</span>{" "}
                {""}
                Team Members
              </h2>
              <Paragraph className="xl:w-lg mt-2 font-medium tracking-wide font-primary lg:mt-2 lg:tracking-wide">
                We are a multidisciplinary digital team driven by innovation and
                results. Our expertise spans web and app development, UI/UX
                design, digital marketing, SEO, and social media
                marketing—everything your business needs to grow online. By
                blending strategic thinking, custom software development,
                AI-powered solutions, and business consultation, we turn ideas
                into impactful digital products that connect, convert, and
                scale.
              </Paragraph>
            </div>
          </aside>
          {/* Right scrollable column */}
          <main className="">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden xl:mb-4 shadow lg:mb-4"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="xl:w-full xl:h-100 object-cover group-hover:scale-105 transition duration-200 ease-in-out lg:w-full lg:h-100"
                  />
                </div>

                {/* Content */}
                <div className="xl:p-6 flex justify-between lg:p-4">
                  <div>
                    <h3 className="font-medium text-xl font-primary tracking-wide">{member.name}</h3>
                    <Paragraph className="font-primary tracking-wide">{member.role}</Paragraph>
                  </div>
                  <div className="flex gap-x-3">
                    <Link target="_blank" to={member.socials.linkedin}>
                      <FaLinkedinIn
                        className="text-xl text-[#0072B1]"
                        title="LinkedinIn"
                      />
                    </Link>
                    <Link target="_blank" to={member.socials.discord}>
                      <FaDiscord
                        className="text-xl text-[#7289da]"
                        title="Discord"
                      />
                    </Link>
                    <Link target="_blank" to={member.socials.facebook}>
                      <FaFacebook
                        className="text-xl text-[#1877F2]"
                        title="facebook"
                      />
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
