import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';
import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionFive from '../Components/SectionFive';
import React from "react";

const Content = () => {
    return (
        <>
            <About />

            <SectionFive />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;