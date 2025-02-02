import axios from 'axios';
import { useForm } from 'react-hook-form';
import { SUBCRIPTIONS } from '../../../../Utilities/APIs';

function Newsletter() {
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data, e) => {
		const response = await axios.post(SUBCRIPTIONS, data);
		if (response) {
			e.target.reset();
		}
	};

	return (
		<section className="newsletter">
			<div className="container">
				<div className="nwls_wrapper">
					<div className="nwls_content">
						<h2>
							Want to stay updated with the latest AI developments
							and blog posts aboutthe machine learning world?
						</h2>
						<p>Signup to our monthly newsletter!</p>
					</div>
					<div className="nwls_form_wrapper">
						<form
							className="nwls_form"
							onSubmit={handleSubmit(onSubmit)}
						>
							<input
								type="email"
								placeholder="Enter your email"
								{...register('email', { required: true })}
							/>
							<button
								type="submit"
								className="button border"
							>
								submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
