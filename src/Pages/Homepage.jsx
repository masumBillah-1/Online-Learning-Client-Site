import React from 'react';
import Banner from '../components/Banner';
import PopularCourses from './PopularCourses';
import WhyChooseUs from './WhyChooseUs';
import TopInstructors from './TopInstructors';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from '../components/Testimonials';
import { useLoaderData } from 'react-router';

const Homepage = () => {


    const coursedata = useLoaderData()





    return (
        <>

        <title>EduWave - Home</title>



            <Banner></Banner>
            <PopularCourses coursedata={coursedata}></PopularCourses>

            <WhyChooseUs></WhyChooseUs>

            <FeaturedCourses></FeaturedCourses>
            <Testimonials></Testimonials>
            <TopInstructors></TopInstructors>




            
        </>
    );
};

export default Homepage;