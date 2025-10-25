import React from 'react';
import type { Service, Testimonial } from './types';

// Icons as SVG components
const AstrologyIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-12 w-12 mx-auto mb-4 text-yellow-400" },
        React.createElement('path', { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }),
        React.createElement('path', { d: "m9.5 7.5 4 4" }),
        React.createElement('path', { d: "m12 12 4.5 4.5" }),
        React.createElement('path', { d: "m15 15-5 5" })
    )
);
const VaastuIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-12 w-12 mx-auto mb-4 text-yellow-400" },
        React.createElement('path', { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        React.createElement('polyline', { points: "9 22 9 12 15 12 15 22" })
    )
);
const TantraIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-12 w-12 mx-auto mb-4 text-yellow-400" },
        React.createElement('path', { d: "M12 2a2.83 2.83 0 0 0 4 4 4 4 0 0 1 4 4 2.83 2.83 0 0 0 4 4 2.83 2.83 0 0 0-4 4 4 4 0 0 1-4 4 2.83 2.83 0 0 0-4 4 2.83 2.83 0 0 0-4-4 4 4 0 0 1-4-4 2.83 2.83 0 0 0-4-4 2.83 2.83 0 0 0 4-4 4 4 0 0 1 4-4 2.83 2.83 0 0 0 4-4z" })
    )
);
const SpiritualIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-12 w-12 mx-auto mb-4 text-yellow-400" },
        React.createElement('path', { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
        React.createElement('polyline', { points: "14 2 14 8 20 8" }),
        React.createElement('path', { d: "m12 18-2-2 2-2" }),
        React.createElement('path', { d: "m12 12-2-2 2-2" })
    )
);
const RemediesIcon = () => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-12 w-12 mx-auto mb-4 text-yellow-400" },
        React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
        React.createElement('path', { d: "M12 6v6l4 2" })
    )
);

export const CONTACT_INFO = {
  name: "Anuradha Dutta",
  phone: "+91 8910920188",
  email: "duttaanuradha26@gmail.com",
  location: "Dhakuria, near Lake Mall, Kolkata",
  tagline: "Guiding You Towards Light, Balance, and Prosperity",
};

export const SERVICES: Service[] = [
  { icon: React.createElement(AstrologyIcon), title: "Astrology Consultation", description: "In-depth horoscope analysis for career, marriage, health, and finance, offering clarity and future guidance." },
  { icon: React.createElement(VaastuIcon), title: "Vaastu Guidance", description: "Harmonize your home or office space to attract positive energy, prosperity, and well-being." },
  { icon: React.createElement(TantraIcon), title: "Tantra Healing & Energy Balancing", description: "Ancient techniques to cleanse your aura, remove blockages, and restore your spiritual and emotional balance." },
  { icon: React.createElement(SpiritualIcon), title: "Spiritual Counseling", description: "Compassionate guidance to help you navigate life's challenges and connect with your inner self." },
  { icon: React.createElement(RemediesIcon), title: "Personalized Remedies", description: "Simple yet powerful remedies tailored to your specific needs to overcome obstacles and enhance luck." },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Anuradha Dutta's guidance was a beacon of light during my darkest times. Her accuracy is astounding.", author: "R. Sharma, Mumbai" },
  { quote: "The Vaastu changes she suggested brought immediate positive changes to my home and business. Highly recommended!", author: "S. Gupta, Delhi" },
  { quote: "Her spiritual counseling helped me find peace and clarity I had been searching for years. A truly gifted soul.", author: "P. Banerjee, Kolkata" },
  { quote: "I was skeptical about astrology, but one session with her made me a believer. Her insights were spot on.", author: "A. Kumar, Bangalore" },
  { quote: "Compassionate, insightful, and incredibly knowledgeable. Her remedies are practical and effective.", author: "M. Das, London" },
];

export const CHATBOT_CONTEXT = `
You are AstroBot, a helpful assistant for Anuradha Dutta's website. Your goal is to answer visitor questions based ONLY on the information provided below. Be friendly, concise, and use emojis where appropriate. If a question is outside this scope, politely decline to answer.

**Anuradha Dutta's Information:**
- **Name:** Anuradha Dutta
- **Profession:** Astrologer, Vaastu Consultant, Tantra & Spiritual Healer.
- **About:** She is a respected professional with deep knowledge of traditional and modern practices, who has helped many individuals restore balance, positivity, and prosperity.
- **Location:** Dhakuria, near Lake Mall, Kolkata, West Bengal.
- **Contact:** Phone/WhatsApp: +91 8910920188, Email: duttaanuradha26@gmail.com.
- **Services:**
  - Astrology Consultations (Career, Marriage, Health, Finance, etc.)
  - Vaastu Consultation for Homes & Offices
  - Tantra Healing & Energy Balancing
  - Spiritual Guidance & Counselling
- **Booking:** Appointments can be booked by calling or sending a WhatsApp message to +91 8910920188 or by emailing duttaanuradha26@gmail.com.
- **Timings:** Consultations are available by prior appointment only, between 10 AM – 7 PM (Monday to Saturday).
- **Online Consultation:** Yes, online consultations are available via phone, video call, or WhatsApp.
- **Consultation Charges/Fees:** The fee depends on the service type. For detailed pricing, clients must contact +91 8910920188.
- **Client Feedback:** Clients describe her as "compassionate, accurate, and deeply insightful." Her readings have helped them gain clarity and peace. Real testimonials are available on the website.
`;

export const CHATBOT_GREETING = "👋 Namaste! I’m AstroBot, here to help you connect with Anuradha Dutta. How can I assist you today? You can ask me about her services, location, or how to book an appointment.";