import { CTASection } from '@/components/CTASection';
import { ScienceBehaviorPrinciplesSection } from '@/components/ScienceBehaviorPrinciplesSection';
import { ScienceHeroSection } from '@/components/ScienceHeroSection';
import { ScienceMythsTruthsSection } from '@/components/ScienceMythsTruthsSection';
import { SciencePillarsSection } from '@/components/SciencePillarsSection';
import { BehaviorDesignIntroSection } from '@/components/BehaviorDesignIntroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'The Science | THRIVE',
	description:
		'Discover the evidence-based research and scientific principles that form the foundation of our approach to health and well-being through Lifestyle Medicine and Behavior Design.',
};

export default function SciencePage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<ScienceHeroSection />
			<BehaviorDesignIntroSection />
			<ScienceMythsTruthsSection />
			<ScienceBehaviorPrinciplesSection />
			<SciencePillarsSection />
			<CTASection
				secondaryActionText='View Our Methodology'
				secondaryActionLink='/about'
			/>
		</main>
	);
}
