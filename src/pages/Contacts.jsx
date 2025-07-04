import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_s688vk2',     
      'template_l6j4vlc',    
      form.current,
      'eK57ai0iT-eFZlDn3'      
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };

  return (
    <section className="bg-gray-950 pt-20 text-white min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch with Me!</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Contact Info */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-md space-y-6">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold">Location:</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone:</p>
                <p>+254 799202039</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-orange-500 text-xl mt-1" />
              <div>
                <p className="font-semibold">Email Me:</p>
                <p>carlkorir226@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-md">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Write Your message"
                required
                className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 h-32 mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-200 flex items-center justify-center"
              >
                Send Me Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="text-sm text-gray-400 text-center py-6 border-t border-gray-800">
        <p>
          Copyright &copy;2025, <span className="text-orange-500 font-semibold">Korir Carlos</span> All Rights Reserved.
        </p>
        <p>
          Developed with <span className="text-red-500">❤️</span> by Korir Carlos
        </p>
      </footer>
    </section>
  );
}

export default Contact;
