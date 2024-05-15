import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import{ createLinks, fetchLink} from '../../actions';



const CreateLinks = ({link, createLinks}) => {


	
	useEffect(() => {
		if(link !== [] && link.inputValue && link.resultUrl) {
			createLinks(link.inputValue, link.resultUrl);
		}
    
  }, [link, createLinks]);

  
	
	return (
		<div>
			
		</div>
	)

}

const mapStateToProps = state => {
	return {
		link: state.shortenLink
	};
}


export default connect(mapStateToProps, {createLinks, fetchLink})(CreateLinks);


