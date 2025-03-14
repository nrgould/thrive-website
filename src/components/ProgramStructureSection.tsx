'use client';

import { motion } from 'framer-motion';
import {
	ArrowRight,
	Apple,
	Activity,
	Moon,
	Sparkles,
	Brain,
	Users,
} from 'lucide-react';
import { useState } from 'react';

// Define section ID type for type safety
type SectionId =
	| 'nourish'
	| 'move'
	| 'sleep'
	| 'release'
	| 'elevate'
	| 'connect'
	| null;

// Define the sections data in one place to be reused
const lifestyleSections = [
	{
		id: 'nourish' as const,
		title: 'Nourish',
		description: 'Develop a healthier relationship with food',
		icon: <Apple className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#3b82f6', // blue-500
	},
	{
		id: 'move' as const,
		title: 'Move',
		description: 'Improve strength, mobility & endurance',
		icon: <Activity className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#2563eb', // blue-600
	},
	{
		id: 'sleep' as const,
		title: 'Sleep',
		description: 'Build better habits for more energy',
		icon: <Moon className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#1d4ed8', // blue-700
	},
	{
		id: 'release' as const,
		title: 'Release',
		description: "Manage stress and let go of what's not serving you",
		icon: <Sparkles className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#1e40af', // blue-800
	},
	{
		id: 'elevate' as const,
		title: 'Elevate',
		description: 'Find purpose and maintain a growth mindset',
		icon: <Brain className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#1e3a8a', // blue-900
	},
	{
		id: 'connect' as const,
		title: 'Connect',
		description: 'Strengthen relationships and build community',
		icon: <Users className='text-blue-500 w-8 h-8 mb-3' />,
		color: '#172554', // blue-950
	},
];

// Interactive Pyramid Component Props
interface InteractivePyramidProps {
	activeSection: SectionId;
	onSectionHover: (section: SectionId) => void;
}

// Interactive Pyramid Subcomponent
function InteractivePyramid({
	activeSection,
	onSectionHover,
}: InteractivePyramidProps) {
	return (
		<div className='relative h-[500px] w-full max-w-[800px] mx-auto'>
			<svg
				viewBox='0 0 600 500'
				className='w-full h-full'
				preserveAspectRatio='xMidYMid meet'
			>
				{/* Pyramid Outline */}
				<polygon
					points='50,450 550,450 300,50'
					fill='none'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>

				{/* Horizontal dividers */}
				<line
					x1='133'
					y1='317'
					x2='467'
					y2='317'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>
				<line
					x1='217'
					y1='183'
					x2='383'
					y2='183'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>

				{/* Vertical dividers */}
				{/* Single divider between Release and Elevate */}
				<line
					x1='300'
					y1='183'
					x2='300'
					y2='317'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>

				{/* Dividers between bottom sections */}
				<line
					x1='217'
					y1='317'
					x2='217'
					y2='450'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>
				<line
					x1='383'
					y1='317'
					x2='383'
					y2='450'
					stroke='#e2e8f0'
					strokeWidth='2'
				/>

				{/* Connect - Top */}
				<polygon
					points='300,50 217,183 383,183'
					fill={
						activeSection === 'connect'
							? '#dbeafe'
							: 'rgba(219, 234, 254, 0.5)'
					}
					stroke={activeSection === 'connect' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'connect' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-100'
					onMouseEnter={() => onSectionHover('connect')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Release - Middle Left */}
				<polygon
					points='133,317 217,183 300,183 300,317'
					fill={
						activeSection === 'release'
							? '#bfdbfe'
							: 'rgba(191, 219, 254, 0.5)'
					}
					stroke={activeSection === 'release' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'release' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-200'
					onMouseEnter={() => onSectionHover('release')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Elevate - Middle Right */}
				<polygon
					points='467,317 383,183 300,183 300,317'
					fill={
						activeSection === 'elevate'
							? '#bfdbfe'
							: 'rgba(191, 219, 254, 0.5)'
					}
					stroke={activeSection === 'elevate' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'elevate' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-200'
					onMouseEnter={() => onSectionHover('elevate')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Nourish - Bottom Left */}
				<polygon
					points='50,450 133,317 217,317 217,450'
					fill={
						activeSection === 'nourish'
							? '#93c5fd'
							: 'rgba(147, 197, 253, 0.7)'
					}
					stroke={activeSection === 'nourish' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'nourish' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-300'
					onMouseEnter={() => onSectionHover('nourish')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Move - Bottom Middle */}
				<polygon
					points='217,450 217,317 383,317 383,450'
					fill={
						activeSection === 'move'
							? '#93c5fd'
							: 'rgba(147, 197, 253, 0.7)'
					}
					stroke={activeSection === 'move' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'move' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-300'
					onMouseEnter={() => onSectionHover('move')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Sleep - Bottom Right */}
				<polygon
					points='383,450 383,317 467,317 550,450'
					fill={
						activeSection === 'sleep'
							? '#93c5fd'
							: 'rgba(147, 197, 253, 0.7)'
					}
					stroke={activeSection === 'sleep' ? '#3b82f6' : '#e2e8f0'}
					strokeWidth={activeSection === 'sleep' ? '2' : '1'}
					className='transition-all duration-300 cursor-pointer hover:fill-blue-300'
					onMouseEnter={() => onSectionHover('sleep')}
					onMouseLeave={() => onSectionHover(null)}
				/>

				{/* Section Labels */}
				<text
					x='300'
					y='135'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Connect
				</text>
				<text
					x='217'
					y='265'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Release
				</text>
				<text
					x='383'
					y='265'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Elevate
				</text>
				<text
					x='133'
					y='400'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Nourish
				</text>
				<text
					x='300'
					y='400'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Move
				</text>
				<text
					x='467'
					y='400'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='22'
				>
					Sleep
				</text>
			</svg>
		</div>
	);
}

export function ProgramStructureSection() {
	const [activeSection, setActiveSection] = useState<SectionId>(null);

	const fadeInUp = {
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

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-blue-50'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					What is Lifestyle Medicine?
				</motion.h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					<motion.div
						className='space-y-6'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Lifestyle Medicine is an evidence-based approach to
							preventing, treating, and even reversing chronic
							disease by making simple, sustainable changes to the
							way we live.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							It focuses on six key areas—nutrition, physical
							activity, sleep, stress management, social
							connection, and healthy habits—that together form
							the foundation for long-term health and well-being.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Rather than relying on quick fixes, Lifestyle
							Medicine empowers individuals to take control of
							their health through small, meaningful actions that
							fit into daily life.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<InteractivePyramid
							activeSection={activeSection}
							onSectionHover={setActiveSection}
						/>
					</motion.div>
				</div>

				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mt-24 mb-12 text-blue-950'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					A Framework for Life
				</motion.h3>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
					{lifestyleSections.map((item, index) => (
						<motion.div
							key={index}
							className={`bg-white p-6 rounded-3xl shadow-sm transition-all duration-300 ${
								activeSection === item.id
									? 'scale-105 shadow-md ring-2 ring-blue-300'
									: ''
							}`}
							custom={index}
							initial='hidden'
							animate='visible'
							variants={fadeInUp}
							onMouseEnter={() => setActiveSection(item.id)}
							onMouseLeave={() => setActiveSection(null)}
						>
							{item.icon}
							<h4 className='text-xl font-bold text-blue-500 mb-2'>
								{item.title}
							</h4>
							<p className='text-slate-700'>{item.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className='bg-blue-600 rounded-3xl p-10 text-center text-white'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h3 className='text-2xl md:text-3xl font-bold mb-4'>
						Lifestyle is both the cause and the cure.
					</h3>
					<p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
						By addressing these six areas, you can prevent and
						reverse chronic disease while cultivating a healthier,
						more meaningful life.
					</p>
					<button className='px-8 py-3 bg-white text-blue-600 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors mx-auto'>
						Signup Today <ArrowRight size={18} />
					</button>
				</motion.div>
			</div>
		</section>
	);
}
