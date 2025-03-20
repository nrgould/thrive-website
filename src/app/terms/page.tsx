import * as motion from 'motion/react-client';

export default function TermsPage() {
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
						Terms of Service
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

						<h2>1. Introduction</h2>
						<p>
							Welcome to THRIVE (&quot;Company&quot;,
							&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)!
							These Terms of Service (&quot;Terms&quot;,
							&quot;Terms of Service&quot;) govern your use of our
							website and services operated by THRIVE.
						</p>
						<p>
							By accessing or using our service, you agree to be
							bound by these Terms. If you disagree with any part
							of the terms, then you do not have permission to
							access our services.
						</p>

						<h2>2. Communications</h2>
						<p>
							By creating an account on our service, you agree to
							subscribe to newsletters, marketing or promotional
							materials and other information we may send.
							However, you may opt out of receiving any, or all,
							of these communications from us by following the
							unsubscribe link or instructions provided in any
							email we send.
						</p>

						<h2>3. Purchases</h2>
						<p>
							If you wish to purchase any product or service made
							available through the Service
							(&quot;Purchase&quot;), you may be asked to supply
							certain information relevant to your Purchase
							including, without limitation, your name, email,
							phone number, credit card information, billing
							address, and shipping information.
						</p>
						<p>
							You represent and warrant that: (i) you have the
							legal right to use any credit card(s) or other
							payment method(s) in connection with any Purchase;
							and that (ii) the information you supply to us is
							true, correct and complete.
						</p>

						<h2>4. Refunds</h2>
						<p>Our refund policy varies by program:</p>
						<ul>
							<li>
								THRIVE 6-Week Program: Full refund available
								within the first 14 days if you&apos;re not
								satisfied for any reason.
							</li>
							<li>
								THRIVE Essentials: Full refund available within
								the first 7 days of purchase.
							</li>
						</ul>
						<p>
							To request a refund, please contact us at
							support@thriveprogram.com with your purchase
							details.
						</p>

						<h2>5. Content</h2>
						<p>
							Our Service allows you to post, link, store, share
							and otherwise make available certain information,
							text, graphics, videos, or other material. You are
							responsible for the content that you post to the
							Service, including its legality, reliability, and
							appropriateness.
						</p>

						<h2>6. Prohibited Uses</h2>
						<p>
							You may use our Service only for lawful purposes and
							in accordance with these Terms. You agree not to use
							the Service:
						</p>
						<ul>
							<li>
								In any way that violates any applicable federal,
								state, local or international law or regulation.
							</li>
							<li>
								To transmit, or procure the sending of, any
								advertising or promotional material, including
								any &quot;junk mail&quot;, &quot;chain
								letter&quot; or &quot;spam&quot; or any other
								similar solicitation.
							</li>
							<li>
								To impersonate or attempt to impersonate the
								Company, a Company employee, another user, or
								any other person or entity.
							</li>
							<li>
								To engage in any other conduct that restricts or
								inhibits anyone&apos;s use or enjoyment of the
								Service, or which, as determined by us, may harm
								the Company or users of the Service or expose
								them to liability.
							</li>
						</ul>

						<h2>7. Disclaimer of Warranties</h2>
						<p>
							The information provided by THRIVE on our website
							and through our services is for general
							informational and educational purposes only. All
							information is provided in good faith, however, we
							make no representation or warranty of any kind,
							express or implied, regarding the accuracy,
							adequacy, validity, reliability, availability, or
							completeness of any information on our website or in
							our services.
						</p>
						<p>
							Our services and content are not intended to be a
							substitute for professional medical advice,
							diagnosis, or treatment. Always seek the advice of
							your physician or other qualified health provider
							with any questions you may have regarding a medical
							condition.
						</p>

						<h2>8. Limitation of Liability</h2>
						<p>
							In no event shall THRIVE, nor its directors,
							employees, partners, agents, suppliers, or
							affiliates, be liable for any indirect, incidental,
							special, consequential or punitive damages,
							including without limitation, loss of profits, data,
							use, goodwill, or other intangible losses, resulting
							from your access to or use of or inability to access
							or use the Service.
						</p>

						<h2>9. Governing Law</h2>
						<p>
							These Terms shall be governed and construed in
							accordance with the laws of North Carolina, United
							States, without regard to its conflict of law
							provisions.
						</p>

						<h2>10. Changes</h2>
						<p>
							We reserve the right, at our sole discretion, to
							modify or replace these Terms at any time. If a
							revision is material, we will provide at least 30
							days&apos; notice prior to any new terms taking
							effect. What constitutes a material change will be
							determined at our sole discretion.
						</p>

						<h2>11. Contact Us</h2>
						<p>
							If you have any questions about these Terms, please
							contact us at:
						</p>
						<p>
							Email: legal@thriveprogram.com
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
