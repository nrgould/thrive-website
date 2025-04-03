import { ApproachHeroSection } from '../../components/ApproachHeroSection';
import { ApproachMethodologySection } from '../../components/ApproachMethodologySection';
import { ApproachWhyItWorksSection } from '../../components/ApproachWhyItWorksSection';
import { CTASection } from '../../components/CTASection';

export default function AboutPage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<ApproachHeroSection />
			<ApproachMethodologySection />
			<ApproachWhyItWorksSection />
			<CTASection />
		</main>
	);
}
