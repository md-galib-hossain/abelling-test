'use client';
import BlogCard from '../../Partials/Layouts/cards/BlogCard';
import Hero from '../../Partials/Layouts/hero/Hero';
import Newsletter from '../../Partials/Layouts/newsletter/Newsletter';

import LoadingJson from './BlogLottie.json';

function Blog({ blogs }) {
	return (
		<>
			<Hero
				title="SO YOU CAN FOCUS..."
				colorTitle="TRAINING DATA TO US"
				text="Stay updated with the latest developments in AI and the machine learning world."
				imgSrc={LoadingJson}
			/>
			<section className="blog_section pb-140">
				<div className="container">
					<div className="blog_cards_wrapper">
						{blogs?.map((data, index) => (
							<BlogCard
								blogData={data}
								key={index}
							/>
						))}
					</div>
				</div>
			</section>
			<Newsletter />
		</>
	);
}

export default Blog;
