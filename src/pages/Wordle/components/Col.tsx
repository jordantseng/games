type ColProps = {
  answer: string;
  char: string;
  index: number;
  isComplete: boolean;
};

const Col = ({ answer, char, index, isComplete }: ColProps) => {
  let style = {};

  if (answer[index] === char) {
    style = {
      backgroundColor: "green",
    };
  } else if (answer.includes(char)) {
    style = {
      backgroundColor: "yellow",
    };
  } else {
    style = {
      backgroundColor: "gray",
    };
  }

  return (
    <div
      key={index}
      style={{
        border: "1px solid",
        padding: 10,
        margin: 10,
        width: 20,
        height: 20,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        ...(isComplete && style),
      }}
    >
      {char}
    </div>
  );
};

export default Col;
