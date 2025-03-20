import { HeroSection } from '../components/HeroSection';
import { ResultsSection } from '../components/ResultsSection';
import { ProgramStructureSection } from '../components/ProgramStructureSection';
import { SupportiveExperienceSection } from '../components/SupportiveExperienceSection';
import { FAQSection } from '../components/FAQSection';
import { ThreeColumnsSection } from '../components/ThreeColumnsSection';
import { WhoForSection } from '../components/WhoForSection';
import { BehaviorDesignSection } from '../components/BehaviorDesignSection';
export default function Home() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			{/* Hero Section */}
			<HeroSection />

			{/* Three Columns Section */}
			<ThreeColumnsSection />

			{/* Results & Testimonials */}
			<ResultsSection />

			{/* Who This Program Is For */}
			<WhoForSection />

			{/* Program Structure */}
			<ProgramStructureSection />

			{/* How THRIVE Helps */}
			<BehaviorDesignSection />

			{/* Supportive Experience */}
			<SupportiveExperienceSection />

			{/* FAQ & Final CTA */}
			<FAQSection />
		</main>
	);
}
