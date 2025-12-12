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
      role: "Founder & CEO | Web Developer",
      description:
        "Shakil Ahmed leads our company with strong vision and dedication. As Founder & CEO, he focuses on building innovative digital solutions that help businesses grow. With expertise in Web Development, he creates fast, secure, and user-friendly websites that deliver real results and enhance the digital experience for every client.",
      image: shakil,
    },
    {
      name: "Rakibul Islam",
      role: "Digital Marketer",
      description:
        "Rakibul Islam is a skilled Digital Marketer who specializes in creating smart marketing strategies that drive growth. He focuses on Social Media Marketing, SEO, and content strategies that help businesses reach the right audience and achieve real results. His creative approach and data-driven mindset make every campaign more effective and impactful",
      image: rakibul,
    },
    {
      name: "Inni Akter",
      role: "UI/UX Designer",
      description:
        "Inni Akter is a creative UI/UX Designer who focuses on building clean, modern, and user-friendly interfaces. He designs intuitive user experiences that improve engagement and make digital products easy to use. With strong attention to detail and a passion for design, he brings ideas to life through thoughtful and effective visuals.",
      image: one,
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      description:
        "Alex Thompson is a dedicated Project Manager who ensures every project runs smoothly from start to finish. He coordinates tasks, manages timelines, and maintains clear communication with clients and team members. With strong leadership and organizational skills, he keeps projects on track and delivers results efficiently and precisely.",
      image: two,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold font-mono text-center">
          Meet Our Team
        </h2>
        <hr className="mt-3" />
        <Paragraph className="text-3xl font-bold mt-3 font-mono">
          We are a passionate and skilled team dedicated to creating innovative
          digital solutions. Rakibul Islam leads with strong digital expertise
          and strategic thinking, while Shakil Ahmed brings technical excellence
          and creative development skills. Together, we work with commitment,
          creativity, and teamwork to deliver meaningful results for every
          project.
        </Paragraph>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10">
          {team.map((member, i) => (
            <div key={i}>
              {/* Avatar */}
              <div className="overflow-hidden max-h-100 w-full bg-[#F5F7F8]">
                <img
                  className="h-full w-full object-center"
                  src={member.image}
                  alt={member.role}
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold font-mono">
                  {member.name}
                </h3>
                <h3 className="font-medium font-mono">
                  {member.role}
                </h3>
                <p className="font-mono mt-2">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
