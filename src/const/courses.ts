const Froggs = require("../assests/img/courses/Froggs.avif") as string;
const Turtles = require("../assests/img/courses/Turtles.jpeg") as string;
const Sharks = require("../assests/img/courses/Sharks.jpeg") as string;
const Pros = require("../assests/img/courses/Pros.jpeg") as string;
const Adults = require("../assests/img/courses/Adults.jpeg") as string;
const Diving = require("../assests/img/courses/Diving.jpeg") as string;

export interface ICourses {
  id: number;
  price: string;
  img: string;
  courseType: string;
  courseTitle: string;
  description: string;
  entrolled: number;
}

const courses: ICourses[] = [
  {
    id: 1,
    price: "100.00",
    img: Froggs,
    courseType: "Swimming course",
    courseTitle: "Frogs: 18-36 Months",
    description:
      "Our gentle swimming course introduces tiny tots to the water world, building confidence and motor skills through playful activities.",
    entrolled: 5,
  },
  {
    id: 2,
    price: "150.00",
    img: Turtles,
    courseType: "Swimming course",
    courseTitle: "Sea Turtles: 3-5 Years",
    description:
      "Our nurturing entry-level swimming course introduces to the water world, building confidence and motor skills through activities.",
    entrolled: 10,
  },
  {
    id: 3,
    price: "200.00",
    img: Sharks,
    courseType: "Swimming course",
    courseTitle: "Sharks: 5-12 Years",
    description:
      "Tailored for the energetic and curious, this program blends skill-building with aquatic play. Boosting confidence and technique.",
    entrolled: 18,
  },
  {
    id: 4,
    price: "250.00",
    img: Pros,
    courseType: "Swimming course",
    courseTitle: "Pros: 12-20 Years",
    description:
      "Tailored for teens, this program refines strokes, enhances endurance, and instills a passion for aquatic fitness.",
    entrolled: 32,
  },
  {
    id: 5,
    price: "300.00",
    img: Adults,
    courseType: "Swimming course",
    courseTitle: "Private Adult Lessons",
    description:
      "Tailored for grown-ups, these personalized sessions focus on building confidence and refining swimming skills.",
    entrolled: 11,
  },
  {
    id: 6,
    price: "350.00",
    img: Diving,
    courseType: "Diving course",
    courseTitle: "Group Diving Lessons",
    description:
      "Tailored for everyone, these customized sessions are dedicated to enhancing confidence and honing diving expertise.",
    entrolled: 20,
  },
];

export default courses;
