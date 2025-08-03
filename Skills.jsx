'use client';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Tailwind', 'Git', 'Next.js'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 dark:bg-gray-700 rounded-lg text-sm font-medium shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
