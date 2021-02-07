const Card = ({ text, color, setCards }) => {
  const classColor = getColor(color);
  return (
    <div
      className={"flex-1 " + classColor}
      onClick={(e) => {
        setCards((previousCards) =>
          previousCards.map((previousCardDataAll) => ({
            ...previousCardDataAll,
            color: "gray", // this overwrites the data from previous card data all
          }))
        );
      }}
    >
      {text}
    </div>
  );
};

export const getColor = (color) => {
  if (color == "green") {
    return "bg-green-200";
  } else if (color == "purple") {
    return "bg-purple-200";
  } else if (color == "gray") {
    return "bg-gray-200";
  }
};

export default Card;
