import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.thrivelm.com'; // Update if your production URL is different
	const imageBaseUrl = `${baseUrl}`; // Images are relative to the base URL in the public folder

	// All available images (excluding .DS_Store and potentially large duplicates like .jpg vs .webp)
	const images = [
		'C2Life logo.png',
		'events/graduation.webp',
		'events/kitchen.webp',
		'lifestyle/speaking.webp',
		'lifestyle/greenway1.webp',
		'lifestyle/kitchen1.webp',
		'team/quez.webp',
		'team/nicholas.webp',
		'team/leticia.webp',
		'team/laurie.webp',
		'team/chasity.webp',
		'team/brian.webp',
		'team/brett.webp',
	];

	return [
		// Main pages
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		// Root level pages
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/programs`, // Assuming /programs itself isn't a page, but a parent route
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// About sub-pages
		{
			url: `${baseUrl}/about/science`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/about/team`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		// Programs sub-pages
		{
			url: `${baseUrl}/programs/six-week`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/programs/essentials`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		// Image sitemap entries (optional, but good practice)
		...images.map((image) => ({
			url: `${imageBaseUrl}/${image}`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const, // or 'yearly' if they rarely change
			priority: 0.3, // Lower priority for images
		})),
	];
}
