import { TEAMS_API } from '@/Utilities/APIs';
import AboutUs from '@/components/Screens/about-us/AboutUs';
import axios from 'axios';

const getData = async () => {
	try {
		const { data } = await axios.get(TEAMS_API);
		return data ?? [];
	} catch (error) {
		return [];
	}
};

const page = async () => {
	const teams = await getData();
	return <AboutUs teams={teams} />;
};

export default page;
