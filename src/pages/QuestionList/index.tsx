import useQuestionsSubmissions, {
  Question,
  Submission,
} from './hooks/useQuestionsSubmissions';
import Category from './components/Category';
import styles from './index.module.css';

function getQuestionsByCategory(questions: Question[]) {
  const questionsByCategory: Record<string, Question[]> = {};

  for (const question of questions) {
    const { category } = question;

    if (!(category in questionsByCategory)) {
      questionsByCategory[category] = [];
    }

    questionsByCategory[category].push(question);
  }

  return questionsByCategory;
}

function getSubmissionsByQuestion(submissions: Submission[]) {
  const submissionsByQuestion: Record<string, string> = {};

  for (const submission of submissions) {
    const { questionId, status } = submission;
    submissionsByQuestion[questionId] = status;
  }

  return submissionsByQuestion;
}

function QuestionList() {
  const { isLoading, questions, submissions } = useQuestionsSubmissions();
  const questionsByCategory = getQuestionsByCategory(questions);
  const submissionsByQuestion = getSubmissionsByQuestion(submissions);
  const categories = Object.keys(questionsByCategory);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.root}>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          questions={questionsByCategory[category]}
          submissionsByQuestion={submissionsByQuestion}
        />
      ))}
    </div>
  );
}

export default QuestionList;
