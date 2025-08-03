'use client';

const certificates = [
  {
    title: 'Learn Java Programming - Udemy',
    image: '/certifications/cert1.png',
    link: 'https://www.udemy.com/certificate/UC-15f50819-9ad8-4caf-9bcc-620f459ee144/',
  },
  {
    title: 'Mastering Data Structures & Algorithms using C and C++ - Udemy',
    image: '/certifications/cert2.png',
    link: 'https://www.udemy.com/certificate/UC-4a8a35ef-43e7-46aa-84f5-e9682b6fd41f/',
  },
  {
    title: 'Python for Beginners - Great Learning',
    image: '/certifications/python.png',
    link: 'https://olympus.mygreatlearning.com/courses/16801/modules/items/756875?pb_id=581',
  },
  // Add more certificates as needed
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {certificates.map((cert, idx) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 bg-white dark:bg-gray-800"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
