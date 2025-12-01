import Button from "./Button";
import Paragraph from "./Paragraph";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

//
export default function Contact() {
  //
  function handleClick(e) {
    // e.preventDefault();
    console.log(e);
  }

  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto block md:block lg:flex xl:flex gap-x-8 justify-between sm:block">
        <div className="">
          <h2 className="font-bold text-4xl">Contact Us</h2>
          <Paragraph className="max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            saepe cum culpa, earum quo dicta praesentium quam voluptates quae
            eum quibusdam et a sequi eaque alias itaque animi, beatae vel.
          </Paragraph>
          <div className="flex gap-x-4 mt-3 items-center">
            <HiOutlineMail />
            <span>sakildevmern@gmail.com</span>
          </div>
          <div className="flex gap-x-4 mt-3">
            <IoCallOutline />
            <span>+8801581049601</span>
          </div>
          <div className="flex gap-x-4 mt-3">
            <CiLocationOn />
            <span>Gazipur, Dhaka, Bangladesh</span>
          </div>
        </div>
        <form className="w-full">
          <div className="block">
            <label htmlFor="name">Name</label>
            <input
              required
              className="block w-full outline-none border rounded mt-3"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              className="block w-full outline-none border rounded mt-3"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              required
              className="block w-full outline-none border rounded mt-3"
              name="message"
              id="message"
            ></textarea>
          </div>
          <Button
            type="submit"
            onClick={(e) => handleClick(e)}
            className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded font-medium hover:bg-blue-400 transition-all duration-300 mt-5"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
}
