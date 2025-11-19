import { Link } from "react-router";

const ContactList = ({ contactInfo }) => {
  return (
    <div className="space-y-4">
      {contactInfo.map((info, idx) => {
        const Icon = info.icon;

        const isExternal =
          info.link.startsWith("http") ||
          info.link.startsWith("mailto:") ||
          info.link.startsWith("tel:") ||
          info.link.includes("@");

        return (
          <div
            key={idx}
            className="group flex items-start gap-4 rounded-lg hover:bg-white/5 transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <Icon className="text-white text-xl" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-400">{info.label}</span>

              {isExternal ? (
                <a
                  href={
                    info.link.includes("@")
                      ? `mailto:${info.link}`
                      : info.link.startsWith("+")
                      ? `tel:${info.link}`
                      : info.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  {info.value}
                </a>
              ) : (
                <Link
                  to={info.link}
                  className="text-white font-medium hover:underline"
                >
                  {info.value}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
