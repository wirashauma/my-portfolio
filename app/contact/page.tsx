'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  MessageSquare,
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

// TikTok Icon Component (not available in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

interface SocialCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  gradient: string;
  buttonText: string;
}

const socialCards: SocialCard[] = [
  {
    id: 'email',
    title: 'Stay in Touch',
    subtitle: 'Reach out via email for inquiries or collaborations.',
    icon: <Mail className="w-12 h-12" />,
    href: 'mailto:wirashauma@gmail.com',
    gradient: 'from-red-500 via-red-400 to-orange-400',
    buttonText: 'Go to Gmail',
  },
  {
    id: 'instagram',
    title: 'Follow My Journey',
    subtitle: 'Follow my creative journey.',
    icon: <Instagram className="w-12 h-12" />,
    href: 'https://instagram.com/wirashauma',
    gradient: 'from-pink-500 via-purple-500 to-orange-400',
    buttonText: 'Go to Instagram',
  },
  {
    id: 'linkedin',
    title: "Let's Connect",
    subtitle: 'Connect with me professionally.',
    icon: <Linkedin className="w-12 h-12" />,
    href: 'https://linkedin.com/in/wirashauma',
    gradient: 'from-blue-700 via-blue-600 to-blue-500',
    buttonText: 'Go to Linkedin',
  },
  {
    id: 'tiktok',
    title: 'Join the Fun',
    subtitle: 'Watch engaging and fun content.',
    icon: <TikTokIcon className="w-12 h-12" />,
    href: 'https://tiktok.com/@wirashauma',
    gradient: 'from-gray-900 via-gray-800 to-gray-700',
    buttonText: 'Go to Tiktok',
  },
  {
    id: 'github',
    title: 'Explore the Code',
    subtitle: 'Explore my open-source work.',
    icon: <Github className="w-12 h-12" />,
    href: 'https://github.com/wirashauma',
    gradient: 'from-gray-800 via-slate-700 to-cyan-800',
    buttonText: 'Go to Github',
  },
];

function SocialCard({ card }: { card: SocialCard }) {
  return (
    <motion.a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      className={`block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-linear-to-br ${card.gradient}`}
    >
      <div className="p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{card.title}</h3>
            <p className="text-white/80 text-sm mb-4">{card.subtitle}</p>
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
            >
              {card.buttonText}
              <ExternalLink className="w-4 h-4" />
            </motion.span>
          </div>
          <div className="opacity-80">{card.icon}</div>
        </div>
      </div>
    </motion.a>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
    >
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
            placeholder="Your message..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="animate-spin">⏳</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact</h1>
            <p className="text-gray-600">Let&apos;s get in touch</p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Social Media Section */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Find me on social media</h2>
        </ScrollReveal>

        {/* Email Card (Full Width) */}
        <ScrollReveal delay={0.15}>
          <div className="mb-6">
            <SocialCard card={socialCards[0]} />
          </div>
        </ScrollReveal>

        {/* Other Social Cards (Grid) */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {socialCards.slice(1).map((card) => (
              <StaggerItem key={card.id}>
                <SocialCard card={card} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Contact Form Section */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">Or send me a message</h2>
            </div>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
