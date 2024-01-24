'use client';

import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import styles from '@/styles/how-we-works.module.scss';
import Container from '@/components/ui/container';
import MainButton from '@/components/ui/main-button';
import SecondaryButton from '@/components/ui/secondary-button';
import { MHeading } from '@/components/ui/heading';
import {
	sectionAnimation,
	textAnimation,
	stepAnimation,
} from '@/lib/motion-animations';

const steps = [
	{
		label: 'Виклик замірника',
		description: `Звертайтеся до нас для безкоштовного виклику нашого замірника зателефонувавши, або запонивши форму на нашому сайті. 
		Визначте зручний для вас час, і ми прибудемо на об'єкт для детальної консультації. 
		Під час зустрічі ми слухатимемо ваши ідеї, враховуватимемо ваши побажання та відповімо на всі ваші питання.`,
	},
	{
		label: "Замір об'єкту",
		description: `Наш кваліфікований замірник проведе докладний огляд вашого об'єкта. 
		Він виміряє всі параметри, враховуючи габарити приміщення, особливості структури та будь-які технічні аспекти. 
		Ми ретельно досліджуємо кожен куток, щоб забезпечити точність та повноту інформації.`,
	},
	{
		label: 'Узгодження організаційних питань та розрахунок вартості',
		description: `Після заміру ми спільно узгоджуємо всі аспекти проекту. 
		Це включає встановлення термінів виконання робіт, вибір оптимальних матеріалів, розробку дизайнерських рішень та обговорення будь-яких організаційних питань. 
		Разом з вами ми розраховуємо вартість робіт, враховуючи ваш бюджет та побажання.`,
	},
	{
		label: 'Виконання робіт',
		description: `Після погодження всіх деталей наша команда спеціалістів розпочинає роботу. 
		Відбувається підготовка робочого місця, вибір і доставка матеріалів, а потім точне виконання завдань. 
		Ми дотримуємося всіх технічних стандартів та забезпечуємо якісний контроль на кожному етапі.`,
	},
	{
		label: "Здача об'єкту",
		description: `Після завершення робіт ми не просто передаємо вам ключі від об'єкта, а проводимо детальний огляд результатів та прибирання. 
		Ми переконуємося, що ви повністю задоволені якістю робіт та відповідністю їхньому оригінальному плану. 
		У вас є можливість висловити будь-які побажання чи зауваження, і ми готові внести корективи, якщо це необхідно.`,
	},
];

function HowWeWorks() {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		if (activeStep === 4) {
			setActiveStep(-1);
		}
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: '#C8A35F',
				dark: '#000',
				contrastText: '#ffff',
			},
			text: {
				primary: '#fff',
			},
		},
		components: {
			MuiStepContent: {
				styleOverrides: {
					root: {
						marginLeft: '20px',
					},
				},
			},
			MuiStepConnector: {
				styleOverrides: {
					root: {
						marginLeft: '20px',
					},
				},
			},
			MuiStepLabel: {
				styleOverrides: {
					root: {
						textTransform: 'uppercase',
						letterSpacing: '0.5px',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<section className={styles.howWeWorks}>
				<Container>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ amount: 0.4, once: true }}
						variants={sectionAnimation}
						className={styles.content}
					>
						<MHeading variants={textAnimation}>Як ми працюємо</MHeading>
						<Stepper activeStep={activeStep} orientation="vertical">
							{steps.map((step, index) => (
								<Step key={step.label}>
									<motion.article
										custom={index + 1}
										variants={stepAnimation}
										className={styles.howWeWorks__step}
									>
										<StepLabel className={styles.howWeWorks__stepLabel}>
											{step.label}
										</StepLabel>
										<StepContent className={styles.howWeWorks__stepContent}>
											<p className={styles.howWeWorks__text}>
												{step.description}
											</p>
											<div className={styles.howWeWorks__stepActions}>
												<MainButton clickEvent={handleNext}>
													{index === steps.length - 1 ? 'Кінець' : 'Далі'}
												</MainButton>
												<SecondaryButton
													disabled={index === 0}
													clickEvent={handleBack}
												>
													Попередній
												</SecondaryButton>
											</div>
										</StepContent>
									</motion.article>
								</Step>
							))}
						</Stepper>
					</motion.div>
				</Container>
			</section>
		</ThemeProvider>
	);
}

export default HowWeWorks;
