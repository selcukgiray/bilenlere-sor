import { Spinner } from '@heroui/spinner';
import React from 'react';

export default function CenterLoader() {
	return (
		<div className="h-screen flex items-center justify-center">
			<Spinner />
		</div>
	);
}
