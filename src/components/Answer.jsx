import React from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import vs from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';

SyntaxHighlighter.registerLanguage('python', python);

const Answer = ({ summary, children }) => (
	<details>
		<summary>{summary}</summary>
		<SyntaxHighlighter language="python" style={vs}>
			{children}
		</SyntaxHighlighter>
	</details>
);

export default Answer;
