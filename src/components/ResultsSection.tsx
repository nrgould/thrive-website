import { StatsSection } from './results/StatsSection';
import { AdditionalStats } from './results/AdditionalStats';
import { TestimonialsSection } from './results/TestimonialsSection';

export function ResultsSection() {
	return (
		<section id='results' className='container mx-auto px-4 py-20'>
			<h2 className='text-4xl font-bold text-center mb-16 text-blue-600'>
				Our Results Speak Volumes
			</h2>

			<StatsSection />
			<AdditionalStats />
			<TestimonialsSection />
		</section>
	);
}
