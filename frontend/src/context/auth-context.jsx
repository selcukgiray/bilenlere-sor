'use client';

import CenterLoader from '@/components/center-loader';
import { API_URL } from '@/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
	const token = getCookie('token');
	const queryClient = useQueryClient();
	const router = useRouter();

	const { data: user, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: async () => {
			if (!token) return null;

			const response = await fetch(`${API_URL}/auth/profile`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: 'application/json',
				},
			});

			if (!response.ok) {
				deleteCookie('token');
				router.push('/giris-yap');
			}

			return await response.json();
		},
		retry: false,
	});

	const loginMutation = useMutation({
		mutationFn: async (credentials) => {
			const response = await fetch(`${API_URL}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(credentials),
			});

			const result = await response.json();

			if (result.status) {
				toast.success(result.message);
				setCookie('token', result.token);
				queryClient.invalidateQueries('user');
			} else {
				toast.error(result.message);
			}
		},
	});

	const registerMutation = useMutation({
		mutationFn: async (body) => {
			const response = await fetch(`${API_URL}/auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(body),
			});

			const result = await response.json();

			if (result.status) {
				toast.success(result.message);
			} else {
				toast.error(result.message);
			}
		},
	});

	function logout() {}
	return (
		<AuthContext.Provider
			value={{
				user,
				login: loginMutation.mutateAsync,
				register: registerMutation.mutateAsync,
				logout,
				token,
			}}
		>
			{isLoading ? <CenterLoader /> : children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw new Error(
			'useAuthContext, AuthContextProvider içerisinde kullanılmalıdır.'
		);
	}

	return context;
}
