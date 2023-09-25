import { useEffect, useReducer } from "react";
import useFetchAnswer from "./hooks/useFetchSolution";
import Row from "./components/Row";

const NUM_GUESSES = 6;
const WORD_LENGTH = 5;

type State = {
  guesses: string[];
  currentGuess: string;
};

type Action = {
  key: string;
};

const reducer = (state: State, action: Action) => {
  const { key } = action;
  const { guesses, currentGuess } = state;

  switch (key) {
    case "Backspace":
      return {
        guesses,
        currentGuess: currentGuess.slice(0, -1),
      };

    case "Enter": {
      if (currentGuess.length !== WORD_LENGTH) {
        return state;
      }

      const index = guesses.findIndex((guess) => !guess);

      const newGuesses = [...guesses];

      newGuesses[index] = currentGuess;

      return {
        guesses: newGuesses,
        currentGuess: "",
      };
    }

    default: {
      const charCode = key.toLowerCase().charCodeAt(0);
      const isLetter =
        key.length === 1 &&
        "a".charCodeAt(0) <= charCode &&
        charCode <= "z".charCodeAt(0);

      if (currentGuess.length < WORD_LENGTH && isLetter) {
        return {
          guesses,
          currentGuess: currentGuess + key.toLocaleLowerCase(),
        };
      }

      return state;
    }
  }
};

const Wordle = () => {
  const answer = useFetchAnswer();
  const [{ guesses, currentGuess }, dispatch] = useReducer(reducer, {
    guesses: Array(NUM_GUESSES).fill(""),
    currentGuess: "",
  });

  useEffect(() => {
    if (!answer) {
      return;
    }

    const handleKeydown = (e: KeyboardEvent) => {
      dispatch({ key: e.key });
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [answer]);

  if (!answer) {
    return null;
  }

  const currentRowIndex = guesses.findIndex((guess) => !guess);

  return (
    <>
      {guesses.map((guess, index) => (
        <Row
          key={index}
          answer={answer}
          guess={currentRowIndex === index ? currentGuess : guess}
          isComplete={guess.length === WORD_LENGTH}
        />
      ))}
    </>
  );
};

export default Wordle;
