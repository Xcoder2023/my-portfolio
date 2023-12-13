import React from 'react'
import Mobile from './Mobile';
import ReadMe from './about/ReadMe';
import Project from './project/Project'
import Skill from './skills/Skill';
import Contacts from './contact/Contacts';
import Footer from './footer/Footer';
import Experiences from './experiences/Experiences';


const Center = () => {
  return (
    <>
      <div>
      <Mobile />
      <ReadMe />
      <Project />
      <Experiences />
      <Skill />
      <Contacts />
      <Footer />
      </div>
    </>
  )
}

export default Center