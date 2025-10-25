import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3 text-yellow-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3 text-yellow-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3 text-yellow-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // --- Backend Simulation ---
    // In a real-world application, this section would be replaced with an API call
    // (e.g., using `fetch`) to a secure backend endpoint. That endpoint would
    // then handle the logic for sending an email to Anuradha Dutta.
    // For demonstration, we simulate a 2-second network delay.
    console.log('Simulating backend call with form data:', formData);
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      // This simulates a successful API response.
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000); // Reset form to idle after 5 seconds
    } catch (error) {
      // This would catch network errors or failed API responses.
      console.error("Submission simulation failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormContent = () => {
    if (submitStatus === 'success') {
      return (
        <div className="text-center p-4 bg-green-900/50 border border-green-500 rounded-lg">
          <p className="font-bold">Thank you for your message!</p>
          <p>We will get back to you shortly.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required disabled={isSubmitting} className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required disabled={isSubmitting} className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message / Preferred Service" rows={4} required disabled={isSubmitting} className="w-full p-3 bg-purple-900/30 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"></textarea>
        <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitStatus === 'error' && (
            <div className="p-3 mt-2 bg-red-900/50 border border-red-500 rounded-lg text-center">
                <p>Sorry, an error occurred. Please try again.</p>
            </div>
        )}
      </form>
    );
  }

  return (
    <section id="contact" className="py-20 bg-[#0c0a1a] text-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <SectionTitle title="Contact & Booking" subtitle="Begin Your Journey Towards Balance" />
        </AnimatedSection>
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/2">
            <AnimatedSection delay="delay-300">
              <div className="bg-purple-900/20 backdrop-blur-sm border border-purple-700/50 rounded-lg p-8 h-full">
                <h3 className="font-playfair text-3xl font-bold text-yellow-400 mb-6">Book an Appointment</h3>
                {renderFormContent()}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <AnimatedSection delay="delay-500">
                <div className="space-y-4 text-purple-200">
                    <div className="flex items-start"><PhoneIcon /> <div><span className="font-bold text-white block">Phone / WhatsApp</span><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-yellow-400">{CONTACT_INFO.phone}</a></div></div>
                    <div className="flex items-start"><MailIcon /> <div><span className="font-bold text-white block">Email</span><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-yellow-400">{CONTACT_INFO.email}</a></div></div>
                    <div className="flex items-start"><LocationIcon /> <div><span className="font-bold text-white block">Chamber Location</span>{CONTACT_INFO.location}</div></div>
                </div>
            </AnimatedSection>
            <AnimatedSection delay="delay-700">
                <div className="h-64 rounded-lg overflow-hidden shadow-2xl shadow-purple-900/40 border-2 border-purple-700/50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.932973719946!2d88.3653138154032!3d22.50700508521711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02710c73e4b355%3A0xc02a78f1580ed52d!2sLake%20Mall!5e0!3m2!1sen!2sin!4v1672588888888!5m2!1sen!2sin"
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;