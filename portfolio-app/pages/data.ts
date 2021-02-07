export interface CardData {
  text: string;
  color: string;
}
export const cardDefault: CardData[] = [
  {
    text: "Interactive tech",
    color: "green",
  },
  {
    text: "AR VR",
    color: "purple",
  },
  {
    text: "machine learning",
    color: "purple",
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

all.projects[0].text;
