import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function LetsTalk() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@webworkers.com",
      link: "mailto:hello@webworkers.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to discuss an idea? Or simply want to
            say hello? We'd love to hear from you. Let's create something
            amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {info.label}
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm mt-1">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="pt-8 border-t border-slate-700">
                <h3 className="text-sm font-semibold text-slate-200 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        aria-label={social.label}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 hover:from-blue-500 hover:to-cyan-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="6"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform ${
                      submitted
                        ? "bg-green-500 shadow-lg shadow-green-500/50"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95"
                    }`}
                  >
                    {submitted ? "✓ Message Sent!" : "Send Message"}
                  </button>
                </div>

                {/* Form Note */}
                <p className="text-xs text-slate-400 text-center">
                  We'll get back to you within 24 hours. Your privacy is
                  important to us.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
