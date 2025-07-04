import React from 'react';

function Works() {
  const projects = [
    { title: 'GoJourney', desc: 'Trip advisory community', img: '/Screenshot from 2025-07-04 10-58-18.png', link: 'https://gojourney-ozj4.onrender.com/' },
    { title: 'Eventify', desc: 'Event management app', img: '/Screenshot from 2025-07-04 11-03-55.png', link: 'https://event-booking-app-inky.vercel.app/' },
    { title: 'SB-s Store and Guides', desc: 'E-commerce platform for thrift items', img: '/Screenshot from 2025-07-04 11-00-52.png', link: 'https://s-bs-stores-and-guides.vercel.app/' },
    { title: 'Customer Support Portal', desc: 'Web app for managing customer tickets', img: '/Screenshot from 2025-07-04 11-05-41.png', link: 'https://customer-portal-gray.vercel.app/' },
    // Add more projects as needed
  ];

  return (
    <section className="py-12 pt-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Works & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.desc}</p>
                <a href={proj.link} className="text-orange-500 hover:underline">live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;