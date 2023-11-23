const teamMember1 = require("../assests/img/team/teamMember1.jpg") as string;
const teamMember2 = require("../assests/img/team/teamMember2.jpg") as string;
const teamMember3 = require("../assests/img/team/teamMember3.jpeg") as string;
const teamMember4 = require("../assests/img/team/teamMember4.jpg") as string;
const teamMember5 = require("../assests/img/team/teamMember5.jpeg") as string;
const teamMember6 = require("../assests/img/team/teamMember6.jpeg") as string;
const teamMember7 = require("../assests/img/team/teamMember7.jpeg") as string;
const teamMember8 = require("../assests/img/team/teamMember8.jpeg") as string;

export interface ITeamMember {
  id: number;
  position: string;
  img: string;
  name: string;
  surname: string;
  fullName: string;
  about: string;
  achievements: string[];
}

export const teamMembers: ITeamMember[] = [
  {
    id: 1,
    position: "Head coach",
    img: teamMember1,
    name: "Chaleb",
    surname: "Walsh",
    fullName: "Chaleb Walsh",
    about:
      "Chaleb, our dynamic head coach in swimming and diving, brings a wealth of experience despite his youthful vigor. A natural leader, Chaleb adeptly guides participants of all levels in our classes, ensuring each individual receives expert coaching. His compassionate approach shines when interacting with young athletes, endearing him as a mentor and favorite among aspiring swimmers.",
    achievements: [
      "Youthful leadership impact",
      "Versatile coaching expertise",
      "Team unity catalyst",
    ],
  },
  {
    id: 2,
    position: "Head coach",
    img: teamMember2,
    name: "Evelyne",
    surname: "Foster",
    fullName: "Evelyne Foster",
    about:
      "Evelyne, our dedicated swimming coach, brings a wealth of experience to our team, specializing in working with children. Her expertise lies not only in refining swimming techniques but also in creating a nurturing environment tailored for young learners. Evelyne's compassionate approach fosters a strong connection with her students, making her a trusted mentor and guide in the pool.",
    achievements: [
      "Youth development excellence",
      "Community building champion",
      "Innovative teaching approaches",
    ],
  },
  {
    id: 3,
    position: "Head coach",
    img: teamMember3,
    name: "Ethan",
    surname: "Garcia",
    fullName: "Ethan Garcia",
    about:
      "Ethan, our versatile coach in both swimming and diving, is a recent addition to the OceanStars family. Despite being a newcomer, Ethan showcases an impressive skill set and enthusiasm for aquatic sports. His fresh perspective and commitment to excellence contribute to the dynamic coaching atmosphere, ensuring a positive and invigorating experience for participants under his guidance.",
    achievements: [
      "Rapid integration success",
      "Versatility in aquatic disciplines",
      "Positive team atmosphere",
    ],
  },
  {
    id: 4,
    position: "Assistant coach",
    img: teamMember4,
    name: "Megan",
    surname: "Fox",
    fullName: "Megan Fox",
    about:
      "Megan, serving as an invaluable assistant to our swimming coach, brings a unique background in psychology and mentoring to the team. Her diverse skill set enriches the coaching dynamic, providing athletes with not only technical expertise but also emotional support. Megan's empathetic nature and understanding of mental well-being create a holistic coaching environment, promoting both physical and mental growth among our participants.",
    achievements: [
      "Psychological support pioneer",
      "Mentoring excellence:",
      "Team bonding initiatives",
    ],
  },
  {
    id: 5,
    position: "Assistant coach",
    img: teamMember5,
    name: "Liam",
    surname: "Peaty",
    fullName: "Liam Peaty",
    about:
      "Liam, our versatile assistant, possesses not only the skills to support the coaching team but can seamlessly step into the role of a swimming coach. His innate kindness and affable nature make him the go-to person for forging connections with everyone. Liam's ability to befriend anyone creates a warm and inclusive atmosphere, ensuring that participants feel not only coached but also welcomed into the swimming community.",
    achievements: [
      "Adaptable assistant-coach transition",
      "Universal friendliness",
      "Individualized connection building",
    ],
  },
  {
    id: 6,
    position: "Assistant coach",
    img: teamMember6,
    name: "Matthew",
    surname: "Finke",
    fullName: "Matthew Finke",
    about:
      "Mathew, the heartbeat of our team as a swimming assistant, infuses energy and camaraderie into every practice. His infectious enthusiasm and team spirit make him the soul of the group, fostering a sense of unity and motivation among the athletes. Mathew's presence adds an extra dimension to the coaching dynamic, creating an environment where every participant feels valued and encouraged.",
    achievements: [
      "Spirit and motivation ambassador",
      "Team unity advocate",
      "Supportive mentorship",
    ],
  },
  {
    id: 7,
    position: "Technique coach",
    img: teamMember7,
    name: "Lisa",
    surname: "Watson",
    fullName: "Lisa Watson",
    about:
      "Lisa, our dedicated technique coach, possesses a remarkable ability to enhance the swimming techniques of individuals, regardless of their age. Her expertise extends across all age groups, making her an invaluable asset to swimmers at every skill level. Lisa's commitment to refining techniques ensures that each participant receives personalized guidance, contributing to their overall skill development and swimming proficiency.",
    achievements: [
      "Technique enhancement maestro",
      "Age-inclusive cechnique programs",
      "Skill development innovation",
    ],
  },
  {
    id: 8,
    position: "Strength & Conditioning coach",
    img: teamMember8,
    name: "Mike",
    surname: "Adams",
    fullName: "Mike Adams",
    about:
      "Mike, a seasoned coach with a background as a fitness coach, has transitioned into the role of a strength and conditioning coach. His experience brings a unique perspective to our team, particularly serving as a mentor for teenagers. Mike's holistic approach to training goes beyond the pool, focusing on strength and conditioning to foster not only physical fitness but also personal growth. His guidance is instrumental in shaping the next generation of athletes, instilling discipline and resilience in their journey towards excellence.",
    achievements: [
      "Transition from fitness to strength and conditioning",
      "Teen mentorship excellence",
      "Holistic athlete sevelopment",
    ],
  },
];
