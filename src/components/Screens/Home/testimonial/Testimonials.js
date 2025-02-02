import { useEffect, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import "./testimonials.css";
import axios from 'axios';
import Image from 'next/image';
import { IMAGE_URL, TESTIMONIALS } from '../../../../Utilities/APIs';
import Head from 'next/head';

function Testimonials({testimonials}) {
	// const [testimonials, setTestimonial] = useState([]);

	// useEffect(() => {
	// 	async function getTestimonials() {
	// 		const { data } = await axios.get(TESTIMONIALS);
	// 		setTestimonial(data);
	// 	}
	// 	getTestimonials();
	// }, []);

	return (
		<>
		 <Head>
        <title>Abelling - Client Testimonials</title>
        <meta
          name="description"
          content="Hear from our satisfied clients! Read testimonials from businesses that have experienced success with Abelling’s innovative solutions."
        />
      </Head>
		<section className="sc_testimonial">
			<div className="container">
				<div className="sc_hd_box">
					<h6 className="sc_sub_title">testimonial</h6>
					<h1 className="sc_title">What Our Clients Say</h1>
				</div>
			</div>
			<div className="container swiper_container">
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>

				<Swiper
					navigation={{
						prevEl: '.sc_testimonial .swiper-button-prev',
						nextEl: '.sc_testimonial .swiper-button-next',
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
					{testimonials.map((data, index) => (
						<SwiperSlide key={index}>
							<div className="tstm_card">
								<Image
									src={IMAGE_URL + data.image}
									alt="tstm_thumb"
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: '8rem', height: '8rem' }}
								/>
								<h2>{data.name}</h2>
								<h6>
									{data.designation}, {data.companyName}
								</h6>
								<p>{data.description}</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
		</>
	);
}

export default Testimonials;
