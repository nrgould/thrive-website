import * as motion from 'motion/react-client';

export default function PrivacyPage() {
	return (
		<main className='min-h-screen flex flex-col items-center'>
			<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
				<div className='max-w-4xl mx-auto'>
					<motion.h1
						className='text-4xl md:text-5xl font-bold text-blue-950 mb-10 text-center'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						Privacy Policy
					</motion.h1>

					<div className='prose max-w-none'>
						<p className='text-lg text-slate-700 mb-6'>
							Last Updated:{' '}
							{new Date().toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric',
							})}
						</p>

						<h2>Introduction</h2>
						<p>
							At THRIVE, we respect your privacy and are committed
							to protecting your personal data. This privacy
							policy will inform you about how we look after your
							personal data when you visit our website and tell
							you about your privacy rights and how the law
							protects you.
						</p>

						<h2>The Data We Collect About You</h2>
						<p>
							Personal data, or personal information, means any
							information about an individual from which that
							person can be identified. We may collect, use, store
							and transfer different kinds of personal data about
							you which we have grouped together as follows:
						</p>
						<ul>
							<li>
								Identity Data includes first name, last name,
								username or similar identifier.
							</li>
							<li>
								Contact Data includes email address, telephone
								numbers, and physical address.
							</li>
							<li>
								Technical Data includes internet protocol (IP)
								address, browser type and version, time zone
								setting and location, browser plug-in types and
								versions, operating system and platform, and
								other technology on the devices you use to
								access this website.
							</li>
							<li>
								Usage Data includes information about how you
								use our website, products and services.
							</li>
							<li>
								Health Data includes information about your
								health status, medical history, and wellness
								goals that you voluntarily provide to us to help
								customize our services to your needs.
							</li>
						</ul>

						<h2>How We Use Your Personal Data</h2>
						<p>
							We will only use your personal data when the law
							allows us to. Most commonly, we will use your
							personal data in the following circumstances:
						</p>
						<ul>
							<li>
								Where we need to perform the contract we are
								about to enter into or have entered into with
								you.
							</li>
							<li>
								Where it is necessary for our legitimate
								interests (or those of a third party) and your
								interests and fundamental rights do not override
								those interests.
							</li>
							<li>
								Where we need to comply with a legal obligation.
							</li>
							<li>Where you have provided explicit consent.</li>
						</ul>

						<h2>Data Security</h2>
						<p>
							We have put in place appropriate security measures
							to prevent your personal data from being
							accidentally lost, used or accessed in an
							unauthorized way, altered or disclosed. In addition,
							we limit access to your personal data to those
							employees, agents, contractors and other third
							parties who have a business need to know.
						</p>

						<h2>Data Retention</h2>
						<p>
							We will only retain your personal data for as long
							as reasonably necessary to fulfill the purposes we
							collected it for, including for the purposes of
							satisfying any legal, regulatory, tax, accounting or
							reporting requirements.
						</p>

						<h2>Your Legal Rights</h2>
						<p>
							Under certain circumstances, you have rights under
							data protection laws in relation to your personal
							data, including the right to:
						</p>
						<ul>
							<li>Request access to your personal data</li>
							<li>Request correction of your personal data</li>
							<li>Request erasure of your personal data</li>
							<li>Object to processing of your personal data</li>
							<li>
								Request restriction of processing your personal
								data
							</li>
							<li>Request transfer of your personal data</li>
							<li>Right to withdraw consent</li>
						</ul>

						<h2>Contact Us</h2>
						<p>
							If you have any questions about this privacy policy
							or our privacy practices, please contact us at:
						</p>
						<p>
							Email: privacy@thriveprogram.com
							<br />
							Phone: (800) 555-1234
							<br />
							Address: 123 Wellness Way, Asheville, NC 28801
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
