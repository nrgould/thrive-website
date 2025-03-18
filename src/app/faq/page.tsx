import * as motion from 'motion/react-client';
import { FAQSection } from '@/components/FAQSection';

export default function FAQPage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
				<div className='max-w-4xl mx-auto text-center'>
					<motion.h1
						className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						Frequently Asked Questions
					</motion.h1>
					<motion.p
						className='text-lg md:text-xl text-slate-700 mb-6 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Find answers to common questions about THRIVE programs,
						approach, and how we can help you achieve lasting health
						changes.
					</motion.p>
				</div>
			</section>

			<FAQSection />
		</main>
	);
}
