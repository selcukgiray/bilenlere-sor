'use client';

import { Button, Input } from '@heroui/react';
import React from 'react';
import PasswordInput from '@/components/password-input';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/auth-context';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInValidation } from '@/validations/auth';

export default function SignInForm() {
	const { login } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(signInValidation),
	});

	const submit = async (data) => {
		await login({
			email: data.email,
			password: data.password,
		});
	};

	return (
		<form
			className="flex flex-col gap-6"
			onSubmit={handleSubmit(submit)}
		>
			<Input
				{...register('email')}
				type="email"
				label="E-posta"
				placeholder="ornek@email.com"
				variant="bordered"
				errorMessage={errors.email?.message}
				isInvalid={!!errors.email}
			/>
			<PasswordInput
				{...register('password')}
				variant="bordered"
				label="Parola"
				placeholder="Parola"
				errorMessage={errors.password?.message}
				isInvalid={!!errors.password}
			/>
			<Button
				color="primary"
				type="submit"
			>
				Giriş Yap
			</Button>
		</form>
	);
}
