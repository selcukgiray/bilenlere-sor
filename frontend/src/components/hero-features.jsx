import {
	IconBrain,
	IconHeartHandshake,
	IconInfinity,
} from '@tabler/icons-react';
import React from 'react';

export default function HeroFeatures() {
	const features = [
		{
			icon: <IconInfinity />,
			color: 'text-warning',
			title: 'Sınırsız Soru',
		},
		{
			icon: <IconBrain />,
			color: 'text-primary',
			title: 'Geniş Uzman Ağı',
		},
		{
			icon: <IconHeartHandshake />,
			color: 'text-success',
			title: 'Kesintisiz Yardım',
		},
	];
	return (
		<div className="flex flex-wrap justify-center items-center gap-8">
			{features.map((feature, index) => (
				<div
					key={index}
					className="flex items-center gap-2 text-sm text-gray-600"
				>
					<span className={feature.color}>{feature.icon}</span>
					{feature.title}
				</div>
			))}
		</div>
	);
}
