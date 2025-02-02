// import { CASE_STUDIES } from '@/Utilities/APIs';
// import CaseStudies from '@/components/Screens/case-studies/CaseStudies';
// import axios from 'axios';
// const getData = async () => {
// 	try {
// 		const { data } = await axios.get(CASE_STUDIES);
// 		return data ?? [];
// 	} catch (error) {
// 		return [];
// 	}
// };
// const page = async () => {
// 	const caseStudies = await getData();
// 	return <CaseStudies works={caseStudies} />;
// };

// export default page;

import { CASE_STUDIES } from '@/Utilities/APIs';
import CaseStudies from '@/components/Screens/case-studies/CaseStudies';
import axios from 'axios';
import { getData } from '../page';
// const getData = async () => {
// 	try {
// 		const { data } = await axios.get(CASE_STUDIES);
// 		return data ?? [];
// 	} catch (error) {
// 		return [];
// 	}
// };
const page = async () => {
	const {homepage} = await getData();
	return <CaseStudies works={homepage?.caseStudies} contacts={homepage?.contacts}/>;
};

export default page;
