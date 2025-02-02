import ScrollTop from '@/components/ScrollTop';
import { ToastContainer } from 'react-toastify';
// import Footer from '../Sections/footer/Footer';
import Menu from '../Sections/navbar/Menu';
import FooterData from '../Sections/footer/FooterData';

const RootLayoutPage = ({ children }) => {
	return (
		<>
			<ScrollTop />
			<Menu />
			{children}
			<FooterData />
			<ToastContainer />
		</>
	);
};

export default RootLayoutPage;
