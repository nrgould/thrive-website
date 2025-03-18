import * as motion from 'motion/react-client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section className='w-full min-h-[60vh] md:min-h-[60vh] flex flex-col items-center justify-center px-4 md:px-8 pt-8 md:pt-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden'>
			<div className='max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12'>
				<motion.div
					className='flex-1 space-y-4 md:space-y-6 text-center lg:text-left'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<motion.h1
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						Lifestyle is the{' '}
						<span className='text-blue-500'>Cause</span>.<br />
						Lifestyle is also the{' '}
						<span className='text-blue-500'>Cure</span>.
					</motion.h1>

					<motion.p
						className='text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Many health programs focus on quick fixes and fads, but
						real change happens when small, consistent steps build a
						solid foundation of well-being.
					</motion.p>

					<motion.div
						className='flex items-center gap-2 mt-4 justify-center lg:justify-start'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						viewport={{ once: true }}
					>
						<span className='text-slate-600 text-sm'>
							Sponsored by
						</span>
						<div className='h-8 sm:h-10 w-24 sm:w-32 relative'>
							<Image
								src='/C2Life logo.png'
								alt='C2Life'
								className='h-full w-full object-contain'
								width={128}
								height={40}
								priority
							/>
						</div>
					</motion.div>

					<Link href='/programs/six-week#waitlist-form'>
						<motion.button
							className='mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-full font-medium text-base sm:text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl mx-auto lg:mx-0'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Register for next cohort{' '}
							<ArrowRight className='ml-1' size={18} />
						</motion.button>
					</Link>
				</motion.div>

				<motion.div
					className='flex-1 relative h-[250px] sm:h-[300px] md:h-[350px] w-full lg:h-[500px] rounded-3xl overflow-hidden mt-8 lg:mt-0'
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<div className='absolute inset-0 bg-blue-200 bg-opacity-50 rounded-3xl flex items-center justify-center'>
						<Image
							unoptimized
							src='/lifestyle/greenway1.webp'
							alt='Healthy, active lifestyle image'
							className='w-full h-full object-cover'
							width={1000}
							height={1000}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
