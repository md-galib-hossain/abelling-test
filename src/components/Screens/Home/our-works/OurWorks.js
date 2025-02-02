import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import './our-works.css'
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../../../../Utilities/APIs';
import RightArrow from '../../../Partials/Elements/icons/RightArrow';
import Head from 'next/head';

function OurWorks({ works }) {
	return (
		<>
		
		<Head>
        <title>Abelling - Our Works</title>
        <meta
          name="description"
          content="Explore the impressive case studies and successful projects we’ve completed at Abelling. See how we deliver innovative solutions to our clients."
        />
      </Head>
		<section className="our_works pt-100 pb-140">
			<div className="container">
				<div className="sc_hd_box">
					<h6 className="sc_sub_title">Our WOrks</h6>
					<h1 className="sc_title">stuff we have done</h1>
				</div>
			</div>
			<div className="container swiper_container">
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>

				<Swiper
					navigation={{
						prevEl: '.our_works .swiper-button-prev',
						nextEl: '.our_works .swiper-button-next',
					}}
					rewind={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: false,
					}}
					slidesPerView={1}
					spaceBetween={25}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
					}}
					modules={[Autoplay, Navigation]}
					className="common_arrow"
				>
					{works?.slice(0, 5).map((data, index) => (
						<SwiperSlide key={index}>
							<div className="ow_card ow_content">
								<Link href={`/case-studies/${data.slug}`}>
									<Image
										src={IMAGE_URL + data.image}
										alt="ow-thumb"
										width={2000}
										height={2000}
										sizes="100vw"
										style={{
											width: '100%',
											height: '30rem',
											objectFit: 'cover'
										}}
									/>
									<h2>{
										
										data?.name.length > 70 ? data?.name.slice(0, 70) + '...' : data?.name
										}</h2>
								</Link>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="container">
				<div className="viewall_btn_box">
					<Link
						href="/case-studies"
						className="explore"
					>
						view all
						<RightArrow />
					</Link>
				</div>
			</div>
		</section>
		</>
	);
}

export default OurWorks;
