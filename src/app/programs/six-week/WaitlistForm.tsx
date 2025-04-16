'use client';

import React, { useState } from 'react';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox'; // Import Checkbox

export function WaitlistForm() {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [optIn, setOptIn] = useState(true); // Add state for opt-in, default true
	const [status, setStatus] = useState(''); // For feedback
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setStatus('Submitting...');

		try {
			const response = await fetch('/api/waitlist', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					firstName,
					lastName,
					phone,
					optIn, // Include optIn status
				}),
			});

			const data = await response.json();

			if (response.ok && data.success) {
				setStatus('Success! You have been added to the waitlist.');
				// Optionally clear the form
				setEmail('');
				setFirstName('');
				setLastName('');
				setPhone('');
				setOptIn(true); // Reset opt-in state if needed
			} else {
				setStatus(data.error || 'An error occurred. Please try again.');
			}
		} catch (error) {
			console.error('Submission error:', error);
			setStatus('An error occurred. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='w-full max-w-[600px] mx-auto'>
			<div
				id='waitlist-form-container'
				className='bg-white p-8 rounded-3xl shadow-sm'
			>
				<form onSubmit={handleSubmit}>
					<div className='space-y-4'>
						<div className='indicates-required text-slate-500 text-sm text-right'>
							<span className='asterisk text-blue-500'>*</span>{' '}
							indicates required
						</div>
						<div className='space-y-2'>
							<Label htmlFor='email' className='text-slate-700'>
								Email Address{' '}
								<span className='asterisk text-blue-500'>
									*
								</span>
							</Label>
							<Input
								type='email'
								name='email'
								id='email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className='space-y-2'>
							<Label
								htmlFor='firstName'
								className='text-slate-700'
							>
								First Name
							</Label>
							<Input
								type='text'
								name='firstName'
								id='firstName'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className='space-y-2'>
							<Label
								htmlFor='lastName'
								className='text-slate-700'
							>
								Last Name
							</Label>
							<Input
								type='text'
								name='lastName'
								id='lastName'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className='space-y-2'>
							<Label htmlFor='phone' className='text-slate-700'>
								Phone Number
							</Label>
							<Input
								type='tel' // Use type='tel' for phone numbers
								name='phone'
								id='phone'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								disabled={loading}
							/>
						</div>

						{/* Opt-in Checkbox */}
						<div className='flex items-center space-x-2 pt-2'>
							<Checkbox
								id='optIn'
								checked={optIn}
								onCheckedChange={(
									checked: boolean | 'indeterminate'
								) => setOptIn(Boolean(checked))}
								disabled={loading}
							/>
							<Label
								htmlFor='optIn'
								className='text-sm text-slate-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
							>
								Yes, I want to receive email updates from
								THRIVE.
							</Label>
						</div>

						{/* Status Message */}
						{status && (
							<div
								className={`p-3 rounded-md text-sm ${
									status.startsWith('Success')
										? 'bg-green-100 text-green-800'
										: 'bg-red-100 text-red-800'
								}`}
							>
								{status}
							</div>
						)}

						<div className='clear pt-2'>
							<Button
								type='submit'
								className='bg-blue-500 text-white px-4 py-2 rounded-full w-full font-bold'
								size='lg'
								disabled={loading}
							>
								{loading ? 'Submitting...' : 'Join Waitlist'}
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>

		/* Removed all Script tags related to jQuery and Mailchimp */
	);
}

export default WaitlistForm;
