import * as motion from 'motion/react-client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function TeamCTASection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-blue-50'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Ready to Get Started?
				</motion.h2>

				<motion.p
					className='text-lg text-slate-700 mb-10 leading-relaxed max-w-2xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					Our coaches and experts are ready to support you on your
					health journey. Join our next THRIVE program cohort and
					start experiencing the benefits of lifestyle medicine with
					personalized guidance.
				</motion.p>

				<motion.div
					className='flex flex-col sm:flex-row gap-4 justify-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Link href='/programs/six-week#waitlist-form'>
						<motion.button
							className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Register for Next Cohort{' '}
							<ArrowRight className='ml-1' size={18} />
						</motion.button>
					</Link>

					<Link href='/contact'>
						<motion.button
							className='px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors border border-blue-200'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Contact Us
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
