'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Activity, Leaf } from 'lucide-react';

export function WhoForSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const audiences = [
		{
			icon: <Heart className='text-white' size={28} />,
			title: 'People with Chronic Conditions',
			description:
				'Those managing conditions like diabetes, heart disease, high blood pressure, or high cholesterol who want to reduce symptoms and medication dependence.',
			color: 'bg-blue-500',
		},
		{
			icon: <Activity className='text-white' size={28} />,
			title: 'Health-Conscious Individuals',
			description:
				'People looking to optimize their well-being, increase energy levels, and build sustainable healthy habits for the long term.',
			color: 'bg-green-500',
		},
		{
			icon: <Leaf className='text-white' size={28} />,
			title: 'Prevention-Focused Individuals',
			description:
				'Those with family history of chronic disease who want to take proactive steps to reduce their risk factors through lifestyle changes.',
			color: 'bg-teal-500',
		},
	];

	return (
		<section
			ref={sectionRef}
			className='w-full py-24 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5 }}
				>
					<h2 className='text-3xl md:text-4xl font-bold text-blue-950 mb-6'>
						Who This Program Is For
					</h2>
					<p className='text-lg text-slate-700 max-w-3xl mx-auto'>
						THRIVE is designed to help a wide range of people
						improve their health and well-being through
						evidence-based lifestyle changes.
					</p>
				</motion.div>

				<div className='space-y-16'>
					{audiences.map((audience, index) => (
						<motion.div
							key={index}
							className={`flex flex-col ${
								index % 2 === 1
									? 'md:flex-row-reverse'
									: 'md:flex-row'
							} items-center gap-8 md:gap-16`}
							initial={{ opacity: 0, y: 50 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 50 }
							}
							transition={{ duration: 0.6, delay: index * 0.2 }}
						>
							<div className='w-full md:w-1/3 flex justify-center'>
								<div
									className={`${audience.color} w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 duration-300`}
								>
									<div className='scale-150'>
										{audience.icon}
									</div>
								</div>
							</div>

							<div className='w-full md:w-2/3 text-center md:text-left'>
								<h3 className='text-2xl font-bold text-blue-900 mb-4'>
									{audience.title}
								</h3>
								<p className='text-lg text-slate-600 max-w-xl mx-auto md:mx-0'>
									{audience.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className='mt-20 text-center'
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<p className='text-xl text-blue-800 font-medium'>
						No matter where you are in your health journey, THRIVE
						provides the tools, support, and community you need to
						succeed.
					</p>
					<div className='mt-8'>
						<a
							href='#register'
							className='inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md'
						>
							Find Your Path
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
