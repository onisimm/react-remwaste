import './App.css';
import { StepList } from './components/step-list';
import headerSteps from './constants/header-steps';

function App() {
  return (
    <div className="app">
      <StepList steps={headerSteps} currentStep={2} />
    </div>
  );
}

export default App;
