import './steps.css';
import { Fragment } from 'react';
import Step from './step';
import StepDivider from './step-divider';
import { StepItem } from '../../types/steps';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function StepList({
  steps,
  currentStep,
}: {
  steps: StepItem[];
  currentStep: number;
}) {
  // Usually i would use 768px, but the desktop design doesn't really look good on 768px
  const isMobile = useMediaQuery('(max-width: 854px)');

  if (isMobile) {
    const progressPercentage = ((currentStep + 1) / steps.length) * 100;

    return (
      <div className="step-list-mobile">
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="step-counter-mobile">
          <span className="step-count">{currentStep + 1}</span>
          <span className="step-separator">/</span>
          <span className="step-count">{steps.length}</span>
        </div>
        <Step step={steps[currentStep]} isCompletedOrCurrent={true} />
      </div>
    );
  }

  return (
    <div className="step-list">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <Step step={step} isCompletedOrCurrent={index <= currentStep} />
          {index < steps.length - 1 && (
            <StepDivider isPreviousCompleted={index < currentStep} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default StepList;
