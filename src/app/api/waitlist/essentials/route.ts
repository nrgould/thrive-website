import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';
import type * as MailchimpMarketing from '@mailchimp/mailchimp_marketing';

const apiKey = process.env.MAILCHIMP_API_KEY;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

if (apiKey && serverPrefix) {
	mailchimp.setConfig({
		apiKey: apiKey,
		server: serverPrefix,
	});
} else {
	console.error(
		'Mailchimp API Key or Server Prefix is missing in environment variables.'
	);
}

export async function POST(request: Request) {
	if (!apiKey || !serverPrefix || !audienceId) {
		return NextResponse.json(
			{ error: 'Mailchimp configuration is missing.', success: false },
			{ status: 500 }
		);
	}

	try {
		// Destructure expected fields, phone might be omitted from this form
		const { email, firstName, lastName, /* phone, */ optIn } =
			await request.json();

		if (!email) {
			return NextResponse.json(
				{ error: 'Email is required.', success: false },
				{ status: 400 }
			);
		}

		// Prepare tags array specifically for Essentials
		const tagsToAdd: string[] = ['THRIVE Essentials Waitlist']; // Specific tag
		if (optIn === true) {
			tagsToAdd.push('General Updates'); // Add general tag if opted in
		}

		const listMemberBody: MailchimpMarketing.lists.AddListMemberBody = {
			email_address: email,
			status: 'subscribed',
			merge_fields: {
				FNAME: firstName || '',
				LNAME: lastName || '',
				// PHONE: phone || '', // Include if phone is added back
			},
			tags: tagsToAdd,
		};

		await mailchimp.lists.addListMember(audienceId, listMemberBody);

		return NextResponse.json({ success: true });
	} catch (error: unknown) {
		console.error(
			'Error subscribing Essentials Waitlist to Mailchimp:',
			error
		);

		// Reuse the same detailed error handling as the other waitlist route
		if (
			error &&
			typeof error === 'object' &&
			'response' in error &&
			error.response &&
			typeof error.response === 'object' &&
			'body' in error.response &&
			error.response.body &&
			typeof error.response.body === 'object'
		) {
			const mailchimpError = error as {
				response: {
					body: { title?: string; detail?: string };
				};
				status?: number;
			};
			const errorBody = mailchimpError.response.body;

			console.error(
				'Mailchimp API Error Details:',
				JSON.stringify(errorBody, null, 2)
			);

			let errorMessage = 'Failed to subscribe.';

			if (errorBody.title === 'Member Exists') {
				errorMessage = 'This email is already on the waitlist.';
			} else if (errorBody.detail) {
				errorMessage = errorBody.detail;
			} else if (errorBody.title) {
				errorMessage = errorBody.title;
			}

			const status = mailchimpError.status || 400;
			return NextResponse.json(
				{ error: errorMessage, success: false },
				{ status }
			);
		} else if (error instanceof Error) {
			console.error('Generic Error:', error.message);
			return NextResponse.json(
				{ error: error.message, success: false },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ error: 'An internal server error occurred.', success: false },
			{ status: 500 }
		);
	}
}
