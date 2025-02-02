import Image from 'next/image';
import './wca-card.css';

function WcaCard({ wcadata }) {
	return (
		<div className="wca_card">
			<Image
				src={wcadata.Icon}
				alt="icon"
				width="0"
				height="0"
				sizes="100vw"
				style={{ width: 'auto', maxHeight: '7.5rem' }}
			/>
			<h2 className="text_gradient">{wcadata.Title}</h2>
			<p>{wcadata.desc}</p>
		</div>
	);
}

export default WcaCard;
