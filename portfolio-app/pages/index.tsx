import styles from "../styles/Home.module.css";
import { useState } from "react";
import Card from "./components/Card";
import { cardDefault } from "./data";
import Link from "next/link";

export default function Home() {
  const [cards, setCards] = useState(cardDefault);
  return (
    <>
      <div>
        <Link href="/contact">
          <a>Go to contacts</a>
        </Link>
      </div>
      <div className={styles.container}>
        <div className="inline-flex space-x-4 ...">
          {cards.map((card) => (
            <Card text={card.text} color={card.color} setCards={setCards} />
          ))}
        </div>
      </div>
      <div>
        <p>Project cards container</p>
      </div>
      <div>
        <p>Project details container</p>
      </div>
    </>
  );
}

// container
export const ProjectCards = () => {};
// sub components
export const ProjectCard = () => {};

// container
const ProjectDetails = () => {};
//sub components
const ProjectHeader = () => {};
const ProjectBody = () => {};
const ProjectSupportingInfo = () => {};
