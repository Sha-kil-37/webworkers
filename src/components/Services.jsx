import { FaCode } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LuMonitorSmartphone } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineSound } from "react-icons/ai";
import { IoIosApps } from "react-icons/io";
import Paragraph from "./Paragraph";
import BlurInText from "./BlurInText";
//
export default function Services() {
  //
  const services = [
    {
      title: "Web Development",
      desc: "We create websites that are visually appealing, highly functional, and fully optimized, ensuring your digital presence effectively represents your brand and engages visitors for maximum impact.",
      icon: <FaCode className="w-10 h-10" />,
    },
    {
      title: "Social Media Marketing",
      desc: "We use social platforms to strengthen your brand awareness, increase audience engagement, and drive measurable sales, ensuring your business connects effectively with the right customers across all channels.",
      icon: <AiOutlineSound className="w-10 h-10" />,
    },
    {
      title: "UI/UX Design",
      desc: "We design intuitive, visually appealing interfaces that enhance usability, improve user satisfaction, and create smooth, enjoyable experiences that keep users engaged and encourage them to return often to your website.",
      icon: <LuMonitorSmartphone className="w-10 h-10" />,
    },
    {
      title: "App Development",
      desc: "We develop high-performance mobile apps that deliver smooth functionality, intuitive interfaces, and strong user engagement, ensuring your business reaches customers effectively across Android, iOS, and cross-platform environments",
      icon: <LuSmartphone className="w-10 h-10" />,
    },
    {
      title: "Digital Marketing",
      desc: "Our digital marketing services help your brand reach the right audience, increase traffic, and boost engagement. We ensure your stunning website gets seen and delivers real results.",
      icon: <IoIosRocket className="w-10 h-10" />,
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "We optimize your website to rank higher on Google, boost visibility, and attract consistent organic traffic, helping your business grow through targeted, effective SEO strategies.",
      icon: <AiOutlineLineChart className="w-10 h-10" />,
    },
    {
      title: "Business Consultation",
      desc: "We provide strategic business consultation to identify opportunities, solve challenges, and improve operations, helping your company grow, streamline processes, and make informed decisions that drive long-term success.",
      icon: <LuBriefcaseBusiness className="w-10 h-10" />,
    },
    {
      title: "Custom Software Development",
      desc: "We build custom software tailored to your business needs, streamline operations, improve efficiency, and deliver scalable, high-performance solutions that support growth and enhance overall productivity",
      icon: <IoIosApps className="w-10 h-10" />,
    },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto">
        <BlurInText className="text-6xl font-bold">
          Web Workers Services
        </BlurInText>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in
          ipsum perferendis quas enim quae esse asperiores tempora sequi
          voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum maiores quas, libero aperiam culpa ab. Tempore error maxime
          pariatur aliquam porro autem totam deserunt unde voluptates sapiente!
          Magni accusantium in, adipisci quasi nobis temporibus voluptatibus
          aspernatur labore exercitationem. Ex, architecto veniam voluptate
          quibusdam eveniet eaque, nemo temporibus reiciendis ipsam quos beatae
          officiis modi sapiente sunt, aspernatur illo quaerat eum alias
          expedita incidunt? Similique molestias, maiores inventore iure
          laudantium culpa nemo excepturi, molestiae tempore ducimus assumenda!
          Ipsam dicta saepe excepturi corporis, vitae fugiat odit. Aut placeat
          laudantium repudiandae harum itaque aspernatur expedita illo minima
          tempora eveniet sed obcaecati velit officiis voluptatem delectus saepe
          doloribus, nulla quidem quos dolorem ea. Fugiat consequuntur eos
          itaque. Natus eos enim dignissimos. Repellendus impedit optio
          voluptates ipsa porro, blanditiis dolores. Consequatur dolores
          necessitatibus voluptatibus ipsa, at cupiditate labore ullam aperiam
          eius adipisci, nulla ipsum. Quaerat nisi veniam ratione, est officiis
          esse sunt, rerum eius a optio vel suscipit quae itaque id adipisci?
          Sint distinctio commodi id adipisci quasi amet officia dolorum nisi,
          porro voluptatibus at delectus iste officiis corporis! Cumque, id
          corrupti. Vel, quasi. Sint labore iure optio sequi perferendis autem
          voluptatum voluptatibus suscipit! Consequuntur fuga dolorum tempore
          dolores repellendus. Ut eos consequuntur pariatur numquam aut,
          perferendis culpa aspernatur unde laborum quibusdam! Laborum odit
          cupiditate illum rem adipisci ea architecto reiciendis voluptates
          officia praesentium tenetur natus minima quo provident perferendis
          dolorum, aspernatur id deleniti aliquam! Beatae labore enim fuga, sint
          repellat commodi eveniet quibusdam cumque id possimus magni omnis
          reiciendis a magnam minima perspiciatis quos, saepe quidem unde
          soluta. Incidunt eius alias corporis, dolorum facilis reprehenderit
          architecto. Consequuntur culpa porro mollitia perspiciatis ex amet
          repudiandae reprehenderit nesciunt tenetur nostrum enim facilis
          delectus voluptates minima cumque, dolor officiis vero. Alias
          necessitatibus deserunt amet qui provident temporibus non saepe minima
          quas dolores, explicabo earum illum laboriosam maxime harum, animi
          eaque officia, eum assumenda nostrum nam ab in nesciunt quidem.
          Aperiam quae tempora blanditiis, nihil debitis non pariatur nulla
          mollitia id aut earum enim deleniti in ipsa dignissimos dicta velit
          animi excepturi, similique corporis sapiente cupiditate corrupti? Quo
          exercitationem, earum officia nam, cumque perspiciatis a accusamus
          quibusdam, ipsum assumenda est! Temporibus nesciunt deleniti, numquam
          adipisci fugit delectus, aperiam quisquam eius ex, eveniet nobis?
          Omnis quos minima quaerat quia consequuntur porro nihil hic quis,
          nulla laudantium qui earum distinctio in vitae eaque accusamus
          explicabo debitis esse quas, sequi unde molestiae sapiente recusandae.
          Minima eveniet temporibus veniam qui, a repellendus molestias.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8  hover:bg-[#F5F7F8] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
