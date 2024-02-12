'use client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';

import styles from '@/styles/faq.module.scss';
import Container from '@/components/ui/container';
import { MHeading } from '@/components/ui/heading';
import { sectionAnimation, textAnimation } from '@/lib/motion-animations';

const faqs = [
	{
		label:
			'Як ви формуєте ціну на свої послуги і чи може вона змінюватися під час роботи?',
		answers: [
			{
				paragraph: `Ціна на наші послуги залежить від обсягу робіт, виду і якості матеріалів, термінів виконання і додаткових побажань клієнта. 
				Ми завжди попередньо узгоджуємо з клієнтом кошторис і договір, де вказуємо всі деталі і умови співпраці. 
				Ціна може змінюватися тільки за згодою обох сторін, якщо виникнуть непередбачені обставини або додаткові запити.`,
			},
		],
	},
	{
		label:
			'Які гарантії ви надаєте на свої роботи і як ви вирішуєте можливі претензії або рекламації?',
		answers: [
			{
				paragraph: `Ми надаємо гарантію на всі наші роботи до 10 років. 
				Якщо клієнт має якісь претензії або рекламації, ми оперативно реагуємо на них і намагаємося вирішити проблему максимально швидко і задовільно для обох сторін.`,
			},
		],
	},
	{
		label:
			'Які матеріали ви використовуєте для своїх робіт і чи можу я сам обрати або надати свої?',
		answers: [
			{
				paragraph: `Ми використовуємо тільки сертифіковані і якісні матеріали від перевірених постачальників, які гарантують довговічність і безпеку наших робіт. 
				Ми пропонуємо клієнтам різні варіанти матеріалів, з яких вони можуть обрати той, який їм найбільше підходить за ціною, характеристиками і дизайном. `,
			},
			{
				paragraph: `Також, якщо клієнт хоче використати свої матеріали, ми можемо це обговорити і домовитися про умови і відповідальність.`,
			},
		],
	},
	{
		label:
			'Як довго триває виконання вашого замовлення і чи дотримуєтеся ви термінів?',
		answers: [
			{
				paragraph: `Ми виконуємо наше замовлення в залежності від складності і обсягу робіт, але ми завжди намагаємося зробити все якнайшвидше і якісно. 
				Ми дотримуємося термінів, які були домовлені з клієнтом, і повідомляємо клієнта про хід робіт.`,
			},
		],
	},
	{
		label: 'Чи маєте ви власну техніку і обладнання для виконання робіт?',
		answers: [
			{
				paragraph: ` Так, ми маємо власну техніку і обладнання для виконання робіт, які вимагають механізованого підходу, таких як машинна напівсуха стяжка підлоги, машинна штукатурка стін, 
				покрівля методом розуклонів поверхні.`,
			},
			{
				paragraph: `Ми також забезпечуємо доставку матеріалів і вивезення будівельного сміття.`,
			},
		],
	},
];

export default function FAQ({ data }) {
	const theme = createTheme({
		palette: {
			text: {
				primary: '#fff',
			},
		},
		components: {
			MuiAccordion: {
				styleOverrides: {
					root: {
						backgroundColor: '#393F47',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<motion.section
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.4, once: true }}
				variants={sectionAnimation}
				className={styles.faq}
			>
				<Container>
					<MHeading custom={1} variants={textAnimation}>
						Питання & відповіді
					</MHeading>
					{!data
						? faqs.map((faq, index) => (
								<Accordion key={index} className={styles.faq__acordion}>
									<AccordionSummary
										expandIcon={
											<ExpandMoreIcon className={styles.faq__expandIcon} />
										}
										className={styles.faq__summary}
									>
										<h4>{faq.label}</h4>
									</AccordionSummary>
									<AccordionDetails className={styles.faq__details}>
										{faq.answers.map((answer, index) => (
											<p key={index}>{answer.paragraph}</p>
										))}
									</AccordionDetails>
								</Accordion>
						  ))
						: data.map((faq, index) => (
								<Accordion key={index} className={styles.faq__acordion}>
									<AccordionSummary
										expandIcon={
											<ExpandMoreIcon className={styles.faq__expandIcon} />
										}
										className={styles.faq__summary}
									>
										<h4>{faq.label}</h4>
									</AccordionSummary>
									<AccordionDetails className={styles.faq__details}>
										{faq.answers.map((answer, index) => (
											<p key={index}>{answer.paragraph}</p>
										))}
									</AccordionDetails>
								</Accordion>
						  ))}
				</Container>
			</motion.section>
		</ThemeProvider>
	);
}
