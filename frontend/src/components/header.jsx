'use client';

import React from 'react';

import Link from 'next/link';
import Container from '@/components/container';
import { Button } from '@heroui/button';
import { IconPlus } from '@tabler/icons-react';

import HeaderUserMenu from '@/components/header-user-menu';
import HeaderMenu from '@/components/header-menu';
import { useAuth } from '@/context/auth-context';

export default function Header() {
	const { token } = useAuth();
	return (
		<header className="sticky top-0 left-0 bg-white z-50 flex items-center border-b bg-white/30 backdrop-blur-md px-4 w-full">
			<Container className="flex items-center justify-between h-20">
				<div className="flex items-center gap-16">
					<Link href="/">LOGO</Link>
					<HeaderMenu />
				</div>
				<div className="flex gap-4">
					{token ? (
						<>
							<Button
								className="hidden md:flex"
								color="primary"
								startContent={<IconPlus size={20} />}
							>
								Soru Sor
							</Button>

							<HeaderUserMenu />
						</>
					) : (
						<>
							<Link href="/giris-yap">
								<Button variant="bordered">Giriş Yap</Button>
							</Link>
							<Link href="/kayit-ol">
								<Button color="primary">Hesap Oluştur</Button>
							</Link>
						</>
					)}
				</div>
			</Container>
		</header>
	);
}
