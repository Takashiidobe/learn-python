import React from 'react';
import LazyLoad from 'react-lazyload';

const Trinket = ({ src, consoleOnly, runOnly }) => {
	let url;
	if (!src.includes('embed')) {
		url = src.split('https://trinket.io');
		url[0] = 'https://trinket.io/embed';
		url = url.join('');
	} else {
		url = src;
	}

	if (consoleOnly === true) {
		url += '?runOption=console';
	}

	if (runOnly === true) {
		url += '?runOption=run';
	}
	return (
		<LazyLoad>
			<iframe
				src={url}
				title={src}
				width="100%"
				height="356"
				frameBorder="0"
				marginWidth="0"
				marginHeight="0"
				allowFullScreen
			/>
		</LazyLoad>
	);
};

export default Trinket;
