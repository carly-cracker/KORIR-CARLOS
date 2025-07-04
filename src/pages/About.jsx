import React from 'react';

function About() {
  return (
    <section className="py-12 pt-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex flex-row-reverse items-center justify-center">
            <img src="/WhatsApp Image 2025-04-30 at 2.53.10 PM.jpeg" alt="Your Photo" className="rounded-full w-50 h-50 mx-4" />
            <div>
              <h1 className="text-4xl font-bold mb-2">I'm Korir Carlos, a Software Developer.</h1>
              <p className="text-lg mb-4">I am a Kenyan-based software developer with a focus on web development, deployment, and monitoring. I have a diverse range of experience having worked across various fields and industries.</p>
              <p className="text-lg">I specialize in web development projects, where I continuously expand my skills and knowledge. My passion for learning drives me to explore new technologies and best practices, ensuring I stay at the forefront of the rapidly evolving web landscape.</p>
              <a href="/contact" className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 mt-4 inline-block">Get in Touch 📧</a>
            </div>
          </div>
        </div>

        {/* Experience and Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <p className="text-orange-500">2025-present</p>
                <h3 className="text-lg font-medium">Frontend Developer</h3>
                <p className="text-gray-400">SafariDesk</p>
              </div>
              <div>
                <p className="text-orange-500">2025 - present</p>
                <h3 className="text-lg font-medium">fullstack web developer</h3>
                <p className="text-gray-400">Safaridesk</p>
              </div>
              <div>
                <p className="text-orange-500">2025 - present</p>
                <h3 className="text-lg font-medium">fullstack web developer</h3>
                <p className="text-gray-400">Freelance</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="text-orange-500">2025 - present</p>
                <h3 className="text-lg font-medium">Bachelor of software Engineering</h3>
                <p className="text-gray-400">Moringa School</p>
              </div>
              <div>
                <p className="text-orange-500">2019 - 2022</p>
                <h3 className="text-lg font-medium">Higher Secondary Education</h3>
                <p className="text-gray-400">St Joseph's Boys Kitale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;