import './App.css';
import SkipList from './components/skip/skip-list';
import { StepList } from './components/step/step-list';
import Description from './components/text/description';
import Title from './components/text/title';
import { defaultSkips } from './constants/default-skips';
import headerSteps from './constants/header-steps';
import { useGetSkips } from './services/skip-service';

function App() {
  const { data: skips } = useGetSkips();

  // If the skips are not loaded (yet), use the default skips as placeholder
  const skipsToRender = skips && skips.length > 0 ? skips : defaultSkips;

  return (
    <div className="app">
      <div className="padding-container">
        <StepList steps={headerSteps} currentStep={2} />

        <div className="text-container">
          <Title>Choose Your Skip Size</Title>
          <Description>
            Select the skip size that best suits your needs
          </Description>
        </div>

        <SkipList skips={skipsToRender} />
      </div>
    </div>
  );
}

export default App;
