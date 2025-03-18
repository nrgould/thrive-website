import * as motion from 'motion/react-client';
import Image from 'next/image';

export function TeamHeroSection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col lg:flex-row items-center gap-12'>
					<motion.div
						className='lg:w-1/2'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
					>
						<h1 className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'>
							Meet the People <br />
							<span className='text-blue-500'>Behind THRIVE</span>
						</h1>
						<p className='text-lg text-slate-700 mb-6 leading-relaxed'>
							Our team of dedicated professionals brings together
							diverse expertise in lifestyle medicine, nutrition,
							physical activity, behavior change, and more. We're
							committed to supporting you through every step of
							your health transformation journey.
						</p>
						<p className='text-lg text-slate-700 leading-relaxed'>
							With a combined experience of over 100 years in
							healthcare and wellness, we've helped hundreds of
							people achieve lasting lifestyle changes and
							improved health outcomes.
						</p>
					</motion.div>

					<motion.div
						className='lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden'
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Image
							src='/lifestyle/team-meeting.webp'
							alt='C2Life team of coaches and healthcare professionals'
							fill
							className='object-cover'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
