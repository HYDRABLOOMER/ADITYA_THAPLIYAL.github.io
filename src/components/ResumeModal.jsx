import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="arcane-card max-w-4xl w-full h-[90vh] rounded-2xl flex flex-col relative border border-amber-500/50 shadow-2xl overflow-hidden">
        {/* Modal Bar */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-cinzel font-bold text-slate-100 text-sm sm:text-base">
                ADITYA THAPLIYAL — RESUME
              </h3>
              <span className="text-[11px] font-mono text-amber-400/80">ADITYA UL.pdf</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="./ADITYA UL.pdf"
              download="Aditya_Thapliyal_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href="./ADITYA UL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-amber-300 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-amber-400 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="flex-1 bg-slate-900 w-full h-full relative">
          <iframe
            src="./ADITYA UL.pdf"
            title="Aditya Thapliyal Resume PDF"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
