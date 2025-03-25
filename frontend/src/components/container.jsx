import { cva, cx } from 'class-variance-authority';
import React from 'react';

export default function Container({ children, className, size, ...props }) {
	const containerVariants = cva('w-full mx-auto', {
		variants: {
			size: {
				sm: 'max-w-screen-sm',
				md: 'max-w-screen-md',
				lg: 'max-w-screen-lg',
				xl: 'max-w-screen-xl',
			},
		},
		defaultVariants: {
			size: 'xl',
		},
	});

	return (
		<div
			className={containerVariants({ size, className })}
			{...props}
		>
			{children}
		</div>
	);
}
