import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
// { onSubmit, showMap = false, className = "" }
export default function ContactForm() {
  //

  const [showMap, setshowMap] = useState(false);
  //
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  //
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  //
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Say hi — leave a short message.";
    return e;
  }
  function onSubmit(form) {
    console.log(form);
  }
  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setStatus("sending");

    try {
      // If user provided an onSubmit prop, call it (allows integration with your API)
      if (typeof onSubmit === "function") {
        await onSubmit(form);
      } else {
        // Simulate a network request (replace this with your API call)
        await new Promise((r) => setTimeout(r, 900));
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  }
  //
  return (
    <div>
      <h2>Let's build something great.</h2>
      <p>
        Whether you need a full website, product design, or a brand refresh —
        send a message and I’ll get back within 24–48 hours.
      </p>

      <form onSubmit={handleSubmit} className="p-6 grid gap-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs text-slate-300">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-3 py-2 bg-transparent border ${
                errors.name ? "border-red-400" : "border-white/6"
              } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name}</p>
            )}
          </label>

          <label className="block">
            <span className="text-xs text-slate-300">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md px-3 py-2 bg-transparent border ${
                errors.email ? "border-red-400" : "border-white/6"
              } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email}</p>
            )}
          </label>
        </div>

        <label className="block">
          <span className="text-xs text-slate-300">
            Subject <span className="opacity-60 text-[11px]">(optional)</span>
          </span>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md px-3 py-2 bg-transparent border border-white/6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Project, hiring, question..."
          />
        </label>

        <label className="block">
          <span className="text-xs text-slate-300">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`mt-1 block w-full rounded-md px-3 py-2 bg-transparent border ${
              errors.message ? "border-red-400" : "border-white/6"
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="Tell me about your project, timeline and budget (if any)."
          />
          {errors.message && (
            <p className="text-xs text-red-400 mt-1">{errors.message}</p>
          )}
        </label>

        <div className="flex items-center justify-between gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-indigo-500 to-purple-500"
          >
            {status === "sending" ? (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : status === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <FiSend className="w-4 h-4" />
            )}

            <span>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Sent"
                : "Send Message"}
            </span>
          </button>

          <div className="text-xs opacity-70">
            Prefer email?{" "}
            <a
              href="mailto:sakildevmern@gmail.com"
              className="font-medium underline"
            >
              sakildevmern@gmail.com
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
