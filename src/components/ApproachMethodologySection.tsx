import React from 'react';
import * as motion from 'motion/react-client';
import { BookOpen, Layers, Users, LucideIcon } from 'lucide-react';
import ApproachMethodologyTabs from './ui/ApproachMethodologyTabs';

// Define types for keys used in data and maps
type IconBgColor = 'bg-blue-500' | 'bg-teal-500' | 'bg-green-500';
type AccentColor = 'blue' | 'teal' | 'green';

// Define the structure of a methodology item
export interface MethodologyItem {
	id: string;
	Icon: LucideIcon; // Use LucideIcon type
	iconBgColor: IconBgColor;
	accentColor: AccentColor;
	title: string;
	subtitle: string;
	description1: string;
	description2: string;
	listItems: string[];
}

const methodologyData: MethodologyItem[] = [
	{
		id: 'education',
		Icon: BookOpen,
		iconBgColor: 'bg-blue-500',
		accentColor: 'blue',
		title: 'Education',
		subtitle: 'Learn a Healthier Way',
		description1:
			'Understanding forms the foundation of lasting change. We provide scientifically-backed knowledge about Lifestyle Medicine and through the six pillars of THRIVE: nutrition, physical activity, sleep, stress management, growth mindset, and social connection, and healthy habits.',
		description2: 'Our educational approach includes:',
		listItems: [
			'Evidence-based health and nutrition information for mind and body',
			'Practical learning modules on each pillar',
			'Debunking common health myths and misconceptions',
			'Real-world applications of scientific research',
		],
	},
	{
		id: 'integration',
		Icon: Layers,
		iconBgColor: 'bg-teal-500',
		accentColor: 'teal',
		title: 'Integration',
		subtitle: 'Make Sustainable Change',
		description1:
			"Knowledge alone isn't enough. We use proven Behavior Design principles to help you transform information into action through personalized habit formation that fits your life, values, and goals.",
		description2: 'Our integration process includes:',
		listItems: [
			'Personalized habit mapping and implementation plans',
			'Techniques to overcome the willpower gap and build more self-control',
			'Environmental design for easier healthy choices',
			'Progressive skill building through micro-habits',
		],
	},
	{
		id: 'connection',
		Icon: Users,
		iconBgColor: 'bg-green-500',
		accentColor: 'green',
		title: 'Connection',
		subtitle: 'Engage in a Community of Support',
		description1:
			'Human beings are tribal and Research consistently shows that social support is crucial for lasting behavior change. Our approach embeds you in a supportive community with expert guidance to help you apply learning, navigate challenges and celebrate successes.',
		description2: 'Our connection framework includes:',
		listItems: [
			'Personalized 1:1 coaching with health experts',
			'Small group learning circles for peer support and sharing',
			'Community practice sessions and accountability',
			'Long-term maintenance strategies and support',
		],
	},
];

// Type the map objects using Record<KeyType, ValueType>
const colorMap: Record<IconBgColor, string> = {
	'bg-blue-500': '#3b82f6', // hex for blue-500
	'bg-teal-500': '#14b8a6', // hex for teal-500
	'bg-green-500': '#22c55e', // hex for green-500
};

const textColorMap: Record<AccentColor, string> = {
	blue: 'text-blue-600',
	teal: 'text-teal-600',
	green: 'text-green-600',
};

const iconColorMap: Record<AccentColor, string> = {
	blue: 'text-blue-400',
	teal: 'text-teal-400',
	green: 'text-green-400',
};

// Client Component for the interactive tabs

// Server Component (remove 'use client' from here if it was added)
// (no 'use client' directive here)
export function ApproachMethodologySection() {
	return (
		<section className='w-full py-24 px-4 md:px-8 bg-slate-50'>
			<div className='max-w-4xl mx-auto'>
				{/* Title and Intro - Rendered on Server */}
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					The THRIVE Methodology
				</motion.h2>
				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Our approach combines three essential elements to create a
					comprehensive system for sustainable health transformation.
					Each component builds on the others to help you make changes
					that can last a lifetime.
				</motion.p>

				{/* Interactive Tabs - Client Component */}
				<ApproachMethodologyTabs
					colorMap={colorMap}
					textColorMap={textColorMap}
					iconColorMap={iconColorMap}
				/>

				{/* Hidden Content for SEO/No-JS - Rendered on Server */}
				<div className='sr-only'>
					{methodologyData.map((item) => (
						<div key={`${item.id}-hidden`}>
							<h2>{item.title}</h2>
							<h3>{item.subtitle}</h3>
							<p>{item.description1}</p>
							<p>{item.description2}</p>
							<ul>
								{item.listItems.map((listItem, i) => (
									<li key={i}>{listItem}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
