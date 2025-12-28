import { useState } from "react";

export default function Test() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 rounded-full bg-black text-white font-medium hover:scale-105 transition"
      >
        Start a Project
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          
          {/* Form Card */}
          <div className="w-full max-w-md bg-white rounded-2xl p-8 relative animate-[fadeIn_0.3s_ease-out]">
            
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900">
              Let’s work together
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Tell me about your project
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                rows="4"
                placeholder="Project details"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
