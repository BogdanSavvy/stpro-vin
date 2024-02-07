'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
	TextField,
	InputAdornment,
	FormControl,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from '@/styles/calculator.module.scss';

function Calculator({ data }) {
	const { ourMaterials, customerMaterials } = data;

	const [price, setPrice] = useState(ourMaterials);
	const [result, setResult] = useState('0');

	const RadioButtonsOptions = [
		{ label: 'Наш матеріал', value: ourMaterials },
		{ label: 'Ваш матеріал', value: customerMaterials },
	];

	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			square: '',
			materials: ourMaterials,
		},
	});

	const handleCalculate = ({ materials, square }) => {
		setPrice(materials);
		setResult(Math.floor(materials * square));
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: '#C8A35F',
				contrastText: '#fff',
			},
			text: {
				primary: '#fff',
				secondary: '#2F343A',
			},
		},
		components: {
			MuiFormControl: {
				styleOverrides: {
					root: {
						gap: '15px',
						fontSize: '18px',
					},
				},
			},
			MuiFormGroup: {
				styleOverrides: {
					root: {
						gap: '20px',
					},
				},
			},
			MuiFormLabel: {
				styleOverrides: {
					root: {
						fontFamily: 'inherit',
						letterSpacing: '0,3px',
						color: '#ffff',
					},
				},
			},
			MuiInput: {
				styleOverrides: {
					root: {
						fontSize: '18px',
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
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<form
				onChange={handleSubmit(handleCalculate)}
				className={styles.calculator}
				noValidate
			>
				<p className={styles.price}>
					Ціна послуги:
					<span>
						{price} грн/м<sup>2</sup>
					</span>
				</p>
				<div className={styles.formBody}>
					<Controller
						name="materials"
						control={control}
						render={({ field }) => (
							<FormControl>
								<FormLabel id="demo-radio-buttons-group-label">
									Оберіть чіїм матеріалом буде виконуватись робота:
								</FormLabel>
								<RadioGroup row {...field}>
									{RadioButtonsOptions.map((radioButton, index) => (
										<FormControlLabel
											key={index}
											value={radioButton.value}
											control={<Radio />}
											label={radioButton.label}
										/>
									))}
								</RadioGroup>
							</FormControl>
						)}
					/>
					<TextField
						{...register('square')}
						label="Введіть площу поверхні"
						variant="standard"
						type="number"
						placeholder="0"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start" className={styles.adornment}>
									м<sup style={{ fontSize: '12px' }}>2</sup>
								</InputAdornment>
							),
						}}
					/>
				</div>
				<p className={styles.price}>
					Вартість: <span>{result} грн</span>
				</p>
				<p className={styles.note}>
					*Орієнтовна вартість роботи, остаточна ціна може відрізнятись від
					розрахованої!
				</p>
			</form>
		</ThemeProvider>
	);
}

export default Calculator;
