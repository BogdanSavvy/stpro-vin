import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const body = await req.json();

		const { message } = body;

		if (!message) {
			return new NextResponse('Message is required', { status: 400 });
		}

		const res = await fetch(
			`https://api.telegram.org/bot${process.env.BOT_API_KEY}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: process.env.TELEGRAM_CHAT_ID,
					parse_mode: 'html',
					text: message,
				}),
			},
		);

		const data = await res.json();

		return NextResponse.json(data);
	} catch (error) {
		console.error('[SEND_ORDER_POST]', error);
		return new NextResponse('Interal error', { status: 500 });
	}
}
