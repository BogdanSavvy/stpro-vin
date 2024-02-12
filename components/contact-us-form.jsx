'use client';

import { useState } from 'react';
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
	Snackbar,
	Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from '@/styles/contact-us.module.scss';
import MainButton from '@/components/ui/main-button';
import { sendOrderAction } from '@/action/sendOrderAction';

function ContactUsForm() {
	const [openSnackBar, setOpenSnackBar] = useState(false);

	const handleClose = reason => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSnackBar(false);
	};

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

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isSubmitting },
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
		message += `<b>Номер телефону: </b> ${data.phoneNumber.replaceAll(
			' ',
			'',
		)}\n\n`;

		if (data.servise) {
			message += `<b>Послуга: </b> ${data.servise}\n`;
		}
		if (data.message) {
			message += `<b>Повідомлення: </b> ${data.message}\n`;
		}

		const res = await sendOrderAction(message);

		if (res?.ok) {
			setOpenSnackBar(true);
		}

		return reset();
	};

	const selectOptions = [
		{ name: 'Консультація' },
		{ name: 'Стяжка підлоги' },
		{ name: 'Штукатурка стін' },
		{ name: 'Покрівля' },
	];

	const theme = createTheme({
		palette: {
			primary: {
				main: '#C8A35F',
				contrastText: '#fff',
			},
			text: {
				primary: '#fff',
			},
		},
		components: {
			MuiFormLabel: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
						letterSpacing: '0,3px',
						color: '#ffff',
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						fontSize: '2rem',
						backgroundColor: '#393F47',
					},
				},
			},
			MuiSelect: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
					},
				},
			},
			MuiMenuItem: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
					},
				},
			},
			MuiInput: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
						letterSpacing: '1px',
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
					},
				},
			},
			MuiAlert: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<form
				aria-label="Заповніть форму і ми з вами зв'яжемось"
				onSubmit={handleSubmit(onSubmit)}
				className={styles.contactUs__form}
				noValidate
			>
				<TextField
					{...register('name')}
					required
					name="Ім'я"
					label="Ім'я"
					aria-label="Ім'я клієнта"
					variant="standard"
					placeholder="ПІБ"
					autoComplete="Ваше ім'я"
					error={errors.name && true}
					helperText={errors.name?.message}
					className={styles.contactUs__field}
				/>
				<TextField
					{...register('phoneNumber')}
					required
					name="Номер телефону"
					label="Номер телефону"
					aria-label="Контактний номер клієнта"
					variant="standard"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">+38</InputAdornment>
						),
					}}
					error={errors.phoneNumber && true}
					helperText={errors.phoneNumber?.message}
					className={styles.contactUs__field}
				/>
				<Controller
					control={control}
					name="servise"
					render={({ field }) => (
						<FormControl
							aria-label="Поле вибору послуги"
							className={styles.contactUs__field}
						>
							<InputLabel aria-label="Оберіть послугу">
								Оберіть послугу (не обов'язково)
							</InputLabel>
							<Select
								label="Послуги"
								aria-labelledby="Оберіть вид послуги"
								variant="standard"
								{...field}
							>
								{selectOptions.map((option, index) => (
									<MenuItem
										aria-labelledby={option.name}
										key={index}
										value={option.name}
									>
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
					aria-label="Повідомлення клієнта"
					variant="standard"
					multiline
					rows={5}
					error={errors.message && true}
					helperText={errors.message?.message}
					className={`${styles.contactUs__field} ${styles.contactUs__bigTxtArea}`}
				/>
				<MainButton disabled={isSubmitting} type="submit">
					Надіслати
				</MainButton>
			</form>
			<Snackbar
				open={openSnackBar}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success" variant="filled">
					Запит на консультацію успішно надісланий. Очікуйте на здвінок від
					майстра.
				</Alert>
			</Snackbar>
		</ThemeProvider>
	);
}

export default ContactUsForm;
