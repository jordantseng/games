import Col from "./Col";

type RowType = {
  answer: string;
  guess: string;
  isComplete: boolean;
};

const WORD_LENGTH = 5;

const Row = ({ answer, guess, isComplete }: RowType) => {
  const word = Array(WORD_LENGTH).fill('');

  return (
    <div style={{ display: "flex" }}>
      {word.map((_, index) => (
        <Col
          key={index}
          answer={answer}
          char={guess[index]}
          index={index}
          isComplete={isComplete}
        />
      ))}
    </div>
  );
};

export default Row;
