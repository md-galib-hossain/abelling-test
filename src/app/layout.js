

import RootLayoutPage from '@/components/Partials/Layouts/RootLayout';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import './page.css';

export const metadata = {
	title: 'Abelling | Home',
	description: 'Your website description here for better SEO',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-PFPTDJD09B"
					strategy="afterInteractive"
				/>
				<Script id="google-tag-manager" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-PFPTDJD09B');
					`}
				</Script>
			</head>
			<body className="custom-body-class">
				<RootLayoutPage>{children}</RootLayoutPage>
				<Script
					id="hotjar-tracking"
					strategy="lazyOnload" // Lazy load Hotjar to improve LCP
				>
					{`
						(function(h,o,t,j,a,r){
							h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
							h._hjSettings={hjid:3486127,hjsv:6};
							a=o.getElementsByTagName('head')[0];
							r=o.createElement('script');r.async=1;
							r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
							a.appendChild(r);
						})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
					`}
				</Script>
			</body>
		</html>
	);
}
