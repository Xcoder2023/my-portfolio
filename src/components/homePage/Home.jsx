import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import Skillpage from "../skills/Skillpage";
import Projects from "../projects/Projects";
import About from "../aboutPage/About";
import Center from "../mobile/Center";
import NavBar from "../navbar/NavBar";
import WebTools from "../skills/WebTools";
import Footer from "../footer/Footer";
import ProfileSection from "./ProfileSection";

const Home = () => {
 
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setisLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spin className=" flex justify-center items-center py-96" />
      ) : (
        <>
          <NavBar />
          <div>
            <ProfileSection />
          </div>
          <div className="lg:hidden block">
            <Center />
          </div>
          <div id="about">
            <About />
          </div>
        </>
      )}
      <div id="skills" className="hidden lg:block">
        <WebTools />
      </div>
      <div>
        <Skillpage />
      </div>
      <div id="projects" className="hidden lg:block">
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
