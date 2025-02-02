import { BLOGS_API } from '@/Utilities/APIs';
import Blog from '@/components/Screens/blog/Blog';
import axios from 'axios';
const getData = async () => {
	try {
		const { data } = await axios.get(BLOGS_API);
		return data ?? [];
	} catch (error) {
		return [];
	}
};
const page = async () => {
	const blogs = await getData();
	return <Blog blogs={blogs} />;
};

export default page;
