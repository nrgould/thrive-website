import * as motion from 'motion/react-client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ApproachCTASection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Ready to Transform Your Health?
				</motion.h2>

				<motion.p
					className='text-lg md:text-xl text-slate-700 mb-10 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					Join THRIVE and discover how our approach to Lifestyle
					Medicine and Behavior Design can help you create sustainable
					habits and lasting change. Take the first step on your
					journey to better health today.
				</motion.p>

				<motion.div
					className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Link href='/programs/six-week#waitlist-form'>
						<button className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl'>
							Join our waitlist <ArrowRight size={18} />
						</button>
					</Link>

					<Link href='/about/science'>
						<button className='px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-50 transition-colors'>
							Explore the science <ArrowRight size={18} />
						</button>
					</Link>
				</motion.div>

				<motion.p
					className='text-sm text-slate-500 mt-8'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
				>
					Have questions?{' '}
					<Link
						href='/contact'
						className='text-blue-500 hover:underline'
					>
						Contact our team
					</Link>{' '}
					for more information.
				</motion.p>
			</div>
		</section>
	);
}
