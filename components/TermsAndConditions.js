import React, { useContext } from 'react'
import Link from "next/link";


import AuthContext from "../context/AuthContext";


const TermsAndConditions = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<main className="pt_wrap">
				<section className="pt_container">
					<div className="pt_container__heading">
						<h2>Terms & Conditions</h2>
					</div>
					<div className="pt_container__content">
						<p>
							Welcome to Global Access Immigration Agency (GAIA). By using our services, you agree to be bound by
							the following Terms and Conditions. Please read them carefully:
						</p>

						<h3>Eligibility:</h3>
						<p>
							You must be at least 18 years old or have parental consent to use our services. By accessing and using
							our website, you affirm that you meet the eligibility criteria.
						</p>
						<hr />

						<h3>Job and Scholarship Listings:</h3>
						<p>
							While we strive to provide accurate and up-to-date information, we do not guarantee the availability
							of specific job opportunities or scholarships. The availability of positions and scholarships is subject
							to change and is at the discretion of respective employers and institutions.
						</p>
						<hr />

						<h3>Personal Responsibility:</h3>
						<p>
							While we provide support and guidance, the responsibility for the accuracy of the information
							provided in resumes, applications, and personal statements lies with the individual users.
						</p>
						<hr />

						<h3>Third-Party Content:</h3>
						<p>
							Our website may include content from third-party sources. We do not endorse or take responsibility
							for the accuracy or reliability of such content.
						</p>
						<hr />

						<h3>Modifications to Terms and Conditions:</h3>
						<p>
							We reserve the right to modify or update these Terms and Conditions at any time. By continuing to
							use our services after any changes, you agree to be bound by the updated Terms and Conditions.
						</p>
						<hr />

						<h3></h3>
						<p></p>
						<hr />

						<h3>Application Process:</h3>
						<p>
							Applying for job opportunities or scholarships through our platform does not guarantee selection or acceptance.
							The application process involves multiple stages, and the final decision lies with the employing organizations
							or scholarship committees.
						</p>
						<hr />

						<h3>Payment</h3>
						<p>
							Payment for our services does not guarantee job placement or scholarship acceptance.
							The fees charged cover administrative costs, personalized support, and access to our network of
							opportunities. Refunds are not provided once the service has been rendered.
						</p>
						<hr />
					</div>
					{!user && (

						<div className="pt_container__nav">
							<small>By registering an account with us you are agreeing to our terms and conditions.</small>
							<Link className="pt_button" href="/register">
								Sign Up
							</Link>
						</div>
					)}

				</section>
			</main>
		</div>
	)
}

export default TermsAndConditions