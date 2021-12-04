import React from "react";
import { skills } from "../projects";



function Skills() {
  return (
    <section id="skills" className="">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto inline-block w-10 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 7H7v6h6V7z" />
            <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
          </svg>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Skills &amp; Technologies</h1>
          <p></p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700 hover:text-white rounded text-lg">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;