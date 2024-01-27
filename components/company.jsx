import style from '@/styles/company.module.scss';
import Container from '@/components/ui/container';
import Detail from '@/components/ui/detail';

function Company() {
	return (
		<section className={style.company}>
			<Container>
				<Detail heading="Про компанію" image="/hero_2.webp" reversed={false}>
					<p>
						Вас вітає компанія STPRO-VIN – ваша вірна компанію у світі
						будівництва та облаштування вашої оселі. Заснована в 2013 році, наша
						компанія пройшла шлях успішного розвитку, надаючи високоякісні
						будівельні послуги для наших клієнтів.
					</p>
					<p>
						Ми пропонуємо вам комплексне рішення для вашого будинку, офісу,
						складу або іншої будівлі, враховуючи ваші побажання, бюджет та
						терміни.
					</p>
					<p>
						Ми гарантуємо вам високий рівень професіоналізму, надійності та
						відповідальності.
					</p>
				</Detail>
				<Detail heading="Наша Сфера Діяльності">
					<p>
						STPRO-VIN спеціалізується на машинній напівсухій стяжці підлог,
						покрівлі методом розуклонів та машинній штукатурці стін.
					</p>
					<p>
						Незалежно від масштабу вашого проекту – ми маємо експертність та
						ресурси для його виконання на найвищому рівні.
					</p>
					<ul>
						<li>
							Машинна напівсуха стяжка підлог – це сучасний спосіб створення
							рівної, міцної та довговічної основи для покриття підлоги.
						</li>
						<li>
							Покрівля методом розуклонів – це ефективний спосіб захисту вашої
							будівлі від атмосферних впливів, забезпечуючи оптимальну
							температуру, вентиляцію та гідроізоляцію.
						</li>
						<li>
							Машинна штукатурка стін – це швидкий та якісний спосіб
							вирівнювання та оздоблення поверхні стін, створюючи гладку, рівну
							та естетичну основу для подальшого декорування.
						</li>
					</ul>
				</Detail>
				<Detail heading="Наш Досвід" image="/hero_2.webp" reversed={false}>
					<p>
						З 2013 року ми успішно реалізували безліч проектів та набрали дев’ят
						років досвіду у галузі будівництва. Цей період приніс нам не лише
						технічну майстерність, а й впізнання клієнтів, які довірили нам
						створення ідеальних просторів.
					</p>
					<p>
						Ми пишаємося нашими реалізованими проектами, серед яких є житлові
						будинки, комерційні приміщення, громадські споруди, промислові
						об’єкти та інші. Ми завжди виконуємо нашу роботу в строк, з
						дотриманням всіх норм та стандартів, з повагою до наших замовників
						та партнерів.
					</p>
				</Detail>
				<Detail heading="Наші Стандарти" image="/hero_2.webp" reversed={true}>
					<p>
						Наші фахівці – це висококваліфіковані професіонали, які стежать за
						інноваціями та завжди готові до викликів.
					</p>
					<p>
						Ми використовуємо тільки якісні матеріали та обладнання, які
						забезпечують довговічність, безпеку та комфорт наших об’єктів.
					</p>
					<p>
						Ми постійно підвищуємо наш рівень сервісу, надаючи нашим клієнтам
						консультації, гарантії, післягарантійне обслуговування та інші
						переваги.
					</p>
					<p>
						Ми працюємо з відповідальністю до навколишнього середовища,
						дотримуючись екологічних норм та принципів.
					</p>
				</Detail>
			</Container>
		</section>
	);
}

export default Company;