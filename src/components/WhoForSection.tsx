import * as motion from 'motion/react-client';
import { Heart, Activity, Leaf } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export function WhoForSection() {
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
		<section className='w-full py-24 px-4 md:px-8 '>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}
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

				<div className='flex flex-col lg:flex-row gap-12 items-start'>
					{/* Images Column */}
					<motion.div
						className='w-full lg:w-1/2 space-y-6'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl'>
							<Image
								src='/lifestyle/kitchen1.webp'
								alt='Community members preparing healthy food'
								fill
								className='object-cover'
							/>
						</div>
					</motion.div>

					{/* Content Column */}
					<div className='w-full lg:w-1/2 space-y-12 mt-12'>
						{audiences.map((audience, index) => (
							<motion.div
								key={index}
								className='flex gap-6 items-start'
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.2,
								}}
							>
								<div
									className={`${audience.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
								>
									{audience.icon}
								</div>

								<div>
									<h3 className='text-xl font-bold text-blue-900 mb-2'>
										{audience.title}
									</h3>
									<p className='text-slate-600'>
										{audience.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				<motion.div
					className='mt-20 text-center'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<p className='text-xl text-blue-800 font-medium'>
						No matter where you are in your health journey, THRIVE
						provides the tools, support, and community you need to
						succeed.
					</p>
					<Button asChild className='inline-block mt-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md'>
						<Link href='#programs' className='px-8 pb-8 pt-3'>Find Your Path</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
