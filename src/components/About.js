import React from "react";

function About(){
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey There!!! This is Shaunak
                        <br className="hidden lg:inline-block" />Web Development Enthusiast
                    </h1>
                    <p></p>
                    <div className="flex justify-center">
                    <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Work With Me</a>
                    <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Sneak Peak into my Projects</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;