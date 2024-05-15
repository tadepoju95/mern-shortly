import React from 'react';


const LinksInfoSection = () => {

return (
	<section className="third_section text-center" style={{backgroundImage: 'url("/images/bg-boost-mobile.svg")', backgroundRepeat: 'no-repeat',   backgroundSize: 'cover', backgroundPosition: 'center'}}>
		<div className="container">
			<div className="third_section_text_button">
          		<h2 className="text-white">Boost your links today</h2>
			    <button
			        className="btn get-started-btn rounded-pill"
			        data-bs-toggle="modal"
			        data-bs-target="#enroll">
			            Get Started
			    </button>
        	</div>
		</div>
	</section>
)

}

export default LinksInfoSection;