'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'PlanIt - To Do List',
    description: 'A MERN stack event planning app that helps users create and manage events. Features RSVP tracking, timeline UI, and a modern responsive design.',
    image: '/images/todolist.jpeg', // Place image in /public folder
    link: 'https://github.com/Pritika1609/PlanIt_Todolist-',
  },
  {
    title: 'Legify - Legal Awareness Game',
    description: 'An interactive educational game built with MERN stack that teaches children their basic rights and legal awareness using fun quiz-based levels.',
    image: '/images/legify.jpg',
    link: 'https://github.com/Pritika1609/Legify-',
  },
  {
    title: 'CartCraze - E-commerce Website',
    description: 'A full-stack e-commerce website where users can browse categories, search products, add to cart, and pay via various methods. Includes profile & order history.',
    image: '/images/cart.jpg',
    link: 'https://github.com/yourgithub/cartcraze',
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3
                className="text-2xl font-semibold mb-2 cursor-pointer text-blue-700 hover:underline"
                onClick={() => toggleDescription(index)}
              >
                {project.title}
              </h3>
              {activeIndex === index && <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>}
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
