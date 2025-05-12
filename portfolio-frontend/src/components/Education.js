import React from 'react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2022-2026",
    org: "Koneru Lakshmaiah Education Foundation, Vaddeswaram",
    cgpa: "9.27"
  },
  {
    degree: "Higher Secondary Certificate",
    period: "2020-2022",
    org: "Sri Gayatri Junior College, Vijayawada",
    cgpa: "8.38"
  },
  {
    degree: "Secondary School Certificate",
    period: "2019-2020",
    org: "Swarna Bharathi High School, Vijayawada",
    cgpa: "9.43"
  }
];

export default function Education() {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="education">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-indigo-50 dark:bg-indigo-800 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <div className="text-sm text-indigo-700 dark:text-indigo-300 mb-1">{edu.org} | {edu.period}</div>
            <div className="text-sm">CGPA: {edu.cgpa}</div>
          </div>
        ))}
      </div>
    </section>
  );
}