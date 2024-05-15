import React, {useEffect, useState} from 'react';



const ListLink = ({originLink, shortLink}) => {
	const [bgColor, setBgColor] = useState("");
	const [copyText, setCopyText] = useState("Copy");
	const [textColor, setTextColor] = useState("white");



	const renderList = () => {

		const onClick = e => {
		e.preventDefault();
		setBgColor("hsl(257, 27%, 26%)");
		setCopyText("Copied!");
		setTextColor("white");
		navigator.clipboard.writeText(shortLink);
	}

		
				
		return <>
			<hr className="links-line" />
			<p className="origin-link">{originLink}</p>
			<button type="button" className="btn link-button float-start float-md-end" style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{copyText}</button>
			<p className="shorten-link float-sm-start float-md-end">{shortLink}</p>
		</>
	};



	return ( 
		<div className="list-style">
		{renderList()}
		</div>
	)


}

export default ListLink;