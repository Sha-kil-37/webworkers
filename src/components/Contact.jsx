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
            We’d love to hear from you! Whether you have questions, need
            support, or want to start a project, our team is ready to help.
            Reach out to us via email, phone, or our online form, and we’ll
            respond promptly to discuss how we can bring your ideas to life.
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
        <form className="w-xl">
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
             className="cursor-pointer px-4 py-2 bg-[var(--secondary-color)] text-[var(--white-color)] rounded-xl font-medium hover:bg-[var(--primary-color)] transition-colors duration-300 hover:text-[var(--secondary-color)] shadow-sm hover:shadow-md mt-10"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
}
