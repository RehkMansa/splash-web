import { SVGProps } from 'react';
import { Slot } from '../hoc/Slot';
import { cn } from '../utils';

const Icons = {
	arrowRight: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
			/>
		</svg>
	),
};

type SVGElement = SVGProps<SVGSVGElement>;
interface IconProps extends SVGElement {
	icon: keyof typeof Icons;
	size?: number;
}

export const IconSlot = ({ icon, className, size, ...props }: IconProps) => {
	const Element = Icons[icon];

	return (
		<Slot<SVGElement> width={size} height={size} {...props} className={cn(className)}>
			{Element}
		</Slot>
	);
};
