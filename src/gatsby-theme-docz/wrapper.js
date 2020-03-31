import * as React from 'react';
import { Helmet } from 'react-helmet-async';

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => {
	return (
		<React.Fragment>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content="Learn Python now" />
				<link
					rel="icon"
					type="image/svg"
					href="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
				/>
			</Helmet>
			{children}
		</React.Fragment>
	);
};

export default Wrapper;
