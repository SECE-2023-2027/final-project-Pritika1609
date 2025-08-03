'use client';

import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center gap-4 text-base">
          {/* Email */}
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            className="hover:text-blue-500 flex items-center gap-1"
          >
            <FaEnvelope /> Pritika
          </a>

          {/* Phone */}
          <span className="flex items-center gap-1">
            <FaPhone /> +91 7418889456
          </span>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_pritika16/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 flex items-center gap-1"
          >
            <FaInstagram /> _pritika16
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-2">
          © {new Date().getFullYear()} Pritika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
