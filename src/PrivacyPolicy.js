import React, { Component } from 'react';

class PrivacyPolicy extends Component {
	render() {
		return(
			<div
				className='privacy-policy'
			>
				<div
					className='title'
				>
					Privacy Policy
				</div>

				<div
					className='text'
				>
					PDFEdit wants you to feel totally comfortable using our site, so our privacy policy is very simple: when you use the PDFEdit, website, we will not intentionally collect any personally identifiable information, unless there is a clear opt-in to do so. 
				</div>

				<div
					className='subtitle'
				>
				Use of Communications
				</div>
				<div
					className='text'
				>
					We value and encourage open communications and welcome feedback on our service and website. Therefore if you decide to email us personally identifiable information (such as your name, email address, information about you or any other content that you may send to us) via our site, we may retain your communication and will only share its content with third parties if compelled to do so by competent courts. We won't spam you or sell this information.
				</div>

				<div
					className='subtitle'
				>
					Site Analytics
				</div>
				<div
					className='text'
				>
					PDFEdit does use a site analytics service that allows us to monitor how people are using our site. While this analytics software does track the IP address of a user, it does not associate that IP address with any other data on the site. We use this software purely to see where users of the site are coming from and to monitor site usage at various times of the day. All of this is so that we may provide enhanced services in the future.
				</div>


				<div
					className='subtitle'
				>
					Changes To This Privacy Policy
				</div>

				<div
					className='text'
				>
					PDFEdit is committed to protecting your privacy and we'll keep looking for new ways to do that. reserves the right to revise the policy as it sees fit from time to time. 
					PDFEdit
				</div>

			</div>
		);
	}
}

export default PrivacyPolicy;
