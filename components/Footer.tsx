import React from 'react';
import { CONTACT_INFO } from '../constants';

const FacebookIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const LinkedInIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/anuradha.dutta.339183', icon: <FacebookIcon /> },
    { name: 'Instagram', href: 'https://www.instagram.com/proudy_peacock/', icon: <InstagramIcon /> },
    { name: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0c0a1a] to-[#1a1a2e] text-purple-200 py-10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-playfair text-2xl font-bold text-white mb-2">{CONTACT_INFO.name}</h3>
        <p className="mb-4">{CONTACT_INFO.location}</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-yellow-400 transition-colors">{CONTACT_INFO.phone}</a>
          <span>|</span>
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-yellow-400 transition-colors">{CONTACT_INFO.email}</a>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((item) => (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-yellow-400 transition-colors" aria-label={item.name}>
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                </a>
            ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Anuradha Dutta. All Rights Reserved. Website designed with guidance.</p>
      </div>
    </footer>
  );
};

export default Footer;