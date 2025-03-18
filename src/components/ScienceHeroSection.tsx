import * as motion from 'motion/react-client';
import Image from 'next/image';

export function ScienceHeroSection() {
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
							The Science Behind <br />
							<span className='text-blue-500'>
								Lifestyle Medicine
							</span>
						</h1>
						<p className='text-lg text-slate-700 mb-6 leading-relaxed'>
							Discover the evidence-based research and scientific
							principles that form the foundation of our approach
							to health and wellness through the six pillars of
							Lifestyle Medicine.
						</p>
						<p className='text-lg text-slate-700 leading-relaxed'>
							Each pillar is supported by decades of research
							demonstrating its crucial role in preventing,
							treating, and often reversing chronic disease.
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
							src='/lifestyle/science-hero.webp'
							alt='Scientific research and lifestyle medicine visualization'
							fill
							className='object-cover'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
