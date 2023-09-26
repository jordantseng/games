import { Question as TQuestion } from '../hooks/useQuestionsSubmissions';
import styles from '../index.module.css';

type QuestionProps = {
  question: TQuestion;
  submissionsByQuestion: Record<string, string>;
};

const Question = ({ question, submissionsByQuestion }: QuestionProps) => {
  const status = submissionsByQuestion[question.id];
  const statusClass = status
    ? status.toLowerCase().replace('_', '-')
    : 'unattempted';

  return (
    <div className={styles.question}>
      <div className={`${styles.status} ${styles[statusClass]}`}></div>
      <h3>{question.name}</h3>
    </div>
  );
};

export default Question;
