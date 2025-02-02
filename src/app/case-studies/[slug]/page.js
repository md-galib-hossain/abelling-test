import { CASE_STUDIES, IMAGE_URL } from '@/Utilities/APIs';
import CsDetails from '@/components/Screens/case-studies/CsDetails';
import axios from 'axios';

export async function generateStaticParams() {
	const { data } = await axios.get(CASE_STUDIES);
	return data.map((data) => ({
		slug: data.slug,
	}));
}

export async function generateMetadata({ params }) {
	const { data } = await axios.get(
		CASE_STUDIES + 'getSingleCaseStudy/' + params?.slug
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
		const { data } = await axios.get(
			CASE_STUDIES + 'getSingleCaseStudy/' + slug
		);
		return data ?? [];
	} catch (error) {
		return [];
	}
};

const page = async ({ params }) => {
	const data = await getData(params.slug);
	return <CsDetails data={data} />;
};

export default page;
