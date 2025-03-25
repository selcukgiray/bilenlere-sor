'use client';

import { HeroUIProvider } from '@heroui/react';
import React from 'react';

export default function ThemeProvider({ children }) {
	return (
		<HeroUIProvider
			className="h-full"
			labelPlacement="outside"
		>
			{children}
		</HeroUIProvider>
	);
}
