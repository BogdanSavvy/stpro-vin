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

function Calculator({ data }) {
	const { ourMaterials, customerMaterials } = data;

	const [price, setPrice] = useState(ourMaterials);
	const [result, setResult] = useState('0');

	const options = [
		{ label: 'Наш матеріал', value: ourMaterials },
		{ label: 'Ваш матеріал', value: customerMaterials },
	];

	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			square: '0',
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
			},
		},
		components: {},
	});

	return (
		<ThemeProvider theme={theme}>
			<form
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					padding: '50px',
				}}
				onChange={handleSubmit(handleCalculate)}
				noValidate
			>
				<p>
					Ціна послуги: {price} грн/м<sup>2</sup>
				</p>
				<Controller
					name="materials"
					control={control}
					render={({ field }) => (
						<FormControl>
							<FormLabel id="demo-radio-buttons-group-label">
								Оберіть чіїм матеріалом буде виконуватись робота
							</FormLabel>
							<RadioGroup row {...field}>
								{options.map((radioButton, index) => (
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
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								м<sup>2</sup>
							</InputAdornment>
						),
					}}
				/>
				<p>Орієнтовна сумма: {result} грн</p>
			</form>
		</ThemeProvider>
	);
}

export default Calculator;
