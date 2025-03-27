'use client';

import { BookOpen, Layers, Users } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { LinkButton } from './ui/link-button';
import { MotionContainer } from './ui/motion-container';
import { SectionContainer } from './ui/section-container';
import * as motion from 'motion/react-client';
import { ArrowDivider } from './ui/arrow-divider';

const animationDelay = 0.3;

export function ThreeColumnsSection() {
	return (
		<SectionContainer background='white'>
			<SectionTitle
				title='A Better Way to THRIVE'
				description='A three-step approach to sustainable health'
			/>

			<div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0'>
				{/* Education */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay }}
					whileHover={{ y: -5 }}
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
					<div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-5 transition-all group-hover:shadow-lg group-hover:scale-110'>
						<BookOpen className='text-white' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors'>
						Education
					</h3>
					<p className='text-lg font-medium text-blue-900 group-hover:text-blue-700 transition-colors'>
						Learn a Healthier Way
					</p>
				</motion.div>

				{/* Arrow 1 */}
				<ArrowDivider animationDelay={animationDelay + 0.1} />

				{/* Integration */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
					whileHover={{ y: -5 }}
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
					<div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-5 transition-all group-hover:shadow-lg group-hover:scale-110'>
						<Layers className='text-white' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors'>
						Integration
					</h3>
					<p className='text-lg font-medium text-blue-900 group-hover:text-blue-700 transition-colors'>
						Make Sustainable Change
					</p>
				</motion.div>

				{/* Arrow 2 */}
				<ArrowDivider animationDelay={animationDelay + 0.3} />

				{/* Connection */}
				<motion.div
					className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: animationDelay + 0.4 }}
					whileHover={{ y: -5 }}
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
					<div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-5 transition-all group-hover:shadow-lg group-hover:scale-110'>
						<Users className='text-white' size={28} />
					</div>
					<h3 className='text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors'>
						Connection
					</h3>
					<p className='text-lg font-medium text-blue-900 group-hover:text-blue-700 transition-colors'>
						Maintain Success
					</p>
				</motion.div>
			</div>

			{/* Mobile arrows - visible only on small screens */}
			<ArrowDivider
				direction='vertical'
				className='flex md:hidden justify-center mt-4 mb-4'
				size={8}
			/>

			{/* Learn More Button */}
		<MotionContainer
				className='mt-12 flex justify-center'
				animationDelay={animationDelay + 0.5}
			>
				<LinkButton href='/about'>
					Learn more about our approach
				</LinkButton>
			</MotionContainer>	
		</SectionContainer>
	);
}
