import React from 'react';
import Header from './Header';
import MainContent from './sections/MainContent';
import InfoSection from './sections/InfoSection';
import LinksInfoSection from './sections/LinksInfoSection';
import Footer from './sections/Footer';

const Home = () => {
	return (
		<div> 
			<Header />
			<MainContent />
			<InfoSection />
			<LinksInfoSection />
			<Footer />
		</div>
	)
}

export default Home;