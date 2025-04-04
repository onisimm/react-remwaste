import { IconPropsWithClassName } from '../types/icon';

export function Tick({
  color = '#2bb92b',
  size = 24,
  ...props
}: IconPropsWithClassName) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 14l3.5 3.5L19 6.5"
        color="currentColor"></path>
    </svg>
  );
}
