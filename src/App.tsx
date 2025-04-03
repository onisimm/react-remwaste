import './App.css';
import { StepList } from './components/step/step-list';
import Description from './components/text/description';
import Title from './components/text/title';
import headerSteps from './constants/header-steps';
import { useGetSkips } from './services/skip-service';

function App() {
  const { data: skips } = useGetSkips();

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
