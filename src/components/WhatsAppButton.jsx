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
      className="fixed bottom-15 right-3 z-30"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center 2xl:w-9 xl:w-9 lg:w-9 md:w-9 sm:w-8 2xl:h-9 xl:h-9 lg:h-9 md:h-9 sm:h-8 h-8 w-8 rounded-full bg-green-500 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />

        {/* Icon */}
        <FaWhatsapp className="relative text-white 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-base" />
      </div>
    </Link>
  );
}
