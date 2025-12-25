import shakil from "../assets/shakil.png";
import rakibul from "../assets/rakibul.png";
import inni from "../assets/inni.png";
import alex from "../assets/alex.png";
import Paragraph from "./Paragraph";
export default function OurTeam() {
  //
  const teams = [
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
      image: inni,
    },
    {
      name: "Alex Thompson",
      role: "Project Manager",
      description:
        "Alex Thompson is a dedicated Project Manager who ensures every project runs smoothly from start to finish. He coordinates tasks, manages timelines, and maintains clear communication with clients and team members. With strong leadership and organizational skills, he keeps projects on track and delivers results efficiently and precisely.",
      image: alex,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <aside className="md:col-span-1 border-r border-gray-200">
            <div className="sticky top-0">
              <h2 className="tracking-wide text-6xl font-bold w-xl">
                Let's get to know our team members.
              </h2>
            </div>
          </aside>

          {/* Right scrollable column */}
          <main className="md:col-span-1">
            {teams.map((team, i) => {
              return (
                <div key={i} className="">
                  <div className="w-full max-h-70 overflow-hidden ">
                    <img
                      className="h-full w-full object-cover"
                      src={team.image}
                      alt={team.image}
                    />
                  </div>
                  <div className="p-4">
                    <Paragraph className="font-medium text-xl">{team.name}</Paragraph>
                     <Paragraph className="text-lg">{team.role}</Paragraph>
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
}
