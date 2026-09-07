import React, { useState } from 'react';
import { Layers, Github, ExternalLink, Cpu, Database, Server, Sparkles, Terminal, Code2, CheckCircle, Info, X } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'connect-v',
      title: 'Connect-V-2.0',
      subtitle: 'AI-Powered Student Collaboration & Vector Recommendation Platform',
      timeline: 'Jan 2026 – Aug 2026',
      badge: 'Full-Stack & Vector AI',
      color: 'amber',
      techStack: ['React', 'Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'ChromaDB', 'MinIO', 'SentenceTransformers'],
      summary: 'Built a full-stack student collaboration platform using React, Node.js, Express, FastAPI, MongoDB, and ChromaDB for AI-powered team formation and project collaboration.',
      highlights: [
        'Developed a semantic recommendation engine using SentenceTransformers, ChromaDB, dense vector embeddings, and cosine similarity to match users beyond exact keyword searches.',
        'Integrated MinIO pre-signed URL uploads for scalable media storage and developed a dedicated FastAPI microservice for vector indexing and semantic search.',
        'Engineered non-blocking REST APIs and MongoDB schemas for real-time collaboration and project team matching.'
      ],
      architectureDetails: 'Connect-V-2.0 utilizes a dual microservices architecture: the Node.js/Express core backend manages authentication, MongoDB CRUD operations, and pre-signed MinIO media links, while a lightweight Python FastAPI microservice computes 384-dimensional dense vector embeddings via SentenceTransformers and queries ChromaDB for semantic cosine similarity matching.'
    },
    {
      id: 'redislite',
      title: 'RedisLite',
      subtitle: 'High-Performance C++ In-Memory Key-Value Store with TTL & Persistence',
      timeline: 'May 2026 – Aug 2026',
      badge: 'C++ Systems Engine',
      color: 'cyan',
      techStack: ['C++17', 'STL', 'std::unordered_map', 'std::priority_queue', 'std::chrono', 'Custom Serialization'],
      summary: 'Built a Redis-inspired in-memory key-value store in C++ supporting CRUD operations, TTL-based key expiration, snapshot persistence, and an interactive command-line REPL.',
      highlights: [
        'Implemented a hybrid TTL expiration strategy combining lazy deletion with a min-heap scheduler while preserving expiration accuracy across restarts using absolute epoch timestamps.',
        'Designed a snapshot manager that serializes database state to disk and automatically restores it on startup using a custom serialization format with robust recovery from malformed records.',
        'Features an interactive CLI shell supporting standard commands (SET, GET, DEL, EXPIRE, PERSIST, SAVE, RESTORE).'
      ],
      architectureDetails: 'RedisLite pairs an std::unordered_map for O(1) average lookup with a min-heap std::priority_queue tracking smallest TTL epoch timestamps. The snapshot manager writes atomic binary database dumps to disk, using magic header bytes and CRC checksum verification for crash recovery.'
    },
    {
      id: 'esti-mate',
      title: 'Esti-MATE',
      subtitle: 'Machine Learning Real-Estate House Price Predictor Engine',
      timeline: 'Jul 2026 – Aug 2026',
      badge: 'ML & Analytics',
      color: 'purple',
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'Streamlit', 'HTML', 'CSS', 'JavaScript'],
      summary: 'Built an end-to-end ML web application to predict Bengaluru house prices using Linear Regression on a Kaggle dataset (13,000+ records), achieving an 84.52% R² score.',
      highlights: [
        'Performed data preprocessing and feature engineering including missing value handling, BHK extraction, one-hot encoding, and statistical outlier removal using Pandas.',
        'Compared Linear Regression, Lasso, and Decision Tree using GridSearchCV with 5-fold cross-validation, selecting Linear Regression as the best-performing model.',
        'Deployed dual UI interfaces (Flask REST API + Streamlit Web App) for real-time price estimation.'
      ],
      architectureDetails: 'The Esti-MATE pipeline cleans 13,000+ raw records by removing price-per-sqft statistical outliers beyond 2 standard deviations per location, encoding categorical locations with One-Hot encoding, and serializing the trained model to a `.pickle` file consumed by Flask.'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO CHRONICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            FEATURED ENGINEERING WORKS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Projects Cards Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`arcane-card ${
                proj.color === 'cyan' ? 'arcane-card-cyan' : ''
              } p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative`}
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    proj.color === 'amber'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : proj.color === 'cyan'
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  }`}>
                    {proj.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{proj.timeline}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-amber-400/90 font-medium mb-4">
                  {proj.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.summary}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6 text-xs text-slate-400">
                  {proj.highlights.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs transition-all shadow-[0_0_10px_rgba(223,177,91,0.2)]"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Architecture Deep Dive</span>
                </button>

                <a
                  href="https://github.com/HYDRABLOOMER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Architecture Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="arcane-card max-w-2xl w-full p-6 sm:p-8 rounded-2xl relative max-h-[90vh] overflow-y-auto border border-amber-500/50 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>ARCHITECTURE SPECIFICATION</span>
            </div>

            <h3 className="text-2xl font-bold font-cinzel text-slate-100 mb-1">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6">{selectedProject.subtitle}</p>

            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="font-semibold text-amber-300 font-cinzel text-base mb-2">System Architecture Breakdown</h4>
                <p className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 font-mono text-xs leading-relaxed text-slate-200">
                  {selectedProject.architectureDetails}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-300 font-cinzel text-base mb-2">Engineering Highlights & Features</h4>
                <ul className="space-y-2 text-xs">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-amber-300 font-cinzel text-base mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-md text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Close Specification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
