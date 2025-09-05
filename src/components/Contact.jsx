import React from "react";

export default function Contact() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: FAQ / Help (accordion using details/summary) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              👉 Have questions about our services? Here are some of the most
              common queries our clients ask us.
            </p>

            <div className="space-y-4">
              <details className="border rounded-lg p-4">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-medium">
                  <span>1. How long does it take to complete a project?</span>
                  <span className="ml-4 text-gray-500">▾</span>
                </summary>
                <p className="mt-3 text-gray-700 text-sm">
                  Timelines vary depending on scope. Small projects usually take
                  1–3 weeks, medium projects 3–8 weeks, and larger initiatives
                  are scoped individually.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-medium">
                  <span>
                    2. Do you work with small businesses or only large
                    companies?
                  </span>
                  <span className="ml-4 text-gray-500">▾</span>
                </summary>
                <p className="mt-3 text-gray-700 text-sm">
                  We work with startups, small businesses, and large
                  enterprises. Every project is important to us.
                </p>
              </details>

              <details className="border rounded-lg p-4">
                <summary className="flex justify-between items-center cursor-pointer text-sm font-medium">
                  <span>
                    3. Do you offer ongoing support after project completion?
                  </span>
                  <span className="ml-4 text-gray-500">▾</span>
                </summary>
                <p className="mt-3 text-gray-700 text-sm">
                  Yes — we offer maintenance and retainer options. Reach out and
                  we'll tailor a plan to your needs.
                </p>
              </details>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need Help? Get In Touch
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Have a project in mind or just a question? We're here to help —
              let's talk.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault(); /* replace with submit handler */
              }}
            >
              <div>
                <label
                  className="block text-xs font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium text-gray-700 mb-1"
                  htmlFor="company"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Enter your company name..."
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <div>
                <label
                  className="block text-xs font-medium text-gray-700 mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Ask us what you want to know..."
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  We will answer your questions via email within 48 hours.
                </p>
                <button
                  type="submit"
                  className="ml-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
