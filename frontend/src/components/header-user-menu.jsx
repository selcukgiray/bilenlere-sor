'use client';

import { useAuth } from '@/context/auth-context';
import {
	Dropdown,
	DropdownTrigger,
	DropdownItem,
	DropdownMenu,
	Avatar,
} from '@heroui/react';
import { IconLogout, IconUser } from '@tabler/icons-react';

import React from 'react';

export default function HeaderUserMenu() {
	const { user } = useAuth();

	const iconClasses = 'pointer-events-none flex-shrink-0';
	return (
		<Dropdown>
			<DropdownTrigger className="cursor-pointer">
				<Avatar
					src="https://avatars.githubusercontent.com/u/80980937?v=4"
					fallback={user.name}
				/>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem
					variant="flat"
					startContent={
						<IconUser
							size={20}
							className={iconClasses}
						/>
					}
				>
					Profil
				</DropdownItem>

				<DropdownItem
					key="delete"
					className="text-danger"
					color="danger"
					startContent={
						<IconLogout
							size={20}
							className={iconClasses}
						/>
					}
				>
					Çıkış Yap
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
