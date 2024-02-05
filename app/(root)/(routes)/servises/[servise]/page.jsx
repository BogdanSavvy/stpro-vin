import MiniHero from '@/components/mini-hero';
import ServiseDescription from '@/components/servise-description';
import ServiseAdvantages from '@/components/servise-advantages';
import Calculator from '@/components/calculator';

const data = {
	screed: {
		description: {
			heading: 'Машинна стяжка підлоги',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
		},
		advantages: {
			heading: 'Переваги машинної стяжки',
			list: [{ text: 'text 1' }, { text: 'text 2' }, { text: 'text 3' }],
		},
		prices: {
			ourMaterials: '280',
			customerMaterials: '180',
		},
	},
	plaster: {
		description: {
			heading: 'Машинна штукатурка стін',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
		},
		advantages: {
			heading: 'Переваги машинної штукатурки',
			list: [{ text: 'text 1' }, { text: 'text 2' }, { text: 'text 3' }],
		},
		prices: {
			ourMaterials: '330',
			customerMaterials: '230',
		},
	},
	roofing: {
		description: {
			heading: 'Покриття дахів метод розуклонки поверхні',
			description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Maxime minima et libero enim rerum at unde consequatur odit culpa veritatis, 
			sunt animi fugit eius aperiam adipisci officiis nostrum aliquid. Nam!`,
		},
		advantages: {
			heading: 'Переваги покриття методом розуклонів',
			list: [{ text: 'text 1' }, { text: 'text 2' }, { text: 'text 3' }],
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
				heading="Дякуємо, що завітали саме до нас. Будемо знайомі ми компанія STPRO-VIN"
				description="Ми - ваш надійний партнер у сфері створення комфортних та міцних просторів."
				image="/hero.jpg"
			/>
			<ServiseDescription data={serviseData.description} />
			<ServiseAdvantages data={serviseData.advantages} />
			<Calculator data={serviseData.prices} />
		</>
	);
}

export default ServisesPage;
