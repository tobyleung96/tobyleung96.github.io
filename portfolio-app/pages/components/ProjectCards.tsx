import React from "react";
import { Spring } from "react-spring/renderprops.cjs";
import styles from "../../styles/Home.module.css";
import Card from "./Card";
import { useState } from "react";
import { cardDefault } from "../../data";

const ProjectCards = () => {
  const [cards, setCards] = useState(cardDefault);
  const [allToggledStatus, setAllToggledStatus] = useState(true);

  return (
    <div className="projectCardContainer">
      <Spring
        from={{ opacity: 0, marginTop: -1000 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <div className={styles.projectCardBox} style={props}>
            <div
              style={{
                gap: "1.2vw",
                width: "90vw",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="flex ..."
            >
              {cards.map((card, index) => (
                <Card
                  text={card.text}
                  color={card.color}
                  toggleStatus={card.toggled}
                  setCards={setCards}
                  index={index}
                  allToggledStatus={allToggledStatus}
                  setAllToggledStatus={setAllToggledStatus}
                />
              ))}
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default ProjectCards;
