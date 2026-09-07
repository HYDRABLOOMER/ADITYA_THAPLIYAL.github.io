import React, { useState, useEffect } from 'react';
import { FileText, Terminal, Menu, X, Sparkles, Shield, Cpu, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Academic', href: '#academic' },
    { name: 'Grimoire (Skills)', href: '#skills' },
    { name: 'Chronicles (Projects)', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'REPL Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08070c]/90 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Sigil */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(223,177,91,0.4)] transition-all">
            <span className="font-cinzel text-amber-400 font-bold text-lg group-hover:scale-110 transition-transform">
              AT
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-slate-100 tracking-wider text-sm sm:text-base group-hover:text-amber-300 transition-colors">
              ADITYA THAPLIYAL
            </span>
            <span className="text-[10px] text-amber-500/70 tracking-widest uppercase font-mono">
              Arcane Systems • CSE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#terminal"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-slate-900/80 border border-slate-700 text-teal-400 hover:border-teal-400 hover:shadow-[0_0_12px_rgba(45,212,191,0.3)] transition-all"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Shell</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-semibold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-[0_0_15px_rgba(223,177,91,0.3)] hover:shadow-[0_0_22px_rgba(223,177,91,0.5)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 text-amber-400 hover:text-amber-300"
            title="Resume PDF"
          >
            <FileText className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a090f]/95 border-b border-amber-500/20 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-amber-400 py-2 text-base font-medium border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#terminal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-mono bg-slate-900 border border-teal-500/40 text-teal-400"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch Interactive REPL</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold bg-amber-500 text-slate-950 shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
