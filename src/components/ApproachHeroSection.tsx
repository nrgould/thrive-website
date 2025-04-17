import * as motion from 'motion/react-client';
import { Compass } from 'lucide-react';
import { ScrollDownCTA } from './ScrollDownCTA';

export function ApproachHeroSection() {
	return (
		<section className='w-full min-h-[30rem] py-24 px-4 md:px-8 bg-gradient-to-b from-blue-500 to-blue-600 overflow-hidden relative text-white'>
			{/* Decorative elements */}
			<div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl -z-10'></div>
			<div className='absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl -z-10'></div>

			<div className='max-w-4xl mx-auto text-center'>
				<div className='mb-8 inline-flex justify-center'>
					<motion.div
						className='bg-white/20 p-4 rounded-full'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Compass className='w-8 h-8 text-white' />
					</motion.div>
				</div>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-white mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					Our Approach to{' '}
					<span className='text-blue-100'>Lasting Change</span>
				</motion.h1>

				<div className='max-w-2xl mx-auto'>
					<motion.p
						className='text-lg md:text-xl text-blue-50 mb-6 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Most health programs focus on quick fixes and fads, but
						real transformation requires a fundamentally different
						approach. At THRIVE, we combine evidence-based Lifestyle
						Medicine with proven Behavior Design principles to help
						you create lasting change that nourishes the whole body.
					</motion.p>
					<motion.p
						className='text-lg md:text-xl text-blue-50 mb-12 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						Our methodology is built on a simple truth:{' '}
						<span className='font-semibold'>
							Lifestyle is both the cause and the cure
						</span>
						. We help you build sustainable habits that address the
						root causes of chronic disease while enhancing your
						overall well-being in a community where everyone is
						supporting each other&apos;s health journeys.
					</motion.p>

					{/* Scroll down animation */}
					<ScrollDownCTA
						className='mt-8'
					/>
				</div>
			</div>
		</section>
	);
}
