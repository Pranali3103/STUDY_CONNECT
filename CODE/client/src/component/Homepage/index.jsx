import React, {Fragment } from "react";
import Header from "../Header/Header.jsx";
import HeroSection from "../HeroSection/index.jsx";
import CompanySection from "../Company-Section/index";
import AboutUs from '../AboutUs/AboutUs.jsx';
import ChooseUs from '../Choose-Us/index.jsx';
import Courses from "../Courses-section/index.jsx";
import Features from "../Feature-section/index.jsx";
import Newsletter from "../Newsletter/index.jsx";
import Footer from "../Footer/index.jsx";
import Freecourses from "../Free-course/index.jsx";
import Testimonial from "../Testimonial/index.jsx";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUs />
      <Courses />
      <ChooseUs /> 
      <Features />
      <Freecourses />
      <Testimonial/>
      <Newsletter /> 
      <Footer />
    </Fragment>
  );
};

export default Home;
