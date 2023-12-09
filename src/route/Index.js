import React from 'react'
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Projects from '../components/projects/Projects';
import Skillpage from '../components/skills/Skillpage';

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skillpage />} />
      </Routes>
    </>
  )
}

export default Index