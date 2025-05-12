import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 to-indigo-500 text-white py-16 text-center" id="hero">
      {/* Profile Image */}
      <img 
        src="/syamprasaduppu.jpg"
        alt="Syam Prasad" 
        className="w-32 h-33 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
      />

      {/* Name and Title */}
      <h1 className="text-5xl font-bold mb-4">Uppu Syam Prasad</h1>
      <p className="text-xl mb-4">Final Year Student | Software Engineer | B.Tech CSE | Full Stack & Cloud Enthusiast</p>

      {/* Social Links */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a href="https://github.com/syamprasad187" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/syam-prasad-uppu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:syamuppu05@gmail.com" className="flex items-center space-x-1 hover:underline">
          <Mail size={20} />
          <span>Email</span>
        </a>
        <div className="flex items-center space-x-1">
          <Phone size={20} />
          <span>+91-9573905893</span>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-2xl mx-auto">
        I am a final-year Computer Science Engineering student with a strong interest in software engineering. 
        Excited to apply my skills in full-stack development and cloud technologies to contribute to innovative, 
        scalable, and efficient software solutions.
      </p>
    </section>
  );
}
