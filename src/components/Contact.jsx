import Paragraph from "./Paragraph";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import.meta.env;
//
// Validation Schema
const ContactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});
//
// form api url
const apiUrl = import.meta.env.VITE_FORM_API_KEY;
// Contact Component
export default function Contact() {
  // form status state
  const [formStatus, setFormStatus] = useState("");
  // handle form submit
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });
  //
  // Submit Handler
  const onSubmit = async (data) => {
    setFormStatus("loading");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("success");
      reset();
      // window.location.href = "/thank-you";
    } else {
      setFormStatus("error");
    }
  };
  //
  return (
    <section className="py-10 bg-[var(--white-color)]">
      <div className="max-w-6xl mx-auto block md:block lg:flex xl:flex gap-x-8 justify-between sm:block">
        <div>
          <h2 className="font-bold text-4xl font-mono">
            Get in Touch
          </h2>
          <Paragraph className="max-w-xl font-mono mt-2">
            We’d love to hear from you! Whether you have questions, need
            support, or want to start a project, our team is ready to help.
            Reach out to us via email, phone, or our online form, and we’ll
            respond promptly to discuss how we can bring your ideas to life.
          </Paragraph>
          <div className="flex gap-x-4 mt-3 items-center">
            <HiOutlineMail className="text-[var(--black-color)]" />
            <span className="text-[var(--black-color)]">
              sakildevmern@gmail.com
            </span>
          </div>
          <div className="flex gap-x-4 mt-3">
            <IoCallOutline className="text-[var(--black-color)]" />
            <span className="text-[var(--black-color)]">+8801581049601</span>
          </div>
          <div className="flex gap-x-4 mt-3">
            <CiLocationOn className="text-[var(--black-color)]" />
            <span className="text-[var(--black-color)]">
              Gazipur, Dhaka, Bangladesh
            </span>
          </div>
        </div>
        <div className="w-xl mx-auto ">
          <h2 className="text-2xl font-bold mb-6 text-[var(--black-color)] text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-5">
              <label className="block font-medium mb-2">Full Name</label>
              <input
                type="text"
                {...register("name")}
                className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-3 border rounded focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-5">
              <label className="block font-medium mb-2">Message</label>
              <textarea
                {...register("message")}
                className="w-full p-3 border rounded h-32 focus:ring focus:ring-blue-300"
                placeholder="Write your message..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Messages */}
          {formStatus === "success" && (
            <p className="text-green-600 mt-4 text-center font-medium">
              Message sent successfully!
            </p>
          )}

          {formStatus === "error" && (
            <p className="text-red-600 mt-4 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
