import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AcademicSection from './components/AcademicSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import RunicTerminal from './components/RunicTerminal';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08070c] text-slate-100 relative selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <AcademicSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <RunicTerminal />
        <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-[#050408] text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-amber-400 font-bold text-sm">ADITYA THAPLIYAL</span>
            <span>•</span>
            <span>Arcane Tech Portfolio</span>
          </div>

          <div>
            Built with React, Three.js, Vite & Tailwind CSS. Designed for GitHub Pages.
          </div>

          <div>
            © {new Date().getFullYear()} Aditya Thapliyal. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
