import { Fragment } from "react";
import BlurInText from "./BlurInText";
import Paragraph from "./Paragraph";
import OurTeam from "./OurTeam";
import ChooseUs from "./ChooseUs";
import OurMission from "./OurMission";
import OurValue from "./OurValue";
// About Page for WebWorkers
export default function About() {
  //
  return (
    <Fragment>
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div> */}

        <div className="relative max-w-7xl mx-auto ">
          <BlurInText>
            <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              About WebWorkers
            </span>
          </BlurInText>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            in ipsum perferendis quas enim quae esse asperiores tempora sequi
            voluptates.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores quas, libero aperiam culpa ab. Tempore error maxime pariatur aliquam porro autem totam deserunt unde voluptates sapiente! Magni accusantium in, adipisci quasi nobis temporibus voluptatibus aspernatur labore exercitationem. Ex, architecto veniam voluptate quibusdam eveniet eaque, nemo temporibus reiciendis ipsam quos beatae officiis modi sapiente sunt, aspernatur illo quaerat eum alias expedita incidunt? Similique molestias, maiores inventore iure laudantium culpa nemo excepturi, molestiae tempore ducimus assumenda! Ipsam dicta saepe excepturi corporis, vitae fugiat odit. Aut placeat laudantium repudiandae harum itaque aspernatur expedita illo minima tempora eveniet sed obcaecati velit officiis voluptatem delectus saepe doloribus, nulla quidem quos dolorem ea. Fugiat consequuntur eos itaque. Natus eos enim dignissimos. Repellendus impedit optio voluptates ipsa porro, blanditiis dolores. Consequatur dolores necessitatibus voluptatibus ipsa, at cupiditate labore ullam aperiam eius adipisci, nulla ipsum. Quaerat nisi veniam ratione, est officiis esse sunt, rerum eius a optio vel suscipit quae itaque id adipisci? Sint distinctio commodi id adipisci quasi amet officia dolorum nisi, porro voluptatibus at delectus iste officiis corporis! Cumque, id corrupti. Vel, quasi. Sint labore iure optio sequi perferendis autem voluptatum voluptatibus suscipit! Consequuntur fuga dolorum tempore dolores repellendus. Ut eos consequuntur pariatur numquam aut, perferendis culpa aspernatur unde laborum quibusdam! Laborum odit cupiditate illum rem adipisci ea architecto reiciendis voluptates officia praesentium tenetur natus minima quo provident perferendis dolorum, aspernatur id deleniti aliquam! Beatae labore enim fuga, sint repellat commodi eveniet quibusdam cumque id possimus magni omnis reiciendis a magnam minima perspiciatis quos, saepe quidem unde soluta. Incidunt eius alias corporis, dolorum facilis reprehenderit architecto. Consequuntur culpa porro mollitia perspiciatis ex amet repudiandae reprehenderit nesciunt tenetur nostrum enim facilis delectus voluptates minima cumque, dolor officiis vero. Alias necessitatibus deserunt amet qui provident temporibus non saepe minima quas dolores, explicabo earum illum laboriosam maxime harum, animi eaque officia, eum assumenda nostrum nam ab in nesciunt quidem. Aperiam quae tempora blanditiis, nihil debitis non pariatur nulla mollitia id aut earum enim deleniti in ipsa dignissimos dicta velit animi excepturi, similique corporis sapiente cupiditate corrupti? Quo exercitationem, earum officia nam, cumque perspiciatis a accusamus quibusdam, ipsum assumenda est! Temporibus nesciunt deleniti, numquam adipisci fugit delectus, aperiam quisquam eius ex, eveniet nobis? Omnis quos minima quaerat quia consequuntur porro nihil hic quis, nulla laudantium qui earum distinctio in vitae eaque accusamus explicabo debitis esse quas, sequi unde molestiae sapiente recusandae. Minima eveniet temporibus veniam qui, a repellendus molestias.
          </Paragraph>
        </div>
      </section>
      <OurMission />
      <OurValue />
      <OurTeam />
      <ChooseUs />
    </Fragment>
  );
}
