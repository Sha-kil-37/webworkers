import Marquee from "react-fast-marquee";
import Paragraph from "./Paragraph";
import shakil from "../assets/shakil.png";
import rakibul from "../assets/rakibul.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
//
export default function Testimonials() {
  //
  const testimonialsData = [
    {
      id: 1,
      name: "John Carter",
      role: "CEO, NovaTech Solutions",
      review:
        "Working with this team was an outstanding experience. They delivered our website ahead of schedule with beautiful UI and perfect responsiveness. Highly recommended!",
      image: one,
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Johnson",
      role: "Founder, Craftsy Studio",
      review:
        "Very professional and easy to work with. They understood our requirements and delivered a fast, clean, modern web app for our small business.",
      image: two,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Marketing Manager, BrightWave Agency",
      review:
        "Amazing work! The animations, performance, and overall user experience exceeded our expectations. Perfect for growing our digital presence.",
      image: shakil,
      rating: 5,
    },
    {
      id: 4,
      name: "Sophia Martinez",
      role: "Owner, Bloom Boutique",
      review:
        "I loved the smooth communication and quick revisions. The final website looks premium and loads very fast. Great job!",
      image: rakibul,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Daniel Green",
      role: "Product Lead, PixelDrive",
      review:
        "Top-notch development! They built a stunning dashboard for us using MERN stack. Clean code and superb attention to detail.",
      image: one,
      rating: 5,
    },
  ];
  //
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto">
        <div className=" text-center">
          <h2 className="text-4xl font-bold">What Our Clients Say !</h2>
          <Paragraph className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            earum consectetur consequuntur illum voluptatem nobis quod
            perspiciatis expedita quisquam corporis.
          </Paragraph>
        </div>
        <Marquee pauseOnHover={true} direction="left">
          <div className="flex justify-between items-center gap-x-4 mt-5">
            {testimonialsData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="h-60 w-100 overflow-hidden rounded-2xl p-8 bg-[#F5F7F8] cursor-pointer relative"
                >
                  <Paragraph>{item.review}</Paragraph>
                  <Paragraph>{item.name}</Paragraph>
                  <Paragraph>{item.role}</Paragraph>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
