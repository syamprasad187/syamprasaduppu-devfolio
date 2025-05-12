import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-indigo-950 text-indigo-900 dark:text-white shadow-md p-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-tight">Syam Prasad Uppu</div>
      <div className="flex items-center space-x-6 text-sm font-medium">
        <a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">About</a>
        <a href="#skills" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Skills</a>
        <a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Projects</a>
        <a href="#experience" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Experience</a>
        <a href="#education" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Education</a>
        <a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-300 transition">Contact</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
