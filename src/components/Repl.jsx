import React from 'react';
import LazyLoad from 'react-lazyload';

const Repl = ({ src }) => {
	if (!src) src = 'https://repl.it/languages/python3';
	return (
		<LazyLoad>
			<iframe
				height="400px"
				width="100%"
				src={src}
				scrolling="no"
				frameBorder="no"
				allowTransparency="true"
				allowFullScreen="true"
				sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
			/>
		</LazyLoad>
	);
};

export default Repl;