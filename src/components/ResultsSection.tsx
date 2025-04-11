import { StatsSection } from './results/StatsSection';
import { AdditionalStats } from './results/AdditionalStats';
import { TestimonialsSection } from './results/TestimonialsSection';

export function ResultsSection() {
	return (
		<section
			id='results'
			className='container mx-auto py-20 pt-48 max-w-6xl px-4 md:px-6'
		>
			<h2 className='text-4xl font-bold text-center mb-4 md:mb-16 text-slate-800'>
				How THRIVE impacts your health
			</h2>

			<StatsSection />
			<AdditionalStats />
			<TestimonialsSection />
		</section>
	);
}
