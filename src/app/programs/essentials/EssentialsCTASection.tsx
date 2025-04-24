'use client';

import * as motion from 'motion/react-client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EssentialsCTASectionProps {
	secondaryActionText?: string;
	secondaryActionLink?: string;
	variant?: 'primary' | 'secondary';
}

export function EssentialsCTASection({
	secondaryActionText = 'Explore the science',
	secondaryActionLink = '/about/science',
	variant = 'primary',
}: EssentialsCTASectionProps) {
	const sectionBgClass =
		variant === 'primary'
			? 'bg-gradient-to-b from-blue-50 to-white'
			: 'bg-blue-600';
	const headingColorClass =
		variant === 'primary' ? 'text-blue-950' : 'text-white';
	const paragraphColorClass =
		variant === 'primary' ? 'text-slate-500' : 'text-blue-100';
	const linkColorClass =
		variant === 'primary' ? 'text-blue-500' : 'text-white';

	const handleScrollToForm = () => {
		const formElement = document.getElementById(
			'essentials-waitlist-form-container'
		);
		if (formElement) {
			formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<section className={`w-full py-20 px-4 md:px-8 ${sectionBgClass}`}>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h2
					className={`text-3xl md:text-4xl font-bold mb-6 ${headingColorClass}`}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Ready to Start Your Journey?
				</motion.h2>

				<motion.div
					className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<button
						onClick={handleScrollToForm}
						className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl cursor-pointer'
					>
						Get notified when it launches <ArrowRight size={18} />
					</button>

					<Link href={secondaryActionLink}>
						<button className='px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer'>
							{secondaryActionText} <ArrowRight size={18} />
						</button>
					</Link>
				</motion.div>

				<motion.p
					className={`text-sm mt-8 ${paragraphColorClass}`}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
				>
					Have questions?{' '}
					<Link
						href='/contact'
						className={`${linkColorClass} hover:underline`}
					>
						Contact our team
					</Link>{' '}
					for more information.
				</motion.p>
			</div>
		</section>
	);
}
