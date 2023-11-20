import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { ReactElement } from "react";

interface ILinks {
  id?: number;
  to: string;
  text?: string;
  icon?: ReactElement;
}

export const exploreNavLinks: ILinks[] = [
  { to: "#", text: "About" },
  { to: "#", text: "Team" },
  { to: "#", text: "Courses" },
  { to: "#", text: "Services" },
];

export const resourcesNavLinks: ILinks[] = [
  { to: "#", text: "Contact" },
  { to: "#", text: "Services" },
  { to: "#", text: "FAQ's" },
];

export const blogNavLinks: ILinks[] = [
  { to: "#", text: "Our Best Swim Races From the 2023" },
  { to: "#", text: "How to Motivate Yourself to Swim?" },
  { to: "#", text: "How Swimming Lessons Help With Stress & Anxiety" },
  { to: "#", text: "How to Overcome the Fear of Water" },
];

export const socialMediaNavLinks: ILinks[] = [
  { id: 1, to: "#", icon: <FaXTwitter /> },
  { id: 2, to: "#", icon: <FaFacebookF /> },
  { id: 3, to: "#", icon: <FaPinterest /> },
];
