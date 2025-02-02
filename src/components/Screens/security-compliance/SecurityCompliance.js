'use client';
import Image from 'next/image';
import Shield from '../../../assets/images/security/shield.svg';
import Hero from '../../Partials/Layouts/hero/Hero';
import ContactUs from '../../Partials/Sections/contact-us/ContactUs';
import LoadingJson from './SecurityLottie.json';
function SecurityCompliance() {
	return (
		<>
			<Hero
				colorTitle="YOU CAN TRUST"
				title="DATA PRIVACY"
				text="At abelling, your data is in good hands."
				btnLink="/"
				imgSrc={LoadingJson}
			/>
			<section className="sc_mivi">
				<div className="container">
					<div className="mivi_content">
						<Image
							src={Shield}
							alt="icon"
						/>
						<p className="text">
							For sensitive data (e.g. PII), we use anonymizer &
							data scrambling techniques to ensure anonymity; We
							also provide isolated systems & secure physical
							premises under surveillance for clients / projects
							who require it.
						</p>
					</div>
				</div>
			</section>
			<section className="sc_cards_section py-140">
				<div className="container">
					<div className="sc_cards">
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M24 44C19.3333 42.8333 15.5 40.125 12.5 35.875C9.5 31.625 8 26.9667 8 21.9V10L24 4L40 10V21.9C40 26.9667 38.5 31.625 35.5 35.875C32.5 40.125 28.6667 42.8333 24 44ZM24 40.9C27.5333 39.7333 30.4583 37.5917 32.775 34.475C35.0917 31.3583 36.45 27.8667 36.85 24H24V7.25L11 12.1V21.9C11 22.3 11.0083 22.6417 11.025 22.925C11.0417 23.2083 11.0833 23.5667 11.15 24H24V40.9Z"
									fill="#2B87FF"
								/>
							</svg>
							<h6>Our Privacy policy</h6>
						</div>
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M24 28.3C25.2333 28.3 26.2833 27.875 27.15 27.025C28.0167 26.175 28.45 25.1167 28.45 23.85C28.45 22.6167 28.0167 21.5667 27.15 20.7C26.2833 19.8333 25.2333 19.4 24 19.4C22.7667 19.4 21.7167 19.8333 20.85 20.7C19.9833 21.5667 19.55 22.6167 19.55 23.85C19.55 25.1167 19.9833 26.175 20.85 27.025C21.7167 27.875 22.7667 28.3 24 28.3ZM24 40.9C25.5667 40.3667 27.1667 39.525 28.8 38.375C30.4333 37.225 31.75 35.9167 32.75 34.45L28.15 30.05C27.5167 30.4167 26.85 30.7167 26.15 30.95C25.45 31.1833 24.7333 31.3 24 31.3C21.9333 31.3 20.175 30.5833 18.725 29.15C17.275 27.7167 16.55 25.95 16.55 23.85C16.55 21.7833 17.275 20.025 18.725 18.575C20.175 17.125 21.9333 16.4 24 16.4C26.0667 16.4 27.825 17.125 29.275 18.575C30.725 20.025 31.45 21.8 31.45 23.9C31.45 24.6 31.35 25.3 31.15 26C30.95 26.7 30.6333 27.3333 30.2 27.9L34.4 31.9C35.2 30.4667 35.8333 28.8917 36.3 27.175C36.7667 25.4583 37 23.7 37 21.9V12L24 7.25L11 12V21.9C11 26.2667 12.2083 30.2083 14.625 33.725C17.0417 37.2417 20.1667 39.6333 24 40.9ZM24 44C19.3333 42.8333 15.5 40.125 12.5 35.875C9.5 31.625 8 26.9667 8 21.9V10L24 4L40 10V21.9C40 26.9667 38.5 31.625 35.5 35.875C32.5 40.125 28.6667 42.8333 24 44Z"
									fill="#2B87FF"
								/>
							</svg>
							<h6>Our Terms of Service</h6>
						</div>
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M8 42V39H32V42H8ZM19.1 31.4L8 20.3L11.5 16.7L22.7 27.8L19.1 31.4ZM31.8 18.7L20.7 7.5L24.3 4L35.4 15.1L31.8 18.7ZM41.9 40L15.1 13.2L17.2 11.1L44 37.9L41.9 40Z"
									fill="#2B87FF"
								/>
							</svg>
							<h6>Our Cookie Policy (EU)</h6>
						</div>
						<div className="">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 48 48"
								fill="none"
							>
								<path
									d="M24.1 34.1L31.9 26.3L29.75 24.15L25.6 28.3V18.6H22.6V28.3L18.45 24.15L16.3 26.3L24.1 34.1ZM11 44C10.2 44 9.5 43.7 8.9 43.1C8.3 42.5 8 41.8 8 41V15.95L19.95 4H37C37.8 4 38.5 4.3 39.1 4.9C39.7 5.5 40 6.2 40 7V41C40 41.8 39.7 42.5 39.1 43.1C38.5 43.7 37.8 44 37 44H11ZM11 41H37V7H21.3L11 17.3V41ZM11 41H37H11Z"
									fill="#2B87FF"
								/>
							</svg>

							<h6>Download our NDA</h6>
						</div>
					</div>
				</div>
			</section>
			<ContactUs />
		</>
	);
}

export default SecurityCompliance;
