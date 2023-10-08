import { useState, useEffect } from 'react';
import QUESTIONS from '../const/questions';

export type Question = {
  question: string;
  answers: string[];
  correctAnswer: number;
};

const promise = new Promise<Question[]>((resolve) => {
  setTimeout(() => {
    resolve(QUESTIONS);
  }, 1000);
});

const useFetchQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      setIsLoading(true)

      const result = await promise;

      setIsLoading(false)
      setQuestions(result);
    };

    fetchQuiz();
  }, []);

  return { isLoading, questions };
};

export default useFetchQuestions;
