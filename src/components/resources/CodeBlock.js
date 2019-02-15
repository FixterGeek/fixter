import React from "react";
import PropTypes from "prop-types";
//import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dark } from "react-syntax-highlighter/dist/styles/prism";
import docco from "react-syntax-highlighter/dist/styles/hljs/docco";

export default class CodeBlock extends React.PureComponent {
	static propTypes = {
		value: PropTypes.string.isRequired,
		language: PropTypes.string
	};

	static defaultProps = {
		language: null
	};

	render() {
		const { language, value } = this.props;

		return (
			<SyntaxHighlighter style={dark} language={language}>
				{value}
			</SyntaxHighlighter>
		);
	}
}
