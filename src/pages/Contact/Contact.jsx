// Contact.js
import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Button from '../../components/Button';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Message sent successfully!'); // Set pesan sukses
    e.target.reset(); // Reset form setelah pengiriman

    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <div id='contact' className='container mx-auto py-10 px-1'>
      <div className='flex flex-col items-center p-6 bg-bg-primary rounded-lg shadow-lg w-full max-w-4xl mx-auto border-2 border-black'>
        <h2 className='text-3xl font-semibold mb-8 text-gray-800'>Get in Touch</h2>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full'>
          {/* Form: mengambil 3/4 bagian */}
          <form onSubmit={handleSubmit} className='col-span-3 flex flex-col space-y-4'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='w-full px-4 py-2 rounded-md border border-black focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-800'
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='w-full px-4 py-2 rounded-md border border-black focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-800'
            />
            <textarea
              name='message'
              placeholder='Your Message'
              required
              className='w-full px-4 py-2 rounded-md border border-black focus:border-none focus:outline-none focus:ring-2 focus:ring-gray-800 h-32 resize-none'
            ></textarea>
            <Button type='submit'>Send Message</Button>
            {successMessage && (
              <p className='mt-2 text-green-500'>{successMessage}</p> // Menampilkan pesan sukses
            )}
          </form>

          {/* Social Media Links: mengambil 1/4 bagian */}
          <div className='flex flex-col md:col-span-1 col-span-4 items-center md:items-start text-gray-800'>
            <p className='text-lg font-semibold mb-4'>Follow me on</p>
            <div className='flex gap-4 justify-center text-gray-500 mb-6'>
              <a
                href='https://www.linkedin.com/in/alfitra-raimahafiz-6332a7231/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin className='text-3xl text-blue-700 hover:text-blue-900 transition-colors' />
              </a>
              <a href='https://github.com/alfitrahafiz' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-3xl text-gray-800 hover:text-gray-600 transition-colors' />
              </a>
              <a
                href='https://instagram.com/alfitrahafiz_'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='text-3xl text-pink-500 hover:text-pink-700 transition-colors' />
              </a>
            </div>
            <p className='text-sm text-gray-500'>Feel free to reach out on any platform!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
