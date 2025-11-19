import { useState } from "react";
import Paragraph from "./Paragraph";
import ContactList from "./ContactList";
import SocialLink from "./SocialLink";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
//
export default function LetsTalk() {
  //

  // contact info data array
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "sakildevmern@gmail.com",
      link: "sakildevmern@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+8801581049601",
      link: "+8801581049601",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Gazipur, Dhaka, Bangladesh",
      link: "https://maps.app.goo.gl/eLBZq6TG2sxMCke78",
    },
  ];

  //
  return (
    <section className="py-15 bg-gradient-to-b from-slate-800 via-slate-800 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Let's Talk
          </h2>
          <Paragraph>
            Have a project in mind? Want to discuss an idea? Or simply want to
            say hello? We'd love to hear from you. Let's create something
            amazing together.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <ContactList contactInfo={contactInfo} />
              <SocialLink />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
