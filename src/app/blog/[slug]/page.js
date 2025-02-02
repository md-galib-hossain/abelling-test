import { BLOGS_API, IMAGE_URL } from '@/Utilities/APIs';
import BlogDetails from '@/components/Screens/blog/BlogDetails';
import axios from 'axios';

export async function generateStaticParams() {
	const { data } = await axios.get(BLOGS_API);
	return data.map((data) => ({
		slug: data.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { data } = await axios.get(
		BLOGS_API + 'getSingleBlog/' + params?.slug
	);
	return {
		title: data?.name ? `${data?.name} | Abelling` : 'Abelling',
		description: data?.shortDescription ?? '',
		openGraph: {
			images: [IMAGE_URL + data?.image],
		},
	};
}

const getData = async (slug) => {
	try {
		const { data } = await axios.get(BLOGS_API + 'getSingleBlog/' + slug);
		return data ?? [];
	} catch (error) {
		return [];
	}
};

const page = async ({ params }) => {
	const data = await getData(params.slug);
	return <BlogDetails data={data} />;
};

export default page;
