import React from 'react';
import { Trophy, ShieldCheck, Flame, Award, ExternalLink, Sparkles } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'Qualified GATE 2026 (Computer Science)',
      category: 'National Competitive Exam',
      stat: 'AIR 5820',
      detail: 'Score: 529 | 97.24 Percentile',
      desc: 'Achieved high national standing in the Graduate Aptitude Test in Engineering for CS/IT, validating deep expertise in CS algorithms, theory of computation, operating systems, and computer organization.',
      badgeColor: 'amber',
      icon: Trophy,
    },
    {
      title: 'Salesforce Developer & Automation Agentblazer Champion',
      category: 'Industry Certification & Challenge',
      stat: 'Champion',
      detail: 'Salesforce Automation & Agentic AI',
      desc: 'Recognized as an Agentblazer Champion for excellence in Salesforce development, workflow automation, custom Apex, and AI agent integration.',
      badgeColor: 'teal',
      icon: Award,
    },
    {
      title: 'Top-15 Finalist at Graphethon 2025',
      category: 'National Hackathon',
      stat: 'Top-15',
      detail: 'Selected out of 100+ Teams',
      desc: 'Designed and presented an AI-driven memory-assistance solution for Alzheimer’s patients, earning top recognition among 100+ competing engineering teams.',
      badgeColor: 'purple',
      icon: Flame,
    },
  ];

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & QUEST ACCOLADES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            ACHIEVEMENTS & RECOGNITION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="arcane-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.badgeColor === 'amber'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-[0_0_15px_rgba(223,177,91,0.3)]'
                        : item.badgeColor === 'teal'
                        ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40 shadow-[0_0_15px_rgba(45,212,191,0.3)]'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className="text-2xl font-extrabold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">
                        {item.stat}
                      </span>
                      <span className="block text-[11px] font-mono text-slate-400">
                        {item.detail}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-xl font-bold font-cinzel text-slate-100 mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <ShieldCheck className="w-4 h-4" /> Verified Honor
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
