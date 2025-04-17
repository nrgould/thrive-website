'use client';

import React from 'react';
import { BookOpen, Layers, Users, ChevronDown } from 'lucide-react';
import { SectionTitle } from './ui/section-title';
import { LinkButton } from './ui/link-button';
import { MotionContainer } from './ui/motion-container';
import { SectionContainer } from './ui/section-container';
import * as motion from 'motion/react-client';
import { ArrowDivider } from './ui/arrow-divider';

const columnsData = [
	{
		id: 'education',
		icon: BookOpen,
		title: 'Education',
		description: 'Learn a Healthier Way',
		targetSectionId: 'education-section',
		delay: 0,
	},
	{
		id: 'integration',
		icon: Layers,
		title: 'Integration',
		description: 'Make Sustainable Change',
		targetSectionId: 'integration-section',
		delay: 0.2,
	},
	{
		id: 'connection',
		icon: Users,
		title: 'Connection',
		description: 'Engage in a Community of Support',
		targetSectionId: 'connection-section',
		delay: 0.4,
	},
];

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
				{columnsData.map((column, index) => (
					<React.Fragment key={column.id}>
						<div
							className='flex flex-col items-center text-center w-full md:w-1/3 cursor-pointer group relative border-2 border-transparent hover:border-white/30 rounded-xl px-6 py-3 transition-all duration-300 ease-in-out py-8'
							onClick={() => {
								const element = document.getElementById(
									column.targetSectionId
								);
								if (element) {
									element.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									});
								}
							}}
						>
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									rotate: -30,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									rotate: 0,
								}}
								transition={{
									duration: 0.5,
									delay: column.delay,
									ease: 'easeOut',
								}}
							>
								<div className='w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110'>
									<column.icon
										className='text-blue-500'
										size={28}
									/>
								</div>
							</motion.div>

							<motion.div
								className='flex flex-col items-center'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									duration: 0.5,
									delay: column.delay + 0.1,
									ease: 'easeOut',
								}}
							>
								<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300'>
									{column.title}
								</h3>
								<p className='text-lg font-medium text-blue-100 group-hover:text-white transition-colors duration-300'>
									{column.description}
								</p>
							</motion.div>

							<div className='mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white flex items-center gap-1'>
								<span className='text-sm font-medium'>
									Learn more
								</span>
								<ChevronDown className='w-4 h-4 transform -rotate-90' />
							</div>
						</div>

						{index < columnsData.length - 1 && (
							<ArrowDivider
								animationDelay={column.delay + 0.1}
								className='hidden md:flex [&_svg]:text-white'
							/>
						)}
					</React.Fragment>
				))}
			</div>

			{/* Learn More Button */}
			<MotionContainer
				className='mt-12 flex justify-center'
				animationDelay={columnsData[columnsData.length - 1].delay + 0.1}
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
