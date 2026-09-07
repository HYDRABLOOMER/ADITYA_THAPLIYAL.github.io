import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Copy, Check, Send, Sparkles, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ onOpenResumeModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('athapliyaal1234@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 8171349541');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#dfb15b', '#2dd4bf', '#a855f7'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUMMONING SHRINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-slate-100">
            INITIATE CONTACT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="space-y-6">
            <div className="arcane-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-cinzel text-slate-100 mb-2">
                Let's Build Something Exceptional
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-8">
                Open for full-stack engineering roles, systems C++ development, ML research collaborations, or technical discussions.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-amber-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Email Channel</span>
                      <span className="block text-sm font-semibold text-slate-100">athapliyaal1234@gmail.com</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-amber-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-teal-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Phone / WhatsApp</span>
                      <span className="block text-sm font-semibold text-slate-100">+91 8171349541</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-slate-400 hover:text-teal-400 transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/80 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Current Location</span>
                    <span className="block text-sm font-semibold text-slate-100">Dehradun, Uttarakhand, India</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block mb-3">Professional Profiles</span>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="https://github.com/HYDRABLOOMER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500/40 hover:text-amber-300 transition-all text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-amber-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-teal-500/40 hover:text-teal-300 transition-all text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-teal-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://leetcode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-purple-500/40 hover:text-purple-300 transition-all text-xs font-medium"
                  >
                    <Code className="w-4 h-4 text-purple-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Button Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 flex items-center justify-between">
              <div>
                <h4 className="font-cinzel font-bold text-amber-300 text-base">Aditya's Resume PDF</h4>
                <p className="text-xs text-slate-300">View or download complete resume document</p>
              </div>
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Open PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="arcane-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-cinzel text-slate-100 mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to reach Aditya directly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/40 text-center space-y-2 my-8">
                <Check className="w-10 h-10 text-teal-400 mx-auto" />
                <h4 className="font-cinzel text-lg font-bold text-teal-300">Transmission Sent!</h4>
                <p className="text-xs text-slate-300">Thank you for reaching out. Aditya will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-500/60 text-slate-100 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(223,177,91,0.4)] hover:shadow-[0_0_28px_rgba(223,177,91,0.6)] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
