import { useState } from "react";
import { Link, useActionData } from "react-router";
//
export default function ContactForm() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   service: "",
  //   message: "",
  // });
  // //
  // const services = [
  //   "Web Development",
  //   "UI/UX Design",
  //   "Digital Marketing",
  //   "SEO Optimization",
  //   "E-commerce Website",
  //   "Custom App Development",
  // ];
  // //
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", form);
  //   alert("Message sent successfully!");
  // };
  //
  const errors = useActionData?.errors;
  return (
    // <form onSubmit={handleSubmit}>
    //   <h2 className="font-bold text-4xl">Contact Us</h2>
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5 gap-4">
    //     {/* Name */}
    //     <div>
    //       <label htmlFor="name" className="font-semibold">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         name="name"
    //         value={form.name}
    //         onChange={handleChange}
    //         placeholder="Enter your name"
    //         required
    //          className="rounded w-full block mt-2 px-2 py-2 outline-none bg-[#EEEEEE] resize-none"
    //       />
    //     </div>

    //     {/* Email */}
    //     <div>
    //       <label htmlFor="email" className="font-semibold">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={form.email}
    //         onChange={handleChange}
    //         placeholder="Enter your email"
    //         required
    //          className="rounded w-full block mt-2 px-2 py-2 outline-none bg-[#EEEEEE] resize-none"
    //       />
    //     </div>

    //     {/* Service selection */}
    //     <div className="mt-4">
    //       <label htmlFor="service" className="font-semibold">
    //         Select Service
    //       </label>
    //       <select
    //          className="rounded w-full block mt-2 px-2 py-2 outline-none bg-[#EEEEEE] resize-none"
    //         name="service"
    //         value={form.service}
    //         onChange={handleChange}
    //         required
    //       >
    //         <option value="">Choose a service</option>
    //         {services.map((service, idx) => (
    //           <option key={idx} value={service} className="text-black">
    //             {service}
    //           </option>
    //         ))}
    //       </select>
    //     </div>

    //     {/* Message */}
    //     <div className="mt-2">
    //       <label htmlFor="message" className="font-semibold">
    //         Message
    //       </label>
    //       <textarea
    //         name="message"
    //         value={form.message}
    //         onChange={handleChange}
    //         placeholder="Write your message..."
    //         rows="5"
    //         className="rounded w-full block mt-2 px-2 py-2 outline-none bg-[#EEEEEE] resize-none"
    //         required
    //       />
    //     </div>
    //   </div>
    //   {/*  */}
    //   <div className="flex justify-between mt-5">
    //     {/* Submit button */}
    //     <div>
    //       <button
    //         type="submit"
    //         className="cursor-pointer px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg"
    //       >
    //         Send Message
    //       </button>
    //     </div>
    //     <div>
    //       <span>you can send a email ?</span>
    //       <Link>sakildevmern@gmail.com</Link>
    //     </div>
    //   </div>
    // </form>

    <form method="post">
      <label>
        <input type="text" name="username" />
        {errors?.username && <div>{errors.username}</div>}
      </label>

      <label>
        <input type="password" name="password" />
        {errors?.password && <div>{errors.password}</div>}
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
