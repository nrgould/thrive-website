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

// Enhanced shadow for active sections
const activeShadow = 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.7))';

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
	// Define gradient IDs for 3D effect
	const gradientIds = {
		connect: 'connectGradient',
		release: 'releaseGradient',
		elevate: 'elevateGradient',
		nourish: 'nourishGradient',
		move: 'moveGradient',
		sleep: 'sleepGradient',
	};

	// Define fixed positions for popups based on pyramid section - positioned OUTSIDE the pyramid
	const popupPositions = {
		nourish: { x: -50, y: 330, arrowDirection: 'left' },
		move: { x: 220, y: 400, arrowDirection: 'up' },
		sleep: { x: 500, y: 320, arrowDirection: 'right' },
		release: { x: 0, y: 200, arrowDirection: 'left' },
		elevate: { x: 400, y: 200, arrowDirection: 'right' },
		connect: { x: 360, y: 70, arrowDirection: 'right' },
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
							stopColor={
								activeSection === 'connect'
									? '#3b82f6'
									: 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'connect'
									? '#2563eb'
									: 'white'
							}
							stopOpacity='1'
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
							stopColor={
								activeSection === 'release'
									? '#3b82f6'
									: 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'release'
									? '#2563eb'
									: 'white'
							}
							stopOpacity='1'
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
							stopColor={
								activeSection === 'elevate'
									? '#3b82f6'
									: 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'elevate'
									? '#2563eb'
									: 'white'
							}
							stopOpacity='1'
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
							stopColor={
								activeSection === 'nourish'
									? '#3b82f6'
									: 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'nourish'
									? '#2563eb'
									: 'white'
							}
							stopOpacity='1'
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
							stopColor={
								activeSection === 'move' ? '#3b82f6' : 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'move' ? '#2563eb' : 'white'
							}
							stopOpacity='1'
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
							stopColor={
								activeSection === 'sleep' ? '#3b82f6' : 'white'
							}
							stopOpacity='1'
						/>
						<stop
							offset='100%'
							stopColor={
								activeSection === 'sleep' ? '#2563eb' : 'white'
							}
							stopOpacity='1'
						/>
					</linearGradient>
				</defs>

				{/* Draw the pyramid in specific order to ensure active section is on top */}
				{/* First draw non-active sections */}
				{activeSection !== 'connect' && (
					<motion.polygon
						points='300,50 217,183 383,183'
						fill={`url(#${gradientIds.connect})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('connect')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('connect')}
						initial={false}
						layoutId='section-connect'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '300px 100px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection !== 'release' && (
					<motion.polygon
						points='133,317 217,183 300,183 300,317'
						fill={`url(#${gradientIds.release})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('release')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('release')}
						initial={false}
						layoutId='section-release'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '200px 250px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection !== 'elevate' && (
					<motion.polygon
						points='467,317 383,183 300,183 300,317'
						fill={`url(#${gradientIds.elevate})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('elevate')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('elevate')}
						initial={false}
						layoutId='section-elevate'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '400px 250px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection !== 'nourish' && (
					<motion.polygon
						points='50,450 133,317 217,317 217,450'
						fill={`url(#${gradientIds.nourish})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('nourish')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('nourish')}
						initial={false}
						layoutId='section-nourish'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '150px 375px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection !== 'move' && (
					<motion.polygon
						points='217,450 217,317 383,317 383,450'
						fill={`url(#${gradientIds.move})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('move')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('move')}
						initial={false}
						layoutId='section-move'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '300px 375px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection !== 'sleep' && (
					<motion.polygon
						points='383,450 383,317 467,317 550,450'
						fill={`url(#${gradientIds.sleep})`}
						stroke='#2563eb'
						strokeWidth={strokeWidth}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('sleep')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('sleep')}
						initial={false}
						layoutId='section-sleep'
						animate={{
							stroke: '#2563eb',
							scale: 1,
						}}
						transition={sharedTransition}
						style={{
							filter: 'none',
							zIndex: 1,
							transformOrigin: '450px 375px',
							position: 'relative',
						}}
					/>
				)}

				{/* Then draw the active section last so it's on top */}
				{activeSection === 'connect' && (
					<motion.polygon
						points={`300,${50 - popOutOffset} ${
							217 - popOutOffset
						},183 ${383 + popOutOffset},183`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('connect')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('connect')}
						initial={false}
						layoutId='section-connect'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '300px 100px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection === 'release' && (
					<motion.polygon
						points={`${133 - popOutOffset},${
							317 + popOutOffset / 2
						} ${217 - popOutOffset / 2},${
							183 - popOutOffset / 2
						} ${300},${183 - popOutOffset / 2} ${300},${
							317 + popOutOffset / 2
						}`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('release')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('release')}
						initial={false}
						layoutId='section-release'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '200px 250px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection === 'elevate' && (
					<motion.polygon
						points={`${467 + popOutOffset},${
							317 + popOutOffset / 2
						} ${383 + popOutOffset / 2},${
							183 - popOutOffset / 2
						} ${300},${183 - popOutOffset / 2} ${300},${
							317 + popOutOffset / 2
						}`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('elevate')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('elevate')}
						initial={false}
						layoutId='section-elevate'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '400px 250px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection === 'nourish' && (
					<motion.polygon
						points={`${50 - popOutOffset},${450 + popOutOffset} ${
							133 - popOutOffset / 2
						},${317 - popOutOffset / 2} ${217},${
							317 - popOutOffset / 2
						} ${217},${450 + popOutOffset}`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('nourish')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('nourish')}
						initial={false}
						layoutId='section-nourish'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '150px 375px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection === 'move' && (
					<motion.polygon
						points={`${217},${450 + popOutOffset} ${217},${
							317 - popOutOffset / 2
						} ${383},${317 - popOutOffset / 2} ${383},${
							450 + popOutOffset
						}`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('move')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('move')}
						initial={false}
						layoutId='section-move'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '300px 375px',
							position: 'relative',
						}}
					/>
				)}

				{activeSection === 'sleep' && (
					<motion.polygon
						points={`${383},${450 + popOutOffset} ${383},${
							317 - popOutOffset / 2
						} ${467 + popOutOffset / 2},${317 - popOutOffset / 2} ${
							550 + popOutOffset
						},${450 + popOutOffset}`}
						fill='#2563eb'
						stroke='white'
						strokeWidth={strokeWidth + 2}
						strokeLinejoin='round'
						className='cursor-pointer'
						onMouseEnter={() => onSectionHover('sleep')}
						onMouseLeave={() => onSectionHover(null)}
						onClick={() => onSectionClick('sleep')}
						initial={false}
						layoutId='section-sleep'
						animate={{
							stroke: 'white',
							scale: 1.05,
						}}
						transition={sharedTransition}
						style={{
							filter: activeShadow,
							zIndex: 40,
							transformOrigin: '450px 375px',
							position: 'relative',
						}}
					/>
				)}

				{/* Section Labels */}
				<foreignObject
					x='250'
					y='125'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'connect'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'connect' ? 50 : 2 }}
					>
						Connect
					</div>
				</foreignObject>

				<foreignObject
					x='185'
					y='220'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'release'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'release' ? 50 : 2 }}
					>
						Release
					</div>
				</foreignObject>

				<foreignObject
					x='310'
					y='220'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'elevate'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'elevate' ? 50 : 2 }}
					>
						Elevate
					</div>
				</foreignObject>

				<foreignObject
					x='110'
					y='350'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'nourish'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'nourish' ? 50 : 2 }}
					>
						Nourish
					</div>
				</foreignObject>

				<foreignObject
					x='250'
					y='350'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'move'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'move' ? 50 : 2 }}
					>
						Move
					</div>
				</foreignObject>

				<foreignObject
					x='380'
					y='350'
					width='100'
					height='60'
					className='pointer-events-none'
				>
					<div
						className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
							activeSection === 'sleep'
								? 'text-white'
								: 'text-blue-800'
						}`}
						style={{ zIndex: activeSection === 'sleep' ? 50 : 2 }}
					>
						Sleep
					</div>
				</foreignObject>
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
