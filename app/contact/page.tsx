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
import { useLanguage } from '../contexts/LanguageContext';

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

interface SocialCardData {
  id: string;
  titleKey: 'stayInTouch' | 'followJourney' | 'letsConnect' | 'joinFun' | 'exploreCode';
  subtitleKey: 'stayInTouchSubtitle' | 'followJourneySubtitle' | 'letsConnectSubtitle' | 'joinFunSubtitle' | 'exploreCodeSubtitle';
  icon: React.ReactNode;
  href: string;
  gradient: string;
  platform: string;
}

const socialCardsData: SocialCardData[] = [
  {
    id: 'email',
    titleKey: 'stayInTouch',
    subtitleKey: 'stayInTouchSubtitle',
    icon: <Mail className="w-12 h-12" />,
    href: 'mailto:wirashauma@gmail.com',
    gradient: 'from-red-500 via-red-400 to-orange-400',
    platform: 'Gmail',
  },
  {
    id: 'instagram',
    titleKey: 'followJourney',
    subtitleKey: 'followJourneySubtitle',
    icon: <Instagram className="w-12 h-12" />,
    href: 'https://instagram.com/wirashauma',
    gradient: 'from-pink-500 via-purple-500 to-orange-400',
    platform: 'Instagram',
  },
  {
    id: 'linkedin',
    titleKey: 'letsConnect',
    subtitleKey: 'letsConnectSubtitle',
    icon: <Linkedin className="w-12 h-12" />,
    href: 'https://linkedin.com/in/wirashauma',
    gradient: 'from-blue-700 via-blue-600 to-blue-500',
    platform: 'Linkedin',
  },
  {
    id: 'tiktok',
    titleKey: 'joinFun',
    subtitleKey: 'joinFunSubtitle',
    icon: <TikTokIcon className="w-12 h-12" />,
    href: 'https://tiktok.com/@wirashauma',
    gradient: 'from-gray-900 via-gray-800 to-gray-700',
    platform: 'Tiktok',
  },
  {
    id: 'github',
    titleKey: 'exploreCode',
    subtitleKey: 'exploreCodeSubtitle',
    icon: <Github className="w-12 h-12" />,
    href: 'https://github.com/wirashauma',
    gradient: 'from-gray-800 via-slate-700 to-cyan-800',
    platform: 'Github',
  },
];

function SocialCard({ card }: { card: SocialCardData }) {
  const { t } = useLanguage();
  
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
            <h3 className="text-xl font-bold mb-1">{t.contact[card.titleKey]}</h3>
            <p className="text-white/80 text-sm mb-4">{t.contact[card.subtitleKey]}</p>
            <motion.span
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
            >
              {t.contact.goTo} {card.platform}
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
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || t.contact.errorMsg);
      }

      setSuccess(t.contact.successMsg);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError(t.contact.errorMsg);
    } finally {
      setIsSubmitting(false);
    }
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
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
            {success}
          </p>
        )}
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t.contact.name}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t.contact.email}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t.contact.message}
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
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
              {t.contact.send}
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.contact.title}</h1>
            <p className="text-gray-600">{t.contact.subtitle}</p>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 my-8" />

        {/* Social Media Section */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-lg font-semibold text-gray-900 mb-6">{t.contact.findMe}</h2>
        </ScrollReveal>

        {/* Email Card (Full Width) */}
        <ScrollReveal delay={0.15}>
          <div className="mb-6">
            <SocialCard card={socialCardsData[0]} />
          </div>
        </ScrollReveal>

        {/* Other Social Cards (Grid) */}
        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {socialCardsData.slice(1).map((card) => (
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
              <h2 className="text-lg font-semibold text-gray-900">{t.contact.sendMessage}</h2>
            </div>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
