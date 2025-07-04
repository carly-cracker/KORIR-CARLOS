import React from 'react';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBootstrap,
  
} from 'react-icons/fa';
import {
  SiFlask,
  SiTailwindcss,
  SiTypescript,
  SiDjango,
  SiPostgresql,
  SiSqlalchemy,
  SiThunderstore,
} from 'react-icons/si'; // thunderclient placeholder

import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Home() {
  const projects = [
    {
      title: 'GoJourney',
      desc: 'Trip advisory community',
      img: '/Screenshot from 2025-07-04 10-58-18.png',
      link: 'https://gojourney-ozj4.onrender.com/'
    },
    {
      title: 'Eventify',
      desc: 'Event management app',
      img: '/Screenshot from 2025-07-04 11-03-55.png',
      link: 'https://event-booking-app-inky.vercel.app/'
    },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen pt-24 px-4">
      {/* Top Profile Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
        {/* Left Profile Card */}
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow">
          <img
            src="/WhatsApp Image 2025-04-30 at 2.53.10 PM.jpeg"
            alt="Profile"
            className="w-28 h-28 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">Carlos Korir</h2>
          <p className="text-gray-400 mb-4">Software Developer based in Kenya.</p>
          <div className="flex space-x-3">
            <a
              href="https://linkedin.com/in/carlos-korir-82808135b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://github.com/carly-cracker" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>

        {/* Center Bio Card */}
        <div className="md:col-span-2 bg-gray-900 rounded-xl p-6 shadow">
          <p className="text-sm text-gray-400 mb-2">Hello There 👋</p>
          <h1 className="text-3xl font-bold mb-4">
            I’m Carlos, a Software Developer. Mostly works on web technologies.
          </h1>
          <p className="text-green-400 font-medium mb-4">✅ Available for Projects</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto mt-12 bg-gray-900 rounded-xl p-6 shadow overflow-hidden">
        <h2 className="text-xl font-semibold mb-4 text-center">TechStack I Worked With</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 animate-scroll-x w-max text-4xl items-center">
            {/* Tech Icons - Repeat for smooth loop */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <FaHtml5 className="text-orange-500" title="HTML5" />
                <FaCss3Alt className="text-blue-500" title="CSS3" />
                <FaJs className="text-yellow-300" title="JavaScript" />
                <FaReact className="text-blue-400" title="React" />
                <FaPython className="text-yellow-400" title="Python" />
                <SiFlask className="text-white" title="Flask" />
                <SiTailwindcss className="text-cyan-400" title="TailwindCSS" />
                <FaBootstrap className="text-purple-500" title="Bootstrap" />
                <SiThunderstore className="text-pink-400" title="Thunder Client" />
                <SiDjango className="text-green-600" title="Django" />
                <SiTypescript className="text-blue-500" title="TypeScript" />
                <SiPostgresql className="text-blue-400" title="PostgreSQL" />
                <SiSqlalchemy className="text-red-400" title="SQLAlchemy" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Works & Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow overflow-hidden">
              <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.desc}</p>
                <a
                  href={proj.link}
                  className="bg-orange-500 px-4 py-2 text-white rounded hover:bg-orange-600 transition"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
                  href='/projects'
                  className="bg-orange-500 px-2 py-2 text-white rounded hover:bg-orange-600 transition"
                >
                  View More
                </a> 
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Are you ready to work with me on a project?
        </h2>
        <Link
          to="/contacts"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition inline-block"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
