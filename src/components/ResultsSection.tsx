import { StatsSection } from './results/StatsSection';
import { AdditionalStats } from './results/AdditionalStats';
import { TestimonialsSection } from './results/TestimonialsSection';

export function ResultsSection() {
	return (
		<section
			id='results'
			className='container mx-auto py-20 pt-48 max-w-6xl'
		>
			<h2 className='text-4xl font-bold text-center mb-16 text-blue-500'>
				How THRIVE impacts your health
			</h2>

			<StatsSection />
			<AdditionalStats />
			<TestimonialsSection />
		</section>
	);
}
