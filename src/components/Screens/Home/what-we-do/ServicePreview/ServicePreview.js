"use client"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IMAGE_URL, OPERATIONS } from '../../../../../Utilities/APIs';
import RightArrow from '../../../../Partials/Elements/icons/RightArrow';

// import './ServicePreview.css'

function ServicePreview({ service }) {
	const [operations, setOperations] = useState(null);
	const [toggleTab, setToggleTab] = useState(0);
	const toggle = (index) => setToggleTab(index);

	useEffect(() => {
		async function getAndSetOperations() {
			const { data } = await axios.get(
				OPERATIONS + 'getOperationsFromService/' + service._id
			);
			setOperations(data);
		}
		getAndSetOperations();
	}, [service]);

	return (
		<div className="tab left_content">
			<div className="tab_wrapper">
				<div className="tab-content">
					{operations?.map((opData, index) => (
						<div
							className={`tab-pane ${
								toggleTab === index ? 'show' : ''
							}`}
							key={index}
						>
							<Image
								src={IMAGE_URL + opData.image}
								alt="wwd-img"
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="tab_nav_wrapper">
				<div className="content_box">
					<h2 className="text_gradient">{service.name}</h2>
					<p className="text">{service.shortDescription}</p>
					<ul className="nav">
						{operations?.map((opData, index) => (
							<li
								className="nav-item"
								key={index}
							>
								<button
									className={`nav-link ${
										toggleTab === index ? 'active' : ''
									}`}
									type="button"
									onClick={() => toggle(index)}
								>
									{opData.name}
								</button>
							</li>
						))}
					</ul>
					<Link
						href={`/services/${service._id}`}
						className="explore"
					>
						<span>
							explore
							<RightArrow />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServicePreview;
