import React from 'react';

const projects = [
  {
    title: "Campus Recruitment Management System",
    description: "A scalable recruitment solution developed with the MERN stack for efficient hiring.",
    bullets: [
      "Implemented secure authentication using JWT and bcrypt for user management.",
      "Designed a 50+ component React.js UI, improving load times by 30% with Redux."
    ],
    tech: ["React", "Redux", "Bootstrap", "Node.js", "MongoDB", "JWT", "bcrypt", "REST APIs", "Microservices"]
  },
  {
    title: "AgroMart",
    description: "A Spring Boot-based agri-commerce platform connecting farmers to global buyers.",
    bullets: [
      "Optimized filtering, order management, and inventory tracking, boosting transaction efficiency by 50%.",
      "Integrated real-time messaging and notifications, increasing user satisfaction by 35%."
    ],
    tech: ["React.js", "SpringBoot", "Bootstrap", "MySQL", "Microservices"]
  },
  {
    title: "Cloud Based Secure Web Application Firewall",
    description: "Developed a cloud-based web application firewall using AWS and machine learning to detect and block malicious IPs.",
    bullets: [
      "Trained a model on 2,000+ requests, achieving 85% accuracy in detecting SQL injection and XSS threats."
    ],
    tech: ["Python(Flask)", "AWS Elastic Beanstalk", "scikit-learn", "HTML", "CSS", "Postman", "pandas", "numpy"]
  }
];

export default function Projects() {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" id="projects">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
            <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
            <p className="mb-2">{proj.description}</p>
            <ul className="list-disc list-inside mb-2">
              {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, i) => <span key={i} className="bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 px-2 py-1 rounded text-xs">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
