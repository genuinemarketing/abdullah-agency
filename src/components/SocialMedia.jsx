import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/genuinemarketing_sl",
    icon: BsInstagram,
  },
  { title: "GitHub", href: "https://github.com/genuinemarketing", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100010070348939",
    icon: BsFacebook,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/*/",
    icon: BsLinkedin,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/*",
    icon: BsYoutube,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/*",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
