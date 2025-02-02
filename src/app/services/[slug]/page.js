import { DATA_TYPES_API, OPERATIONS, SERVICES } from '@/Utilities/APIs';
import Services from '@/components/Screens/services/Services';
import axios from 'axios';

export async function generateStaticParams() {
	const { data } = await axios.get(SERVICES);
	return data.map((data) => ({
		slug: data._id,
	}));
}

export async function generateMetadata({ params }) {
	const { data: services } = await axios.get(
		SERVICES + 'getSingleService/' + params.slug
	);
	return {
		title: services?.name ? `${services?.name} | Abelling` : 'Abelling',
		description: services?.shortDescription ?? '',
	};
}

const getData = async (serviceId) => {
	try {
		const { data: dataTypes } = await axios.get(DATA_TYPES_API);

		const { data: operations } = await axios.get(
			OPERATIONS + 'getOperationsFromService/' + serviceId
		);
		const { data: services } = await axios.get(
			SERVICES + 'getSingleService/' + serviceId
		);

		return {
			dataTypes: dataTypes ?? [],
			operations: operations ?? [],
			serviceName: services?.name ?? '',
			longDescription: services?.longDescription ?? '',
		};
	} catch (error) {
		return {
			dataTypes: [],
			operations: [],
			serviceName: '',
			longDescription: '',
		};
	}
};

const page = async ({ params }) => {
	const data = await getData(params.slug);
	return <Services {...data} />;
};

export default page;
