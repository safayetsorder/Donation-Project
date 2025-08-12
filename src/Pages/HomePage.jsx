import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import AboutSection from '../Components/AboutSection/AboutSection';
import HowItWorksSection from '../Components/HowItWorksSection/HowItWorksSection';
import Extra from '../Components/Extra/Extra';
const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <HowItWorksSection></HowItWorksSection>
            <Extra></Extra>
        </div>
    );
};

export default HomePage;