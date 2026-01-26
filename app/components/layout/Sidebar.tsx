'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Home,
  User,
  Award,
  FolderOpen,
  LayoutDashboard,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

type NavKey = 'home' | 'about' | 'achievements' | 'projects' | 'dashboard' | 'contact';

interface NavItem {
  key: NavKey;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { key: 'home', href: '/', icon: <Home className="w-5 h-5" /> },
  { key: 'about', href: '/about', icon: <User className="w-5 h-5" /> },
  { key: 'achievements', href: '/achievements', icon: <Award className="w-5 h-5" /> },
  { key: 'projects', href: '/projects', icon: <FolderOpen className="w-5 h-5" /> },
  { key: 'dashboard', href: '/dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { key: 'contact', href: '/contact', icon: <Mail className="w-5 h-5" /> },
];

interface SidebarContentProps {
  pathname: string;
  onNavClick: () => void;
}

/**
 * SidebarContent - Extracted as separate component to avoid creating during render
 */
function SidebarContent({ pathname, onNavClick }: SidebarContentProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-full bg-(--sidebar-bg)">
      {/* Profile Section */}
      <div className="p-6 text-center border-b border-(--sidebar-border)">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 mx-auto mb-4"
        >
          <div className="w-full h-full rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 p-1">
            <div className="w-full h-full rounded-full bg-(--card-bg) overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Wira Shauma Ardhana"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-3xl font-bold text-emerald-600">WS</span>`;
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name with Verified Badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center justify-center gap-1.5"
        >
          <h2 className="text-lg font-bold text-(--text-primary)">{t.sidebar.name}</h2>
          <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-500" />
        </motion.div>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-sm text-(--text-muted) mt-1"
        >
          @wirashauma
        </motion.p>

        {/* Language Switcher & Theme Toggle */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          {/* Language Switcher */}
          <div className="flex items-center bg-(--hover-bg) rounded-full p-1">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                language === 'en'
                  ? 'bg-emerald-500 text-white'
                  : 'text-(--text-secondary) hover:bg-(--card-bg)'
              }`}
            >
              EN
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                language === 'id'
                  ? 'bg-emerald-500 text-white'
                  : 'text-(--text-secondary) hover:bg-(--card-bg)'
              }`}
            >
              ID
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center bg-(--hover-bg) rounded-full p-1">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all ${
                !isDark ? 'bg-(--card-bg) shadow-sm' : 'text-(--text-secondary)'
              }`}
              aria-label="Light mode"
            >
              <Sun className={`w-4 h-4 ${!isDark ? 'text-amber-500' : 'text-(--text-muted)'}`} />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all ${
                isDark ? 'bg-(--card-bg) shadow-sm' : 'text-(--text-secondary)'
              }`}
              aria-label="Dark mode"
            >
              <Moon className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-(--text-muted)'}`} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.key}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Link
                href={item.href}
                onClick={onNavClick}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-500 border-l-4 border-emerald-500'
                    : 'text-(--text-secondary) hover:bg-(--hover-bg) hover:text-emerald-500'
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive ? 'text-emerald-500' : 'text-(--text-muted) group-hover:text-emerald-500'
                  }`}
                >
                  {item.icon}
                </span>
                <span>{t.nav[item.key]}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="ml-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <span className="text-emerald-500">→</span>
                  </motion.span>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-(--sidebar-border)">
        <p className="text-xs text-center text-(--text-muted)">
          {t.sidebar.copyright} © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-center text-(--text-muted) mt-1">
          Wira Shauma. {t.sidebar.allRightsReserved}
        </p>
      </div>
    </div>
  );
}

/**
 * Fixed Sidebar Navigation Component
 * Features: Profile section, nav items, language switcher, theme toggle
 * Collapses to hamburger menu on mobile
 */
export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sidebarVariants = {
    hidden: { x: -280 },
    visible: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-(--sidebar-bg) border-r border-(--sidebar-border) flex-col z-40">
        <SidebarContent pathname={pathname} onNavClick={handleNavClick} />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-(--sidebar-bg)/95 backdrop-blur-md border-b border-(--sidebar-border) shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 p-0.5">
              <div className="w-full h-full rounded-full bg-(--card-bg) flex items-center justify-center overflow-hidden">
                <span className="text-sm font-bold text-emerald-500">WS</span>
              </div>
            </div>
            <span className="font-bold text-(--text-primary)">Wira Shauma</span>
            <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500" />
          </div>
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-lg hover:bg-(--hover-bg) transition-colors"
          >
            <Menu className="w-6 h-6 text-(--text-secondary)" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black z-40"
            />
            <motion.aside
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-(--sidebar-bg) z-50 shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-(--hover-bg) transition-colors z-10"
              >
                <X className="w-6 h-6 text-(--text-secondary)" />
              </button>
              <SidebarContent pathname={pathname} onNavClick={handleNavClick} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
