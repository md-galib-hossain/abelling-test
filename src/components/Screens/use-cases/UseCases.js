import { Link } from 'react-router-dom';

// import './use-cases.css'
import Image from 'next/image';
import ContactUs from '../../Partials/Sections/contact-us/ContactUs';

function UseCases() {
	return (
		<>
			<section className="use_cases pmt-116 pb-140">
				<div className="container">
					<ul
						className="nav"
						id="useCases"
						role="tablist"
					>
						<li
							className="nav-item"
							role="presentation"
						>
							<button
								className="nav-link active"
								data-bs-toggle="tab"
								data-bs-target="#uc1"
								type="button"
							>
								industries
							</button>
						</li>
						<li
							className="nav-item"
							role="presentation"
						>
							<button
								className="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#uc2"
								type="button"
							>
								solutions
							</button>
						</li>
					</ul>
					<div
						className="tab-content"
						id="useCasesContent"
					>
						<div
							className="tab-pane fade show active"
							id="uc1"
						>
							<div className="inner_content">
								<Link to="/blog-details">
									<h2 className="sc_title text_gradient">
										E-commerce
									</h2>
									<div className="row row-cols-1 row-cols-2 g-0">
										<div className="col">
											<div className="img_wrapper">
												<Image
													src={require('../../../assets/images/uc-img-1.png')}
													alt=""
												/>
											</div>
										</div>
										<div className="col details_view">
											<p>
												Our client wanted to use AI to
												detect transit commuters from CC
												Camera footage (including
												fisheye lens) – their gender,
												posture, what they are carrying,
												whether they are wearing face
												masks, etc.
											</p>
											<p>
												<span>Year: </span>
												2018-2021
											</p>
											<p>
												<span>Tools used: </span>
												Supervisely, CVAT, Darwin by
												v7labs
											</p>
											<p>Challenges we faced:</p>
											<p>
												The project had a very tight
												deadline with a large dataset
												with loads of different labels
												on each image. We had to train
												and onboard new workers at an
												unprecedented rate, keeping our
												promised quality in mind. The
												team sprinted day and night and
												delivered 99%+ accuracy in a
												quick three week turnaround.
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="inner_content">
								<Link to="/blog-details">
									<h2 className="sc_title text_gradient">
										Retail
									</h2>
									<div className="row row-cols-1 row-cols-2 g-0">
										<div className="col details_view">
											<p className="text">
												Our client wanted to annotate 3D
												microscopic images of nuclei of
												neurons (with segmentation) and
												trace the dendrites with 3D
												lines. They evaluated 7
												different vendors for the
												project… and we’re happy to say
												that we Abelling was chosen as
												the preferred workforce partner!
											</p>
											<p className="text">
												<span>Year: </span>
												2020
											</p>
											<p className="text">
												<span>Tools used: </span>
												WebKNOSSOS
											</p>
											<p className="text">
												Challenges we faced: The
												specialized nature & complexity
												of the project meant that
												typical annotators would not
												suffice. Thankfully, we were
												able to source & train
												subject-matter experts from
												university students of Life
												Science subjects and Doctors at
												a competitive rate.
											</p>
											<p className="text">
												The project was successful with
												5 fold redundancy and we are
												proud to have contributed in
												development of the solution for
												the client.
											</p>
										</div>
										<div className="col">
											<div className="img_wrapper">
												<Image
													src={require('../../../assets/images/uc-img-2.png')}
													alt=""
												/>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
						<div
							className="tab-pane fade"
							id="uc2"
						>
							<div className="inner_content">
								<Link to="/blog-details">
									<h2 className="sc_title text_gradient">
										E-commerce
									</h2>
									<div className="row row-cols-1 row-cols-2 g-0">
										<div className="col">
											<div className="img_wrapper">
												<Image
													src={require('../../../assets/images/uc-img-1.png')}
													alt=""
												/>
											</div>
										</div>
										<div className="col details_view">
											<p>
												Our client wanted to use AI to
												detect transit commuters from CC
												Camera footage (including
												fisheye lens) – their gender,
												posture, what they are carrying,
												whether they are wearing face
												masks, etc.
											</p>
											<p>
												<span>Year: </span>
												2018-2021
											</p>
											<p>
												<span>Tools used: </span>
												Supervisely, CVAT, Darwin by
												v7labs
											</p>
											<p>Challenges we faced:</p>
											<p>
												The project had a very tight
												deadline with a large dataset
												with loads of different labels
												on each image. We had to train
												and onboard new workers at an
												unprecedented rate, keeping our
												promised quality in mind. The
												team sprinted day and night and
												delivered 99%+ accuracy in a
												quick three week turnaround.
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="inner_content">
								<Link to="/blog-details">
									<h2 className="sc_title text_gradient">
										Retail
									</h2>
									<div className="row row-cols-1 row-cols-2 g-0">
										<div className="col details_view">
											<p className="text">
												Our client wanted to annotate 3D
												microscopic images of nuclei of
												neurons (with segmentation) and
												trace the dendrites with 3D
												lines. They evaluated 7
												different vendors for the
												project… and we’re happy to say
												that we Abelling was chosen as
												the preferred workforce partner!
											</p>
											<p className="text">
												<span>Year: </span>
												2020
											</p>
											<p className="text">
												<span>Tools used: </span>
												WebKNOSSOS
											</p>
											<p className="text">
												Challenges we faced: The
												specialized nature & complexity
												of the project meant that
												typical annotators would not
												suffice. Thankfully, we were
												able to source & train
												subject-matter experts from
												university students of Life
												Science subjects and Doctors at
												a competitive rate.
											</p>
											<p className="text">
												The project was successful with
												5 fold redundancy and we are
												proud to have contributed in
												development of the solution for
												the client.
											</p>
										</div>
										<div className="col">
											<div className="img_wrapper">
												<Image
													src={require('../../../assets/images/uc-img-2.png')}
													alt=""
												/>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ContactUs />
		</>
	);
}

export default UseCases;
