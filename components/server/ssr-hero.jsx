import Hero from '../hero';

function SSRHero({ imageUrl }) {
	return (
		<>
			<section className="hidden">
				<article>
					<h1>Вас вітає STPRO-VIN</h1>
					<p>
						"Ваша Майстерня Якісного Будівництва – Творимо Комфорт і Інновації
						Разом!"
					</p>
				</article>
			</section>
			<Hero imageUrl={imageUrl} />
		</>
	);
}

export default SSRHero;
