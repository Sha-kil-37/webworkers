import React from "react";

export default function TermsAndPrivacy() {
  //
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy Policy & Terms
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Transparency matters. Here’s how we handle your data and the rules
            that guide our services.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">Privacy Policy</h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              We respect your privacy and are committed to protecting your
              personal information. Any data collected through our website is
              used solely to improve our services and communication.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and contact details</li>
                <li>Project inquiries and messages</li>
                <li>Technical data such as browser type and device</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and project requests</li>
                <li>Improve website performance and user experience</li>
                <li>Send updates related to our services</li>
              </ul>
            </div>

            <p>
              We never sell or share your personal data with third parties
              without consent unless required by law.
            </p>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold">Terms & Conditions</h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              By using our website and services, you agree to the following
              terms and conditions. Please read them carefully.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-2">Use of Services</h3>
              <p>
                Our services are provided for lawful purposes only. You agree
                not to misuse, disrupt, or attempt unauthorized access to our
                systems.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Intellectual Property
              </h3>
              <p>
                All content, designs, and code are the intellectual property of
                our agency unless otherwise stated. Reuse without permission is
                prohibited.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Limitation of Liability
              </h3>
              <p>
                We are not liable for any indirect or consequential damages
                arising from the use of our website or services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
