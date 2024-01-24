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
		label: 'Acordion Label',
		answers: [
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam,
				libero esse dolore ipsam nisi earum, eligendi explicabo amet
				laborum. Voluptate, itaque corrupti? Culpa, at! Eaque, nisi
				quae, non recusandae modi ea, voluptatum quibusdam facere porro
				corrupti eligendi nam facilis quis eius odit. At tempora
				consequuntur a qui commodi omnis provident nulla dolorum.`,
			},
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam.`,
			},
		],
	},
	{
		label: 'Acordion Label',
		answers: [
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam,
				libero esse dolore ipsam nisi earum, eligendi explicabo amet
				laborum. Voluptate, itaque corrupti? Culpa, at! Eaque, nisi
				quae, non recusandae modi ea, voluptatum quibusdam facere porro
				corrupti eligendi nam facilis quis eius odit. At tempora
				consequuntur a qui commodi omnis provident nulla dolorum.`,
			},
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam.`,
			},
		],
	},
	{
		label: 'Acordion Label',
		answers: [
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam,
				libero esse dolore ipsam nisi earum, eligendi explicabo amet
				laborum. Voluptate, itaque corrupti? Culpa, at! Eaque, nisi
				quae, non recusandae modi ea, voluptatum quibusdam facere porro
				corrupti eligendi nam facilis quis eius odit. At tempora
				consequuntur a qui commodi omnis provident nulla dolorum.`,
			},
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam.`,
			},
		],
	},
	{
		label: 'Acordion Label',
		answers: [
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam,
				libero esse dolore ipsam nisi earum, eligendi explicabo amet
				laborum. Voluptate, itaque corrupti? Culpa, at! Eaque, nisi
				quae, non recusandae modi ea, voluptatum quibusdam facere porro
				corrupti eligendi nam facilis quis eius odit. At tempora
				consequuntur a qui commodi omnis provident nulla dolorum.`,
			},
			{
				paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
				eget. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Et non voluptatum alias beatae obcaecati aut itaque, magnam.`,
			},
		],
	},
];

export default function FAQ() {
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

					{faqs.map((faq, index) => (
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
