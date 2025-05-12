import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('https://syamprasaduppu-devfolio.onrender.com/api/contact', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center mx-auto">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="block w-full mb-4 px-4 py-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="block w-full mb-4 px-4 py-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="block w-full mb-4 px-4 py-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-indigo-700 text-white px-6 py-2 rounded hover:bg-indigo-900 transition">Submit</button>
        {status && <div className="mt-4 text-center">{status}</div>}
      </form>
    </section>
  );
}