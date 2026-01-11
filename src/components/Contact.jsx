import { useState } from "react";
import { motion } from "motion/react";
import Paragraph from "./Paragraph";
import toast from "react-hot-toast";
const formspreeApi = import.meta.env.VITE_FORMSPREE_ENDPOINT;
import { useNavigate } from "react-router";
//
//
export default function Contact() {
  //
  const navigate = useNavigate();
  //
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  //
  const MAX_WORDS = 100;
  //
  const getWordCount = (text) =>
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  //
  const wordCount = getWordCount(values.message);
  const remainingWords = MAX_WORDS - wordCount;
  //
  const [errors, setErrors] = useState({});
  // handle input value by input onChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    //
    if (name === "message") {
      const words = getWordCount(value);
      if (words > MAX_WORDS) return;
    }
    //
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  // custom form validation
  const validate = () => {
    const newErrors = {};
    //
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }
    //
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (getWordCount(values.message) < 10) {
      newErrors.message = "Message must be at least 10 words";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // handle form data submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    // form submit

    try {
      const res = await fetch(formspreeApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setValues({ name: "", email: "", message: "" });
        setTimeout(() => {
          navigate("/contact-success");
        }, 1500); // small delay so toast is visible
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };
  //
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="2xl:py-15 xl:py-15 lg:py-15 md:py-15 sm:py-10 py-10"
    >
      <div className="xl:w-6xl xl:mx-auto lg:w-5xl lg:mx-auto md:px-8 md:mx-auto sm:px-8 sm:mx-auto px-4">
        <h2 className="tracking-wide font-bold font-primary 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl mx-auto mb-2 text-2xl 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-left">
          <span className="text-[#0076DF]">Contact</span> Us
        </h2>
        <Paragraph className="font-primary mx-auto 2xl:w-3xl xl:w-3xl lg:w-2xl md:w-xl sm:w-xl w-full mt-3 tracking-wide 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center text-left">
          Let’s turn your ideas into reality. From modern websites and digital
          marketing to custom apps and AI solutions, we help your business grow.
          Contact us to get started.
        </Paragraph>
        {/*  */}
        <div className="w-full xl:grid xl:grid-cols-2 xl:mt-10 xl:gap-12 xl:items-center lg:grid lg:grid-cols-2 lg:mt-10 lg:gap-10 lg:items-center md:mt-10 md:grid md:grid-cols-2 md:gap-10 md:items-center sm:mt-10 mt-5">
          <div className="w-full h-full">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3643.4069459899642!2d90.25710307348064!3d24.051969877135612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDAzJzA3LjEiTiA5MMKwMTUnMzQuOCJF!5e0!3m2!1sen!2sbd!4v1767352031582!5m2!1sen!2sbd"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-4 p-6 shadow sm:mt-5 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-5">
            <h3 className="font-primary tracking-wide font-semibold text-center text-[#0076DF]">
              Send a message
              <span>&#128400;</span>
            </h3>
            <form onSubmit={handleSubmit} className="">
              {/* Name */}
              <div>
                <label htmlFor="name" className=" tracking-wide font-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Inter your name"
                  value={values.name}
                  onChange={handleChange}
                  className={`mt-1 border block w-full rounded-full font-primary tracking-wide px-4 py-2 transition-all duration-200 focus:outline focus:outline-[#0076DF]
          focus:border-[#0076DF] 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-8 h-8 
            ${errors.name ? "" : ""}`}
                />
                {errors.name && (
                  <Paragraph className="mt-1 text-[#F43F5E] font-primary tracking-wide">
                    {errors.name} &#9757;&#9757;
                  </Paragraph>
                )}
              </div>

              {/* Email */}
              <div className="mt-2">
                <label htmlFor="email" className="tracking-wide font-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Inter your email"
                  value={values.email}
                  onChange={handleChange}
                  className={`font-primary tracking-wide shadow mt-1 w-full rounded-full border px-4 py-2 transition-all duration-200 focus:outline focus:outline-[#0076DF]
          focus:border-[#0076DF] 2xl:h-9 xl:h-9 lg:h-9 md:h-8 sm:h-8 h-8 
            ${errors.email ? "" : ""}`}
                />
                {errors.email && (
                  <Paragraph className="mt-1 text-[#F43F5E] font-primary tracking-wide">
                    {errors.email} &#9757;&#9757;
                  </Paragraph>
                )}
              </div>

              {/* Message */}
              <div className="mt-2 relative">
                <label
                  htmlFor="message"
                  className=" font-primary tracking-wide"
                >
                  Message
                </label>

                <textarea
                  name="message"
                  placeholder="Inter your message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className="mt-1 shadow w-full rounded-2xl border px-2 py-2 resize-none transition-all duration-200 focus:outline focus:outline-[#0076DF]
          focus:border-[#0076DF] font-primary tracking-wide 2xl:h-35 xl:h-30 lg:h-25 md:h-20 sm:h-30 h-30"
                />

                {/* Word Counter */}
                <div
                  className={`absolute bottom-2 right-3
      ${
        remainingWords < 0
          ? "text-[#F43F5E] font-primary tracking-wide"
          : "text-gray-600 font-primary tracking-wide"
      }`}
                >
                  {wordCount}/{MAX_WORDS} words
                </div>

                {errors.message && (
                  <Paragraph className="mt-1 text-[#F43F5E] font-primary tracking-wide">
                    {errors.message} &#9757;&#9757;
                  </Paragraph>
                )}
              </div>

              <button
                title="Send Message"
                type="submit"
                className="w-full rounded-lg bg-[#0076DF] 2xl:py-2 xl:py-2 lg:py-2 md:py-1 sm:py-1 py-1 font-medium text-white transition-all duration-300 hover:bg-[#0077dfa6] block mt-3 cursor-pointer shadow-md font-primary tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

//
