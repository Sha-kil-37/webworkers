import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import ContactForm from "./ContactForm";
//
// { onSubmit, showMap = false, className = "" }
export default function Contact() {
  //
  const contactInfo = [
    {
      label: "Phone",
      platform: "+880 1581 049 601",
      icon: FaPhoneAlt,
    },
    {
      label: "Email",
      platform: "sakildevmern@gmail.com",
      icon: FaEnvelope,
    },
  ];
  const [showMap, setshowMap] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
    <section>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2 items-start"
        >
          <ContactForm />

          {/* Right: optional map or stylized hero */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#F5F7F8] p-6">
              <h3 className="text-xl font-semibold mb-2">How I work</h3>
              <ul className="space-y-3 text-sm opacity-90">
                <li>• Discovery call to understand needs</li>
                <li>• Proposal with timeline & fixed price</li>
                <li>• Design & develop iteratively</li>
                <li>• Handover, documentation & support</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#F5F7F8] p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Availability</h3>
              <p className="text-sm opacity-80 mb-4">
                Open for freelance and contract work. Current lead time: 1–3
                weeks for small projects.
              </p>

              {showMap ? (
                <div className="mt-auto rounded-md overflow-hidden border border-white/6">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902124513785!2d90.39113091539517!3d23.75090398458809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0b1c4c4a5%3A0x0!2zMjPCsDQ1JzU5LjciTiA5MMKwMjMnMDQuOSJF!5e0!3m2!1sen!2sbd!4v1690000000000"
                    className="w-full h-40"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-auto text-sm opacity-80">
                  If you'd like to meet in person, I’m based in Dhaka — happy to
                  meet at a cafe or online over Discord.
                </div>
              )}
            </div>
            {/* contact info */}
            <div className=" flex justify-between">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                //
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-white/5 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <Paragraph>{info.label}</Paragraph>
                      <Paragraph>{info.platform}</Paragraph>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
