import React from "react";
import Navbar from "../Component/Home/Navbar";
import Banner from "../Component/Home/Banner";
import Service from "../Component/Home/Service";
import Features from "../Component/Home/Features";
import Testimonial from "../Component/Home/Testimonial";
import Proud from "../Component/Home/Proud";
import Contact from "../Component/Home/Contact";
import Footer from "../Component/Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Features />
      <Testimonial />
      <Proud />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
