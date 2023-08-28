import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_b0xjirx","template_85drv6w", e.target, "jAobx1AUXIYWm8a3w")
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className='text-white font-bold text-6xl'>Contact <span className="text-sky-400/100 text-7xl mt-8">Me</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className='mt-8'>
            <p className="mb-4 text-gray-300">Feel free to get in touch with me for any inquiries or collaborations.</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Email: ougomaureenakinyi@gmail.com</li>
              <li>Phone: (254) 743515249</li>
              <li>Location: Nairobi</li>
            </ul>
          </div>
          <div>
            {isMessageSent ? (
              <div className="text-green-500 font-semibold mb-4">
                Message sent successfully! Thank you for reaching out.
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4 space-y-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2" htmlFor="name">Name</label>
                    <input className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 bg-transparent shadow border-blue-400" type="text" id="name" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2" htmlFor="email">Email</label>
                    <input className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400 bg-transparent shadow border-blue-400" type="email" id="email" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 font-semibold mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full border rounded-lg py-2 px-3 h-32 resize-none focus:outline-none focus:border-blue-400 bg-transparent shadow border-blue-400" id="message"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
