'use client';
import { useState, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaCamera, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  return (
    <nav className="w-full px-4 md:px-8 py-3 bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Pritika</h1>
        <div className="hidden md:flex space-x-6 items-center">
          {['#about', '#projects', '#skills', '#certifications', '#contact'].map((link) => (
            <a key={link} href={link} className="hover:text-blue-500 transition-colors">
              {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
            </a>
          ))}
          <FaUserCircle
            size={26}
            className="ml-4 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => setShowProfile(!showProfile)}
          />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <FaUserCircle
            size={24}
            className="cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => setShowProfile(!showProfile)}
          />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-2">
          <div className="px-4 space-y-2">
            {['#about', '#projects', '#skills', '#certifications', '#contact'].map((link) => (
              <a 
                key={link} 
                href={link} 
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
              </a>
            ))}
          </div>
        </div>
      )}

      {showProfile && (
        <div className="absolute top-16 right-8 bg-white dark:bg-gray-800 shadow-lg rounded-md p-6 w-80 z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col items-center">
            <div className="relative group mb-4 w-full flex flex-col items-center">
              <div className="relative">
                <div 
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl overflow-hidden cursor-pointer border-4 border-white dark:border-gray-700"
                  onClick={triggerFileInput}
                >
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover"/>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-5xl font-bold">
                      P
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                  <FaCamera className="text-white text-xs" />
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
              </div>
              <div className="flex justify-center mt-4 space-x-3 w-full">
                {!profileImage ? (
                  <button onClick={triggerFileInput} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
                    <FaCamera className="text-sm" />
                    <span>Add Photo</span>
                  </button>
                ) : (
                  <>
                    <button onClick={triggerFileInput} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
                      <FaCamera className="text-sm" />
                      <span>Change</span>
                    </button>
                    <button onClick={() => setProfileImage(null)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2">
                      <FaTimes className="text-sm" />
                      <span>Remove</span>
                    </button>
                  </>
                )}
              </div>
            </div>
            <h3 className="text-center text-lg font-semibold mt-2">Pritika</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Full Stack Developer
            </p>

            {/* Details List */}
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
              <a href="https://leetcode.com/u/Pritika_16/" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">🔸 LeetCode: Pritika_16</a>
              <a href="/images/Pritika Resume - 23IT037.pdf" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">📄 View Resume</a>
              <a href="/images/Pritika Resume - 23IT037.pdf" download="Pritika Resume - 23IT037.pdf" className="block hover:text-blue-600">⬇️ Download Resume</a>
              <a href="https://www.linkedin.com/in/pritika-j-614479315/" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">🔗 LinkedIn: Pritika</a>
              <a href="https://github.com/Pritika1609" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">💻 GitHub: Pritika1609</a>

              <p className="block text-sm text-gray-600 dark:text-gray-300 mt-2">
                📞 Contact: +91-7418889456
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
