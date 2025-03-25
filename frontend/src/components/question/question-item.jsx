import { Chip } from '@heroui/chip';
import { User } from '@heroui/user';
import { IconClock, IconMessageCircle } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export default function QuestionItem() {
	return (
		<div className="group p-6 rounded-large transition-all border hover:border-primary hover:shadow-primary">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-4">
					<Link
						href="/"
						className="text-lg font-semibold group-hover:text-primary"
					>
						Node.js ve Express ile REST API nasıl oluşturulur?
					</Link>
					<p className="text-sm text-gray-600 line-clamp-2">
						Node.js ve Express kullanarak bir REST API geliştirmek
						istiyorum. Temel CRUD işlemleri için route'ları nasıl
						yapılandırmalıyım? Middleware kullanımı hakkında da
						bilgi verebilir misiniZ?
					</p>
					<div className="flex flex-wrap gap-2">
						<Chip
							variant="flat"
							size="sm"
						>
							next.js
						</Chip>
						<Chip
							variant="flat"
							size="sm"
						>
							javascript
						</Chip>
						<Chip
							variant="flat"
							size="sm"
						>
							html
						</Chip>
					</div>
				</div>
				<div className="flex flex-wrap gap-4 items-center justify-between">
					<div className="flex items-center flex-wrap gap-4">
						<div className="flex items-center gap-2 text-gray-600 text-sm">
							<span className="*:w-5 *:h-5">
								<IconClock />
							</span>
							<span>8 saat önce</span>
						</div>
						<div className="flex items-center gap-2 text-gray-600 text-sm">
							<span className="*:w-5 *:h-5">
								<IconMessageCircle />
							</span>
							<span>7 Yorum</span>
						</div>
					</div>
					<User
						name="Selçuk Giray"
						avatarProps={{
							src: 'https://avatars.githubusercontent.com/u/80980937?v=4',
							alt: 'Selçuk Giray',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
