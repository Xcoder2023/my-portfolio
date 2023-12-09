import React from 'react'
import Mobile from './Mobile'
import ReadMe from './about/ReadMe'
import Project from './project/Project'
import Skill from './skills/Skill'
import Contacts from './contact/Contacts'
import Footer from './footer/Footer'


const Center = () => {
  return (
    <>
      <div className=' xl:hidden'>
      <Mobile />
      <ReadMe />
      <Project />
      <Skill />
      <Contacts />
      <Footer />
      </div>
    </>
  )
}

export default Center