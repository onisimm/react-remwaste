import { Cross } from '../../icons/cross';
import { Information } from '../../icons/information';
import { Tick } from '../../icons/tick';
import { Skip } from '../../types/skips';
import { getWeeklyPrice } from './skip-list';
import { useState } from 'react';

function SkipItem({
  skip,
  isSelected,
  onSelect,
}: {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const { size, hire_period_days, allows_heavy_waste, allowed_on_road } = skip;
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const bagsEquivalent = calculateBagsForSkipSize(size);

  const showTooltip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the skip from being selected when clicking the info icon
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className={`skip ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="skip-header">
        <div className="skip-main-details">
          <h2>{size} Yard Skip</h2>
          <div className="description">{hire_period_days} days hire period</div>
        </div>

        <div
          className="info-icon-container"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onClick={showTooltip}>
          <Information size={32} />

          <div className={`info-tooltip ${tooltipVisible ? 'visible' : ''}`}>
            <div className="info-tooltip-title">Skip Capacity</div>

            <div className="info-tooltip-content">
              A {size} yard skip is equivalent to approximately:
              <div className="bag-info">
                <span className="bag-info-number">{bagsEquivalent}</span>
                <span>standard waste bags</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price-container">
        <div className="price">£{getWeeklyPrice(skip)}</div>
        <span className="description">per week</span>
      </div>

      <div className="features">
        <Feature enabled={allows_heavy_waste} label="Heavy waste allowed" />
        <Feature enabled={allowed_on_road} label="Public road placement" />
      </div>
    </div>
  );
}

function Feature({ enabled, label }: { enabled: boolean; label: string }) {
  return (
    <div className="feature">
      {enabled ? <Tick /> : <Cross />}
      <span>{label}</span>
    </div>
  );
}

function calculateBagsForSkipSize(skipSize: number) {
  return 5 * skipSize;
}

export default SkipItem;
