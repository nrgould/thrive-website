import { HeroSection } from '../components/HeroSection';
import { ResultsSection } from '../components/ResultsSection';
import { ProgramStructureSection } from '../components/ProgramStructureSection';
import { HowSection } from '../components/HowSection';
import { SupportiveExperienceSection } from '../components/SupportiveExperienceSection';
import { FAQSection } from '../components/FAQSection';
import { ThreeColumnsSection } from '../components/ThreeColumnsSection';

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

			{/* How THRIVE Helps */}
			<HowSection />

			{/* Supportive Experience */}
			<SupportiveExperienceSection />

			{/* FAQ & Final CTA */}
			<FAQSection />
		</main>
	);
}
