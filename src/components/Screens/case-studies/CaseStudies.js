'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../../../Utilities/APIs';
import RightArrow from '../../Partials/Elements/icons/RightArrow';
import Hero from '../../Partials/Layouts/hero/Hero';
import ContactUs from '../../Partials/Sections/contact-us/ContactUs';
import LoadingJson from './caseStudy.json';

function CaseStudies({ works = [] ,contacts}) {
	return (
		<>
			<Hero
				colorTitle="Case studies"
				text="Learnings from some of the projects we’ve worked on."
				imgSrc={LoadingJson}
			/>
			<section className="case_studies pb-140">
				<div className="container">
					{works?.map((data, index) =>
						index % 2 === 0 ? (
							<div
								className="grid_container"
								key={index}
							>
								<div className="grid_item">
									<div className="ow_content">
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
									</div>
								</div>
								<div className="grid_item">
									<div className="details_view">
										<div className="ow_content">
											<h2>{data?.name}</h2>
										</div>
										<p className="text">
											{data?.shortDescription}
										</p>
										<Link
											href={`/case-studies/${data?.slug}`}
											className="explore"
										>
											view details
											<RightArrow />
										</Link>
									</div>
								</div>
							</div>
						) : (
							<div
								className="grid_container"
								key={index}
							>
								<div className="grid_item">
									<div className="details_view">
										<div className="ow_content">
											<h2>{data.name}</h2>
										</div>
										<p className="text">
											{data.shortDescription}
										</p>
										<Link
											href={`/case-studies/${data.slug}`}
											className="explore"
										>
											view details
											<RightArrow />
										</Link>
									</div>
								</div>
								<div className="grid_item">
									<div className="ow_content">
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
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</section>
			<ContactUs contacts={contacts}/>
		</>
	);
}

export default CaseStudies;
