import './steps.css';
import { StepItem } from '../../types/steps';

export function Step({
  step,
  isCompleted,
  isCurrent,
}: {
  step: StepItem;
  isCompleted: boolean;
  isCurrent: boolean;
}) {
  const { icon: Icon, text } = step;

  return (
    <div className="step">
      {Icon && (
        <div className="step-icon">
          <Icon color={isCompleted ? 'blue' : 'grey'} />
        </div>
      )}
      <text
        className={
          isCompleted
            ? 'complete-step'
            : isCurrent
            ? 'current-step'
            : 'incomplete-step'
        }>
        {text}
      </text>
    </div>
  );
}

export default Step;
