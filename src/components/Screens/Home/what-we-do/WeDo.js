// import './we-do.css'
import Head from 'next/head';
import ServicePreview from './ServicePreview/ServicePreview';

function WeDo({ services }) {
	return (
		<>
		 <Head>
        <title>Abelling - What We Do</title>
        <meta
          name="description"
          content="Explore the diverse range of services and use cases offered by Abelling. Discover how we solve complex challenges for businesses with innovative solutions."
        />
      </Head>
		<section
			className="wwd_section pt-100 pb-140"
			id="wedo"
		>
			<div className="container">
				<div className="sc_hd_box">
					<h6 className="sc_sub_title">use cases</h6>
					<h1 className="sc_title">What we do</h1>
				</div>
				<div className="contents_wrapper">
					{services?.map((service) => (
						<ServicePreview
							service={service}
							key={service._id}
						/>
					))}
				</div>
			</div>
		</section>
		</>
	);
}

export default WeDo;
