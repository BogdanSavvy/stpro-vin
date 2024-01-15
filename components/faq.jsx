import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Container from '@/components/ui/container';
import styles from '@/styles/faq.module.scss';
import Heading from './ui/heading';

export default function FAQ() {
	return (
		<section className={styles.faq}>
			<Container>
				<Heading>Питання & відповіді</Heading>
				<Accordion className={styles.faq__acordion}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={styles.faq__expandIcon} />}
						aria-controls="panel1-content"
						id="panel1-header"
						className={styles.faq__summary}
					>
						<h4>Accordion 1</h4>
					</AccordionSummary>
					<AccordionDetails className={styles.faq__details}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
							Voluptate, itaque corrupti? Culpa, at! Eaque, nisi quae, non
							recusandae modi ea, voluptatum quibusdam facere porro corrupti
							eligendi nam facilis quis eius odit. At tempora consequuntur a qui
							commodi omnis provident nulla dolorum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.faq__acordion}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={styles.faq__expandIcon} />}
						aria-controls="panel1-content"
						id="panel1-header"
						className={styles.faq__summary}
					>
						<h4>Accordion 2</h4>
					</AccordionSummary>
					<AccordionDetails className={styles.faq__details}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
							Voluptate, itaque corrupti? Culpa, at! Eaque, nisi quae, non
							recusandae modi ea, voluptatum quibusdam facere porro corrupti
							eligendi nam facilis quis eius odit. At tempora consequuntur a qui
							commodi omnis provident nulla dolorum.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.faq__acordion}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={styles.faq__expandIcon} />}
						aria-controls="panel1-content"
						id="panel1-header"
						className={styles.faq__summary}
					>
						<h4>Accordion 3</h4>
					</AccordionSummary>
					<AccordionDetails className={styles.faq__details}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
							Voluptate, itaque corrupti? Culpa, at! Eaque, nisi quae, non
							recusandae modi ea, voluptatum quibusdam facere porro corrupti
							eligendi nam facilis quis eius odit. At tempora consequuntur a qui
							commodi omnis provident nulla dolorum.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.faq__acordion}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={styles.faq__expandIcon} />}
						aria-controls="panel1-content"
						id="panel1-header"
						className={styles.faq__summary}
					>
						<h4>Accordion 4</h4>
					</AccordionSummary>
					<AccordionDetails className={styles.faq__details}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
							Voluptate, itaque corrupti? Culpa, at! Eaque, nisi quae, non
							recusandae modi ea, voluptatum quibusdam facere porro corrupti
							eligendi nam facilis quis eius odit. At tempora consequuntur a qui
							commodi omnis provident nulla dolorum.
						</p>
					</AccordionDetails>
				</Accordion>
				<Accordion className={styles.faq__acordion}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className={styles.faq__expandIcon} />}
						aria-controls="panel1-content"
						id="panel1-header"
						className={styles.faq__summary}
					>
						<h4>Accordion 2</h4>
					</AccordionSummary>
					<AccordionDetails className={styles.faq__details}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
							non voluptatum alias beatae obcaecati aut itaque, magnam, libero
							esse dolore ipsam nisi earum, eligendi explicabo amet laborum.
							Voluptate, itaque corrupti? Culpa, at! Eaque, nisi quae, non
							recusandae modi ea, voluptatum quibusdam facere porro corrupti
							eligendi nam facilis quis eius odit. At tempora consequuntur a qui
							commodi omnis provident nulla dolorum.
						</p>
					</AccordionDetails>
				</Accordion>
			</Container>
		</section>
	);
}
