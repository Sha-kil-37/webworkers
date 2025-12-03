import Marquee from "react-fast-marquee";
import Paragraph from "./Paragraph";
import { RxAvatar } from "react-icons/rx";

export default function Testimonials() {
  //
  const testimonialsData = [
    {
      name: "John Carter",
      role: "CEO, NovaTech Solutions",
      review:
        "Working with this agency completely transformed our online presence. The website they delivered is fast, modern, and highly engaging. Their attention to detail and commitment to quality truly set them apart.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Founder, Craftsy Studio",
      review:
        "The UI/UX design exceeded our expectations. Every interaction feels smooth and user-friendly. Our customers are already noticing the improvement, and our conversion rate has increased significantly.",

      rating: 4.5,
    },
    {
      name: "Michael Smith",
      role: "Marketing Manager",
      review:
        "The team handled our digital marketing campaigns with absolute professionalism. Within weeks, we saw a measurable boost in traffic, leads, and brand visibility. Their strategy was well-planned and results-driven.",

      rating: 5,
    },
    {
      name: "Sophia Martinez",
      role: "Owner, Bloom Boutique",
      review:
        "Our mobile app was built exactly how we envisioned it—clean design, strong performance, and seamless functionality. The development process was transparent and efficient from start to finish.",

      rating: 4.8,
    },
    {
      name: "Daniel Green",
      role: "Product Lead, PixelDrive",
      review:
        "They helped us implement AI features into our platform, and the results were extraordinary. Automation and intelligent recommendations improved our efficiency and customer engagement drastically.",

      rating: 5,
    },
  ];
  //
  return (
    <section className="py-20 bg-[var(--white-color)]">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-[var(--black-color)]">
            What Our Clients Say ?
          </h2>
          <Paragraph className="max-w-xl text-[var(--black-color)]">
            Our clients trust us to transform their ideas into high-performing
            digital experiences. From modern websites and intuitive user
            interfaces to effective marketing strategies and advanced AI-powered
            solutions, we consistently deliver results that align with our
            clients’ goals. Explore what our partners say about working with us
            and how our services have helped them grow, scale, and succeed in
            the digital space
          </Paragraph>
        </div>
        <Marquee speed={25} delay={0} pauseOnHover={true} direction="left">
          <div className="flex justify-between items-center gap-x-6 mt-5">
            {testimonialsData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="rounded-xl bg-[var(--primary-color)] cursor-pointer relative max-w-80 p-6"
                >
                  <div className="flex justify-between">
                    <div className="overflow-hidden rounded-full min-h-18 min-w-18">
                      <RxAvatar className="h-full w-full text-[var(--black-color)]" />
                    </div>
                    <div>
                      <Paragraph className="text-[var(--black-color)]">
                        {item.name}
                      </Paragraph>
                      <Paragraph className="">{item.role}</Paragraph>
                      <Paragraph className="text-[var(--black-color)]">
                         Ratting : <span>{item.rating}</span>
                      </Paragraph>
                    </div>
                  </div>

                  <Paragraph className="text-[var(--black-color)] mt-3">
                    {item.review}
                  </Paragraph>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
