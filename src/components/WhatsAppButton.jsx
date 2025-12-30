import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
//
export default function WhatsAppButton() {
  const message = "Hello, I would like to discuss a project.";
  // Generate WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  //
  return (
    <Link
      title="WhatsApp"
      to={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center xl:w-16 xl:h-16 rounded-full bg-green-500 shadow-lg hover:scale-110 transition-transform duration-300">
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />

        {/* Icon */}
        <FaWhatsapp className="relative text-white text-3xl" />
      </div>
    </Link>
  );
}
