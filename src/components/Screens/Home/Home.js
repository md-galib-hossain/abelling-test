'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import videoThumb from '../../../assets/images/video-thumb.jpg';
import RightArrow from '../../Partials/Elements/icons/RightArrow';
import BlogCard from '../../Partials/Layouts/cards/BlogCard';
import ContactUs from '../../Partials/Sections/contact-us/ContactUs';
import HeroSlide from './hero/HeroSlide';
import OurWorks from './our-works/OurWorks';
import PlatformsTools from './platforms-tools/PlatformsTools';
import Testimonials from './testimonial/Testimonials';
import WeDo from './what-we-do/WeDo';

function Home({ blogs, caseStudies, services }) {
	const [isOpen, setIsOpen] = useState(false);

	blogs.sort(function (a, b) {
		return a.precedence - b.precedence;
	});

	caseStudies.sort(function (a, b) {
		return a.precedence - b.precedence;
	});

	const [vid, setVid] = useState('');
	const videoPlay = () => {
		setIsOpen(true);
		setVid('Sim3L3G_GWk');
	};
	const videoPause = () => {
		setIsOpen(false);
		setVid('');
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [isOpen]);

	return (
		<>
			<HeroSlide />
			<section className="video_header">
				<div className="container">
					<h1 className="sc_title">
						<span id="click-below">
							click the video below to know what abelling does
						</span>
					</h1>
				</div>
			</section>
			<section className="video position-relative">
				<Image
					src={videoThumb}
					alt="background"
					width="0"
					height="0"
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
				/>
				<div className="gradiyent"></div>
				<button
					type="button"
					className="btn_play"
					onClick={videoPlay}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="94"
						height="94"
						viewBox="0 0 94 94"
						fill="none"
					>
						<path
							d="M38.3335 35.6633C38.3335 34.081 40.084 33.1253 41.415 33.981L59.0498 45.3176C60.2745 46.1049 60.2745 47.8951 59.0498 48.6824L41.415 60.019C40.084 60.8747 38.3335 59.919 38.3335 58.3367V35.6633Z"
							fill="#136AE8"
						/>
						<circle
							cx="47"
							cy="47"
							r="46"
							stroke="url(#paint0_linear_604_2478)"
							strokeWidth="2"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_604_2478"
								x1="44.5325"
								y1="94"
								x2="97.3561"
								y2="35.2251"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#136AE8" />
								<stop
									offset="1"
									stopColor="#136AE8"
									stopOpacity="0.5"
								/>
								<stop
									offset="1"
									stopColor="#136AE8"
									stopOpacity="0.35"
								/>
							</linearGradient>
						</defs>
					</svg>
				</button>
				<div
					className={`video_modal ${isOpen ? 'show' : ''}`}
					onClick={videoPause}
				>
					<div className="modal_content_wrapper">
						<div className="modal_content">
							<div className="modal-body">
								<iframe
									src={`https://www.youtube.com/embed/${vid}`}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
			<WeDo services={services} />
			<section className="wca_section">
				<div className="container">
					<div className="sc_hd_box">
						<h6 className="sc_sub_title">WHY US?</h6>
						<h1 className="sc_title">
							why choose <br /> abelling?
						</h1>
					</div>
					<div className="grid_container">
						<div className="wca_card">
							<Image
								src={require('../../../assets/images/wca-1.png')}
								alt="icon"
							/>
							<h2 className="text_gradient">SKILLED LABELLERS</h2>
							<p>
								Experienced labellers on-premise and from the
								crowd give you flexibility regarding{' '}
								<span>
									speed of deliveryand any specialisation or
									security needs!
								</span>
							</p>
						</div>
						<div className="wca_card">
							<Image
								src={require('../../../assets/images/wca-2.png')}
								alt="icon"
							/>
							<h2 className="text_gradient">FOCUS ON QUALITY</h2>
							<p>
								All of our labelers are{' '}
								<span>trained on project parameters</span>{' '}
								before assignment, and our{' '}
								<span>
									in-house QA managers vet every instance
								</span>{' '}
								before submitting data back to you!
							</p>
						</div>
						<div className="wca_card">
							<Image
								src={require('../../../assets/images/wca-3.png')}
								alt="icon"
							/>
							<h2 className="text_gradient">EFFICIENT TOOLING</h2>
							<p>
								There are a wide range of annotation platforms &
								tools out there. We ensure the{' '}
								<span>tools best-suited for your use-case</span>{' '}
								are used on your project.
							</p>
						</div>
						<div className="wca_card">
							<Image
								src={require('../../../assets/images/wca-4.png')}
								alt="icon"
							/>
							<h2 className="text_gradient">AFFORDABLE</h2>
							<p>
								Researchers, students & startups love us –
								because we help train models quickly, without
								breaking the bank!{' '}
								<span>
									High-quality human labelling at less than
									$5/ hour!
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<OurWorks works={caseStudies} />
			<Testimonials />
			<section className="blog_section pt-100 pb-140">
				<div className="container">
					<div className="sc_hd_box">
						<h6 className="sc_sub_title">blogs</h6>
						<h1 className="sc_title">Our Recent Blogs</h1>
					</div>
					<div className="blog_cards_wrapper">
						{blogs.slice(0, 3).map((data, index) => (
							<BlogCard
								blogData={data}
								key={index}
							/>
						))}
					</div>
				</div>
				<div className="container">
					<div className="viewall_btn_box">
						<Link
							href="blog"
							className="explore"
						>
							view all
							<RightArrow />
						</Link>
					</div>
				</div>
			</section>
			<PlatformsTools />
			<ContactUs />
		</>
	);
}

export default Home;
