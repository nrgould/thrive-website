import * as motion from 'motion/react-client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RegisterPage() {
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
						Register for THRIVE
					</motion.h1>
					<motion.p
						className='text-lg md:text-xl text-slate-700 mb-10 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Take the first step toward lasting health
						transformation. Select a program below to join our
						waitlist or learn more about our offerings.
					</motion.p>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
						<motion.div
							className='bg-white rounded-3xl shadow-md border border-blue-100 p-8 flex flex-col'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
						>
							<h2 className='text-2xl font-bold text-blue-950 mb-4'>
								THRIVE 6-Week Program
							</h2>
							<p className='text-slate-700 mb-6 flex-grow'>
								Our complete, coach-guided program for
								sustainable lifestyle change. Join the waitlist
								for our next cohort.
							</p>
							<Link href='/programs/six-week#waitlist-form'>
								<button className='w-full py-3 bg-blue-500 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors'>
									Join Waitlist <ArrowRight size={18} />
								</button>
							</Link>
						</motion.div>

						<motion.div
							className='bg-white rounded-3xl shadow-md border border-blue-100 p-8 flex flex-col'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<h2 className='text-2xl font-bold text-blue-950 mb-4'>
								THRIVE Essentials
							</h2>
							<p className='text-slate-700 mb-6 flex-grow'>
								Our self-paced program for those who want to
								explore Lifestyle Medicine at their own pace.
								Available now.
							</p>
							<Link href='/programs/essentials'>
								<button className='w-full py-3 bg-blue-100 text-blue-700 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-200 transition-colors'>
									Learn More <ArrowRight size={18} />
								</button>
							</Link>
						</motion.div>
					</div>

					<motion.p
						className='text-base text-slate-600 mt-12'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						Not sure which program is right for you?{' '}
						<Link
							href='/contact'
							className='text-blue-500 hover:underline'
						>
							Contact us
						</Link>{' '}
						and we'll help you decide.
					</motion.p>
				</div>
			</section>
		</main>
	);
}
