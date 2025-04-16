import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'nrgould197@gmail.com'; // The email address to send the form data to
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'; // Verified domain sender in Resend

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, phone, subject, message } = body;

		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Construct email content
		const emailSubject = `New Contact Form Submission: ${subject}`;
		const emailHtml = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: [toEmail],
			subject: emailSubject,
			html: emailHtml,
			replyTo: email, // Set the reply-to as the sender's email
		});

		if (error) {
			console.error('Resend error:', error);
			return NextResponse.json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}

		console.log('Email sent successfully:', data);
		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('API route error:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
