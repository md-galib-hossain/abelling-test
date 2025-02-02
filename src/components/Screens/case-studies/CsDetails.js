'use client';

import DetailsView from '../../Partials/Layouts/details-view/DetailsView';
import Newsletter from '../../Partials/Layouts/newsletter/Newsletter';

function CsDetails({ data }) {
	return (
		<>
			<DetailsView singleItem={data} />
			<Newsletter />
		</>
	);
}

export default CsDetails;
