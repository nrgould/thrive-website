'use client';

import * as motion from 'motion/react-client';
import {
	ArrowRight,
	Apple,
	Activity,
	Moon,
	Sparkles,
	Brain,
	Users,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Define section ID type for type safety
type SectionId =
	| 'nourish'
	| 'move'
	| 'sleep'
	| 'release'
	| 'elevate'
	| 'connect'
	| null;

const strokeWidth = 8;

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
	onSectionClick: (section: SectionId) => void;
}

// Popup component for the pyramid sections
function SectionPopup({
	section,
	x,
	y,
	visible,
}: {
	section: SectionId;
	x: number;
	y: number;
	visible: boolean;
}) {
	if (!section || !visible) return null;

	const sectionData = lifestyleSections.find((s) => s.id === section);
	if (!sectionData) return null;

	return (
		<motion.div
			className='absolute z-10 bg-white p-4 rounded-xl shadow-lg text-sm max-w-[240px] pointer-events-none border border-blue-100'
			style={{
				left: `${x}px`,
				top: `${y - 20}px`,
				transform: 'translateX(-50%)',
			}}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.2 }}
		>
			<div className='flex items-center gap-2 mb-1'>
				{sectionData.icon}
				<h4 className='font-bold text-blue-600 text-base'>
					{sectionData.title}
				</h4>
			</div>
			<p className='text-gray-700'>{sectionData.description}</p>
			<div className='absolute left-1/2 bottom-0 w-3 h-3 bg-white border-r border-b border-blue-100 transform rotate-45 translate-y-1.5 -translate-x-1.5'></div>
		</motion.div>
	);
}

// Interactive Pyramid Subcomponent
function InteractivePyramid({
	activeSection,
	onSectionHover,
	onSectionClick,
}: InteractivePyramidProps) {
	// Define gradient IDs for 3D effect
	const gradientIds = {
		connect: 'connectGradient',
		release: 'releaseGradient',
		elevate: 'elevateGradient',
		nourish: 'nourishGradient',
		move: 'moveGradient',
		sleep: 'sleepGradient',
	};

	// Define fixed positions for popups based on pyramid section
	const popupPositions = {
		connect: { x: 300, y: 80 },
		release: { x: 210, y: 210 },
		elevate: { x: 390, y: 210 },
		nourish: { x: 140, y: 320 },
		move: { x: 300, y: 320 },
		sleep: { x: 450, y: 320 },
	};

	const svgRef = useRef<SVGSVGElement>(null);
	const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

	// Update popup position when the active section changes or on resize
	useEffect(() => {
		const updatePopupPosition = () => {
			if (!activeSection || !popupPositions[activeSection]) {
				setPopupPosition({ x: 0, y: 0 });
				return;
			}

			if (svgRef.current) {
				const svgRect = svgRef.current.getBoundingClientRect();
				const { width, height } = svgRect;

				const pos = popupPositions[activeSection];
				setPopupPosition({
					x: (pos.x / 600) * width,
					y: (pos.y / 500) * height,
				});
			}
		};

		// Update the position initially
		updatePopupPosition();

		// Add resize event listener to update on window resize
		window.addEventListener('resize', updatePopupPosition);

		// Clean up event listener
		return () => {
			window.removeEventListener('resize', updatePopupPosition);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeSection]);

	return (
		<div className='relative h-[600px] w-full max-w-[900px] mx-auto flex items-center'>
			<svg
				ref={svgRef}
				viewBox='0 0 600 500'
				className='w-full h-full'
				preserveAspectRatio='xMidYMid meet'
			>
				{/* Define gradients for 3D effect */}
				<defs>
					{/* Top section gradient */}
					<linearGradient
						id={gradientIds.connect}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#dbeafe'
							stopOpacity={
								activeSection === 'connect' ? '1' : '0.7'
							}
						/>
						<stop
							offset='100%'
							stopColor='#bfdbfe'
							stopOpacity={
								activeSection === 'connect' ? '1' : '0.7'
							}
						/>
					</linearGradient>

					{/* Middle left section gradient */}
					<linearGradient
						id={gradientIds.release}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#bfdbfe'
							stopOpacity={
								activeSection === 'release' ? '1' : '0.7'
							}
						/>
						<stop
							offset='100%'
							stopColor='#93c5fd'
							stopOpacity={
								activeSection === 'release' ? '1' : '0.7'
							}
						/>
					</linearGradient>

					{/* Middle right section gradient */}
					<linearGradient
						id={gradientIds.elevate}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#93c5fd'
							stopOpacity={
								activeSection === 'elevate' ? '1' : '0.7'
							}
						/>
						<stop
							offset='100%'
							stopColor='#60a5fa'
							stopOpacity={
								activeSection === 'elevate' ? '1' : '0.7'
							}
						/>
					</linearGradient>

					{/* Bottom left section gradient */}
					<linearGradient
						id={gradientIds.nourish}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#93c5fd'
							stopOpacity={
								activeSection === 'nourish' ? '1' : '0.7'
							}
						/>
						<stop
							offset='100%'
							stopColor='#60a5fa'
							stopOpacity={
								activeSection === 'nourish' ? '1' : '0.7'
							}
						/>
					</linearGradient>

					{/* Bottom middle section gradient */}
					<linearGradient
						id={gradientIds.move}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#60a5fa'
							stopOpacity={activeSection === 'move' ? '1' : '0.7'}
						/>
						<stop
							offset='100%'
							stopColor='#3b82f6'
							stopOpacity={activeSection === 'move' ? '1' : '0.7'}
						/>
					</linearGradient>

					{/* Bottom right section gradient */}
					<linearGradient
						id={gradientIds.sleep}
						x1='0%'
						y1='0%'
						x2='100%'
						y2='0%'
					>
						<stop
							offset='0%'
							stopColor='#3b82f6'
							stopOpacity={
								activeSection === 'sleep' ? '1' : '0.7'
							}
						/>
						<stop
							offset='100%'
							stopColor='#2563eb'
							stopOpacity={
								activeSection === 'sleep' ? '1' : '0.7'
							}
						/>
					</linearGradient>
				</defs>

				{/* Connect - Top */}
				<polygon
					points='300,50 217,183 383,183'
					fill={`url(#${gradientIds.connect})`}
					stroke={activeSection === 'connect' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('connect')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('connect')}
				/>

				{/* Release - Middle Left */}
				<polygon
					points='133,317 217,183 300,183 300,317'
					fill={`url(#${gradientIds.release})`}
					stroke={activeSection === 'release' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('release')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('release')}
				/>

				{/* Elevate - Middle Right */}
				<polygon
					points='467,317 383,183 300,183 300,317'
					fill={`url(#${gradientIds.elevate})`}
					stroke={activeSection === 'elevate' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('elevate')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('elevate')}
				/>

				{/* Nourish - Bottom Left */}
				<polygon
					points='50,450 133,317 217,317 217,450'
					fill={`url(#${gradientIds.nourish})`}
					stroke={activeSection === 'nourish' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('nourish')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('nourish')}
				/>

				{/* Move - Bottom Middle */}
				<polygon
					points='217,450 217,317 383,317 383,450'
					fill={`url(#${gradientIds.move})`}
					stroke={activeSection === 'move' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('move')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('move')}
				/>

				{/* Sleep - Bottom Right */}
				<polygon
					points='383,450 383,317 467,317 550,450'
					fill={`url(#${gradientIds.sleep})`}
					stroke={activeSection === 'sleep' ? '#3b82f6' : 'white'}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='transition-all duration-300 cursor-pointer'
					onMouseEnter={() => onSectionHover('sleep')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('sleep')}
				/>

				{/* Section Labels */}
				<text
					x='300'
					y='165'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Connect
				</text>
				<text
					x='235'
					y='260'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Release
				</text>
				<text
					x='360'
					y='260'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Elevate
				</text>
				<text
					x='160'
					y='390'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Nourish
				</text>
				<text
					x='300'
					y='390'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Move
				</text>
				<text
					x='430'
					y='390'
					textAnchor='middle'
					fill='#1e40af'
					fontWeight='bold'
					fontSize='26'
					className='pointer-events-none'
				>
					Sleep
				</text>
			</svg>

			{activeSection && (
				<SectionPopup
					section={activeSection}
					x={popupPosition.x}
					y={popupPosition.y}
					visible={!!activeSection}
				/>
			)}
		</div>
	);
}

export function ProgramStructureSection() {
	const [activeSection, setActiveSection] = useState<SectionId>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	const handleSectionClick = (section: SectionId) => {
		// Navigate to the science page with the appropriate section
		if (section) {
			window.location.href = `/about/science#${section}`;
		}
	};

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
		<section
			ref={sectionRef}
			id='education-section'
			className='w-full py-24 px-4 md:px-8 bg-blue-50 relative overflow-hidden'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-lg text-blue-600 font-medium text-center mb-3'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					EDUCATION
				</motion.p>

				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-4 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					A Framework for Life
				</motion.h2>

				<div className='grid grid-cols-1 items-center'>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<InteractivePyramid
							activeSection={activeSection}
							onSectionHover={setActiveSection}
							onSectionClick={handleSectionClick}
						/>
						<h3 className='text-2xl text-center font-bold text-blue-950 -mt-8 mb-12'>
							The Lifestyle Medicine Pyramid
						</h3>
					</motion.div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-8'>
					{lifestyleSections.map((item, index) => (
						<motion.div
							key={index}
							className={`bg-white p-6 rounded-3xl shadow-sm transition-all duration-300 ${
								activeSection === item.id
									? 'scale-105 shadow-md ring-2 ring-blue-300'
									: ''
							} cursor-pointer`}
							custom={index}
							initial='hidden'
							animate='visible'
							variants={fadeInUp}
							onMouseEnter={() => setActiveSection(item.id)}
							onMouseLeave={() => setActiveSection(null)}
							onClick={() => handleSectionClick(item.id)}
						>
							{item.icon}
							<h4 className='text-xl font-bold text-blue-500 mb-2'>
								{item.title}
							</h4>
							<p className='text-slate-700 mb-4'>
								{item.description}
							</p>
							<div className='flex items-center text-blue-500 gap-1 text-sm font-medium'>
								Learn More
								<ArrowRight size={16} />
							</div>
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
					<Link href='/programs/six-week#waitlist-form'>
						<button className='px-8 py-3 cursor-pointer bg-white text-blue-600 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors mx-auto'>
							Join Waitlist <ArrowRight size={18} />
						</button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
