import { useState } from 'react';

import Option from './Option';
import { Question } from '../hooks/useFetchQuestions';

type QuestionsProps = {
  questions: Question[];
};

const Questions = ({ questions }: QuestionsProps) => {
  const [userAnswer, setUserAnswer] = useState<Record<string, number>>({});
  const [page, setPage] = useState(0);

  const { question, answers, correctAnswer } = questions[page];
  const isFirstPage = page === 0;
  const isLastPage = page === questions.length - 1;
  const isFinish = Object.values(userAnswer).length === questions.length;

  const renderFinalResult = () => {
    const correctCount = Object.entries(userAnswer).reduce((count, answer) => {
      const [number, result] = answer;

      if (questions[parseInt(number)].correctAnswer === result) {
        count += 1;
      }

      return count;
    }, 0);

    return `${correctCount} / ${questions.length}`;
  };

  return (
    <div key={page} style={{ width: '50%' }}>
      <h1>{`${page + 1}. ${question}`}</h1>
      <div style={{ padding: '8px 0px' }}>
        {answers.map((answer, index) => (
          <Option
            index={index}
            label={answer}
            userAnswer={userAnswer[page]}
            isCorrect={correctAnswer === userAnswer[page]}
            checked={index === userAnswer[page]}
            disabled={page in userAnswer}
            onChange={() => {
              setUserAnswer({ ...userAnswer, [page]: index });
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button disabled={isFirstPage} onClick={() => setPage(page - 1)}>
          Back
        </button>
        <button disabled={isLastPage} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      {isFinish && (
        <h3>You finish the test! Your score: {renderFinalResult()}</h3>
      )}
    </div>
  );
};

export default Questions;
