import * as motion from 'motion/react-client';
import {
	Brain,
	Cog,
	Mountain,
	Sparkles,
	Target,
	Calendar,
	Flame,
	RotateCcw,
	Clock,
	Heart,
	Trophy,
	RefreshCw,
} from 'lucide-react';

interface MythTruthPair {
	myth: string;
	truth: string;
	mythIcon: React.ReactNode;
	truthIcon: React.ReactNode;
}

export function ScienceMythsTruthsSection() {
	const mythTruthPairs: MythTruthPair[] = [
		{
			myth: 'The one with the most Willpower wins',
			truth: 'The one with the best Systems wins',
			mythIcon: <Brain className='text-blue-500' size={22} />,
			truthIcon: <Cog className='text-blue-500' size={22} />,
		},
		{
			myth: 'Big changes lead to big results',
			truth: 'Tiny is transformative',
			mythIcon: <Mountain className='text-blue-500' size={22} />,
			truthIcon: <Sparkles className='text-blue-500' size={22} />,
		},
		{
			myth: 'Master the Art of Setting Great Goals',
			truth: 'Master the Art of Showing Up',
			mythIcon: <Target className='text-blue-500' size={22} />,
			truthIcon: <Calendar className='text-blue-500' size={22} />,
		},
		{
			myth: 'Intensity is King',
			truth: 'Consistency is Queen',
			mythIcon: <Flame className='text-blue-500' size={22} />,
			truthIcon: <RotateCcw className='text-blue-500' size={22} />,
		},
		{
			myth: 'Just repeat this for 21 days (or 30, or 60, or 90...) to build habits',
			truth: 'Emotions build habits',
			mythIcon: <Clock className='text-blue-500' size={22} />,
			truthIcon: <Heart className='text-blue-500' size={22} />,
		},
		{
			myth: 'The power of perfection',
			truth: 'The power of recovering quickly',
			mythIcon: <Trophy className='text-blue-500' size={22} />,
			truthIcon: <RefreshCw className='text-blue-500' size={22} />,
		},
	];

	return (
		<section className='w-full py-12 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					className='text-center mt-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h3 className='text-xl text-blue-600 font-medium mb-3 uppercase'>
						Creating a Lifestyle of Consistency
					</h3>
				</motion.div>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Myths & Truths of Behavior Design
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Discover the most common misconceptions about behavior
					change and the evidence-based truths that lead to lasting
					results.
				</motion.p>

				<div className='grid grid-cols-1 gap-6 mb-16'>
					{mythTruthPairs.map((pair, index) => (
						<motion.div
							key={index}
							className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 bg-white rounded-3xl shadow-sm overflow-hidden border border-blue-100'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								scale: 1.02,
								transition: { duration: 0.2 },
							}}
						>
							<div className='p-6 md:p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-blue-100'>
								<div className='flex'>
									<motion.div
										className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'
										initial={{ rotate: -30, scale: 0.8 }}
										whileInView={{ rotate: 0, scale: 1 }}
										whileHover={{
											rotate: -15,
											transition: { duration: 0.3 },
										}}
										transition={{
											type: 'spring',
											stiffness: 260,
											damping: 20,
											delay: index * 0.1,
										}}
									>
										<motion.div
											whileHover={{
												rotate: 30,
												transition: { duration: 0.3 },
											}}
										>
											{pair.mythIcon}
										</motion.div>
									</motion.div>
									<div>
										<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
											Myth
										</p>
										<h3 className='text-xl font-bold text-slate-800'>
											{pair.myth}
										</h3>
									</div>
								</div>
							</div>

							<div className='p-6 md:p-8'>
								<div className='flex'>
									<motion.div
										className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'
										initial={{ rotate: 30, scale: 0.8 }}
										whileInView={{ rotate: 0, scale: 1 }}
										whileHover={{
											rotate: 15,
											transition: { duration: 0.3 },
										}}
										transition={{
											type: 'spring',
											stiffness: 260,
											damping: 20,
											delay: index * 0.1,
										}}
									>
										<motion.div
											whileHover={{
												rotate: -30,
												transition: { duration: 0.3 },
											}}
										>
											{pair.truthIcon}
										</motion.div>
									</motion.div>
									<div>
										<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
											Truth
										</p>
										<h3 className='text-xl font-bold text-slate-800'>
											{pair.truth}
										</h3>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
