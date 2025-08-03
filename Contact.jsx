'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6">Feel free to reach out via email or through social platforms.</p>
        <a href="mailto:pritika.j2023it@sece.ac.in" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
          Say Hello
        </a>
      </div>
    </section>
  );
}
