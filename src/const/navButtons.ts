interface ILinks {
  id: number;
  to: string;
  text: string;
}

export const navButtons: ILinks[] = [
  {
    id: 1,
    to: "#",
    text: "Sign up",
  },
  {
    id: 2,
    to: "#",
    text: "Explore courses",
  },
  {
    id: 3,
    to: "#",
    text: "Learn more",
  },
  {
    id: 4,
    to: "/our-team",
    text: "Meet the team",
  },
  {
    id: 5,
    to: "#",
    text: "Find a class for me",
  },
];
