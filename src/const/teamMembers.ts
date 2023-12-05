const teamMember1 = require("../assests/img/team/teamMember1.jpg") as string;
const teamMember2 = require("../assests/img/team/teamMember2.jpg") as string;
const teamMember3 = require("../assests/img/team/teamMember3.jpeg") as string;
const teamMember4 = require("../assests/img/team/teamMember4.jpg") as string;
const teamMember5 = require("../assests/img/team/teamMember5.jpeg") as string;
const teamMember6 = require("../assests/img/team/teamMember6.jpeg") as string;
const teamMember7 = require("../assests/img/team/teamMember7.jpeg") as string;
const teamMember8 = require("../assests/img/team/teamMember8.jpeg") as string;

export interface IVisualPart {
  percentage: string;
  color: string;
}

export interface ISkills {
  maxVal: number;
  time: number;
  label: string;
  backgroundColor?: string;
  visualParts: IVisualPart[];
}

export interface TeamMemberProps {
  id: number;
  position: string;
  img: string;
  name: string;
  surname: string;
  fullName: string;
  about: string;
  achievements: string[];
  skills: ISkills[];
}

export const TEAM_MEMBERS: TeamMemberProps[] = [
  {
    id: 1,
    position: "Head coach",
    img: teamMember1,
    name: "Chaleb",
    surname: "Walsh",
    fullName: "Chaleb Walsh",
    about:
      "Chaleb's commitment to excellence extends beyond the pool, as he actively engages in continuous learning to stay abreast of the latest coaching techniques and sports science. His dedication to personal and professional growth sets a powerful example for the entire team. Chaleb fosters a positive team spirit, encouraging collaboration and camaraderie among athletes. With his infectious enthusiasm, he instills a love for the sport and inspires a drive for success.",
    achievements: [
      "Youthful leadership impact",
      "Versatile coaching expertise",
      "Team unity catalyst",
    ],
    skills: [
      {
        maxVal: 100,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "100%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Evelyne's passion for coaching goes beyond the aquatic realm, as she actively incorporates innovative teaching methods and child development principles into her sessions. Her commitment to fostering a positive and inclusive atmosphere ensures that each child feels supported on their swimming journey. Evelyne's keen understanding of individual learning styles allows her to tailor her approach, unlocking the potential in every young swimmer.",
    achievements: [
      "Youth development excellence",
      "Community building champion",
      "Innovative teaching approaches",
    ],
    skills: [
      {
        maxVal: 90,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "90%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 92,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "92%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Ethan's enthusiasm for coaching extends beyond the pool, as he actively seeks opportunities to integrate the latest advancements in sports science and training methodologies. His adaptability and willingness to embrace new ideas create an environment of continuous improvement. Ethan's commitment to excellence is not only evident in refining swimming and diving techniques but also in fostering a sense of community within the OceanStars family. ",
    achievements: [
      "Rapid integration success",
      "Versatility in aquatic disciplines",
      "Positive team atmosphere",
    ],
    skills: [
      {
        maxVal: 90,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "90%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 92,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "92%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 98,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "98%",
            color: "#4f2EC9",
          },
        ],
      },
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
    skills: [
      {
        maxVal: 90,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "90%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Liam, our versatile assistant, possesses not only the skills to support the coaching team but can seamlessly step into the role of a swimming coach. His innate kindness and affable nature make him the go-to person for forging connections with everyone. Liam's ability to befriend anyone creates a warm and inclusive atmosphere, ensuring that participants feel not only coached but also welcomed into the swimming community and competitve scene.",
    achievements: [
      "Adaptable assistant-coach transition",
      "Universal friendliness",
      "Individualized connection building",
    ],
    skills: [
      {
        maxVal: 89,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "89%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 92,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "92%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Mathew's impact goes beyond the pool, as he actively engages in team-building activities and mentorship programs to strengthen the bond among athletes. His role as the heartbeat of our team is reflected in his dedication to creating a supportive and uplifting atmosphere. Mathew's keen sense of empathy enables him to connect with each participant on a personal level, understanding their individual needs and aspirations. With a focus on skill development.",
    achievements: [
      "Spirit and motivation ambassador",
      "Team unity advocate",
      "Supportive mentorship",
    ],
    skills: [
      {
        maxVal: 90,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "90%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 92,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "92%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 98,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "98%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Lisa, our dedicated technique coach, possesses a remarkable ability to enhance the swimming techniques of individuals, regardless of their age. Her expertise extends across all age groups, making her an invaluable asset to swimmers at every skill level. Lisa's commitment to refining techniques ensures that each participant receives personalized guidance, contributing to their overall skill and personal development and swimming proficiency.",
    achievements: [
      "Technique enhancement maestro",
      "Age-inclusive cechnique programs",
      "Skill development innovation",
    ],
    skills: [
      {
        maxVal: 100,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "100%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 89,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "89%",
            color: "#4f2EC9",
          },
        ],
      },
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
      "Mike, a seasoned coach with a background as a fitness coach, has transitioned into the role of a strength and conditioning coach. His experience brings a unique perspective to our team, particularly serving as a mentor for teenagers. Mike's holistic approach to training goes beyond the pool, focusing on strength and conditioning to foster not only physical fitness but also personal growth. His guidance is instrumental in shaping the next generation of athletes.",
    achievements: [
      "Transition from fitness to strength and conditioning",
      "Teen mentorship excellence",
      "Holistic athlete sevelopment",
    ],
    skills: [
      {
        maxVal: 90,
        time: 20,
        label: "Expierence",
        visualParts: [
          {
            percentage: "90%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Competition success",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
      {
        maxVal: 95,
        time: 20,
        label: "Positive feedbacks",
        visualParts: [
          {
            percentage: "95%",
            color: "#4f2EC9",
          },
        ],
      },
    ],
  },
];
