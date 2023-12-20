import clsx, { ClassArray } from 'clsx';
import { twJoin } from 'tailwind-merge';

export const cn = (...inputs: ClassArray) => {
	return twJoin(clsx(inputs));
};
