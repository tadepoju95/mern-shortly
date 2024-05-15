import React from 'react';


const MainContent = () => {
  
return (
	<section className="first_section text-center text-md-start">
      <div className="container d-flex flex-column-reverse flex-md-row first_section_text-image">
        <div className="firstSection-text-button">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button
              className="btn get-started-btn rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#enroll">
              Get Started
          </button>
        </div>
          <img className="working-illustration" src="images/illustration-working.svg" alt="person at computer working"/>
      </div>
  </section>
);


}

export default MainContent;

