'use client';
import Head from 'next/head';
import Image from 'next/image';
import { IMAGE_URL } from '../../../Utilities/APIs';
import Hero from '../../Partials/Layouts/hero/Hero';
import ServiceTab from '../../Partials/Layouts/tabs/ServiceTab';
import '../../Partials/Layouts/title-desc/title-desc.css';
import ContactUs from '../../Partials/Sections/contact-us/ContactUs';
import LoadingJson from './ServicesLottie.json';
function Services({ dataTypes, operations, serviceName, longDescription }) {
	return (
		<>
			<Head>
				<title>{serviceName && serviceName} | Abelling</title>
			</Head>
			<Hero
				title="We prepare"
				colorTitle="training data for AI"
				text="Our team, processes, tools and training data platform all work together seamlessly to deliver high quality training data for your computer vision models."
				imgSrc={LoadingJson}
			/>

			<section className="head_desc">
				<div className="container">
					<h2 className="sc_title">
						<span className="text_gradient">{serviceName}</span>
					</h2>
					<p className="text">{longDescription}</p>
				</div>
			</section>

			{dataTypes?.length > 0 ? (
				<section className="sc_data_types pt-100">
					<div className="container">
						<div className="sc_hd_box">
							<h6 className="sc_sub_title">Our Work </h6>
							<h1 className="sc_title">
								TYPES OF DATA WE WORK WITH
							</h1>
							<p className="text">
								We provide data annotation services for global
								clients working on artificial intelligence (AI)
								and deep learning models . We cover use-cases
								across:
							</p>
						</div>
					</div>
					<div className="container">
						<div className="blog_cards_wrapper">
							{dataTypes?.length > 0 &&
								dataTypes.map((data) => (
									<div
										className="blog_card"
										key={data.id}
									>
										<div className="thumb">
											<Image
												src={IMAGE_URL + data.image}
												alt="thumb"
												width="0"
												height="0"
												sizes="100vw"
												style={{
													width: '100%',
													height: '100%',
												}}
											/>
										</div>
										<h2 className="text_gradient">
											{data.name}
										</h2>
										<p className="text">
											{data.description}
										</p>
									</div>
								))}
						</div>
					</div>
				</section>
			) : (
				''
			)}

			<section className="do_for_you py-140">
				<div className="container">
					<ServiceTab operations={operations} />
				</div>
			</section>

			<ContactUs />
		</>
	);
}

export default Services;
