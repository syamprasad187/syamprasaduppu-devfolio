import React from 'react';

const experiences = [
  {
    title: "AWS AI-ML Virtual Internship",
    period: "Jan - Mar 2024",
    org: "APSCHE-Eduskills (Remote)",
    bullets: [
      "Proficient in AWS services including EC2, S3, RDS, Lambda, IAM, VPC, and related cloud computing components.",
      "Solid understanding of AWS Well-Architected Framework with focus on security, performance, and cost optimization best practices."
    ]
  },
  {
    title: "Project Team Leader - Java FullStack Hackathon",
    period: "Aug - Dec 2024",
    org: "KLEF, Vaddeswaram",
    bullets: [
      "Led development of AGROMART, a microservices-based agri e-commerce platform using React.js, Spring Boot, and MySQL.",
      "Incorporated mentor insights and user feedback to optimize features and usability."
    ]
  }
];

export default function WorkExperience() {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" id="experience">
      <h2 className="text-3xl font-bold mb-6">Work Experience & Leadership</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white dark:bg-indigo-950 rounded-lg p-6 shadow">
            <h3 className="font-bold text-lg">{exp.title}</h3>
            <div className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">{exp.org} | {exp.period}</div>
            <ul className="list-disc list-inside">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
