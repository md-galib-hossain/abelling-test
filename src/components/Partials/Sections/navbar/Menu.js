// 'use client';
// import { SERVICES } from '@/Utilities/APIs';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import LargeMenu from './LargeMenu';
// import MobileMenu from './MobileMenu';
// import './menu.css';

// function Menu() {
// 	const [services, setServices] = useState([]);
// 	useEffect(() => {
// 		async function getServices() {
// 			const { data } = await axios.get(SERVICES);
// 			setServices(data);
// 		}
// 		getServices();
// 	}, []);
// 	return (
// 		<div className="main_navbar">
// 			<LargeMenu services={services} />
// 			<MobileMenu services={services} />
// 		</div>
// 	);
// }

// export default Menu;


import { SERVICES } from '@/Utilities/APIs';
import axios from 'axios';
import LargeMenu from './LargeMenu';
import MobileMenu from './MobileMenu';
import './menu.css';
import { getData } from '@/app/page';

async function Menu() {
	
			const {  homepage } = await getData();

			
	return (
		<div className="main_navbar">
			<LargeMenu services={homepage?.services} />
			<MobileMenu services={homepage?.services} />
		</div>
	);
}

export default Menu;
