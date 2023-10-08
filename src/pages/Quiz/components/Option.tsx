type OptionProps = {
  userAnswer: number;
  index: number;
  isCorrect: boolean;
  label: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
};

const Option = ({
  userAnswer,
  index,
  isCorrect,
  label,
  checked,
  disabled,
  onChange,
}: OptionProps) => {
  const hasAnswer = userAnswer === index;
  const hasAnswerStyle = isCorrect ? '1px solid green' : '1px solid red';

  return (
    <div
      style={{
        display: 'flex',
        border: `${hasAnswer ? hasAnswerStyle : 'none'}`,
      }}
      key={index}
    >
      <input
        type="radio"
        id={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Option;
