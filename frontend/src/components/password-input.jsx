'use client';

import { Input } from '@heroui/react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useState } from 'react';

export default function PasswordInput({ className, ref, ...props }) {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<Input
			type={isVisible ? 'text' : 'password'}
			className={className}
			ref={ref}
			{...props}
			endContent={
				<button
					aria-label="toggle password visibility"
					className="text-default-600 focus:outline-none"
					type="button"
					onClick={toggleVisibility}
				>
					{isVisible ? (
						<IconEye size={20} />
					) : (
						<IconEyeOff size={20} />
					)}
				</button>
			}
		/>
	);
}
