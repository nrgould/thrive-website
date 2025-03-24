'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const faqs = [
		{
			question: 'Is this a diet or fitness plan?',
			answer: 'No. THRIVE is not about restrictive dieting or intense exercise routines. Instead, it helps you develop a balanced approach to food, movement, and daily habits that fit into your lifestyle.',
		},
		{
			question: 'What results can I expect?',
			answer: 'Results vary based on individual effort and participation, but past participants have reported: reduced stress and improved energy levels, better sleep and mental clarity, healthier eating habits and healthier weight management, increased motivation and sense of purpose.',
		},
		{
			question: 'How do I get started?',
			answer: 'Spots in THRIVE are limited, so we recommend joining the waiting list to be notified when the next cohort opens.',
		},
	];

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<motion.h3
				className='text-2xl md:text-3xl font-bold text-center mb-10 text-blue-950'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
			>
				Frequently Asked Questions
			</motion.h3>

			<motion.p
				className='text-center text-slate-600 mb-12 max-w-2xl mx-auto'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				viewport={{ once: true }}
			>
				Please reach us at{' '}
				<a
					href='mailto:info@thrive.com'
					className='text-blue-500 underline'
				>
					info@thrive.com
				</a>{' '}
				if you cannot find an answer to your question.
			</motion.p>

			<div className='max-w-3xl mx-auto space-y-4'>
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						className='border border-blue-100 rounded-2xl overflow-hidden'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.4,
							delay: 0.1 * index + 0.6,
						}}
						viewport={{ once: true }}
					>
						<button
							className='w-full p-5 text-left flex items-center justify-between bg-white hover:bg-blue-50 transition-colors cursor-pointer'
							onClick={() => toggleFaq(index)}
						>
							<span className='text-lg font-medium text-blue-950'>
								{faq.question}
							</span>
							{openFaq === index ? (
								<ChevronUp
									className='text-blue-500'
									size={20}
								/>
							) : (
								<ChevronDown
									className='text-blue-500'
									size={20}
								/>
							)}
						</button>
						{openFaq === index && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className='overflow-hidden'
							>
								<div className='p-5 pt-0 text-slate-700 bg-white'>
									<p>{faq.answer}</p>
								</div>
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</section>
	);
}
