import * as motion from 'motion/react-client';
import {
	Brain,
	Lightbulb,
	Layers,
	ChevronRight,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export function BehaviorDesignSection() {
	return (
		<section
			id='integration-section'
			className='w-full py-24 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					{/* Left side - Main title */}
					<div className='flex flex-col justify-center'>
						<motion.p
							className='text-xl text-blue-600 font-medium mb-3'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
						>
							INTEGRATION
						</motion.p>

						<motion.h2
							className='text-4xl md:text-5xl font-bold text-blue-950 mb-6 max-w-[400px]'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<span className='text-blue-600 block mb-1'>
								Behavior Design:
							</span>{' '}
							Building Habits that Last
						</motion.h2>

						<motion.p
							className='text-slate-700 text-xl leading-relaxed mb-8'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							We combine proven science with practical tools to
							help you build lasting habits that transform your
							life.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Link
								href='/about/science'
								className='inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors cursor-pointer'
							>
								Learn More <ArrowRight size={18} />
							</Link>
						</motion.div>
					</div>

					{/* Right side - cards */}
					<div className='space-y-6'>
						{/* Card 1 */}
						<motion.div
							className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<div className='flex items-start gap-5'>
								<div className='bg-blue-100 p-4 rounded-full'>
									<Brain
										className='text-blue-600'
										size={28}
									/>
								</div>
								<div className='space-y-3 flex-1'>
									<h3 className='text-xl font-bold text-blue-950'>
										Motivation & Willpower
									</h3>
									<ul className='space-y-2 text-slate-700'>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												The Willpower & Motivation myths
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												The Willpower Gap & how to
												bridge it
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Strategies to build the muscles
												of self-control
											</p>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>

						{/* Card 2 */}
						<motion.div
							className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<div className='flex items-start gap-5'>
								<div className='bg-blue-100 p-4 rounded-full'>
									<Lightbulb
										className='text-blue-600'
										size={28}
									/>
								</div>
								<div className='space-y-3 flex-1'>
									<h3 className='text-xl font-bold text-blue-950'>
										Skills of Change
									</h3>
									<ul className='space-y-2 text-slate-700'>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Selecting which habits to build
												into your life
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Understanding how & when to grow
												your habits
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Changing your environment to
												make it work for you
											</p>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>

						{/* Card 3 */}
						<motion.div
							className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<div className='flex items-start gap-5'>
								<div className='bg-blue-100 p-4 rounded-full'>
									<Layers
										className='text-blue-600'
										size={28}
									/>
								</div>
								<div className='space-y-3 flex-1'>
									<h3 className='text-xl font-bold text-blue-950'>
										Habit Systems
									</h3>
									<ul className='space-y-2 text-slate-700'>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Habit recipes and how to design
												them
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												Untangling and unlearning
												unwanted behaviors
											</p>
										</li>
										<li className='flex items-start gap-2'>
											<ChevronRight
												className='text-blue-500 flex-shrink-0 mt-1'
												size={16}
											/>
											<p>
												3-step process for
												Identity-based habits
											</p>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				<motion.div
					className='w-full mx-auto text-center mt-16 p-12 border-t border-b border-slate-200'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<blockquote className='italic text-slate-700 text-3xl md:text-4xl font-medium'>
						&ldquo;We are what we repeatedly do; excellence, then,
						is not an act but a habit&rdquo;
						<footer className='text-slate-500 text-xl mt-4'>
							- Aristotle
						</footer>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
}
