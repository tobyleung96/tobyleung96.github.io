import styles from "../styles/Home.module.css";
import { useState } from "react";
import Card from "./components/Card";
import { cardDefault } from "../data";
import NavBar from "./components/NavBar";
import ProjectCards from "./components/ProjectCards";

export default function Home() {
  // const [cards, setCards] = useState(cardDefault);
  return (
    <>
      <NavBar></NavBar>
      <div className={styles.projectCardsDiv}>
        <ProjectCards></ProjectCards>
      </div>
    </>
  );
}

// // container
// // export const ProjectCards = () => {};
// // sub components
// export const ProjectCard = () => {};

// // container
// const ProjectDetails = () => {};
// //sub components
// const ProjectHeader = () => {};
// const ProjectBody = () => {};
// const ProjectSupportingInfo = () => {};

//       {/* <div className={styles.container}>
//         <div className="inline-flex space-x-4 ...">
//           {cards.map((card) => (
//             <Card text={card.text} color={card.color} setCards={setCards} />
//           ))}
//         </div>
//       </div> */}

//       <div>
//       <p>Project cards container</p>
//     </div>
//     <div>
//       <p>Project details container</p>
//     </div>
