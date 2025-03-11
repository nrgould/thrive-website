'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Heart, TrendingUp } from 'lucide-react';

export function ResultsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * i,
				duration: 0.5,
			},
		}),
	};

	const testimonials = [
		{
			quote: 'This program has done wonders for how I feel about myself.',
			author: 'Zach',
		},
		{
			quote: "I haven't felt this good on a daily basis in years.",
			author: 'Michael',
		},
		{
			quote: 'I truly understand the importance of eating nutrient-dense foods and making smart choices.',
			author: 'Beverly',
		},
		{
			quote: 'I am an accomplished pianist who had given up playing the piano, but now I can play again.',
			author: 'Jennifer',
		},
	];

	return (
		<section
			ref={sectionRef}
			className='w-full py-24 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6 }}
				>
					Real Results for Real People
				</motion.h2>

				{/* Stats */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={0}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<TrendingUp className='text-blue-500' size={28} />
						</div>
						<h3 className='text-5xl font-bold text-blue-500 mb-2'>
							21%
						</h3>
						<p className='text-slate-700'>
							average reduction in LDL cholesterol among
							participants
						</p>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={1}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Award className='text-blue-500' size={28} />
						</div>
						<h3 className='text-5xl font-bold text-blue-500 mb-2'>
							4.3"
						</h3>
						<p className='text-slate-700'>
							average decrease in waistline among participants
						</p>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={2}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Heart className='text-blue-500' size={28} />
						</div>
						<h3 className='text-5xl font-bold text-blue-500 mb-2'>
							7.4lbs
						</h3>
						<p className='text-slate-700'>
							average weight loss among participants
						</p>
					</motion.div>
				</div>

				{/* Video Container */}
				<motion.div
					className='w-full aspect-video bg-gray-100 rounded-3xl mb-20 overflow-hidden'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={
						isInView
							? { opacity: 1, scale: 1 }
							: { opacity: 0, scale: 0.95 }
					}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<div className='h-full w-full flex items-center justify-center'>
						<p className='text-blue-500 text-lg'>
							Promo video placeholder
						</p>
					</div>
				</motion.div>

				{/* Testimonials */}
				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mb-10 text-blue-950'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					What People Are Saying
				</motion.h3>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className='bg-blue-50 p-6 rounded-3xl'
							custom={index}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							variants={fadeIn}
						>
							<p className='text-slate-700 mb-4 text-lg italic'>
								"{testimonial.quote}"
							</p>
							<p className='text-blue-500 font-medium'>
								— {testimonial.author}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
