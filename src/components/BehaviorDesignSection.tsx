import * as motion from 'motion/react-client';
import {
	Brain,
	Lightbulb,
	Layers,
	ChevronRight,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const cardData = [
	{
		title: 'Motivation & Willpower',
		icon: Brain,
		iconBgColor: 'bg-blue-500',
		chevronColor: 'text-blue-500',
		items: [
			'Understanding the myths of motivation',
			'Bridging the Willpower Gap',
			"Building the 'muscles' of self-control",
		],
	},
	{
		title: 'Skills of Change',
		icon: Lightbulb,
		iconBgColor: 'bg-green-500',
		chevronColor: 'text-green-500',
		items: [
			'Selecting which habits to build into your life',
			'Understanding how & when to grow your habits',
			'Changing your environment to make it work for you',
		],
	},
	{
		title: 'Habit Systems',
		icon: Layers,
		iconBgColor: 'bg-teal-500',
		chevronColor: 'text-teal-500',
		items: [
			'Designing Habit Recipes',
			'Untangling and stopping unwanted behaviors',
			'Developing Identity-based habits',
		],
	},
];

export function BehaviorDesignSection() {
	return (
		<section
			id='integration-section'
			className='w-full py-24 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					{/* Left side - Main title */}
					<div className='flex flex-col justify-center  max-w-[75%]'>
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
							className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'
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
						{cardData.map((card, index) => {
							const IconComponent = card.icon;
							return (
								<motion.div
									key={card.title}
									className='bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.6,
										delay: index * 0.2,
									}}
								>
									<div className='flex items-start gap-5'>
										<div
											className={`${card.iconBgColor} p-4 rounded-full shadow-md`}
										>
											<IconComponent
												className='text-white'
												size={28}
											/>
										</div>
										<div className='space-y-3 flex-1'>
											<h3 className='text-xl font-bold text-blue-950'>
												{card.title}
											</h3>
											<ul className='space-y-2 text-slate-700'>
												{card.items.map((item, i) => (
													<li
														key={i}
														className='flex items-start gap-2'
													>
														<ChevronRight
															className={`${card.chevronColor} flex-shrink-0 mt-1`}
															size={16}
														/>
														<p>{item}</p>
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
							);
						})}
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
						&ldquo;We are what we repeatedly do; <br />
						excellence is not an act but a habit&rdquo;
						<footer className='text-slate-500 text-xl mt-4'>
							- Aristotle
						</footer>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
}
