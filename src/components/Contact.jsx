import React from "react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
      <div className="backdrop-blur-lg bg-white/70 shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden border border-white/40">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-blue-500/80 to-purple-500/80 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-500/60 opacity-60 -z-10" />
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="mb-8 text-lg">
            Let's create something amazing together. Reach out for
            collaborations or just a friendly hello!
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              {/* Email Icon */}
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a3 3 0 01-3 3H7a3 3 0 01-3-3v-1a9 9 0 0118 0z"
                />
              </svg>
              <span>your@email.com</span>
            </li>
            <li className="flex items-center gap-3">
              {/* Phone Icon */}
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center gap-3">
              {/* Location Icon */}
              <svg
                className="w-6 h-6 text-white/80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4.418 0-8 2.239-8 5v2a2 2 0 002 2h12a2 2 0 002-2v-2c0-2.761-3.582-5-8-5z"
                />
              </svg>
              <span>City, Country</span>
            </li>
          </ul>
          <div className="flex gap-4">
            {/* Social Icons */}
            <a href="#" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.48 8.48 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C18.36 20.07 22 16.41 22 12c0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5 6.5A2.5 2.5 0 1 1 15 4a2.5 2.5 0 0 1 2.5 2.5zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 9.5c-2.33 0-7 1.17-7 3.5V22h14v-.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2 p-8 bg-white/90 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Contact Form
          </h3>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Type your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
