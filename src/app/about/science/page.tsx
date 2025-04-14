import { CTASection } from '@/components/CTASection';
import { ScienceBehaviorPrinciplesSection } from '@/components/ScienceBehaviorPrinciplesSection';
import { ScienceHeroSection } from '@/components/ScienceHeroSection';
import { ScienceMythsTruthsSection } from '@/components/ScienceMythsTruthsSection';
import { SciencePillarsSection } from '@/components/SciencePillarsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'The Science | THRIVE',
	description:
		'Discover the evidence-based research and scientific principles that form the foundation of our approach to health and well-beinglness through the six pillars of Lifestyle Medicine and Behavior Design.',
};

export default function SciencePage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<ScienceHeroSection />
			<ScienceMythsTruthsSection />
			<ScienceBehaviorPrinciplesSection />
			<SciencePillarsSection />
			<CTASection />
		</main>
	);
}
