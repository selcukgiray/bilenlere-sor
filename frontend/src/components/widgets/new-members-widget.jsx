import React from 'react';
import {
	Widget,
	WidgetBody,
	WidgetHeader,
	WidgetTitle,
} from '@/components/widget';
import { User } from '@heroui/user';

export default function NewMembersWidget() {
	const users = [
		{
			avatarSrc: 'https://avatars.githubusercontent.com/u/80980937?v=4',
			name: 'Selçuk Giray',
		},
		{
			avatarSrc: 'https://avatars.githubusercontent.com/u/80980937?v=4',
			name: 'Emre Çelik',
		},
		{
			avatarSrc: 'https://avatars.githubusercontent.com/u/80980937?v=4',
			name: 'Bahar Sezen Şimşir',
		},
		{
			avatarSrc: 'https://avatars.githubusercontent.com/u/80980937?v=4',
			name: 'Murat Yıldırım',
		},
		{
			avatarSrc: 'https://avatars.githubusercontent.com/u/80980937?v=4',
			name: 'Fuat Yılmaz',
		},
	];
	return (
		<Widget>
			<WidgetHeader>
				<WidgetTitle>Yeni Üyeler</WidgetTitle>
			</WidgetHeader>
			<WidgetBody className="flex flex-col items-start gap-4">
				{users.map((user, index) => (
					<User
						key={index}
						avatarProps={{
							src: user.avatarSrc,
						}}
						name={user.name}
					/>
				))}
			</WidgetBody>
		</Widget>
	);
}
