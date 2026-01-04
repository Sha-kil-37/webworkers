import React from "react";
import Paragraph from "./Paragraph";

export default function TermsAndPrivacy() {
  //
  return (
    <section className="py-20">
      <div className="xl:w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-primary tracking-wide xl:text-5xl font-bold">
            Privacy Policy & Terms
          </h1>
          <Paragraph className="xl:w-2xl mx-auto mt-5 font-primary tracking-wide">
            Transparency matters. Here’s how we handle your data and the rules
            that guide our services.
          </Paragraph>
        </div>

        {/* Privacy Policy */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold font-primary tracking-wide">
            Privacy Policy
          </h2>
          <div className="space-y-6 ">
            <Paragraph className="tracking-wide font-primary">
              We respect your privacy and are committed to protecting your
              personal information. Any data collected through our website is
              used solely to improve our services and communication.
            </Paragraph>

            <div>
              <h3 className="font-semibold font-primary tracking-wide mb-2">
                Information We Collect
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-primary tracking-wide">Name, email address, and contact details</li>
                <li className="font-primary tracking-wide">Project inquiries and messages</li>
                <li className="font-primary tracking-wide">Technical data such as browser type and device</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold font-primary tracking-wide mb-2">
                How We Use Your Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-primary tracking-wide">Respond to inquiries and project requests</li>
                <li className="font-primary tracking-wide">Improve website performance and user experience</li>
                <li className="font-primary tracking-wide">Send updates related to our services</li>
              </ul>
            </div>

            <Paragraph className="font-primary tracking-wide">
              We never sell or share your personal data with third parties
              without consent unless required by law.
            </Paragraph>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold font-primary tracking-wide">Terms & Conditions</h2>

          <div className="space-y-6">
            <Paragraph className="font-primary tracking-wide">
              By using our website and services, you agree to the following
              terms and conditions. Please read them carefully.
            </Paragraph>

            <div>
              <h3 className="font-semibold font-primary tracking-wide mb-2">Use of Services</h3>
              <Paragraph className="font-primary tracking-wide">
                Our services are provided for lawful purposes only. You agree
                not to misuse, disrupt, or attempt unauthorized access to our
                systems.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold font-primary tracking-wide mb-2">
                Intellectual Property
              </h3>
              <Paragraph className="font-primary tracking-wide">
                All content, designs, and code are the intellectual property of
                our agency unless otherwise stated. Reuse without permission is
                prohibited.
              </Paragraph>
            </div>

            <div>
              <h3 className="font-semibold font-primary tracking-wide mb-2">
                Limitation of Liability
              </h3>
              <Paragraph className="tracking-wide font-primary">
                We are not liable for any indirect or consequential damages
                arising from the use of our website or services.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
