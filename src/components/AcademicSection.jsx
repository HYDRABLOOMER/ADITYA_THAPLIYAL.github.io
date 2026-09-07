import React from 'react';
import { GraduationCap, Award, BookOpen, Layers, CheckCircle2, Cpu } from 'lucide-react';

export default function AcademicSection() {
  const corePillars = [
    { name: 'Data Structures & Algorithms', desc: 'Mastery in trees, graphs, heaps, dynamic programming & time complexity analysis.' },
    { name: 'Operating Systems', desc: 'Process management, multithreading, memory management, scheduling & POSIX systems.' },
    { name: 'Database Management (DBMS)', desc: 'Relational schema design, SQL optimization, ACID transactions & indexing.' },
    { name: 'Computer Networks', desc: 'TCP/IP stack, HTTP/HTTPS protocols, sockets, routing algorithms & network security.' },
    { name: 'Theory of Computation', desc: 'Finite automata, context-free grammars, Turing machines & computability.' },
    { name: 'Object-Oriented Programming', desc: 'Abstraction, inheritance, polymorphism, design patterns & clean code architecture.' },
  ];

  return (
    <section id="academic" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>KNOWLEDGE FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            ACADEMIC SANCTUM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* University Degree */}
          <div className="arcane-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
              <GraduationCap className="w-24 h-24" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                2023 – Present
              </span>
              <span className="text-xs text-slate-400 font-mono">B.Tech 4th Year</span>
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">
              Graphic Era Hill University
            </h3>
            <p className="text-amber-400 font-medium text-sm mb-4">Dehradun, Uttarakhand, India</p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Bachelor of Technology in <strong className="text-slate-100">Computer Science and Engineering</strong>. Demonstrating consistent academic excellence and rigorous algorithmic mastery.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <Award className="w-5 h-5 text-amber-400" />
              <div>
                <span className="text-xs text-slate-400 block font-mono">Cumulative Grade Point Average</span>
                <span className="text-xl font-bold font-cinzel text-amber-300">CGPA: 8.7 / 10</span>
              </div>
            </div>
          </div>

          {/* School Education */}
          <div className="arcane-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-teal-500/10 group-hover:text-teal-500/20 transition-colors">
              <BookOpen className="w-24 h-24" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                Schooling (CBSE)
              </span>
              <span className="text-xs text-slate-400 font-mono">APS Jodhpur</span>
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-slate-100 group-hover:text-teal-300 transition-colors">
              Army Public School, Jodhpur
            </h3>
            <p className="text-teal-400 font-medium text-sm mb-6">Senior Secondary & Secondary Education</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-teal-500/30">
                <div className="text-xs font-mono text-slate-400">Class XII (CBSE 2022)</div>
                <div className="text-2xl font-bold font-cinzel text-teal-300 mt-1">96.00%</div>
                <div className="text-[11px] text-teal-400/80 mt-1">Mathematics & Science</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-teal-500/30">
                <div className="text-xs font-mono text-slate-400">Class X (CBSE 2020)</div>
                <div className="text-2xl font-bold font-cinzel text-teal-300 mt-1">95.67%</div>
                <div className="text-[11px] text-teal-400/80 mt-1">Distinction Honors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div>
          <h3 className="text-xl font-bold font-cinzel text-slate-200 text-center mb-8 flex items-center justify-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" />
            <span>RELEVANT CSE COURSEWORK & CORE PILLARS</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 flex items-start gap-3.5 group"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-semibold text-slate-200 group-hover:text-amber-300 text-sm transition-colors">
                    {pillar.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
