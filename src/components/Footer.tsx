import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-green-300 py-10 px-6 md:px-12 lg:px-20 border-t-2 border-green-300 mt-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Bio */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-3">Eze Israel Oluomachukwu</h2>
          <p className="text-sm leading-relaxed">
            A passionate Web Developer & Designer focused on crafting clean, user‑friendly experiences. Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:mx-auto">
          <h3 className="text-lg font-semibold text-yellow-600 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#about" className="hover:text-underline transition">About</Link></li>
            <li><Link href="#projects" className="hover:text-underline transition">Projects</Link></li>
            <li><Link href="#skills" className="hover:text-underline transition">Skills</Link></li>
            <li><Link href="#contact" className="hover:text-underline transition">Contact</Link></li>
          </ul>
        </div>

        {/* Socials and Contact */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-600 mb-3">Connect</h3>
          <div className="flex gap-4 mb-4">
            <a href="https://github.com/Eze-Israel" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/israel-eze-ab471a305" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/+2347061033459" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaWhatsapp size={20} />
            </a>
            
          </div>
          <p className="text-s text-gray-700">© {new Date().getFullYear()} Eze Israel Oluomachukwu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


