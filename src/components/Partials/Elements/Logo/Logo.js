import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../../../assets/images/footer-logo.svg';

function Logo() {
	return (
		<Link href="/">
			<Image
				src={LogoImg}
				alt="logo"
				width="0"
				height="0"
				sizes="100vw"
				style={{ width: '100%', height: 'auto' }}
			/>
		</Link>
	);
}

export default Logo;
