import SignInForm from '@/components/forms/sign-in-form';
import { Input } from '@heroui/input';
import Link from 'next/link';
import React from 'react';

export default function SignInPage() {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 h-full">
			<div className="md:flex hidden bg-primary"></div>
			<div className="flex items-center justify-center p-8 md:p-20">
				<div className="flex flex-col flex-1 gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-2xl">Giriş Yap </h1>
						<p className="text-default-600">
							Hesabına giriş yap, sorularını sor veya cevapla.
						</p>
					</div>
					<SignInForm />
					<p className="text-sm text-center">
						Hesabınız yok mu?{' '}
						<Link
							href="/kayit-ol"
							className="font-semibold text-primary"
						>
							Hesap Oluştur
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
