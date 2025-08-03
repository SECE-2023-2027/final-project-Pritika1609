'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black pt-20">
      <div className="text-center px-6">
        <h2 className="text-5xl font-bold mb-4">Hey, I'm Pritika 👋</h2>
        <p className="text-xl mb-6">A Full Stack Developer passionate about building impactful digital experiences.</p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
          View My Work
        </a>
      </div>
    </section>
  );
}
