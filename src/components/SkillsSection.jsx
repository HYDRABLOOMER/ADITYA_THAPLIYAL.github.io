import React, { useState } from 'react';
import { Code, Database, Cloud, Brain, Server, Terminal, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { id: 'All', label: 'All Artifacts', icon: Sparkles },
    { id: 'Languages', label: 'Languages', icon: Code },
    { id: 'Web', label: 'Web & Backend', icon: Server },
    { id: 'Databases', label: 'Databases & Storage', icon: Database },
    { id: 'Cloud', label: 'Cloud & Tools', icon: Cloud },
    { id: 'ML', label: 'ML & Data Science', icon: Brain },
  ];

  const skillItems = [
    // Languages
    { name: 'C++ (17/20)', category: 'Languages', level: 95, detail: 'DSA, STL, Custom Allocators, Min-Heap, Serializers, REPL', color: 'amber' },
    { name: 'JavaScript (ES6+)', category: 'Languages', level: 90, detail: 'Async/Await, Promises, Closures, Functional Paradigm', color: 'amber' },
    { name: 'SQL', category: 'Languages', level: 85, detail: 'Complex Queries, Indexing, Joins, Transactions', color: 'amber' },
    { name: 'Java', category: 'Languages', level: 80, detail: 'OOP Concepts, Collections Framework, Multithreading', color: 'amber' },
    { name: 'Python', category: 'Languages', level: 88, detail: 'FastAPI, ML pipelines, Data Wrangling, Pandas', color: 'amber' },

    // Web & Backend
    { name: 'React.js', category: 'Web', level: 92, detail: 'State Management, Hooks, Component Lifecycle, Virtual DOM', color: 'cyan' },
    { name: 'Node.js', category: 'Web', level: 90, detail: 'Event Loop, Streams, Non-blocking I/O, REST APIs', color: 'cyan' },
    { name: 'Express.js', category: 'Web', level: 88, detail: 'Middleware Architecture, Routing, JWT Auth, API Design', color: 'cyan' },
    { name: 'FastAPI', category: 'Web', level: 85, detail: 'Async Endpoints, Pydantic, Microservices, Vector Search', color: 'cyan' },
    { name: 'HTML5 & CSS3', category: 'Web', level: 95, detail: 'Modern Flexbox/Grid, Glassmorphism, Responsive UI', color: 'cyan' },

    // Databases & Storage
    { name: 'MongoDB', category: 'Databases', level: 88, detail: 'NoSQL Schema Design, Aggregation Pipelines, Mongoose', color: 'purple' },
    { name: 'MySQL', category: 'Databases', level: 85, detail: 'Relational Schemas, Foreign Keys, Normalization', color: 'purple' },
    { name: 'ChromaDB', category: 'Databases', level: 85, detail: 'Vector Database, Dense Vector Indexing, Semantic Match', color: 'purple' },
    { name: 'MinIO', category: 'Databases', level: 82, detail: 'S3-Compatible Object Storage, Pre-signed URLs', color: 'purple' },

    // Cloud & Dev Tools
    { name: 'AWS (EC2, S3, VPC)', category: 'Cloud', level: 80, detail: 'Cloud Hosting, Object Buckets, Virtual Networks', color: 'amber' },
    { name: 'Git & GitHub', category: 'Cloud', level: 92, detail: 'Version Control, Branching Workflows, Actions', color: 'amber' },
    { name: 'Linux / Unix', category: 'Cloud', level: 88, detail: 'Shell Scripting, POSIX CLI, Process Monitoring', color: 'amber' },
    { name: 'Postman & VS Code', category: 'Cloud', level: 90, detail: 'API Automation Testing, Extensions, Debugging', color: 'amber' },

    // ML & Data Science
    { name: 'Pandas & NumPy', category: 'ML', level: 88, detail: 'Data Preprocessing, Outlier Removal, Matrices', color: 'cyan' },
    { name: 'Scikit-Learn', category: 'ML', level: 85, detail: 'Linear Regression, Lasso, Decision Trees, GridSearchCV', color: 'cyan' },
    { name: 'SentenceTransformers', category: 'ML', level: 84, detail: 'Dense Vector Embeddings, Cosine Similarity', color: 'cyan' },
    { name: 'Matplotlib', category: 'ML', level: 80, detail: 'Exploratory Data Visualizations & Charts', color: 'cyan' },
  ];

  const filteredSkills = activeTab === 'All'
    ? skillItems
    : skillItems.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MASTERY & SPELLBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            TECHNICAL SKILLS GRIMOIRE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(223,177,91,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-amber-500/40 hover:text-amber-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="arcane-card p-5 rounded-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-amber-400">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {skill.detail}
                </p>
              </div>

              {/* Glowing Progress Bar */}
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    skill.color === 'amber'
                      ? 'bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_8px_rgba(223,177,91,0.6)]'
                      : skill.color === 'cyan'
                      ? 'bg-gradient-to-r from-teal-600 to-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]'
                      : 'bg-gradient-to-r from-purple-600 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
