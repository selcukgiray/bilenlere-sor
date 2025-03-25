'use client';

import { Button, Input } from '@heroui/react';
import React from 'react';
import PasswordInput from '@/components/password-input';
import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { useForm } from 'react-hook-form';
import { signUpValidation } from '@/validations/auth';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUpForm() {
	const { register: registerAction } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(signUpValidation),
	});

	const submit = async (data) => {
		console.log(data);
		await registerAction({
			name: data.name,
			surname: data.surname,
			email: data.email,
			password: data.password,
			username: data.username,
		});
	};

	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={handleSubmit(submit)}
		>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
				<Input
					{...register('name')}
					label="Ad"
					placeholder="Adınızı girin"
					variant="bordered"
					errorMessage={errors.name?.message}
					isInvalid={!!errors.name}
				/>
				<Input
					{...register('surname')}
					label="Soyad"
					placeholder="Soyadınızı girin"
					variant="bordered"
					errorMessage={errors.surname?.message}
					isInvalid={!!errors.surname}
				/>
			</div>
			<Input
				{...register('email')}
				type="email"
				label="E-posta"
				placeholder="ornek@email.com"
				variant="bordered"
				errorMessage={errors.email?.message}
				isInvalid={!!errors.email}
			/>
			<Input
				{...register('username')}
				label="Kullanıcı Adı"
				placeholder="Harf, sayı ve alt çizgi kullanabilirsiniz"
				variant="bordered"
				errorMessage={errors.username?.message}
				isInvalid={!!errors.username}
			/>
			<PasswordInput
				{...register('password')}
				variant="bordered"
				label="Şifre"
				placeholder="En az 8 karakter olmalıdır."
				errorMessage={errors.password?.message}
				isInvalid={!!errors.password}
			/>

			<p className="text-xs text-default-600">
				Hesap oluşturarak,{' '}
				<Link
					href="/"
					className="text-primary"
				>
					Kullanım Koşullarını
				</Link>{' '}
				okuduğunuzu ve kabul ettiğinizi onaylamış sayılırsınız.
			</p>
			<Button
				color="primary"
				type="submit"
			>
				Hesap Oluştur
			</Button>
		</form>
	);
}
