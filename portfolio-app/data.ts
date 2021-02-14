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
};
const p2 = {
  text: "project 2",
};

export const all = {
  projects: [barbot, p2],
  cards: cardDefault,
};

export default barbot;
