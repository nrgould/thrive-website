'use client';

import * as motion from 'motion/react-client';
import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export function ContactFormSection() {
	const [formStatus, setFormStatus] = useState<
		'idle' | 'submitting' | 'success' | 'error'
	>('idle');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus('submitting');

		// Simulating form submission
		// In a real application, you would send this data to your server or a form service
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setFormStatus('success');
			// Reset form after success
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});
		} catch (e) {
			console.error('Form submission error:', e);
			setFormStatus('error');
		}
	};

	return (
		<section className='w-full py-16 px-4 md:px-8 bg-white'>
			<div className='max-w-3xl mx-auto'>
				<motion.div
					className='bg-white rounded-3xl shadow-md border border-blue-100 p-8 md:p-10'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className='text-2xl md:text-3xl font-bold text-blue-950 mb-6'>
						Contact Us
					</h2>

					{formStatus === 'success' ? (
						<div className='bg-green-50 border border-green-200 rounded-xl p-6 text-center'>
							<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<Check className='text-green-600' size={24} />
							</div>
							<h3 className='text-xl font-bold text-green-800 mb-2'>
								Message Sent!
							</h3>
							<p className='text-green-700'>
								Thank you for reaching out. Our team will get
								back to you shortly.
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium text-slate-700 mb-1'
									>
										Your Name{' '}
										<span className='text-red-500'>*</span>
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
										placeholder='John Doe'
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-slate-700 mb-1'
									>
										Email Address{' '}
										<span className='text-red-500'>*</span>
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
										placeholder='your.email@example.com'
									/>
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='phone'
										className='block text-sm font-medium text-slate-700 mb-1'
									>
										Phone Number
									</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
										placeholder='(555) 123-4567'
									/>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-slate-700 mb-1'
									>
										Subject{' '}
										<span className='text-red-500'>*</span>
									</label>
									<select
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
									>
										<option value=''>
											Select a subject
										</option>
										<option value='program-inquiry'>
											Program Inquiry
										</option>
										<option value='membership'>
											Membership Questions
										</option>
										<option value='support'>
											Technical Support
										</option>
										<option value='partnership'>
											Partnership Opportunities
										</option>
										<option value='other'>Other</option>
									</select>
								</div>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-slate-700 mb-1'
								>
									Message{' '}
									<span className='text-red-500'>*</span>
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className='w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition'
									placeholder='How can we help you?'
								></textarea>
							</div>

							<div className='flex justify-end'>
								<button
									type='submit'
									disabled={formStatus === 'submitting'}
									className={`px-6 py-3 bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 transition ${
										formStatus === 'submitting'
											? 'opacity-70 cursor-not-allowed'
											: 'hover:bg-blue-600 shadow-md hover:shadow-lg'
									}`}
								>
									{formStatus === 'submitting' ? (
										<>
											<div className='w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin'></div>
											Sending...
										</>
									) : (
										<>
											Send Message <Send size={18} />
										</>
									)}
								</button>
							</div>

							{formStatus === 'error' && (
								<div className='bg-red-50 text-red-700 p-4 rounded-lg mt-4'>
									An error occurred. Please try again or
									contact us directly.
								</div>
							)}

							<p className='text-xs text-slate-500 mt-6'>
								By submitting this form, you agree to being
								contacted about THRIVE programs.
							</p>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
