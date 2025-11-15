import { Link } from "react-router";
//
export default function Footer() {
  // innitial footer menus data
  const footerMenus = [
    {
      title: "Design services",
      menus: [
        "Web Design",
        "Webflow Design",
        "UI UX Design",
        "Brand Identity Design",
        "Mobile App Design",
      ],
    },
    {
      title: "Development services",
      menus: [
        "Web Development",
        "Custom Software Development",
        "Mobile App Development",
        "E-commerce Development",
      ],
    },
    {
      title: "Company",
      menus: ["About Us", "Blog", "FAQs"],
    },
    {
      title: "Legal",
      menus: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];
  // social links data
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/shak.sakil.96" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shakil-ahmed-aba241317/",
    },
    // { name: "LinkedIn", url: "https://linkedin.com" },
  ];
  // render footer component
  return (
    <footer className="bg-[#212121] py-10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-x-15">
          <div>
            <Link to={"/"} className="font-bold text-2xl">
              WebWorkers
            </Link>
            <p className="max-w-[500px] mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab
              autem molestiae voluptates hic, sed id quibusdam culpa illum.
              Provident doloribus similique accusantium temporibus animi
              veritatis ab, modi quos dolores culpa ex qui aperiam quae nemo
              deserunt nam maiores tempore.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <h2>Our Location</h2>
                <h5>Gazipur Bangladesh</h5>
                <a href="tel:01581049601">
                  <span>Tel : </span>01581049601
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  quis!
                </p>
              </div>
              <div>
                <h2>Location Map</h2>
                <h5>View on Google Map</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  quis!
                </p>
              </div>
            </div>
            <div>
              <h2>Subscribe to our newsletter</h2>
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full py-2 rounded-md border-2 pl-4 mt-5"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-t-amber-100 mt-5"></div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {footerMenus.map((menu, index) => (
            <div key={index}>
              <h3 className="font-bold mb-3">{menu.title}</h3>
              <ul>
                {menu.menus.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-t-amber-100 mt-5"></div>
        <div className="grid grid-cols-3">
          <div>
            <p>© 2025 WebWorkers. All rights reserved.</p>
          </div>
          <div>
            <h6>current time</h6>
            <h6>office off at </h6>
          </div>
          <div>
            <h2 className="font-medium text-lg">Follow us</h2>

            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-3"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
