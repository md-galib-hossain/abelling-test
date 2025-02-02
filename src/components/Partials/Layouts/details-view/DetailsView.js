import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IMAGE_URL } from '../../../../Utilities/APIs';
import ShareButton from '../ShareButton/ShareButtons';

function DetailsView({ singleItem }) {
	const pathname = usePathname();

	return (
		<section className="blog_details details_view pb-140 pmt-116">
			<div className="container">
				<h2 className="dv_title">{singleItem?.name}</h2>
				<div className="details_view_imgbox">
					<Image
						src={IMAGE_URL + singleItem?.image}
						alt="full-thumb"
						width="0"
						height="0"
						sizes="100vw"
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
				<ShareButton
					position="right"
					path={pathname}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: singleItem?.description,
					}}
					className="dv_rich_upload"
				/>
				<ShareButton path={pathname} />
			</div>
		</section>
	);
}

export default DetailsView;
