"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  PenguinHome, 
  PenguinBook, 
  PenguinChecklist, 
  PenguinCalendar, 
  PenguinLaptop, 
  PenguinGroup 
} from "@/components/penguin-icons";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/", icon: PenguinHome },
  { id: "resources", label: "Resources", href: "/resources", icon: PenguinLaptop },
  { id: "lectures", label: "Lectures", href: "/lectures", icon: PenguinBook },
  { id: "assignments", label: "Assignments", href: "/assignments", icon: PenguinChecklist },
  { id: "calendars", label: "Calendars", href: "/calendars", icon: PenguinCalendar },
  { id: "staff", label: "Staff", href: "/staff", icon: PenguinGroup },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between shadow-lg">
        <h1 className="text-lg font-semibold">CSCI 1851</h1>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gradient-to-b from-[#1e3a5f] to-[#2d5a8f] text-white p-6 z-40
          transition-transform duration-300 ease-in-out shadow-2xl
          lg:translate-x-0 lg:w-60
          ${mobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full'}
        `}
      >
        <div className="mb-10 pb-6 border-b border-white/20">
          <h1 className="text-xl font-bold mb-2 tracking-tight">CSCI 1851</h1>
          <p className="text-xs text-blue-100 font-medium">Spring 2026</p>
        </div>

        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl
                  transition-all duration-200 group
                  ${isActive 
                    ? 'bg-white text-[#1e3a5f] shadow-xl shadow-black/10 scale-[1.02]' 
                    : 'bg-white/10 hover:bg-white/20 text-white hover:scale-[1.02]'
                  }
                `}
              >
                <div className={`flex-shrink-0 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  <Icon />
                </div>
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <p className="text-xs text-blue-100 font-medium leading-relaxed">
              Machine Learning for Biology and Health
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
