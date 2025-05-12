import React from 'react';

const skills = [
  { category: "Languages", list: ["Java", "C", "Python"] },
  { category: "Web Development & Frameworks", list: ["React.js", "HTML5", "CSS3", "REST APIs", "Spring Boot", "JSP", "Node.js", "Express.js"] },
  { category: "Cloud/Databases", list: ["AWS", "MySQL", "MongoDB", "PostgreSQL"] },
  { category: "Tools & Methodologies", list: ["Postman", "VS Code", "GitHub", "Git", "Docker", "Kubernetes", "Agile", "CI/CD"] },
  { category: "Soft Skills", list: ["Problem-solving", "Team Management", "Communication", "Adaptability", "Quick Learning"] },
  { category: "Certifications", list: ["AWS Certified Cloud Practitioner", "Red Hat Certified Enterprise Application Developer"] }
];

export default function Skills() {
  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" id="skills">
      <h2 className="text-3xl font-bold mb-6">Skills & Interests</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.list.map((item, i) => (
                <span key={i} className="bg-indigo-200 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 px-3 py-1 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
