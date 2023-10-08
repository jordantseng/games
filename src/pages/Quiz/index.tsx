import Questions from './components/Questions';
import useFetchQuestions from './hooks/useFetchQuestions';

const Quiz = () => {
  const { isLoading, questions } = useFetchQuestions();

  if (isLoading || questions.length === 0) {
    return null;
  }

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Questions questions={questions} />
    </main>
  );
};

export default Quiz;
