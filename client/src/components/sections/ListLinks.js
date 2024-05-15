import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchAllLinks} from '../../actions';
import ListLink from './ListLink';




const ListLinks = ({fetchAllLinks, links}) => {

	
	
	
	useEffect(() =>{
		fetchAllLinks();

			
	}, [fetchAllLinks])

	
	const renderedLinks = links.map((link, index) =>  (

			
			<ListLink key={link._id} originLink={link.url} shortLink={link.shorturl} index={index} id={link._id} />
			

		)

	);



	return ( 
		<div className= "list-of-links d-flex flex-column">
		{renderedLinks}
		</div>
	)

}


const mapStateToProps = state => {
	return {
		links: state.theLinks
	};
}


export default connect(mapStateToProps, {fetchAllLinks})(ListLinks);