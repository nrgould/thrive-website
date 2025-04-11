'use client';

import { Play } from 'lucide-react';
import * as motion from 'motion/react-client';
import { useState } from 'react';
export default function VideoSection() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<motion.div
			className='h-full'
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			{!showVideo ? (
				<div
					className='relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl overflow-hidden aspect-video w-full h-full flex items-center justify-center group cursor-pointer shadow-md'
					onClick={() => setShowVideo(true)}
				>
					<div className='absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 opacity-90'></div>
					<div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform'>
						<Play
							fill='#2563eb'
							size={32}
							className='text-blue-600 ml-1'
						/>
					</div>
					<div className='absolute bottom-6 left-6 right-6 text-white'>
						<p className='text-xl md:text-2xl font-bold md:mb-2'>
							See the transformation
						</p>
						<p className='text-blue-50'>
							Watch how our program helps participants achieve
							lasting results
						</p>
					</div>
				</div>
			) : (
				<div className='w-full aspect-video rounded-xl overflow-hidden shadow-md'>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/W2r3IhLzDMc?autoplay=1'
						title='Thrive Program Transformation'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			)}
		</motion.div>
	);
}
