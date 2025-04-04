import './skips.css';
import { Skip } from '../../types/skips';
import SkipItem from './skip';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useState } from 'react';
import { useNumberAnimation } from '../../hooks/useNumberAnimation';

function SkipList({ skips }: { skips: Skip[] }) {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const isMediumDevice = useMediaQuery(
    '(max-width: 1024px) and (min-width: 712px)',
  ); // Large phone or medium tablet
  const isSmallDevice = useMediaQuery('(max-width: 712px)');

  // Let's assume that the skips are 3 on desktop, 2 on large phone and 1 on small phone
  const skipsPerRowClassName = isMediumDevice
    ? 'two-skips'
    : isSmallDevice
    ? 'one-skip'
    : 'three-skips';

  // Calculate the target price when a skip is selected
  const targetPrice = selectedSkip
    ? Math.round(
        getWeeklyPrice(selectedSkip) * (selectedSkip.hire_period_days / 7),
      )
    : 0;

  // Use the split-flap animation hook for price display
  const { displayedValue: displayedPrice, isAnimating } =
    useNumberAnimation(targetPrice);

  return (
    <>
      <div className={`skip-list ${skipsPerRowClassName}`}>
        {skips.map(skip => (
          <SkipItem
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => setSelectedSkip(skip)}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="skip-selection-footer">
          <div className="skip-selection-details">
            <div className="skip-selection-name">{`${selectedSkip.size} Yard Skip`}</div>
            <div
              className={`skip-selection-price ${
                isAnimating ? 'animating' : ''
              }`}>
              £{displayedPrice}
            </div>
          </div>
          <button className="skip-continue-button">Continue</button>
        </div>
      )}
    </>
  );
}

export function getWeeklyPrice(skip: Skip): number {
  // Use price_before_vat if provided; otherwise, fall back to the sum of transport_cost and per_tonne_cost.
  const basePrice =
    skip.price_before_vat !== null
      ? skip.price_before_vat
      : (skip.transport_cost ?? 0) + (skip.per_tonne_cost ?? 0);

  const dailyPrice = basePrice / skip.hire_period_days;

  const weeklyPriceBeforeVat = dailyPrice * 7;

  const sizeFactor = skip.size * 10;

  const weeklyPriceAdjustedForSize = weeklyPriceBeforeVat + sizeFactor;

  const weeklyPrice = weeklyPriceAdjustedForSize * (1 + skip.vat / 100);

  return Math.round(weeklyPrice);
}

export default SkipList;
