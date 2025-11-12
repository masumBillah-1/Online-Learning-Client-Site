import React from 'react';
import Banner from '../components/Banner';
import PopularCourses from './PopularCourses';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';
import FeaturedCourses from './FeaturedCourses';

const Homepage = () => {
    return (
        <>



            <Banner></Banner>
            <PopularCourses></PopularCourses>

            <WhyChooseUs></WhyChooseUs>

            <FeaturedCourses></FeaturedCourses>
            <TopInstructors></TopInstructors>




            
        </>
    );
};

export default Homepage;