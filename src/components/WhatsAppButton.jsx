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
      className="fixed bottom-15 right-5 z-30"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center 2xl:w-8 xl:w-8 lg:w-8 md:w-8 sm:w-8 2xl:h-8 xl:h-8 lg:h-8 md:h-8 sm:h-8 h-7 w-7 rounded-full bg-green-500 shadow-lg hover:scale-105 transition-all duration-200 ease-in-out">
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />

        {/* Icon */}
        <FaWhatsapp className="relative text-white 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-base" />
      </div>
    </Link>
  );
}
