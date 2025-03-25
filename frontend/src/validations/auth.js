import * as Yup from 'yup';

// Sign In Validation

export const signInValidation = Yup.object().shape({
	email: Yup.string()
		.email('Geçerli bir e-posta adresi giriniz.')
		.required('E-posta adresi gerekli.'),

	password: Yup.string().required('Şifre gerekli.'),
});

// Sign Up Validation

export const signUpValidation = Yup.object().shape({
	name: Yup.string()
		.required('Ad gerekli.')
		.min(2, 'Ad en az 2 karakter olmalıdır.'),

	surname: Yup.string()
		.required('Soyad gerekli.')
		.min(2, 'Soyad en az 2 karakter olmalıdır.'),

	email: Yup.string()
		.required('E-posta gerekli.')
		.email('Geçerli bir e-posta adresi giriniz.'),

	username: Yup.string()
		.required('Kullanıcı adı gerekli.')
		.matches(
			/^[a-zA-Z0-9_]+$/,
			'Kullanıcı adı yalnızca harf, rakam ve alt çizgi (_) içerebilir.'
		),

	password: Yup.string()
		.required('Şifre gerekli.')
		.min(8, 'Şifre en az 8 karakter olmalıdır.'),
});
