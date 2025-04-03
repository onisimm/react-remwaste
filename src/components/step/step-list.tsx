import './steps.css';
import { Fragment } from 'react';
import Step from './step';
import StepDivider from './step-divider';
import { StepItem } from '../../types/steps';

export function StepList({
  steps,
  currentStep,
}: {
  steps: StepItem[];
  currentStep: number;
}) {
  return (
    <div className="step-list">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <Step
            step={step}
            isCompleted={index < currentStep}
            isCurrent={index === currentStep}
          />
          {index < steps.length - 1 && (
            <StepDivider isPreviousCompleted={index < currentStep} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default StepList;
