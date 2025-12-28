import React, { useState } from "react";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
export default function Contact() {
  //

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  //
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form Data:", values);

    // reset after submit
    setValues({ name: "", email: "", message: "" });
  };
  //
  return (
    <motion.section id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 relative"
    >
      <div className="w-6xl mx-auto">
        <h2 className="tracking-wide text-6xl font-bold text-center text-[#082032]">
          Lets Contact Us
        </h2>
        <Paragraph className="mx-auto w-3xl text-center font-medium text-[#082032] mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eos!
          Distinctio enim consectetur odio assumenda voluptatem blanditiis
          commodi neque ratione hic vel, expedita dicta. Cupiditate nam fuga
          dicta impedit in!
        </Paragraph>
        {/*  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-3xl mx-auto h-120 mt-20 rounded-2xl bg-[#082032]"
        >
          <div className="absolute top-[-20px] left-[-20px] rounded-2xl w-full h-full bg-white shadow-xl"></div>
          {/* form div bellow  */}
          <div className="absolute top-[-40px] left-[-40px] rounded-2xl w-full h-full bg-blue-400 shadow-xl p-6">
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
                    className={`font-medium bg-white mt-1 block w-full rounded-lg border px-4 py-2 text-sm outline-none transition 
            ${errors.name ? "" : ""}`}
                  />
                  {errors.name && (
                    <Paragraph className="mt-1 text-red-500">
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
                    placeholder="Inter Your email"
                    value={values.email}
                    onChange={handleChange}
                    className={`font-medium bg-white mt-1 w-full rounded-lg border px-4 py-2 text-sm outline-none transition 
            ${errors.email ? "" : ""}`}
                  />
                  {errors.email && (
                    <Paragraph className="mt-1 text-red-500">
                      {errors.email} &#9757;&#9757;
                    </Paragraph>
                  )}
                </div>

                {/* Message */}
                <div className="mt-2">
                  <label htmlFor="message" className="font-medium text-white">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Inter Your message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    className={`mt-1 bg-white w-full rounded-lg border px-4 py-2 text-sm outline-none transition resize-none font-medium
            ${errors.message ? "" : ""}`}
                  />
                  {errors.message && (
                    <Paragraph className="mt-1 text-red-500">
                      {errors.message} &#9757;&#9757;
                    </Paragraph>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#082032] transition-all duration-300 hover:bg-white/90 block mt-3 cursor-pointer shadow-md"
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
