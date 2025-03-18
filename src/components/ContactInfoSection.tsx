'use client';

import * as motion from 'motion/react-client';
import {
	Mail,
	Phone,
	MapPin,
	Clock,
	Facebook,
	Instagram,
	Twitter,
} from 'lucide-react';
import Link from 'next/link';

export function ContactInfoSection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-blue-50'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Other Ways to Connect
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<motion.div
						className='bg-white p-6 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Mail className='text-blue-500' size={24} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-3'>
							Email Us
						</h3>
						<p className='text-slate-700 mb-4'>
							For general inquiries, program information, or
							support requests.
						</p>
						<a
							href='mailto:hello@thriveprogram.com'
							className='text-blue-600 font-medium hover:underline'
						>
							hello@thriveprogram.com
						</a>
					</motion.div>

					<motion.div
						className='bg-white p-6 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Phone className='text-blue-500' size={24} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-3'>
							Call Us
						</h3>
						<p className='text-slate-700 mb-4'>
							Speak directly with a member of our support team.
						</p>
						<a
							href='tel:+18005551234'
							className='text-blue-600 font-medium hover:underline'
						>
							(800) 555-1234
						</a>
					</motion.div>

					<motion.div
						className='bg-white p-6 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<MapPin className='text-blue-500' size={24} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-3'>
							Visit Us
						</h3>
						<p className='text-slate-700 mb-4'>
							Our main office location in Asheville, NC.
						</p>
						<address className='text-blue-600 font-medium not-italic'>
							123 Wellness Way
							<br />
							Asheville, NC 28801
						</address>
					</motion.div>

					<motion.div
						className='bg-white p-6 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Clock className='text-blue-500' size={24} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-3'>
							Hours
						</h3>
						<p className='text-slate-700 mb-4'>
							We're available to assist you during these hours:
						</p>
						<div className='text-slate-700'>
							<p>Monday - Friday: 9AM - 5PM EST</p>
							<p>Saturday: 10AM - 2PM EST</p>
							<p>Sunday: Closed</p>
						</div>
					</motion.div>
				</div>

				<motion.div
					className='mt-20 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<h3 className='text-2xl font-bold text-blue-950 mb-6'>
						Connect With Us On Social Media
					</h3>

					<div className='flex items-center justify-center gap-8'>
						<a
							href='https://facebook.com/thriveprogram'
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-col items-center'
						>
							<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors'>
								<Facebook className='text-blue-500' size={24} />
							</div>
							<span className='text-sm text-slate-700'>
								Facebook
							</span>
						</a>

						<a
							href='https://instagram.com/thriveprogram'
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-col items-center'
						>
							<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors'>
								<Instagram
									className='text-blue-500'
									size={24}
								/>
							</div>
							<span className='text-sm text-slate-700'>
								Instagram
							</span>
						</a>

						<a
							href='https://twitter.com/thriveprogram'
							target='_blank'
							rel='noopener noreferrer'
							className='flex flex-col items-center'
						>
							<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors'>
								<Twitter className='text-blue-500' size={24} />
							</div>
							<span className='text-sm text-slate-700'>
								Twitter
							</span>
						</a>
					</div>
				</motion.div>

				<motion.div
					className='mt-20 bg-white rounded-3xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<div>
						<h3 className='text-2xl font-bold text-blue-950 mb-3'>
							Join Our Program
						</h3>
						<p className='text-slate-700 max-w-xl'>
							Ready to transform your health with THRIVE? Register
							now for our upcoming programs and start your journey
							to lasting change.
						</p>
					</div>

					<Link href='/programs/six-week#waitlist-form'>
						<button className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium whitespace-nowrap hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg'>
							Register Now
						</button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
