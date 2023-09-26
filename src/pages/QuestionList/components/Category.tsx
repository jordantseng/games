import { Question as TQuestion } from '../hooks/useQuestionsSubmissions';
import Question from './Question';
import styles from '../index.module.css';

type CategoryProps = {
  category: string;
  questions: TQuestion[];
  submissionsByQuestion: Record<string, string>;
};

const Category = ({
  category,
  questions,
  submissionsByQuestion,
}: CategoryProps) => {
  const totalNum = questions.length;
  const correctNum = questions.reduce((num, question) => {
    if (submissionsByQuestion[question.id] === 'CORRECT') {
      num += 1;
    }

    return num;
  }, 0);

  return (
    <div className={styles.category}>
      <h2>
        {category} - {correctNum} / {totalNum}
      </h2>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          submissionsByQuestion={submissionsByQuestion} />
      ))}
    </div>
  );
};

export default Category;
