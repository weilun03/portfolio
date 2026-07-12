import type { ContactLink } from "@/types";

const whatsappMessage = encodeURIComponent("Hi, Wei Lun.");

export const contactLinks: ContactLink[] = [
  { label: "Email", value: "twl8799@gmail.com", href: "mailto:twl8799@gmail.com" },
  {
    label: "WhatsApp",
    value: "016-8528799",
    href: `https://wa.me/60168528799?text=${whatsappMessage}`,
  },
  { label: "GitHub", value: "weilun03", href: "https://github.com/weilun03" },
  {
    label: "LinkedIn",
    value: "wei-lun-tan",
    href: "https://www.linkedin.com/in/wei-lun-tan-08644a332/",
  },
];
