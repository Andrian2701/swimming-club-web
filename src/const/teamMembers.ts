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
}

export const teamMembers: ITeamMember[] = [
  {
    id: 1,
    position: "Head coach",
    img: teamMember1,
    name: "Chaleb",
    surname: "Walsh",
  },
  {
    id: 2,
    position: "Head coach",
    img: teamMember2,
    name: "Evelyne",
    surname: "Foster",
  },
  {
    id: 3,
    position: "Head coach",
    img: teamMember3,
    name: "Ethan",
    surname: "Garcia",
  },
  {
    id: 4,
    position: "Assistant coach",
    img: teamMember4,
    name: "Megan",
    surname: "Fox",
  },
  {
    id: 5,
    position: "Assistant coach",
    img: teamMember5,
    name: "Liam",
    surname: "Peaty",
  },
  {
    id: 6,
    position: "Assistant coach",
    img: teamMember6,
    name: "Matthew",
    surname: "Finke",
  },
  {
    id: 7,
    position: "Technique coach",
    img: teamMember7,
    name: "Lisa",
    surname: "Watson",
  },
  {
    id: 8,
    position: "Strength & Conditioning coach",
    img: teamMember8,
    name: "Mike",
    surname: "Adams",
  },
];
