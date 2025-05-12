import React, { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        I am a B.Tech (CSE) student at Koneru Lakshmaiah Education Foundation (CGPA: 9.27), passionate about software engineering, full-stack development, and cloud technologies. I enjoy building scalable, efficient software and collaborating in agile teams.
      </p>

      {/* Resume Link */}
      <p className="mt-4">
        Feel free to get in touch or view my resume to learn more about my qualifications:
      </p>
      <button 
        onClick={openModal} 
        className="mt-4 inline-block py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        View My Resume
      </button>

      {/* Modal - Only visible if isModalOpen is true */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-3/4 max-w-4xl relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900"
            >
              X
            </button>
            <h3 className="text-xl font-bold mb-4">My Resume</h3>
            <iframe
              src="/Syam_Prasad_Uppu_Resume.pdf"
              width="100%"
              height="600"
              className="border-0"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}