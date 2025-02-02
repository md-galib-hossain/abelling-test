'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { IMAGE_URL } from '../../../Utilities/APIs';
import Sami from '../../../assets/images/sami.jpg';
import Zulayed from '../../../assets/images/zulayed.jpg';
import Hero from '../../Partials/Layouts/hero/Hero';
import LoadingJson from './AboutLottie.json';
import './about-us.css';
function AboutUs({ teams }) {
	const team = useRef();

	return (
		<>
			<div className="about_hero">
				<Hero
					title="We are Proud"
					colorTitle="To Teach Future AI"
					text="Deep learning systems are like babies. You owe it to teach them well."
					imgSrc={LoadingJson}
				/>

				<section
					className="our_story pb-140"
					id="story"
				>
					<div className="container">
						<div className="sc_hd_box">
							<h6 className="sc_sub_title">story</h6>
							<h1 className="sc_title">our story</h1>
						</div>
						<div className="story_cards_wrapper">
							<div className="story_card">
								<div className="card_head">
									<Image
										src={Zulayed}
										alt="thumb"
									/>
									<div className="align-self-center">
										<h2 className="sc_title text_gradient people_title">
											ZULAYED MD ALI
										</h2>
										<p className="people_desig">
											CEO & CO-Founder
										</p>
									</div>
								</div>
								<div className="card_body">
									<p className="text">
										With 10+ yrs experience at Uber &
										Unilever, Zulayed dreams to leverage the
										global AI boom to generate employment
										for thousands of Bangladeshi youth
									</p>
								</div>
							</div>
							<div className="story_card">
								<div className="card_head">
									<Image
										src={Sami}
										alt="thumb"
									/>
									<div className="align-self-center">
										<h2 className="sc_title text_gradient people_title">
											Sami Tauseef
										</h2>
										<p className="people_desig">
											COO & Co-Founder
										</p>
									</div>
								</div>
								<div className="card_body">
									<p className="text">
										Working in the AI sector since 2017,
										Sami formed Abelling in 2019 with the
										dream of building cool AI products that
										would help solve the real-world
										challenges of today
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="sc_mivi mission"
					id="mission"
				>
					<div className="container">
						<div className="mivi_content">
							<h2 className="sc_title">OUR MISSION</h2>
							<p className="text">
								Leverage the Global-AI boom to make the
								idle-Bangladeshi youth productive - molding
								Bangladesh into a world engine for outsourced
								tech services
							</p>
						</div>
					</div>
				</section>
				<section className="sc_mivi">
					<div className="container">
						<div className="mivi_content">
							<h2 className="sc_title">OUR vision</h2>
							<p className="text">
								Become the world’s #1 supplier of high-quality
								data services - harnessing the dormant power of
								the Bangladeshi workforce.
							</p>
						</div>
					</div>
				</section>

				<section
					className="our_team pt-100"
					ref={team}
				>
					<div className="container">
						<div className="team_box_prf_two">
							{teams.map((data, index) =>
								data.precedence > 0 ? (
									<div
										className="team_content"
										key={index}
									>
										<Image
											src={IMAGE_URL + data.image}
											alt="thumb"
											width="0"
											height="0"
											sizes="100vw"
											style={{
												width: '100%',
												height: 'auto',
											}}
										/>
										<h2 className="sc_title people_title">
											{data.name}
										</h2>
										<p className="people_desig">
											{data.designation}
										</p>
									</div>
								) : (
									''
								)
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default AboutUs;
