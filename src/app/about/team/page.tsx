import { TeamSection } from '@/components/TeamSection';
import { TeamCTASection } from '@/components/TeamCTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Meet Our Team | THRIVE',
	description:
		'Meet the dedicated team of coaches and experts guiding you on your journey to better health and well-being through lifestyle medicine.',
};

export default function TeamPage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			{/* <TeamHeroSection /> */}
			<TeamSection />
			<TeamCTASection />
		</main>
	);
}
