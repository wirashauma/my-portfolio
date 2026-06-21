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
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useSidebar } from '../../contexts/SidebarContext';

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
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex flex-col h-full bg-(--sidebar-bg) relative">
      {/* Profile Section */}
      <div className={`p-4 text-center border-b border-(--sidebar-border) transition-all duration-300 ${isCollapsed ? 'py-6' : 'p-6'}`}>
        {/* Profile Image */}
        <motion.div
          animate={{ 
            width: isCollapsed ? 44 : 96, 
            height: isCollapsed ? 44 : 96 
          }}
          transition={{ duration: 0.3 }}
          className="relative mx-auto mb-3"
        >
          <div className="w-full h-full rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 p-0.5">
            <div className="w-full h-full rounded-full bg-(--card-bg) overflow-hidden flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpeg"
                alt="Wira Shauma Ardhana"
                className="w-full h-full object-cover animate-fade-in"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="${isCollapsed ? 'text-sm' : 'text-3xl'} font-bold text-emerald-600">WS</span>`;
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name with Verified Badge */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <h2 className="text-lg font-bold text-(--text-primary) whitespace-nowrap">{t.sidebar.name}</h2>
              <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-500 shrink-0" />
            </div>

            <p className="text-sm text-(--text-muted) mt-1">
              @wirashauma
            </p>

            {/* Language Switcher */}
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-(--hover-bg) rounded-full p-1">
                <button
                  onClick={toggleLanguage}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'text-(--text-secondary) hover:bg-(--card-bg)'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={toggleLanguage}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    language === 'id'
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'text-(--text-secondary) hover:bg-(--card-bg)'
                  }`}
                >
                  ID
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Items */}
      <nav className={`flex-1 p-3 space-y-1.5 overflow-y-auto ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.key}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className={`w-full relative group ${isCollapsed ? 'flex justify-center' : ''}`}
            >
              <Link
                href={item.href}
                onClick={onNavClick}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center p-3 w-11 h-11' : 'gap-3 px-4 py-3 w-full'
                } rounded-xl font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-500 border-l-4 border-emerald-500'
                    : 'text-(--text-secondary) hover:bg-(--hover-bg) hover:text-emerald-500'
                }`}
              >
                <span
                  className={`transition-colors shrink-0 ${
                    isActive ? 'text-emerald-500' : 'text-(--text-muted) group-hover:text-emerald-500'
                  }`}
                >
                  {item.icon}
                </span>
                
                {!isCollapsed && <span>{t.nav[item.key]}</span>}

                {/* Premium Hover Tooltip in Collapsed State */}
                {isCollapsed && (
                  <div className="absolute left-16 bg-gray-900/95 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-lg z-50">
                    {t.nav[item.key]}
                  </div>
                )}

                {isActive && !isCollapsed && (
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
      <div className="p-4 border-t border-(--sidebar-border) transition-all duration-300">
        {isCollapsed ? (
          <div className="text-center text-xs font-bold text-emerald-600 bg-emerald-500/10 rounded-lg py-2">
            WS
          </div>
        ) : (
          <>
            <p className="text-xs text-center text-(--text-muted)">
              {t.sidebar.copyright} © {new Date().getFullYear()}
            </p>
            <p className="text-xs text-center text-(--text-muted) mt-1">
              Wira Shauma. {t.sidebar.allRightsReserved}
            </p>
          </>
        )}
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
  const { isCollapsed, toggleCollapse } = useSidebar();

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
      <aside className={`hidden lg:flex fixed left-0 top-0 bottom-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} bg-(--sidebar-bg) border-r border-(--sidebar-border) flex-col z-40`}>
        <SidebarContent pathname={pathname} onNavClick={handleNavClick} />
        
        {/* Toggle Collapse Button - Desktop Only */}
        <button
          onClick={toggleCollapse}
          className="hidden lg:flex absolute -right-3 top-10 w-6 h-6 rounded-full bg-white border border-(--sidebar-border) shadow-md items-center justify-center cursor-pointer text-gray-500 hover:text-emerald-500 transition-all z-50 hover:scale-110"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="w-3.5 h-3.5" />
          ) : (
            <ChevronLeft className="w-3.5 h-3.5" />
          )}
        </button>
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
