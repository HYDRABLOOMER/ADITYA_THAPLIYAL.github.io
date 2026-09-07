import React from 'react';
import HeroCanvas from './HeroCanvas';
import { ShieldCheck, Award, ArrowRight, FileText, Code2, Sparkles, Terminal } from 'lucide-react';

export default function HeroSection({ onOpenResumeModal }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Background Canvas */}
      <HeroCanvas />

      {/* Radial Gradient Arcane Glow Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge: GATE 2026 CS Qualified */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_rgba(223,177,91,0.2)] mb-8 animate-pulse-glow">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Qualified GATE 2026 (Computer Science) • AIR: 5820 (97.24 Percentile)</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        </div>

        {/* Main Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="block text-slate-100 font-cinzel">ADITYA THAPLIYAL</span>
          <span className="block arcane-gold-text font-cinzel mt-1">FORGING SYSTEMS & AI</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
          4th-Year B.Tech Computer Science & Engineering Undergrad at Graphic Era Hill University, Dehradun.
          Crafting high-performance <span className="text-amber-300 font-normal">C++ systems</span>, <span className="text-teal-300 font-normal">scalable full-stack web applications</span>, and <span className="text-purple-300 font-normal">vector-search AI microservices</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(223,177,91,0.4)] hover:shadow-[0_0_30px_rgba(223,177,91,0.7)] hover:scale-105 transition-all"
          >
            <span>Explore Chronicles (Projects)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 border border-teal-500/50 text-teal-300 hover:border-teal-400 hover:text-teal-200 hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all text-sm font-semibold backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Summon Contact</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-sm font-medium backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>View Resume PDF</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="arcane-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-400">8.7 / 10</div>
            <div className="text-xs text-slate-400 font-mono mt-1">B.Tech CSE CGPA</div>
          </div>

          <div className="arcane-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-cinzel text-teal-400">AIR 5820</div>
            <div className="text-xs text-slate-400 font-mono mt-1">GATE 2026 CS (97.24%)</div>
          </div>

          <div className="arcane-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-cinzel text-purple-400">Top-15</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Graphethon 2025 (100+ Teams)</div>
          </div>

          <div className="arcane-card p-4 rounded-xl text-center">
            <div className="text-2xl sm:text-3xl font-bold font-cinzel text-amber-300">Salesforce</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Agentblazer Champion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
