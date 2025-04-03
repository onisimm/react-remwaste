type StepDividerProps = {
  isPreviousCompleted: boolean;
};

const StepDivider = ({ isPreviousCompleted }: StepDividerProps) => {
  return (
    <div
      className={`step-divider ${
        isPreviousCompleted ? 'completed' : ''
      }`}></div>
  );
};

export default StepDivider;
