import './steps.css';
import { StepItem } from '../../types/steps';

export function Step({
  step,
  isCompletedOrCurrent,
}: {
  step: StepItem;
  isCompletedOrCurrent: boolean;
}) {
  const { icon: Icon, text } = step;

  return (
    <div className="step">
      {Icon && (
        <div className="step-icon">
          <Icon color={isCompletedOrCurrent ? 'blue' : 'grey'} />
        </div>
      )}
      <text
        className={isCompletedOrCurrent ? 'complete-step' : 'incomplete-step'}>
        {text}
      </text>
    </div>
  );
}

export default Step;
