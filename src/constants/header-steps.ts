import { Calendar } from '../icons/calendar';
import { CreditCard } from '../icons/credit-card';
import { LocationPin } from '../icons/location-pin';
import { Shield } from '../icons/shield';
import { Trash } from '../icons/trash';
import { Van } from '../icons/van';
import { StepItem } from '../types/steps';

const steps: StepItem[] = [
  { text: 'Postcode', icon: LocationPin },
  { text: 'Waste Type', icon: Trash },
  { text: 'Select Skip', icon: Van },
  { text: 'Permit Check', icon: Shield },
  { text: 'Choose Date', icon: Calendar },
  { text: 'Payment', icon: CreditCard },
];

export default steps;
