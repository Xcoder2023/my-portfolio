import React from 'react';

const WebToolS = () => {
  return (
    <section id='skills' className="skills-section w-[87%] mx-auto hidden lg:block py-8">
      <h2 className="text-2xl font-bold text-center mb-8 social legend-txt">Skills</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Technical Skills */}
        <div className="bg-white border border-[#1E3A8A] p-6 shadow-md rounded-md">
          <h3 className="text-xl text-center font-semibold mb-4 legend-txt">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className='text-[#1E3A8A]'>Frontend Development:</strong> Expertise in HTML, CSS, JavaScript, and TypeScript. Proficient with frameworks like React, Next.js, and Remix to build dynamic and responsive web applications.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>UI/UX Design:</strong> Adept at designing user-friendly interfaces using Figma, Adobe XD, and Tailwind CSS, ensuring accessibility and visual consistency.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Responsive Design:</strong> Skilled in creating mobile-first and cross-platform designs for seamless user experiences across devices.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Version Control & Collaboration:</strong> Proficient in Git for version control and GitHub for code management in team environments.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Testing & Debugging:</strong> Experienced with tools like Vitest, Jest, and Chrome DevTools to ensure code quality and resolve issues efficiently.
            </li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-white p-6 border border-[#1E3A8A] shadow-md rounded-md">
          <h3 className="text-xl text-center font-semibold mb-4 legend-txt">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className='text-[#1E3A8A]'>Problem-Solving:</strong> Capable of analyzing and addressing complex technical challenges with innovative solutions.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Collaboration:</strong> Effective team player in cross-functional environments, fostering communication and cooperation.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Adaptability:</strong> Quick to learn new technologies and frameworks to meet project demands.
            </li>
            <li>
              <strong className='text-[#1E3A8A]'>Communication:</strong> Strong ability to articulate ideas clearly to technical and non-technical audiences alike.
            </li>
          </ul>
        </div>

       
      </div>
    </section>
  );
};

export default WebToolS;
