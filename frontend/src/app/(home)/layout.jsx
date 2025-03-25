import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

export default function HomeLayout({ children }) {
	return (
		<div className="flex flex-col h-full">
			<Header />
			<main className="flex-1">{children}</main>
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
}
