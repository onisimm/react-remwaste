import { SVGProps } from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  props?: SVGProps<SVGSVGElement>;
}

export interface IconPropsWithClassName extends IconProps {
  className?: string;
}
