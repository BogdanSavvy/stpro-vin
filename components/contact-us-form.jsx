'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
	TextField,
	InputAdornment,
	Select,
	InputLabel,
	MenuItem,
	FormControl,
} from '@mui/material';

import styles from '@/styles/contact-us.module.scss';
import MainButton from '@/components/ui/main-button';
import { sendOrderAction } from '@/action/sendOrderAction';

function ContactUsForm() {
	const phoneRegExp =
		/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
	const schema = yup
		.object({
			name: yup
				.string("Введіть коректне ім'я")
				.required('Поле є обовязковим')
				.max(50, 'Максимальна довжина імені - 50 символів'),
			phoneNumber: yup
				.string()
				.required('Поле є обовязковим')
				.matches(phoneRegExp, 'Введіть коректний номер телефону'),
			message: yup
				.string()
				.max(200, 'Максимальна довжина повідомлення 200 символів'),
		})
		.required();

	const selectOptions = [
		{ name: 'Консультація' },
		{ name: 'Стяжка підлоги' },
		{ name: 'Штукатурка стін' },
		{ name: 'Покрівля даху' },
	];

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
			servise: '',
			phoneNumber: '',
			message: '',
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = async data => {
		let message = `<b>Клієнт: </b> ${data.name}\n`;
		message += `<b>Номер телефону: </b> ${data.phoneNumber}\n\n`;

		if (data.servise) {
			message += `<b>Послуга: </b> ${data.servise}\n`;
		}
		if (data.message) {
			message += `<b>Повідомлення: </b> ${data.message}\n`;
		}

		await sendOrderAction(message);
		return reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.contactUs__form}
			noValidate
		>
			<TextField
				{...register('name')}
				required
				label="Ім'я"
				variant="standard"
				multiline
				placeholder="ПІБ"
				error={errors.name && true}
				helperText={errors.name?.message}
				className={styles.contactUs__field}
			/>
			<TextField
				{...register('phoneNumber')}
				required
				label="Номер телефону"
				variant="standard"
				InputProps={{
					startAdornment: <InputAdornment position="start">+38</InputAdornment>,
				}}
				error={errors.phoneNumber && true}
				helperText={errors.phoneNumber?.message}
				className={styles.contactUs__field}
			/>
			<Controller
				control={control}
				name="servise"
				render={({ field }) => (
					<FormControl className={styles.contactUs__field}>
						<InputLabel>Оберіть послугу (не обов'язково)</InputLabel>
						<Select label="Послуги" variant="standard" {...field}>
							{selectOptions.map((option, index) => (
								<MenuItem key={index} value={option.name}>
									{option.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				)}
			/>
			<TextField
				{...register('message')}
				label="Повідомлення (не обов'язково)"
				variant="standard"
				multiline
				rows={5}
				error={errors.message && true}
				helperText={errors.message?.message}
				className={`${styles.contactUs__field} ${styles.contactUs__bigTxtArea}`}
			/>
			<MainButton type="submit">Надіслати</MainButton>
		</form>
	);
}

export default ContactUsForm;
