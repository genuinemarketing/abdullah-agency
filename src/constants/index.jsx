import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  // {
  //   title: "Work",
  //   links: [
  //     { title: "IKEA", href: "/work/ikea" },
  //     { title: "MAX", href: "/work/max" },
  //     { title: "ERICSSON", href: "/work/ericsson" },
  //     {
  //       title: (
  //         <>
  //           See all <span aria-hidden="true">&rarr;</span>
  //         </>
  //       ),
  //       href: "/work",
  //     },
  //   ],
  // },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
