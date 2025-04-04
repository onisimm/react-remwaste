import { IconPropsWithClassName } from '../types/icon';

export function Cross({
  color = '#c92323',
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
        d="m6 6l12 12m0-12L6 18"
        strokeWidth={1}></path>
    </svg>
  );
}
