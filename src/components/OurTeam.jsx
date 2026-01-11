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
      className="xl:py-20 lg:py-16 md:py-16 sm:py-8 py-7"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:mx-auto md:px-8 sm:px-8 sm:mx-auto px-4">
        <div className="xl:grid xl:grid-cols-2 xl:gap-12 lg:grid lg:grid-cols-2 lg:gap-x-10 md:gap-10 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-x-4">
          <aside className="md:col-span-1 xl:border-r lg:border-r md:border-r border-[#F5F5F7] sm:border-r">
            <div className="2xl:sticky 2xl:top-18 xl:sticky xl:top-18 lg:sticky lg:top-18 md:top-18 md:sticky sm:top-18 sm:sticky">
              <h2 className="tracking-wide font-bold font-primary 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl mx-auto text-2xl">
                Our <span className="text-[#0076DF]">Professional</span>
                
                Team Members
              </h2>
              <Paragraph className="font-primary w-full 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left  mt-5 tracking-wide">
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
          <main className="2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  mt-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden xl:mb-4 shadow lg:mb-4 md:mb-4 sm:mb-4 mb-3 block"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="xl:w-full xl:h-100 object-cover group-hover:scale-105 transition duration-200 ease-in-out lg:w-full lg:h-100 md:w-full md:h-100 sm:w-full sm:h-100 h-100 w-full"
                  />
                </div>

                {/* Content */}
                <div className="xl:p-6 flex justify-between lg:p-4 md:p-4 sm:p-4 p-2">
                  <div>
                    <h3 className="font-bold font-primary tracking-wide">{member.name}</h3>
                    <Paragraph className="font-primary">{member.role}</Paragraph>
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
