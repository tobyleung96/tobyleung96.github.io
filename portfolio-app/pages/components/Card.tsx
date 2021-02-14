import { Textfit } from "react-textfit";
import ScaleText from "react-scale-text";

const highlightSingleCard = (prevCards: any, index: number) => {
  return prevCards.map((prevCard, prevIndex) => {
    if (prevIndex === index) {
      return {
        ...prevCard,
        toggled: true,
      };
    } else {
      return {
        ...prevCard,
        toggled: false,
      };
    }
  });
};

const Card = ({
  text,
  color,
  toggleStatus,
  setAllToggledStatus,
  setCards,
  index,
  allToggledStatus,
}) => {
  const classColor = getColor(color, toggleStatus);
  return (
    <div
      className={"flex-1 flex " + classColor}
      style={{
        height: "33vh",
        width: "14vw",
        maxHeight: "14vw",
        maxWidth: "33vh",
        padding: "0.5vw",
        color: "white",
      }}
      onClick={(e) => {
        if (allToggledStatus === true) {
          setCards((prevCards) => {
            setAllToggledStatus(false);
            return highlightSingleCard(prevCards, index);
          });
        } else {
          setCards((prevCards) => {
            const targetCard = prevCards[index];
            if (targetCard.toggled === true) {
              setAllToggledStatus(true);
              return prevCards.map((card) => ({ ...card, toggled: true }));
            } else {
              return highlightSingleCard(prevCards, index);
            }
          });
        }
      }}
    >
      <ScaleText mode="multi">{text}</ScaleText>
    </div>
  );
};

export const getColor = (color, toggleStatus) => {
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
