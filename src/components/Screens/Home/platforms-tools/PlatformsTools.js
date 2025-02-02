import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import axios from 'axios';
import Image from 'next/image';
import 'swiper/css';
import { IMAGE_URL, TOOLS_API } from '../../../../Utilities/APIs';
import './platforms-tools.css';

function PlatformsTools() {
	const [tools, setTool] = useState([]);

	useEffect(() => {
		async function getTools() {
			const { data } = await axios.get(TOOLS_API);
			setTool(data);
		}
		getTools();
	}, []);

	return (
		<section className="sc_platforms_tools pb-140">
			<div className="container">
				<div className="sc_hd_box">
					<h6 className="sc_sub_title">Platform</h6>
					<h1 className="sc_title">
						Platforms & Tools <br /> we use
					</h1>
				</div>
			</div>
			<div className="container">
				<Swiper
					loop={true}
					slidesPerView={3}
					spaceBetween={30}
					autoplay={{
						delay: 3500,
					}}
					breakpoints={{
						640: {
							slidesPerView: 4,
						},
					}}
					modules={[Autoplay]}
					className="pt_slider"
				>
					{tools.map((data, index) => (
						<SwiperSlide key={index}>
							<div className="item">
								<a
									href={data.link}
									target="_blanck"
								>
									<Image
										src={IMAGE_URL + data.image}
										alt="pt-thumb"
										width="0"
										height="0"
										sizes="100vw"
										style={{
											width: '100%',
											height: 'auto',
										}}
									/>
								</a>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default PlatformsTools;
