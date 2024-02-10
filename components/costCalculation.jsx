import styles from '@/styles/cost-calculation.module.scss';
import Calculator from '@/components/calculator';
import Heading from '@/components/ui/heading';
import Container from '@/components/ui/container';

function CostCalculation({ data }) {
	return (
		<section className={styles.costCalculation}>
			<Container>
				<div className={styles.body}>
					<article className={styles.description}>
						<Heading>Розрахунок приблизної вартості</Heading>
						<p className={styles.paragraph}>
							Ви можете швидко та зручно отримати орієнтовну вартість наших
							послуг з урахуванням ваших унікальних потреб. Завдяки
							інтерактивній формі, ви можете визначити ціну залежно від площі
							приміщення та вибору матеріалу, додамо, що{' '}
							<span>ми використовуємо найкращі матеріали</span> перевірення
							часом. Будь ласка, зауважте, що отримана вартість є приблизною та
							може змінитися під час детального обговорення вашого проекту та
							врахування усіх індивідуальних вимог.
						</p>
						<p className={styles.paragraph}>
							Даний розрахунок надає загальний огляд вартості та допомагає Вам{' '}
							<span>
								приблизно уявити фінансові витрати на ваш будівельний проект.
							</span>{' '}
							Для отримання точної вартості та детального консультування,
							звертайтеся до наших фахівців.
						</p>
					</article>
					<Calculator data={data} />
				</div>
			</Container>
		</section>
	);
}

export default CostCalculation;
