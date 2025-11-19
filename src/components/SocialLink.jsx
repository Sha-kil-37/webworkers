import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
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
  ];

  return (
    <div className="pt-8 border-t border-slate-700">
      <h3 className="text-sm font-semibold text-slate-200 mb-4">Follow Us</h3>

      <div className="flex gap-3">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <Link
              key={idx}
              to={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-600 hover:from-blue-500 hover:to-cyan-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
