import React from "react";
import { Spring } from "react-spring/renderprops.cjs";
import styles from "../../styles/Home.module.css";
import Card from "./Card";
import { useState } from "react";
import { cardDefault } from "../../data";

// const t = (params) => {
//   return [1,2];
// }

// const [c,d] = t(12345);
// const e = t(1245);
// e[0] e[1]

const ProjectCards = () => {
  const [cards, setCards] = useState(cardDefault);
  // const [toggle, setToggle] = useState(false);
  // const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [allToggledStatus, setAllToggledStatus] = useState(true);

  // const [lastClickedIndex, setLastClickedIndex] = useState(7);
  // var allToggledStatus = true;

  // const toggler = (previousToggleStatus, allToggledStatus) => {
  //   // Case 1: a card is clicked, all toggles are on and everything is colored
  //   if (allToggledStatus == true && previousToggleStatus == true) {
  //     allToggledStatus = false;
  //   }
  //   // Case 2: the same (and only) object that is currently clicked
  //   // has already been toggled; meaning to retract all to inital
  //   // everything colored state
  //   else if (allToggledStatus == false && previousToggleStatus == true) {
  //     allToggledStatus = true;
  //   }
  //   // Case 3: a new object is being clicked from the one that was
  //   // initially toggled; meaning to retract old and set new
  //   else if (allToggledStatus == false && previousToggleStatus == false) {
  //     allToggledStatus = false;
  //   }
  // };

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
                  // setToggle={toggler}
                  index={index}
                  allToggledStatus={allToggledStatus}
                  setAllToggledStatus={setAllToggledStatus}
                  // lastClickedIndex={lastClickedIndex}
                  // setLastClickedIndex={setLastClickedIndex}
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
