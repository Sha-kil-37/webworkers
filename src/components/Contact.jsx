import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import ContactForm from "./ContactForm";
import BlurInText from "./BlurInText";
//
// { onSubmit, showMap = false, className = "" }
export default function Contact() {
  //
  const [showMap, setShowMap] = useState(false);
  //
  const contactInfo = [
    {
      label: "Phone",
      platform: "+880 1581 049 601",
      icon: FaPhoneAlt,
    },
    {
      label: "Email",
      platform: "sakildevmern@gmail.com",
      icon: FaEnvelope,
    },
  ];

  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <BlurInText>About WebWorkers</BlurInText>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            in ipsum Illum maiores quas, libero aperiam culpa ab. Tempore error
            max nesciunt tenetur nostrum enim facilis delectus voluptates minima
            cumque, dolor officiis vero. Alias necessitatibus deserunt amet qui
            provident temporibus non saepe minima quas dolores, explicabo earum
            illum laboriosam maxime harum, animi eaque officia, eum assumenda
            nostrum nam ab in nesciunt quidem. Aperiam quae tempora blanditiis,
            nihil debitis non pariatur nulla mollitia id aut earum enim deleniti
            in ipsa dignissimos dicta velit animi excepturi, similique corporis
            sapiente cupiditate corrupti? Quo exercitationem, earum officia nam,
            cumque perspiciatis a accusamus quibusdam, ipsum assumenda est!
            Temporibus nesciunt deleniti, numquam adipisci fugit delectus,
            aperiam quisquam eius ex, eveniet nobis? Omnis quos minima quaerat
            quia consequuntur porro nihil hic quis, nulla laudantium qui earum
            distinctio in vitae eaque accusamus explicabo debitis esse quas,
            sequi unde molestiae sapiente recusandae. Minima eveniet temporibus
            veniam qui, a repellendus molestias.
          </Paragraph>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
