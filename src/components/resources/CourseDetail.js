import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mark.css";
import CodeBlock from "./CodeBlock";

const ReactMarkdown = require("react-markdown");

export default function(props) {
	let [slug, setSlug] = useState("BlisS");
	let [md, setMd] = useState(null);
	useEffect(() => {
		console.log("fetching the course id ", props.match.params.slug);
		axios
			.get(
				// "https://api.github.com/repos/fixtergeek/ReactHooks-Firebase/contents/JavaScript basic Types  - Conditional statements.md",
				`https://api.github.com/repos/fixtergeek/${
					props.match.params.slug
				}/contents`,
				{
					auth: {
						username: "hectorbliss",
						password: "Poweroso77"
					}
				}
			)
			.then(res => {
				console.log(res.data);
				setSlug(res.data[3].name);
				return axios(res.data[3].download_url);
				//setMd(res.data[0].download_url);
				//location.replace(res.data[0].download_url);
			})
			.then(raw => {
				setMd(raw.data);
			});
	}, []);
	return (
		<div style={{ padding: 100 }}>
			<h1>{slug}</h1>
			<section className="mark-container">
				<ReactMarkdown
					source={md}
					renderers={{
						code: CodeBlock
					}}
				/>
				,
			</section>
		</div>
	);
}
