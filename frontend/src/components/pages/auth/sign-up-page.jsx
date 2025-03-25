import SignUpForm from '@/components/forms/sign-up-form';
import Link from 'next/link';

import React from 'react';

export default function SignUpPage() {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 h-full">
			<div className="md:flex hidden bg-primary"></div>

			<div className="flex items-center justify-center p-8 md:p-20">
				<div className="flex flex-col flex-1 gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-2xl">Kayıt Ol</h1>
						<p className="text-default-600">
							Bilene Sor'a kayıt ol, sorularını sor veya bilgini
							paylaş. Topluluğumuzun bir parçası ol 😊
						</p>
					</div>
					<SignUpForm />
					<p className="text-sm text-center">
						Hesabınız var mı?{' '}
						<Link
							href="/giris-yap"
							className="font-semibold text-primary"
						>
							Giriş Yap
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
