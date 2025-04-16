import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
	try {
		// Ensure the API key is loaded
		if (!process.env.RESEND_API_KEY) {
			console.error('RESEND_API_KEY environment variable is not set.');
			return NextResponse.json(
				{ error: 'Server configuration error: Missing Resend API key' },
				{ status: 500 }
			);
		}

		// Send the test email using the details from the sample code
		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev', // Use the default Resend onboarding email for this test
			to: 'nrgould197@gmail.com', // Your target email address
			subject: 'Hello World from Resend Test',
			html: '<p>Congrats on sending your <strong>test email</strong> via Next.js API route!</p>',
		});

		if (error) {
			console.error('Resend test error:', error);
			return NextResponse.json(
				{ error: 'Failed to send test email', details: error.message },
				{ status: 500 }
			);
		}

		console.log('Resend test email sent successfully:', data);
		return NextResponse.json(
			{ success: true, message: 'Test email sent!', data: data },
			{ status: 200 }
		);
	} catch (error) {
		console.error('API route error (test-resend):', error);
		return NextResponse.json(
			{ error: 'Internal Server Error during test email' },
			{ status: 500 }
		);
	}
}
