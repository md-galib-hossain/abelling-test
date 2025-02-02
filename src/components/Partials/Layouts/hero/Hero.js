import Link from 'next/link';
import Lottie from 'react-lottie';
function Hero({ title, colorTitle, text, imgSrc, btnLink }) {
	const loadingOptions = {
		loop: true,
		autoplay: true,
		animationData: imgSrc,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<>
			<section className="sc_hero pmb-46">
				<div className="container">
					<div className="grid_container">
						<div className="grid_item">
							<div className="content">
								<h1 className="sc_title">
									{title && title} <br />
									{colorTitle && (
										<span className="text_gradient">
											{colorTitle}
										</span>
									)}
								</h1>
								<p
									className={`hero_text ${
										btnLink ? 'tmb' : ''
									}`}
								>
									{text}
								</p>
								{btnLink && (
									<Link
										href={btnLink}
										className="button hero_btn border"
									>
										learn more
									</Link>
								)}
							</div>
						</div>
						<div className="grid_item">
							<div className="anim">
								<Lottie options={loadingOptions} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
