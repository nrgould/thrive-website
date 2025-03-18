'use client';

import { ContactHeroSection } from '../../components/ContactHeroSection';
import { ContactFormSection } from '../../components/ContactFormSection';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export default function ContactPage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<ContactHeroSection />
			<ContactFormSection />
			<ContactInfoSection />
		</main>
	);
}
