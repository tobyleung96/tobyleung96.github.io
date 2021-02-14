import { Textfit } from "react-textfit";
import ScaleText from "react-scale-text";

const Card = ({
  text,
  color,
  toggleStatus,
  setAllToggledStatus,
  // lastClickedIndex,
  // setLastClickedIndex,
  setCards,
  index,
  allToggledStatus,
}) => {
  const classColor = getColor(color, toggleStatus);
  // const toggleStatus = toggleStatus;
  return (
    <div
      className={"flex-1 flex " + classColor}
      style={{
        height: "33vh",
        width: "14vw",
        maxHeight: "14vw",
        maxWidth: "33vh",
        padding: "0.5vw",
        // textAlign: "center",
        color: "white",
      }}
      onClick={(e) => {
        // if everything is colored in, and we click on a box:
        // -> color just that box, the others turn gray

        // else
        // -> if we click on the box that IS colored in
        // -> -> change everything to colored in
        // -> else
        // -> -> color just that box, the others turn gray
        if (allToggledStatus === true) {
          setCards((prevCards) => {
            setAllToggledStatus(false);
            return prevCards.map((prevCard, prevIndex) => {
              if (prevIndex === index) {
                return {
                  ...prevCard,
                  toggled: true, // this is what iwas previously, just nice
                };
              } else {
                return {
                  ...prevCard,
                  toggled: false,
                };
              }
            });
          });
        } else {
          setCards((prevCards) => {
            const targetCard = prevCards[index];

            if (targetCard.toggled === true) {
              const news = prevCards.map((card) => ({
                ...card,
                toggled: true,
              }));
              setAllToggledStatus(true);

              return prevCards.map((card) => ({ ...card, toggled: true }));
            } else {
              console.log("in else");
              return prevCards.map((prevCard, prevIndex) => {
                if (prevIndex === index) {
                  return {
                    ...prevCard,
                    toggled: true, // this is what iwas previously, just nice
                  };
                } else {
                  return {
                    ...prevCard,
                    toggled: false,
                  };
                }
              });
            }
          });
        }

        // console.log("lastClickedIndex1: " + lastClickedIndex);
        // setLastClickedIndex((lastClickedIndex) => 5);
        // console.log("lastClickedIndex1.5: " + lastClickedIndex);

        // setCards((previousCards) => {

        //   return previousCards.map((prevCard, prevIndex) => {
        //     if (prevIndex === index) {
        //       if (lastClickedIndex == index) {
        //         // looped over all the cards, the card recognized is the one clicked
        //         // the index also matches the last clicked one
        //         console.log("case1 triggered");
        //         setLastClickedIndex((lastClickedIndex) => 7);
        //         return {
        //           ...prevCard,
        //           toggled: true, //COME BACK TO THIS
        //         };
        //       } else {
        //         // looped over all the cards, the card recognized is the one clicked
        //         // but the index is different to the last one clicked
        //         console.log("case2 triggered");
        //         setLastClickedIndex((lastClickedIndex) => index);
        //         return {
        //           ...prevCard,
        //           toggled: true,
        //         };
        //       }
        //     } else {
        //       if (lastClickedIndex == 7) {
        //         // looped over all the cards, the card recognized is not the one clicked
        //         // the index shows that "none" were last clicked
        //         console.log("case3 triggered");
        //         return {
        //           ...prevCard,
        //           toggled: false,
        //         };
        //       } else {
        //         // looped over all the cards, the card recognized is not the one clicked
        //         // the index shows that a card was previously clicked
        //         console.log("case4 triggered");
        //         return {
        //           ...prevCard,
        //           toggled: true,
        //         };
        //       }
        //     }
        //   });
        // });
        // // console.log(e);
        // console.log("lastClickedIndex2: " + lastClickedIndex);
      }}

      // onClick={(e) => {
      //   setAllToggledStatus(
      //     (previousAllToggledStatus) => !previousAllToggledStatus,
      //     console.log("reversal complete")
      //   );

      //   setCards((previousCards) => {
      //     return previousCards.map((prevCard, prevIndex) => {
      //       // Toby version
      //       if (prevIndex === index) {
      //         // clicked on
      //         if (allToggledStatus == true) {
      //           console.log("case1 Triggered");
      //           setAllToggledStatus((previousAllToggledStatus) => false);
      //           return {
      //             ...prevCard,
      //             toggled: true,
      //           };
      //         } else {
      //           console.log("case2 Triggered");
      //           // setAllToggledStatus((previousAllToggledStatus) => true);
      //           return {
      //             ...prevCard,
      //             toggled: true,
      //           };
      //         }
      //       } else {
      //         if (allToggledStatus == true) {
      //           console.log("case3 Triggered");
      //           // setAllToggledStatus((previousAllToggledStatus) => false);
      //           return {
      //             ...prevCard,
      //             toggled: true,
      //           };
      //         } else {
      //           console.log("case4 Triggered");
      //           return {
      //             ...prevCard,
      //             toggled: false,
      //           };
      //         }
      //       }
      //     });
      //   });

      //   console.log(allToggledStatus);
      //   // setAllToggledStatus((previousAllToggledStatus) =>
      //   // if ()
      //   // true);
      // }}
      // //greg help
      // onClick={(e) => {
      //   setCards((previousCards) =>
      //     previousCards.map((previousCardDataAll) => ({
      //       ...previousCardDataAll,
      //       color: "gray", // this overwrites the data from previous card data all
      //     }))
      //   );
      // }}
    >
      <ScaleText mode="multi">{text}</ScaleText>
    </div>
  );
};

export const getColor = (color, toggleStatus) => {
  // if (color == "green") {
  //   return "bg-green-400";
  // } else if (color == "purple") {
  //   return "bg-purple-400";
  // } else if (color == "pink") {
  //   return "bg-pink-400";
  // } else if (color == "red") {
  //   return "bg-red-400";
  // } else if (color == "yellow") {
  //   return "bg-yellow-400";
  // } else if (color == "blue") {
  //   return "bg-blue-400";
  // } else if (color == "gray") {
  //   return "bg-gray-400";
  // }
  // console.log(toggleStatus);
  if (toggleStatus == true) {
    if (color == "green") {
      return "bg-green-400";
    } else if (color == "purple") {
      return "bg-purple-400";
    } else if (color == "pink") {
      return "bg-pink-400";
    } else if (color == "red") {
      return "bg-red-400";
    } else if (color == "yellow") {
      return "bg-yellow-400";
    } else if (color == "blue") {
      return "bg-blue-400";
    }
  } else {
    return "bg-gray-400";
  }
};

export default Card;

// // greg version
// if (prevIndex === index) {
//   // check if i've been clicked once (another useState())
//   // if clickedOnce == true
//   return {
//     ...prevCard,
//     toggled: true,
//   };
// } else {
//   return {
//     ...prevCard,
//     toggled: false,
//   };
// }

// setAllToggledStatus(
//   // (previousAllToggledStatus) => !previousAllToggledStatus
//   (previousAllToggledStatus) => false
// );
