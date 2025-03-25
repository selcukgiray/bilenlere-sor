'use client';

import Container from '@/components/container';
import { Widget, WidgetHeader, WidgetTitle } from '@/components/widget';
import { useAuth } from '@/context/auth-context';
import { Avatar } from '@heroui/avatar';
import React from 'react';

export default function ProfilePage() {
	const { user } = useAuth();
	return (
		<div className="h-full">
			<Container className="py-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-8 rounded-large border p-6 shadow bg-white">
						<div className="flex gap-4">
							<div>
								<Avatar
									isBordered
									src="https://avatars.githubusercontent.com/u/80980937?v=4"
									className="w-32 h-32"
								/>
							</div>
							<div>
								<span className="font-semibold text-2xl">
									Selçuk Giray
								</span>
								<p className="text-sm text-gray-600">
									@selcukgiray_
								</p>
							</div>
						</div>
						<div>
							<p>• i love developing web applications</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex flex-col gap-4 w-full md:w-80">
							<Widget>
								<WidgetHeader>
									<WidgetTitle>En İyi Etiketler</WidgetTitle>
								</WidgetHeader>
							</Widget>
						</div>
						<div className="flex flex-col flex-1 gap-8">
							<Widget>
								<WidgetHeader>
									<WidgetTitle>Son Sorular</WidgetTitle>
								</WidgetHeader>
							</Widget>
							<Widget>
								<WidgetHeader>
									<WidgetTitle>Son Cevaplar</WidgetTitle>
								</WidgetHeader>
							</Widget>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
