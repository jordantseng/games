import { useEffect, useState } from 'react';

import QUESTIONS from '../const/questions';
import SUBMISSIONS from '../const/submissions';

export type Question = {
  id: string;
  name: string;
  category: string;
};

export type Submission = {
  questionId: string;
  status: string;
};

const promise1 = new Promise<Question[]>((resolve) => {
  setTimeout(() => {
    resolve(QUESTIONS);
  }, 1000);
});

const promise2 = new Promise<Submission[]>((resolve) => {
  setTimeout(() => {
    resolve(SUBMISSIONS);
  }, 1500);
});

const useQuestionsSubmissions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const [questions, submissions] = await Promise.all([promise1, promise2]);

      setQuestions(questions);
      setSubmissions(submissions);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    isLoading,
    questions,
    submissions,
  };
};

export default useQuestionsSubmissions;
