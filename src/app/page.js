
import Home2 from "@/components/Screens/Home/Home2";
import {  HOME_PAGE, } from "@/Utilities/APIs";

export const getData = async () => {
//   const { data: blogData } = await axios.get(BLOGS_API);
//   const { data: serviceData } = await axios.get(SERVICES);
//   const { data: caseStudies } = await axios.get(CASE_STUDIES);
  const res = await fetch(HOME_PAGE);
  const  homepageData  = await res.json();
  
  return {

    homepage: homepageData,
  };
};

const page = async () => {
  const {  homepage } = await getData();
  return (
    <>
      {/* <Home
			blogs={homepage.blogs}
			caseStudies={homepage.cases}
			services={homepage.services}
		/> */}
      <Home2 blogs={homepage?.blogs} caseStudies={homepage?.caseStudies} services={homepage?.services} testimonials={homepage?.testimonials} contacts={homepage?.contacts} sliders={homepage?.sliders}/>
    </>
  );
};

export default page;


