import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { ReactElement } from "react";

interface NavLinks {
  id?: number;
  to: string;
  text?: string;
  icon?: ReactElement;
}

// Header navlinks

export const HEADER_LINKS: NavLinks[] = [
  { to: "/our-team", text: "Team" },
  { to: "/our-courses", text: "Courses" },
  { to: "/contact-us", text: "Contact" },
];

// MobileMenu navlinks

export const MOBILE_MENU_LINKS: NavLinks[] = [
  { to: "/our-team", text: "Team" },
  { to: "/our-courses", text: "Courses" },
  { to: "/contact-us", text: "Contact" },
  { to: "#", text: "Sign Up" },
];

// Footer navlinks

export const EXPLORE_LINKS: NavLinks[] = [
  { to: "#", text: "About" },
  { to: "/our-team", text: "Team" },
  { to: "/our-courses", text: "Courses" },
  { to: "#", text: "Services" },
];

export const RESOURCES_LINKS: NavLinks[] = [
  { to: "/contact-us", text: "Contact" },
  { to: "#", text: "Services" },
  { to: "#", text: "FAQ's" },
];

export const BLOG_LINKS: NavLinks[] = [
  { to: "#", text: "Our Best Swim Races From the 2023" },
  { to: "#", text: "How to Motivate Yourself to Swim?" },
  { to: "#", text: "How Swimming Lessons Help With Stress & Anxiety" },
  { to: "#", text: "How to Overcome the Fear of Water" },
];

export const SM_LINKS: NavLinks[] = [
  { id: 1, to: "#", icon: <FaXTwitter /> },
  { id: 2, to: "#", icon: <FaFacebookF /> },
  { id: 3, to: "#", icon: <FaPinterest /> },
];
