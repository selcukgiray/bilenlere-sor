import React from 'react';
import {
	Widget,
	WidgetBody,
	WidgetHeader,
	WidgetTitle,
} from '@/components/widget';
import { Chip } from '@heroui/chip';

export default function TagsWidget() {
	const tags = [
		{
			title: 'next.js',
		},
		{
			title: 'react',
		},
		{
			title: 'javascript',
		},
		{
			title: 'css',
		},
		{
			title: 'web geliştirme',
		},
	];
	return (
		<Widget>
			<WidgetHeader>
				<WidgetTitle>Etiketler</WidgetTitle>
			</WidgetHeader>
			<WidgetBody className="flex flex-wrap gap-2">
				{tags.map((tag, index) => (
					<Chip
						key={index}
						variant="flat"
					>
						{tag.title}
					</Chip>
				))}
			</WidgetBody>
		</Widget>
	);
}
