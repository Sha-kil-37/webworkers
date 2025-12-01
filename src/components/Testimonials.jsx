import Marquee from "react-fast-marquee";
import Paragraph from "./Paragraph";
import reviewOne from "../assets/reviewOne.png";
import reviewTwo from "../assets/reviewTwo.png";
import reviewThree from "../assets/reviewThree.png";
import reviewFour from "../assets/reviewFour.png";
import reviewFive from "../assets/reviewFive.png";
export default function Testimonials() {
  //
  const testimonialsData = [
    {
      id: 1,
      name: "John Carter",
      role: "CEO, NovaTech Solutions",
      review:
        "Working with this team was an outstanding experience. They delivered our website ahead of schedule with beautiful UI and perfect responsiveness. Highly recommended!",
      image: reviewOne,
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Johnson",
      role: "Founder, Craftsy Studio",
      review:
        "Very professional and easy to work with. They understood our requirements and delivered a fast, clean, modern web app for our small business.",
      image: reviewTwo,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Marketing Manager, BrightWave Agency",
      review:
        "Amazing work! The animations, performance, and overall user experience exceeded our expectations. Perfect for growing our digital presence.",
      image: reviewThree,
      rating: 5,
    },
    {
      id: 4,
      name: "Sophia Martinez",
      role: "Owner, Bloom Boutique",
      review:
        "I loved the smooth communication and quick revisions. The final website looks premium and loads very fast. Great job!",
      image: reviewFour,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Daniel Green",
      role: "Product Lead, PixelDrive",
      review:
        "Top-notch development! They built a stunning dashboard for us using MERN stack. Clean code and superb attention to detail.",
      image: reviewFive,
      rating: 5,
    },
  ];
  //
  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <h2 className="text-4xl font-bold">What Our Clients Say ?</h2>
          <Paragraph className="max-w-xl">
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
                  className="rounded-xl p-8 bg-[#F5F7F8] cursor-pointer relative max-w-100"
                >
                  <div className="max-h-20 max-w-20 overflow-hidden rounded-full mx-auto">
                    <img
                      className="h-full w-full object-cover"
                      src={item.image}
                      alt={item.image}
                    />
                  </div>
                  <Paragraph className="mt-5 font-semibold">
                    {item.review}
                  </Paragraph>
                  <div className="flex justify-between ">
                    <div>
                      <Paragraph className="mt-5 font-medium text-[#FF6363]">
                        {item.name}
                      </Paragraph>
                      <Paragraph className="">{item.role}</Paragraph>
                    </div>
                    <Paragraph className="font-bold text-[#FF6363]">{item.rating}</Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
