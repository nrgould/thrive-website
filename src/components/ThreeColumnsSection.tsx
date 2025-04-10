'use client';

import { BookOpen, Layers, Users, ChevronDown } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { LinkButton } from './ui/link-button';
import { MotionContainer } from './ui/motion-container';
import { SectionContainer } from './ui/section-container';
import * as motion from 'motion/react-client';
import { ArrowDivider } from './ui/arrow-divider';

const animationDelay = 0.3;

export function ThreeColumnsSection() {
	return (
		<SectionContainer background='blue' className='bg-blue-500'>
			<SectionTitle
				title='A Better Way to THRIVE'
				description='Our three-step approach to a lifetime of health'
				titleClassName='text-white'
				descriptionClassName='text-blue-100'
			/>

			<div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0'>
				{/* Education */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group relative border-2 border-transparent hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-300 ease-in-out py-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay }}
					onClick={() => {
						const element =
							document.getElementById('education-section');
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							});
						}
					}}
				>
					<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110'>
						<BookOpen className='text-blue-500' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300'>
						Education
					</h3>
					<p className='text-lg font-medium text-blue-100 group-hover:text-white transition-colors duration-300'>
						Learn a Healthier Way
					</p>

					<div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1'>
						<span className='text-sm font-medium'>Learn more</span>
						<ChevronDown className='w-4 h-4 transform -rotate-90' />
					</div>
				</motion.div>

				{/* Arrow 1 - hidden on mobile */}
				<ArrowDivider
					animationDelay={animationDelay + 0.1}
					className='hidden md:flex [&_svg]:text-white'
				/>

				{/* Integration */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group relative border-2 border-transparent hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-300 ease-in-out py-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
					onClick={() => {
						const element = document.getElementById(
							'integration-section'
						);
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							});
						}
					}}
				>
					<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110'>
						<Layers className='text-blue-500' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300'>
						Integration
					</h3>
					<p className='text-lg font-medium text-blue-100 group-hover:text-white transition-colors duration-300'>
						Make Sustainable Change
					</p>

					<div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1'>
						<span className='text-sm font-medium'>Learn more</span>
						<ChevronDown className='w-4 h-4 transform -rotate-90' />
					</div>
				</motion.div>

				{/* Arrow 2 - hidden on mobile */}
				<ArrowDivider
					animationDelay={animationDelay + 0.3}
					className='hidden md:flex [&_svg]:text-white'
				/>

				{/* Connection */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group relative border-2 border-transparent hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-300 ease-in-out py-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay + 0.4 }}
					onClick={() => {
						const element =
							document.getElementById('connection-section');
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							});
						}
					}}
				>
					<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110'>
						<Users className='text-blue-500' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300'>
						Connection
					</h3>
					<p className='text-lg font-medium text-blue-100 group-hover:text-white transition-colors duration-300'>
						Maintain Success
					</p>

					<div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1'>
						<span className='text-sm font-medium'>Learn more</span>
						<ChevronDown className='w-4 h-4 transform -rotate-90' />
					</div>
				</motion.div>
			</div>

			{/* Mobile arrows - visible only on small screens, now removed */}
			{/* Removed vertical arrow for mobile */}

			{/* Learn More Button */}
			<MotionContainer
				className='mt-12 flex justify-center'
				animationDelay={animationDelay + 0.5}
			>
				<LinkButton
					href='/about'
					className='text-white hover:text-blue-100'
				>
					Learn more about our approach
				</LinkButton>
			</MotionContainer>
		</SectionContainer>
	);
}
