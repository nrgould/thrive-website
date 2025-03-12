import { HeroSection } from '../components/HeroSection';
import { ResultsSection } from '../components/ResultsSection';
import { ProgramStructureSection } from '../components/ProgramStructureSection';
import { HowSection } from '../components/HowSection';
import { SupportiveExperienceSection } from '../components/SupportiveExperienceSection';
import { FAQSection } from '../components/FAQSection';
import { ThreeColumnsSection } from '../components/ThreeColumnsSection';
import { WhoForSection } from '../components/WhoForSection';

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			{/* Hero Section */}
			<HeroSection />

			{/* Three Columns Section */}
			<ThreeColumnsSection />

			{/* Results & Testimonials */}
			<ResultsSection />

			{/* Program Structure */}
			<ProgramStructureSection />

			{/* Who This Program Is For */}
			<WhoForSection />

			{/* How THRIVE Helps */}
			<HowSection />

			{/* Supportive Experience */}
			<SupportiveExperienceSection />

			{/* FAQ & Final CTA */}
			<FAQSection />
		</main>
	);
}
