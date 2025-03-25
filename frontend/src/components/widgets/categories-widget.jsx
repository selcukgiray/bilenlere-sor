import React from 'react';
import {
	Widget,
	WidgetBody,
	WidgetHeader,
	WidgetTitle,
} from '@/components/widget';

export default function CategoriesWidget() {
	return (
		<Widget>
			<WidgetHeader>
				<WidgetTitle>Kategoriler</WidgetTitle>
			</WidgetHeader>
			<WidgetBody>kategorilerin listesi</WidgetBody>
		</Widget>
	);
}
