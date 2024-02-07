import MiniHero from '@/components/mini-hero';
import ServiseDescription from '@/components/servise-description';
import ServiseAdvantages from '@/components/servise-advantages';
import CostCalculation from '@/components/costCalculation';
import ContactsBanner from '@/components/contacts-banner';
import FAQ from '@/components/faq';
import Quote from '@/components/quote';
import ServiseWhenStart from '@/components/servise-when-start';

const data = {
	screed: {
		hero: {
			heading: 'Машинна стяжка підлоги',
			description:
				'Гарантуємо найрівнішу поверхню, швидкість та якість за приємну ціну у місті Вінниця та Вінницькій області.',
			image: '/hero.jpg',
		},
		description: {
			heading: 'Що таке машинна стяжка підлоги?',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam! `,
			image: '/hero.jpg',
		},
		advantages: {
			heading: 'Переваги машинної стяжки підлоги',
			list: [
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
			],
		},
		whenStart: {
			heading: 'Коли варто робити стяжку:',
			list: [
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
			],
			image: '/hero.jpg',
		},
		prices: {
			ourMaterials: '280',
			customerMaterials: '180',
		},
	},
	plaster: {
		hero: {
			heading: 'Машинна штукатурка стін',
			description:
				'Гарантуємо найрівнішу поверхню, швидкість та якість за приємну ціну у місті Вінниця та Вінницькій області.',
			image: '/hero.jpg',
		},
		description: {
			heading: 'Машинна штукатурка стін',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
			image: '/hero_2.webp',
		},
		advantages: {
			heading: 'Переваги машинної штукатурки',
			list: [{ text: 'text 1' }, { text: 'text 2' }, { text: 'text 3' }],
		},
		whenStart: {
			heading: 'Коли варто робити стяжку:',
			list: [
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
			],
			image: '/hero.jpg',
		},
		prices: {
			ourMaterials: '330',
			customerMaterials: '230',
		},
	},
	roofing: {
		hero: {
			heading: 'Покрівля дахів інноваційним методом',
			description:
				'Гарантуємо найрівнішу поверхню, швидкість та якість за приємну ціну у місті Вінниця та Вінницькій області.',
			image: '/hero.jpg',
		},
		description: {
			heading: 'Покриття дахів метод розуклонки поверхні',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
			image: '/hero_5.png',
		},
		advantages: {
			heading: 'Переваги покриття методом розуклонів',
			list: [{ text: 'text 1' }, { text: 'text 2' }, { text: 'text 3' }],
		},
		whenStart: {
			heading: 'Коли варто робити стяжку:',
			list: [
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
				{
					text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
				Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
				sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
				},
			],
			image: '/hero.jpg',
		},
		prices: {
			ourMaterials: '260',
			customerMaterials: '160',
		},
	},
};

function ServisesPage({ params }) {
	const setData = () => {
		switch (params.servise) {
			case 'screed': {
				return data.screed;
			}
			case 'plaster': {
				return data.plaster;
			}
			case 'roofing': {
				return data.roofing;
			}
			default:
				break;
		}
	};

	let serviseData = setData();

	return (
		<>
			<MiniHero
				heading={serviseData.hero.heading}
				description={serviseData.hero.description}
				image={serviseData.hero.image}
			/>
			<ServiseDescription data={serviseData.description} />
			<ServiseAdvantages data={serviseData.advantages} />
			<CostCalculation data={serviseData.prices} />
			<ServiseWhenStart data={serviseData.whenStart} />
			<ContactsBanner />
			<FAQ />
			<Quote image="/hero_4.jpg" autor="ДЖОН Л. ДЖОНСОН">
				Якість – <span> це наша краща стратегія</span> бізнесу
			</Quote>
		</>
	);
}

export default ServisesPage;
