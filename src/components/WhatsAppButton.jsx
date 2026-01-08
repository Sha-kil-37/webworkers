import { Link } from "react-router";
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
import { FaWhatsapp } from "react-icons/fa";
//
export default function WhatsAppButton() {
  const message = "Hello, I would like to discuss a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
    title="WhatsApp"
      to={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-30"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-green-500 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />

        {/* Icon */}
        <FaWhatsapp className="relative text-white text-2xl" />
      </div>
    </Link>
  );
}
