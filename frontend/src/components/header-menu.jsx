import Link from 'next/link';
import React from 'react';

export default function HeaderMenu() {
	const menus = [
		{
			title: 'Anasayfa',
		},
		{
			title: 'Sorular',
		},
		{
			title: 'Kategoriler',
		},
	];

	return (
		<nav className="hidden md:flex items-center gap-8">
			{menus.map((menu, index) => (
				<Link
					key={index}
					href="/"
					className="text-sm text-gray-600 transition-all hover:text-primary"
				>
					{menu.title}
				</Link>
			))}
		</nav>
	);
}
