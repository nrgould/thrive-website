import * as motion from 'motion/react-client';
import { CheckCircle, Heart, Brain, Clock, Users } from 'lucide-react';

export function ApproachWhyItWorksSection() {
	const benefitCards = [
		{
			icon: <Heart className='text-blue-500' size={24} />,
			title: 'Improved Physical Health',
			description:
				'Lower blood pressure, improve cholesterol levels, reduce blood sugar, manage weight, and reduced risk of chronic disease.',
		},
		{
			icon: <Brain className='text-blue-500' size={24} />,
			title: 'Enhanced Cognitive & Emotional Wellbeing',
			description:
				'Develop a growth mindset, manage stress, improve focus, reduce anxiety and depression, improve cognitive function, and build emotional resilience.',
		},
		{
			icon: <Users className='text-blue-500' size={24} />,
			title: 'Social Fitness',
			description:
				'Nurture deep and meaningful relationships with self, family, and community and be part of something bigger than yourself.',
		},
		{
			icon: <Clock className='text-blue-500' size={24} />,
			title: 'Sustainable Long-term Change',
			description:
				'Develop Habits that become automatic, reducing decision-making and reliance on willpower and creating lasting transformation.',
		},
	];

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-slate-950'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-white'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Why Our Approach Works
				</motion.h2>

				<motion.p
					className='text-xl text-white text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					Lifestyle Medicine education combined with Behavior Design
					systems and tools creates a powerful framework for
					sustainable health transformation. Our integrated approach
					addresses both the what and the how of lasting, healthy
					changes.
				</motion.p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20'>
					<motion.div
						className='space-y-6'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className='text-2xl font-bold text-blue-600 mb-4'>
							Lifestyle is both the cause and the cure
						</h3>
						<p className='text-slate-50 text-lg leading-relaxed'>
							Chronic diseases - heart disease, diabetes,
							hypertension, and more - that affect millions of
							people every year are largely influenced by
							lifestyle factors that are within our control.
						</p>
						<p className='text-slate-50 text-lg leading-relaxed'>
							By addressing the six key pillars of Lifestyle
							Medicine (nutrition, physical activity, sleep,
							stress management, growth mindset, and social
							connection), together we can prevent, manage, and
							often reverse these conditions.
						</p>
						<p className='text-slate-50 text-lg leading-relaxed'>
							THRIVE&apos;s methodology combines the science of
							what to change with proven strategies for how to
							change, creating a comprehensive solution for
							sustainable health. Our approach addresses the
							health of the whole-person by focusing on strategies
							and habits that build Physical, Cognitive-Emotional,
							and Social Fitness.
						</p>

						<div className='pt-4 space-y-4'>
							{[
								'Evidence-based approach backed by decades of clinical research',
								'Focus on sustainable lifestyle changes rather than quick fixes',
								'Personalized guidance that adapts to your unique needs and circumstances',
								'Integration of multiple disciplines for a holistic approach to health',
							].map((point, index) => (
								<motion.div
									key={index}
									className='flex items-start gap-3'
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.2 + index * 0.1,
									}}
									viewport={{ once: true }}
								>
									<motion.div
										initial={{ scale: 0, rotate: -30 }}
										whileInView={{ scale: 1, rotate: 0 }}
										whileHover={{ scale: 1.2, rotate: 10 }}
										transition={{
											type: 'spring',
											stiffness: 260,
											damping: 20,
										}}
										viewport={{ once: true }}
									>
										<CheckCircle
											className='text-blue-500 mt-1 flex-shrink-0'
											size={22}
										/>
									</motion.div>
									<p className='text-slate-50'>{point}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						className='space-y-8'
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className='text-2xl font-bold text-blue-600 mb-4'>
							The benefits of our integrated approach
						</h3>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{benefitCards.map((card, index) => (
								<motion.div
									key={index}
									className='bg-slate-900 p-6 rounded-2xl'
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.6,
										delay: index * 0.2,
									}}
									viewport={{ once: true, amount: 0.3 }}
									whileHover={{
										y: -5,
										transition: { duration: 0.2 },
									}}
								>
									<div className='w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4'>
										<motion.div
											initial={{ scale: 0, rotate: -30 }}
											whileInView={{
												scale: 1,
												rotate: 0,
											}}
											whileHover={{
												scale: 1.2,
												rotate: 10,
											}}
											transition={{
												type: 'spring',
												stiffness: 260,
												damping: 20,
											}}
											viewport={{ once: true }}
										>
											{card.icon}
										</motion.div>
									</div>
									<h4 className='text-lg font-bold text-white mb-2'>
										{card.title}
									</h4>
									<p className='text-slate-50'>
										{card.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* <motion.div
					className='bg-blue-600 rounded-3xl p-10 text-center text-white'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h3 className='text-2xl md:text-3xl font-bold mb-6'>
						Our results speak for themselves
					</h3>
					<p className='text-blue-100 mb-10 max-w-3xl mx-auto text-lg'>
						THRIVE participants have experienced significant
						improvements across multiple health metrics, with many
						reducing or eliminating medications, losing weight
						naturally, improving energy levels, and reporting
						greater overall satisfaction with their health and
						wellbeing.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						<div>
							<div className='text-4xl font-bold text-white mb-2'>
								85%
							</div>
							<p className='text-blue-100'>
								of participants maintain key habits 6 months
								after program completion
							</p>
						</div>
						<div>
							<div className='text-4xl font-bold text-white mb-2'>
								73%
							</div>
							<p className='text-blue-100'>
								report significant improvements in energy levels
								and mental clarity
							</p>
						</div>
						<div>
							<div className='text-4xl font-bold text-white mb-2'>
								68%
							</div>
							<p className='text-blue-100'>
								experience improvements in key biomarkers like
								blood pressure and cholesterol
							</p>
						</div>
						<div>
							<div className='text-4xl font-bold text-white mb-2'>
								91%
							</div>
							<p className='text-blue-100'>
								would recommend THRIVE to friends and family
								seeking lasting health changes
							</p>
						</div>
					</div>
				</motion.div> */}
			</div>
		</section>
	);
}
