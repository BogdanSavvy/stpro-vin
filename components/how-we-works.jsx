'use client';

import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import styles from '@/styles/how-we-works.module.scss';
import Container from '@/components/ui/container';
import Heading from '@/components/ui/heading';
import MainButton from '@/components/ui/main-button';
import SecondaryButton from './ui/secondary-button';

const steps = [
	{
		label: 'Виклик замірника',
		description: `Зателефонувавши нам по телефону або залишивши заявку на сайті, 
		ви отримаєте відповіді на питання щодо ремонту квартири "під ключ", 
		а для отримання більш детальної інформації Вам буде рекомендовано виїзд виконроба на об'єкт протягом 24 годин для виконання виміру.`,
	},
	{
		label: "Замір об'єкту",
		description: `Перший особистий контакт з нашою компанією в особі виконроба, при зустрічі з яким 
			Ви отримаєте професійну консультацію з ремонтно-оздоблювальних робіт. 
			Проводиться замір приміщень, приймаються Ваші побажання та рекомендації.`,
	},
	{
		label: 'Узгодження організаційних питань та розрахунок вартості',
		description: `На підставі даних виміру наш кошторисник на протязі 24 годин надає детальний кошторис робіт, 
		після узгодження якого складається кошторис будівельних матеріалів із зазначенням їх обсягів, марок та вартості. 
		Складені кошториси прозорі та не мають прихованих робіт.`,
	},
	{
		label: 'Виконання робіт',
		description: `На підставі даних виміру наш кошторисник на протязі 24 годин надає детальний кошторис робіт, 
		після узгодження якого складається кошторис будівельних матеріалів із зазначенням їх обсягів, марок та вартості. 
		Складені кошториси прозорі та не мають прихованих робіт.`,
	},
	{
		label: "Здача об'єкту",
		description: `Після закінчення ремонтно-оздоблювальних робіт проводиться прибирання приміщення та прилеглих територій, 
		виконується вивіз сміття, надається фінальний звіт та складається акт виконаних робіт. 
		Після цього набувають чинності гарантійні зобов'язання.`,
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

	return (
		<section className={styles.howWeWorks}>
			<Container>
				<div className={styles.content}>
					<Heading>Як ми працюємо</Heading>
					<Stepper activeStep={activeStep} orientation="vertical">
						{steps.map((step, index) => (
							<Step key={step.label}>
								<article className={styles.howWeWorks__step}>
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
								</article>
							</Step>
						))}
					</Stepper>
				</div>
			</Container>
		</section>
	);
}

export default HowWeWorks;
