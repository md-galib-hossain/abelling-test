// import Image from 'next/image';
// import Link from 'next/link';
// import { IMAGE_URL } from '../../../../Utilities/APIs';

// function BlogCard({ blogData }) {
// 	return (
// 		<div className="blog_card">
// 			<div className="thumb">
// 				<Link href={`/blog/${blogData.slug}`}>
// 					<Image
// 						src={IMAGE_URL + blogData.image}
// 						alt="blog"
// 						width="0"
// 						height="0"
// 						sizes="100vw"
// 						style={{ width: '100%', height: 'auto' }}
// 					/>
// 				</Link>
// 			</div>
// 			<Link href={`/blog/${blogData.slug}`}>
// 				<h2 className="text_gradient">{blogData.name}</h2>
// 			</Link>

// 			<p className="text">{blogData.shortDescription}</p>
// 			<div className="meta_link">
// 				<Link href={`/blog/${blogData.slug}`}>Read more</Link>
// 				<span>{blogData.date}</span>
// 			</div>
// 		</div>
// 	);
// }

// export default BlogCard;

import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../../../../Utilities/APIs';

function BlogCard({ blogData }) {
	// Function to extract the first two words of the blog name
	const getShortenedTitle = (title) => {
		const words = title.split(' ');
		return words.length > 2 ? `${words[0]} ${words[1]}...` : title;
	};

	return (
		<div className="blog_card">
			<div className="thumb">
				<Link href={`/blog/${blogData.slug}`} aria-label={`Read more about ${blogData.name}`}>
					<Image
						src={IMAGE_URL + blogData.image}
						alt={`Thumbnail for ${blogData.name}`}
						width="0"
						height="0"
						sizes="100vw"
						style={{ width: '100%', height: 'auto' }}
					/>
				</Link>
			</div>
			<Link href={`/blog/${blogData.slug}`} aria-label={`Read more about ${blogData.name}`}>
				<h2 className="text_gradient">{blogData.name}</h2>
			</Link>

			<p className="text">{blogData.shortDescription}</p>
			<div className="meta_link">
				<Link href={`/blog/${blogData.slug}`}>
					Read more about {getShortenedTitle(blogData.name)}
				</Link>
				<span>{blogData.date}</span>
			</div>
		</div>
	);
}

export default BlogCard;
