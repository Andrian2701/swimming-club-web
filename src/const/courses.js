import Froggs from "../assests/imgs/courses/Froggs.avif";
import Turtles from "../assests/imgs/courses/Turtles.jpeg";
import Sharks from "../assests/imgs/courses/Sharks.jpeg";
import Pros from "../assests/imgs/courses/Pros.jpeg";
import Adults from "../assests/imgs/courses/Adults.jpeg";

const courses = [
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
];

export default courses;
