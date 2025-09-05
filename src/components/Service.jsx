import React from "react";
//
export default function Service() {
  return (
    <section id="service">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
          {/* Left card */}
          <div className="bg-gray-200 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              {/* code / web icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600">
              Custom websites and web apps designed to deliver speed, security,
              and scalability.
            </p>
          </div>

          {/* Center heading + description */}
          <div className="text-center px-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              Our Services
            </h2>
            <p className="mt-5 max-w-[700px] mx-auto text-center text-lg font-normal">
              We offer comprehensive digital solutions to help your business
              thrive in the modern digital landscape.
            </p>
          </div>

          {/* Right card */}
          <div className="bg-gray-200 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
              {/* megaphone / marketing icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 11v6a2 2 0 0 0 2 2h2l5 3V6L7 9H5a2 2 0 0 0-2 2z" />
                <path d="M21 8v8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
            <p className="text-sm text-gray-600">
              Data-driven strategies that boost your online presence, reach, and
              revenue.
            </p>
          </div>

          {/* Center bottom card (placed below, centered on large screens) */}
          <div className="col-span-1 lg:col-start-2 lg:col-end-3 flex justify-center lg:mt-6">
            <div className="w-full max-w-sm bg-gray-200 rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {/* light bulb / ux icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18h6v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1z" />
                  <path d="M12 2a6 6 0 0 0-4 10.5V15a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5A6 6 0 0 0 12 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-600">
                User-centered design that enhances usability, engagement, and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
