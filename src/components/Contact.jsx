import React, { useState } from "react";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import toast from "react-hot-toast";
const formspreeApi = import.meta.env.VITE_FORMSPREE_ENDPOINT;

//
//
export default function Contact() {
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
      console.log(res);
      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        setValues({ name: "", email: "", message: "" });
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
      className="py-10 relative"
    >
      <div className="xl:w-6xl mx-auto">
        <h2 className="tracking-wide xl:text-6xl font-bold text-center text-[#082032]">
          Lets Contact Us
        </h2>
        <Paragraph className="mx-auto xl:w-3xl text-center font-medium text-[#082032] mt-5">
          Let’s bring your ideas to life. Whether you’re looking to build a
          modern website, improve your online visibility with SEO and social
          media marketing, develop a custom application, or integrate AI-powered
          solutions, we’re here to help. Drop us a message and let’s discuss how
          we can grow your business together.
        </Paragraph>
        {/*  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative xl:w-3xl mx-auto h-120 mt-20 rounded-2xl bg-[#082032]"
        >
          <div className="absolute top-[-20px] left-[-20px] rounded-2xl w-full h-full bg-white shadow-xl"></div>
          {/* form div bellow  */}
          <div className="absolute top-[-40px] left-[-40px] rounded-2xl w-full h-full bg-[#0076DF] shadow-xl p-6">
            <div className="h-full w-full flex justify-center items-center">
              <form onSubmit={handleSubmit} className="w-full h-full">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-medium text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Inter your name"
                    value={values.name}
                    onChange={handleChange}
                    className={`font-medium bg-[#F5F5F7] mt-1 block w-full rounded-lg px-4 py-2 transition 
            ${errors.name ? "" : ""}`}
                  />
                  {errors.name && (
                    <Paragraph className="mt-1 text-[#F43F5E]">
                      {errors.name} &#9757;&#9757;
                    </Paragraph>
                  )}
                </div>

                {/* Email */}
                <div className="mt-2">
                  <label htmlFor="email" className="font-medium text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Inter your email"
                    value={values.email}
                    onChange={handleChange}
                    className={`font-medium bg-[#F5F5F7] mt-1 w-full rounded-lg  px-4 py-2 transition 
            ${errors.email ? "" : ""}`}
                  />
                  {errors.email && (
                    <Paragraph className="mt-1 text-[#F43F5E]">
                      {errors.email} &#9757;&#9757;
                    </Paragraph>
                  )}
                </div>

                {/* Message */}
                <div className="mt-2 relative">
                  <label htmlFor="message" className="font-medium text-white">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="Inter your message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    className="mt-1 bg-[#F5F5F7] w-full rounded-lg px-4 py-2 resize-none font-medium"
                  />

                  {/* Word Counter */}
                  <div
                    className={`absolute bottom-2 right-3 text-xs font-medium
      ${remainingWords < 0 ? "text-[#F43F5E]" : "text-gray-600"}`}
                  >
                    {wordCount}/{MAX_WORDS} words
                  </div>

                  {errors.message && (
                    <Paragraph className="mt-1 text-[#F43F5E]">
                      {errors.message} &#9757;&#9757;
                    </Paragraph>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#F5F5F7] px-4 py-2 text-sm font-medium text-[#0076DF] transition-all duration-300 hover:bg-white block mt-5 cursor-pointer shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
