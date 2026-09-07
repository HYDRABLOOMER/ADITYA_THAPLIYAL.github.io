import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Cpu, Sparkles } from 'lucide-react';

export default function RunicTerminal() {
  const [history, setHistory] = useState([
    { text: 'Arcane OS v2.4 (x86_64-systems-linux-cpp17)', type: 'system' },
    { text: 'Type "help" or "redislite" to interact with Aditya\'s system REPL.', type: 'system' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [kvStore, setKvStore] = useState({
    author: 'Aditya Thapliyal',
    gate_air: '5820',
    cgpa: '8.7',
    favorite_lang: 'C++',
  });

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { text: `at@arcane-shell:~$ ${cmd}`, type: 'user' }];
    const parts = cmd.split(' ');
    const mainCmd = parts[0].toLowerCase();

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE ARCANE COMMANDS:
  • help           - Show this help menu
  • about          - Display bio & education
  • skills         - Print technical skills & mastery
  • projects       - List major engineering works
  • gate           - Show GATE 2026 CS scorecard details
  • redislite      - Interactive C++ Key-Value store demo
                     Usage: redislite set <key> <value>
                            redislite get <key>
                            redislite keys
  • contact        - Display contact channels
  • clear          - Clear terminal history`,
          type: 'output',
        });
        break;

      case 'about':
        newHistory.push({
          text: `NAME: Aditya Thapliyal
LOCATION: Dehradun, India
DEGREE: B.Tech CSE (4th Year) @ Graphic Era Hill University (CGPA 8.7/10)
SPECIALIZATION: C++ High Performance Systems, Full-Stack Web Development, Vector AI Microservices.`,
          type: 'output',
        });
        break;

      case 'skills':
        newHistory.push({
          text: `LANGUAGES: C++17 (DSA/STL), JavaScript, SQL, Java, Python
WEB & BACKEND: React.js, Node.js, Express.js, FastAPI, HTML5/CSS3
DATABASES & VECTOR: MongoDB, MySQL, ChromaDB (Vector DB), MinIO
ML & DATA SCIENCE: SentenceTransformers, Pandas, NumPy, Scikit-learn`,
          type: 'output',
        });
        break;

      case 'projects':
        newHistory.push({
          text: `1. Connect-V-2.0  [React + FastAPI + ChromaDB + MinIO]
   -> AI-powered team formation with dense vector cosine similarity.
2. RedisLite       [C++17 + STL + Custom Binary Serialization]
   -> In-memory key-value store with TTL min-heap & lazy expiration.
3. Esti-MATE       [Python + Scikit-learn + Flask + Streamlit]
   -> Bengaluru house price prediction with 84.52% R2 score.`,
          type: 'output',
        });
        break;

      case 'gate':
        newHistory.push({
          text: `GATE 2026 (Computer Science & Information Technology)
Status: QUALIFIED
All India Rank (AIR): 5820
GATE Score: 529
Percentile: 97.24%`,
          type: 'output',
        });
        break;

      case 'redislite':
        if (parts[1] === 'set' && parts[2] && parts[3]) {
          const k = parts[2];
          const v = parts.slice(3).join(' ');
          setKvStore((prev) => ({ ...prev, [k]: v }));
          newHistory.push({ text: `[RedisLite REPL] OK: Key '${k}' stored successfully in memory heap.`, type: 'success' });
        } else if (parts[1] === 'get' && parts[2]) {
          const k = parts[2];
          const val = kvStore[k];
          if (val !== undefined) {
            newHistory.push({ text: `[RedisLite REPL] "${val}"`, type: 'success' });
          } else {
            newHistory.push({ text: `[RedisLite REPL] (nil) - Key '${k}' not found or expired.`, type: 'error' });
          }
        } else if (parts[1] === 'keys') {
          const keys = Object.keys(kvStore).join(', ');
          newHistory.push({ text: `[RedisLite REPL] Existing Keys: [ ${keys} ]`, type: 'output' });
        } else {
          newHistory.push({
            text: `[RedisLite C++ Store Usage]:
  • redislite set <key> <val>
  • redislite get <key>
  • redislite keys`,
            type: 'output',
          });
        }
        break;

      case 'contact':
        newHistory.push({
          text: `EMAIL: athapliyaal1234@gmail.com
PHONE: +91 8171349541
GITHUB: github.com/HYDRABLOOMER
LINKEDIN: linkedin.com/in/aditya-thapliyal
LEETCODE: leetcode.com/ADITYA_THAPLIYAL`,
          type: 'output',
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
          type: 'error',
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>SYSTEM INTERACTIVE REPL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            INTERACTIVE RUNIC TERMINAL
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-2">
            Try standard commands or test <span className="text-amber-400">redislite set/get</span> C++ in-memory REPL commands below.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="arcane-card rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl">
          {/* Title bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                aditya@arcane-system-shell ~ (zsh / c++)
              </span>
            </div>

            <button
              onClick={() => setHistory([])}
              className="text-xs font-mono text-slate-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 bg-slate-950/95 font-mono text-xs sm:text-sm min-h-[320px] max-h-[450px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === 'user'
                    ? 'text-amber-300 font-semibold'
                    : item.type === 'success'
                    ? 'text-teal-400'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : 'text-slate-300 whitespace-pre-wrap'
                }
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Prompt Form */}
          <form onSubmit={handleCommand} className="bg-slate-900/90 border-t border-slate-800 px-4 py-3 flex items-center gap-2">
            <span className="text-amber-400 font-mono font-bold text-xs sm:text-sm">at@arcane-shell:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help' or 'redislite set key val'..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-600"
            />
            <button type="submit" className="text-amber-400 hover:text-amber-300 p-1">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
