import { ApproachBehaviorDesignSection } from '@/components/ApproachBehaviorDesignSection';
import { CTASection } from '@/components/CTASection';
import { ScienceHeroSection } from '@/components/ScienceHeroSection';
import { ScienceMythsTruthsSection } from '@/components/ScienceMythsTruthsSection';
import { SciencePillarsSection } from '@/components/SciencePillarsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'The Science | THRIVE',
	description:
		'Discover the evidence-based research and scientific principles behind the six pillars of Lifestyle Medicine that form the foundation of the THRIVE program.',
};

export default function SciencePage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<ScienceHeroSection />
			<ScienceMythsTruthsSection />
			<SciencePillarsSection />
			<ApproachBehaviorDesignSection />
			<CTASection />
		</main>
	);
}
