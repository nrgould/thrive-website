'use client';

import { useRef, useEffect } from 'react';
import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useInView,
} from 'framer-motion';
import { Award, Dumbbell, Heart, TrendingDown, TrendingUp } from 'lucide-react';

export function ResultsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

	// Create motion values for each stat
	const ldlCount = useMotionValue(0);
	const a1cCount = useMotionValue(0);
	const bmiCount = useMotionValue(0);

	// Transform the motion values to rounded numbers
	const roundedLdl = useTransform(ldlCount, (latest) => Math.round(latest));
	const roundedA1c = useTransform(a1cCount, (latest) => Math.round(latest));
	const roundedBmi = useTransform(bmiCount, (latest) => Math.round(latest));

	useEffect(() => {
		// Only animate when the section comes into view
		if (isInView) {
			const ldlAnimation = animate(ldlCount, 21, {
				duration: 2,
				ease: 'easeOut',
			});

			const a1cAnimation = animate(a1cCount, 59, {
				duration: 2,
				ease: 'easeOut',
			});

			const bmiAnimation = animate(bmiCount, 91, {
				duration: 2,
				ease: 'easeOut',
			});

			return () => {
				ldlAnimation.stop();
				a1cAnimation.stop();
				bmiAnimation.stop();
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

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
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					<motion.div
						className='flex flex-col'
						custom={0}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<TrendingDown className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedLdl}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-slate-700'>
							average reduction in LDL cholesterol among
							participants
						</p>
					</motion.div>

					<motion.div
						className='flex flex-col'
						custom={1}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<Heart className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedA1c}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-slate-700'>
							of participants improved A1C levels
						</p>
					</motion.div>

					<motion.div
						className='flex flex-col'
						custom={2}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<Dumbbell className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedBmi}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-slate-700'>
							lost weight and improved BMI
						</p>
					</motion.div>
				</div>

				{/* Additional Stats */}
				<motion.div
					className='bg-blue-50 rounded-3xl p-8 mb-20'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<h3 className='text-2xl font-bold text-blue-500 mb-6 text-center'>
						And so much more...
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						<div className='flex items-center'>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
								<Heart className='text-blue-500' size={20} />
							</div>
							<p className='text-slate-700'>
								50% reduction in depression medication reported
							</p>
						</div>
						<div className='flex items-center'>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
								<Heart className='text-blue-500' size={20} />
							</div>
							<p className='text-slate-700'>
								50% reduction in diabetes medication reported
							</p>
						</div>
						<div className='flex items-center'>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
								<TrendingUp
									className='text-blue-500'
									size={20}
								/>
							</div>
							<p className='text-slate-700'>
								100% of participants showed improved systolic
								blood pressure
							</p>
						</div>
						<div className='flex items-center'>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
								<Award className='text-blue-500' size={20} />
							</div>
							<p className='text-slate-700'>
								4.3&quot; average decrease in waistline
							</p>
						</div>
						<div className='flex items-center'>
							<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
								<Heart className='text-blue-500' size={20} />
							</div>
							<p className='text-slate-700'>
								7.4lbs average weight loss
							</p>
						</div>
					</div>
				</motion.div>

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
							animate={{ opacity: 1 }}
							variants={fadeIn}
						>
							<p className='text-slate-700 text-lg leading-relaxed'>
								&quot;{testimonial.quote}&quot;
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
