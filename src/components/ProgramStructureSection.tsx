'use client';

import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
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

// Shared animation styles for consistent transitions
const sharedTransition = {
	type: 'spring',
	stiffness: 300,
	damping: 30,
	duration: 0.4,
};

// Pop-out offset for active sections
const popOutOffset = 15;

// Popup component for the pyramid sections
function SectionPopup({
	section,
	x,
	y,
	arrowDirection,
	visible,
}: {
	section: SectionId;
	x: number;
	y: number;
	arrowDirection: string;
	visible: boolean;
}) {
	if (!section || !visible) return null;

	const sectionData = lifestyleSections.find((s) => s.id === section);
	if (!sectionData) return null;

	// Get active border color - we're using the blue color consistently
	const borderColor = '#2563eb';

	// Position the arrow based on the direction
	const getArrowStyles = () => {
		switch (arrowDirection) {
			case 'right':
				return 'left-0 top-1/2 -translate-x-1.5 -translate-y-1.5 rotate-[315deg]';
			case 'left':
				return 'right-0 top-1/2 translate-x-1.5 -translate-y-1.5 rotate-[135deg]';
			case 'up':
				return 'top-0 left-1/2 -translate-y-1.5 -translate-x-1.5 rotate-[45deg]';
			case 'down':
			default:
				return 'bottom-0 left-1/2 translate-y-1.5 -translate-x-1.5 rotate-[225deg]';
		}
	};

	// Get the popup position adjustments based on arrow direction
	const getPopupPositionStyles = () => {
		switch (arrowDirection) {
			case 'right':
				return 'translate-y(-50%) translateX(10px)';
			case 'left':
				return 'translate-y(-50%) translateX(-110%)';
			case 'up':
				return 'translateX(-50%) translateY(10px)';
			case 'down':
			default:
				return 'translateX(-50%) translateY(-110%)';
		}
	};

	return (
		<motion.div
			layoutId={`popup-${section}`}
			className='absolute z-10 bg-white p-4 rounded-xl shadow-lg text-sm max-w-[240px] pointer-events-none border-2'
			style={{
				left: `${x}px`,
				top: `${y}px`,
				transform: getPopupPositionStyles(),
			}}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				borderColor,
			}}
			exit={{ opacity: 0, scale: 0.8 }}
			transition={sharedTransition}
		>
			<div className='flex items-center gap-2 mb-1'>
				<motion.div
					animate={{ color: borderColor }}
					transition={{ duration: 0.3 }}
					className='w-8 h-8 mb-0'
				>
					{sectionData.icon}
				</motion.div>
				<motion.h4
					className='font-bold text-base'
					animate={{ color: borderColor }}
					transition={{ duration: 0.3 }}
				>
					{sectionData.title}
				</motion.h4>
			</div>
			<motion.p className='text-gray-700' transition={{ duration: 0.3 }}>
				{sectionData.description}
			</motion.p>
			<motion.div
				className={`absolute w-3 h-3 bg-white border-2 border-r-0 border-b-0 ${getArrowStyles()}`}
				animate={{ borderColor }}
				transition={{ duration: 0.3 }}
			/>
		</motion.div>
	);
}

// Interactive Pyramid Subcomponent
function InteractivePyramid({
	activeSection,
	onSectionHover,
	onSectionClick,
}: InteractivePyramidProps) {
	// Define fixed positions for popups based on pyramid section - positioned OUTSIDE the pyramid
	const popupPositions = {
		nourish: { x: -50, y: 330, arrowDirection: 'left' },
		move: { x: 220, y: 480, arrowDirection: 'up' },
		sleep: { x: 500, y: 320, arrowDirection: 'right' },
		release: { x: 0, y: 200, arrowDirection: 'left' },
		elevate: { x: 420, y: 200, arrowDirection: 'right' },
		connect: { x: 360, y: 70, arrowDirection: 'right' },
	};

	// Define label positions with offsets for animation
	const labelPositions = {
		connect: { x: 250, y: 125, activeX: 250, activeY: 115 },
		release: { x: 185, y: 220, activeX: 175, activeY: 220 },
		elevate: { x: 310, y: 220, activeX: 320, activeY: 220 },
		nourish: { x: 110, y: 350, activeX: 100, activeY: 355 },
		move: { x: 250, y: 350, activeX: 250, activeY: 355 },
		sleep: { x: 380, y: 350, activeX: 390, activeY: 355 },
	};

	const svgRef = useRef<SVGSVGElement>(null);
	const [popupPosition, setPopupPosition] = useState({
		x: 0,
		y: 0,
		arrowDirection: 'top',
	});

	// Update popup position when the active section changes or on resize
	useEffect(() => {
		const updatePopupPosition = () => {
			if (!activeSection || !popupPositions[activeSection]) {
				setPopupPosition({ x: 0, y: 0, arrowDirection: 'up' });
				return;
			}

			if (svgRef.current) {
				const svgRect = svgRef.current.getBoundingClientRect();
				const { width, height } = svgRect;

				const pos = popupPositions[activeSection];
				setPopupPosition({
					x: (pos.x / 600) * width,
					y: (pos.y / 500) * height,
					arrowDirection: pos.arrowDirection,
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

	// Animation spring settings
	const springTransition = {
		type: 'spring',
		stiffness: 500,
		damping: 30,
		mass: 1,
	};

	// Common function to get section fill/stroke
	const getSectionFill = (sectionId: SectionId) =>
		activeSection === sectionId ? '#2563eb' : 'white';

	const getSectionStroke = (sectionId: SectionId) =>
		activeSection === sectionId ? '#2563eb' : '#2563eb';

	// High z-index for active sections to ensure they're on top
	const getZIndex = (sectionId: SectionId) =>
		activeSection === sectionId ? 100 : 10;

	return (
		<div className='relative h-[600px] w-full max-w-[900px] mx-auto flex items-center'>
			<svg
				ref={svgRef}
				viewBox='0 0 600 500'
				className='w-full h-full'
				preserveAspectRatio='xMidYMid meet'
			>
				{/* Draw the pyramid */}
				{/* Connect section */}
				<motion.polygon
					points='300,50 217,183 383,183'
					fill={getSectionFill('connect')}
					stroke={getSectionStroke('connect')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('connect')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('connect')}
					animate={{
						scale: activeSection === 'connect' ? 1.05 : 1,
						zIndex: getZIndex('connect'),
						y: activeSection === 'connect' ? -popOutOffset : 0,
					}}
					style={{
						transformOrigin: '300px 120px',
					}}
					transition={springTransition}
				/>

				{/* Release section */}
				<motion.polygon
					points='133,317 217,183 300,183 300,317'
					fill={getSectionFill('release')}
					stroke={getSectionStroke('release')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('release')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('release')}
					animate={{
						scale: activeSection === 'release' ? 1.05 : 1,
						zIndex: getZIndex('release'),
						x: activeSection === 'release' ? -popOutOffset / 2 : 0,
						y: activeSection === 'release' ? 0 : 0,
					}}
					style={{
						transformOrigin: '200px 250px',
					}}
					transition={springTransition}
				/>

				{/* Elevate section */}
				<motion.polygon
					points='467,317 383,183 300,183 300,317'
					fill={getSectionFill('elevate')}
					stroke={getSectionStroke('elevate')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('elevate')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('elevate')}
					animate={{
						scale: activeSection === 'elevate' ? 1.05 : 1,
						zIndex: getZIndex('elevate'),
						x: activeSection === 'elevate' ? popOutOffset / 2 : 0,
						y: activeSection === 'elevate' ? 0 : 0,
					}}
					style={{
						transformOrigin: '400px 250px',
					}}
					transition={springTransition}
				/>

				{/* Nourish section */}
				<motion.polygon
					points='50,450 133,317 217,317 217,450'
					fill={getSectionFill('nourish')}
					stroke={getSectionStroke('nourish')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('nourish')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('nourish')}
					animate={{
						scale: activeSection === 'nourish' ? 1.05 : 1,
						zIndex: getZIndex('nourish'),
						x: activeSection === 'nourish' ? -popOutOffset / 2 : 0,
						y: activeSection === 'nourish' ? popOutOffset / 2 : 0,
					}}
					style={{
						transformOrigin: '150px 375px',
					}}
					transition={springTransition}
				/>

				{/* Move section */}
				<motion.polygon
					points='217,450 217,317 383,317 383,450'
					fill={getSectionFill('move')}
					stroke={getSectionStroke('move')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('move')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('move')}
					animate={{
						scale: activeSection === 'move' ? 1.05 : 1,
						zIndex: getZIndex('move'),
						y: activeSection === 'move' ? popOutOffset / 2 : 0,
					}}
					style={{
						transformOrigin: '300px 375px',
					}}
					transition={springTransition}
				/>

				{/* Sleep section */}
				<motion.polygon
					points='383,450 383,317 467,317 550,450'
					fill={getSectionFill('sleep')}
					stroke={getSectionStroke('sleep')}
					strokeWidth={strokeWidth}
					strokeLinejoin='round'
					className='cursor-pointer'
					onMouseEnter={() => onSectionHover('sleep')}
					onMouseLeave={() => onSectionHover(null)}
					onClick={() => onSectionClick('sleep')}
					animate={{
						scale: activeSection === 'sleep' ? 1.05 : 1,
						zIndex: getZIndex('sleep'),
						x: activeSection === 'sleep' ? popOutOffset / 2 : 0,
						y: activeSection === 'sleep' ? popOutOffset / 2 : 0,
					}}
					style={{
						transformOrigin: '450px 375px',
					}}
					transition={springTransition}
				/>

				{/* Section Labels with animations */}
				{/* Connect label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'connect'
								? labelPositions.connect.activeX
								: labelPositions.connect.x,
						y:
							activeSection === 'connect'
								? labelPositions.connect.activeY
								: labelPositions.connect.y,
						zIndex: activeSection === 'connect' ? 110 : 20,
						scale: activeSection === 'connect' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'connect'
								? 'text-white'
								: 'text-blue-600'
						}`}
					>
						Connect
					</div>
				</motion.foreignObject>

				{/* Release label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'release'
								? labelPositions.release.activeX
								: labelPositions.release.x,
						y:
							activeSection === 'release'
								? labelPositions.release.activeY
								: labelPositions.release.y,
						zIndex: activeSection === 'release' ? 110 : 20,
						scale: activeSection === 'release' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'release'
								? 'text-white'
								: 'text-blue-600'
						}`}
					>
						Release
					</div>
				</motion.foreignObject>

				{/* Elevate label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'elevate'
								? labelPositions.elevate.activeX
								: labelPositions.elevate.x,
						y:
							activeSection === 'elevate'
								? labelPositions.elevate.activeY
								: labelPositions.elevate.y,
						zIndex: activeSection === 'elevate' ? 110 : 10,
						scale: activeSection === 'elevate' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'elevate'
								? 'text-white'
								: 'text-blue-600'
						}`}
					>
						Elevate
					</div>
				</motion.foreignObject>

				{/* Nourish label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'nourish'
								? labelPositions.nourish.activeX
								: labelPositions.nourish.x,
						y:
							activeSection === 'nourish'
								? labelPositions.nourish.activeY
								: labelPositions.nourish.y,
						zIndex: activeSection === 'nourish' ? 110 : 10,
						scale: activeSection === 'nourish' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'nourish'
								? 'text-white'
								: 'text-blue-600'
						}`}
					>
						Nourish
					</div>
				</motion.foreignObject>

				{/* Move label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'move'
								? labelPositions.move.activeX
								: labelPositions.move.x,
						y:
							activeSection === 'move'
								? labelPositions.move.activeY
								: labelPositions.move.y,
						zIndex: activeSection === 'move' ? 110 : 10,
						scale: activeSection === 'move' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'move'
								? 'text-white z-100'
								: 'text-blue-600 z-10'
						}`}
					>
						Move
					</div>
				</motion.foreignObject>

				{/* Sleep label */}
				<motion.foreignObject
					width='100'
					height='60'
					className='pointer-events-none'
					animate={{
						x:
							activeSection === 'sleep'
								? labelPositions.sleep.activeX
								: labelPositions.sleep.x,
						y:
							activeSection === 'sleep'
								? labelPositions.sleep.activeY
								: labelPositions.sleep.y,
						zIndex: activeSection === 'sleep' ? 110 : 20,
						scale: activeSection === 'sleep' ? 1.05 : 1,
					}}
					transition={springTransition}
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'sleep'
								? 'text-white'
								: 'text-blue-600'
						}`}
					>
						Sleep
					</div>
				</motion.foreignObject>
			</svg>

			<AnimatePresence>
				{activeSection && (
					<SectionPopup
						section={activeSection}
						x={popupPosition.x}
						y={popupPosition.y}
						arrowDirection={popupPosition.arrowDirection}
						visible={!!activeSection}
					/>
				)}
			</AnimatePresence>
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

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-8 relative'>
					{lifestyleSections.map((item, index) => (
						<motion.div
							key={index}
							className={`bg-white p-6 rounded-3xl shadow-sm ${
								activeSection === item.id
									? 'shadow-md ring-2 ring-blue-300'
									: ''
							} cursor-pointer relative overflow-hidden`}
							custom={index}
							initial='hidden'
							animate='visible'
							variants={fadeInUp}
							onMouseEnter={() => setActiveSection(item.id)}
							onMouseLeave={() => setActiveSection(null)}
							onClick={() => handleSectionClick(item.id)}
							layoutId={`card-${item.id}`}
							transition={sharedTransition}
							whileHover={{
								scale: 1.05,
								transition: {
									...sharedTransition,
									scale: { duration: 0.2 },
								},
							}}
						>
							{activeSection === item.id && (
								<motion.div
									layoutId={`highlight-${item.id}`}
									className='absolute inset-0 rounded-3xl border-2 border-blue-500'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={sharedTransition}
								/>
							)}
							{item.icon}
							<h4 className='text-xl font-bold text-blue-500 mb-2 relative z-10'>
								{item.title}
							</h4>
							<p className='text-slate-700 mb-4 relative z-10'>
								{item.description}
							</p>
							<div className='flex items-center text-blue-500 gap-1 text-sm font-medium relative z-10'>
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
