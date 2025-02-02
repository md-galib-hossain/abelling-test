import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../../../../Utilities/APIs';
import './ServiceTab.css';

const ServiceTab = ({ operations }) => {
	const [toggleTab, setToggleTab] = useState(0);
	const toggle = (index) => setToggleTab(index);
	return (
		<div className="row service_tab">
			<div className="col-12 col-md-4 left_box">
				<div className="sc_hd_box">
					<h6 className="sc_sub_title">operations</h6>
					<h1 className="sc_title">
						OPERATIONS WE CAN <br /> DO FOR YOU
					</h1>
				</div>
				<ul
					className="nav"
					id="doForYou"
				>
					{operations?.length > 0 &&
						operations.map((data, index) => (
							<li
								className="nav-item"
								role="presentation"
								key={data.id}
							>
								<Image
									src={IMAGE_URL + data.icon}
									alt="icon"
									width="0"
									height="0"
									sizes="100vw"
									style={{
										height: '3.75rem',
										marginRight: '3.25rem',
										width: '3.75rem',
									}}
								/>
								<button
									className={`nav-link ${
										toggleTab === index ? 'active' : ''
									}`}
									type="button"
									onClick={() => toggle(index)}
								>
									{data.name}
								</button>
							</li>
						))}
				</ul>
			</div>
			<div className="col-12 col-md-8 tab_content_wrapper">
				<div className="tab-content">
					{operations?.length > 0 &&
						operations.map((data, index) => (
							<div
								className={`tab-pane ${
									toggleTab === index ? 'show' : ''
								}`}
								key={data.id}
							>
								<Image
									src={IMAGE_URL + data.image}
									alt="wwd-img"
									width="0"
									height="0"
									sizes="100vw"
									style={{ width: '100%', height: 'auto' }}
								/>
								<div className="content">
									<h3>{data.name}</h3>
									<p>{data.description}</p>
									<Link
										href="/get-quote"
										className="button border"
									>
										get a quote
									</Link>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default ServiceTab;
