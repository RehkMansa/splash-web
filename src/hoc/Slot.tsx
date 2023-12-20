import React, { ReactElement } from 'react';

type SlotProps<Type> = {
	children: ReactElement<Type>;
} & Type;

export const Slot = <Type,>({ children, ...rest }: SlotProps<Type>) => {
	const clonedChildren = React.Children.map(children, (child: ReactElement) =>
		React.cloneElement(child, { ...rest })
	);

	return clonedChildren;
};
