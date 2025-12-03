import { FaLinkedin, FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";
import { Link } from "react-router";

export default function SocialLink() {
  // social link data array
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shakil-ahmed-aba241317/",
    },
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/shak.sakil.96",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/Sha-kil-37",
    },
    {
      icon: FaDiscord,
      label: "Discord ",
      href: "https://discord.com/users/1420788964641603706",
    },
  ];

  return (
    <div>
      <div className="flex gap-3">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <Link
              title={social.label}
              key={idx}
              to={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--white-color)] transition-all duration-300 hover:scale-110 hover:shadow-md shadow-sm"
            >
              <Icon title={social.label} className="h-5 w-5 text-[var(--black-color)]" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
