import { Cross } from '../../icons/cross';
import { Tick } from '../../icons/tick';
import { Skip } from '../../types/skips';
import { getWeeklyPrice } from './skip-list';

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

  return (
    <div className={`skip ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="skip-header">
        <h2>{size} Yard Skip</h2>
        <div className="description">{hire_period_days} days hire period</div>
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

export default SkipItem;
