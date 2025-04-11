import { Heart, TrendingUp, Award } from 'lucide-react';
import * as motion from 'motion/react-client';
import VideoSection from './VideoSection';

export function AdditionalStats() {
	const stats = [
		// {
		// 	icon: <Heart className='text-blue-500' size={20} />,
		// 	value: '50%',
		// 	text: 'reduction in depression medication reported',
		// },
		{
			icon: <Heart className='text-blue-500' size={20} />,
			value: '50%',
			text: 'reduction in diabetes medication reported',
		},
		{
			icon: <TrendingUp className='text-blue-500' size={20} />,
			value: '100%',
			text: 'improved systolic blood pressure',
		},
		{
			icon: <Award className='text-blue-500' size={20} />,
			value: '4.3"',
			text: 'average decrease in waistline',
		},
		{
			icon: <Heart className='text-blue-500' size={20} />,
			value: '7.4lbs',
			text: 'average weight loss',
		},
	];

	return (
		<div className='mb-20'>
			{/* <h2 className='text-3xl font-bold text-center mb-8 text-slate-800'>
				Additional Benefits
			</h2> */}

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{/* Stats Column - hidden on mobile */}
				<div className='hidden md:flex md:flex-col md:justify-between lg:col-span-1'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							className='bg-white border border-slate-100 shadow-sm rounded-xl p-4 mb-3 last:mb-0'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.4,
								delay: index * 0.1,
							}}
						>
							<div className='flex items-center'>
								<div className='w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4'>
									{stat.icon}
								</div>
								<div>
									<span className='text-blue-600 font-bold text-xl block'>
										{stat.value}
									</span>
									<p className='text-slate-600 text-sm'>
										{stat.text}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Video Section - full width on mobile */}
				<div className='col-span-1 md:col-span-1 lg:col-span-2'>
					<VideoSection />
				</div>
			</div>
		</div>
	);
}
