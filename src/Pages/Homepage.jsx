import React from 'react';
import Banner from '../components/Banner';
import PopularCourses from './PopularCourses';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from '../components/Testimonials';

const Homepage = () => {
    return (
        <>



            <Banner></Banner>
            <PopularCourses></PopularCourses>

            <WhyChooseUs></WhyChooseUs>

            <FeaturedCourses></FeaturedCourses>
            <Testimonials></Testimonials>
            <TopInstructors></TopInstructors>




            
        </>
    );
};

export default Homepage;