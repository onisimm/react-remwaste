import './App.css';
import { StepList } from './components/steps/step-list';
import Description from './components/text/description';
import Title from './components/text/title';
import headerSteps from './constants/header-steps';

function App() {
  return (
    <div className="app">
      <StepList steps={headerSteps} currentStep={2} />

      <div className="text-container">
        <Title>Choose Your Skip Size</Title>
        <Description>
          Select the skip size that best suits your needs
        </Description>
      </div>
    </div>
  );
}

export default App;
