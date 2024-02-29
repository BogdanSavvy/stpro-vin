// 'use server';

// export const sendOrderAction = async message => {
// 	try {
// 		const response = await fetcher(
// 			`https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage`,
// 			{
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify({
// 					chat_id: process.env.TELEGRAM_CHAT_ID,
// 					parse_mode: 'html',
// 					text: message,
// 				}),
// 			},
// 		);

// 		return response;
// 	} catch (error) {
// 		console.error('Помилка при відправленні POST-запиту:', error);
// 		throw error;
// 	}
// };

export const sendOrderAction = async message => {
	try {
		const response = await fetch(`/api/sendOrder`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				message,
			}),
		});

		return response;
	} catch (error) {
		console.error('Помилка при відправленні POST-запиту:', error);

		throw error;
	}
};
