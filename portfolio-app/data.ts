export interface CardData {
  text: string;
  color: string;
  toggled: boolean;
}
export const cardDefault: CardData[] = [
  {
    text: "Interactive Technologies",
    color: "green",
    toggled: true,
  },
  {
    text: "AR/VR",
    color: "purple",
    toggled: true,
  },
  {
    text: "Machine Learning",
    color: "pink",
    toggled: true,
  },
  {
    text: "Data Science",
    color: "red",
    toggled: true,
  },
  {
    text: "Design Strategy",
    color: "yellow",
    toggled: true,
  },
  {
    text: "Environmental Design",
    color: "blue",
    toggled: true,
  },
];

const barbot = {
  text: "Barbot",
  photo: [],
  // dsFactor: 50
  // mlFactor: 10
};
const p2 = {
  text: "project 2",
};

// const projects {
//   "barbot": barbot,
//   "p2": p2
// }

// ["barbot", "p2"]
// ["gregs project", "barbot" ]

// export const cardDefault: CardData[] = [
//   machineLearning[] = [
//     p2, barbot, lksalkjf,
//   ]

//   datascience[] =[
//   barbot,
//   ]
// ];

export const all = {
  projects: [barbot, p2],
  cards: cardDefault,
};

export default barbot;
