import React, { useEffect, useState } from 'react';
import { X, Utensils, Award, Gauge, FileText, AlertTriangle, ArrowRight, CheckCircle, BadgeCheck, TrendingUp, Download } from 'lucide-react';

export default function ComplianceReport({ isOpen, onClose }) {
  const [gaugeProgress, setGaugeProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Trigger animation after a slight delay
      const timer = setTimeout(() => {
        setGaugeProgress(92);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setGaugeProgress(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (gaugeProgress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-zinc-950 w-full max-w-4xl max-h-full overflow-y-auto rounded-xl shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <header className="flex justify-between items-start p-6 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-950 z-10">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Compliance Report</h2>
            <p className="text-sm text-zinc-500 mt-1">Detailed overview of franchise operational standards and safety compliance.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors group"
          >
            <X className="text-zinc-500 group-hover:text-[var(--primary)]" size={24} />
          </button>
        </header>

        {/* Body Content */}
        <div className="p-6 space-y-12">
          {/* Bento Grid Layout for Sections */}
          <div className="grid grid-cols-12 gap-6">

            {/* Overall Health Score */}
            <section className="col-span-12 md:col-span-4 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-center space-y-4 shadow-sm">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider self-start">Overall Health</h3>
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle className="stroke-zinc-200 dark:stroke-zinc-700" cx="50" cy="50" fill="transparent" r="45" strokeWidth="8"></circle>
                  <circle
                    className="stroke-[var(--primary)] transition-all duration-1000 ease-out"
                    cx="50" cy="50" fill="transparent" r="45"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeWidth="8"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">92%</span>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-0.5 rounded-full mt-1">Healthy</span>
                </div>
              </div>
              <p className="text-sm text-zinc-500 text-center">Across 42 franchise locations, operational standards remain above the target threshold.</p>
            </section>

            {/* Compliance Breakdown */}
            <section className="col-span-12 md:col-span-8 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Compliance Breakdown</h3>
              <div className="space-y-4">
                {/* Food Safety */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                    <Utensils size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Food Safety</span>
                      <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">98% (Excellent)</span>
                    </div>
                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <CheckCircle className="text-emerald-600 dark:text-emerald-400" size={24} />
                </div>

                {/* Brand Identity */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                    <Award size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Brand Identity</span>
                      <span className="text-sm font-semibold text-[var(--primary)]">94% (High)</span>
                    </div>
                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--primary)] rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <BadgeCheck className="text-[var(--primary)]" size={24} />
                </div>

                {/* Operational Efficiency */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                    <Gauge size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Operational Efficiency</span>
                      <span className="text-sm font-semibold text-[var(--secondary)]">88% (Good)</span>
                    </div>
                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--secondary)] rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <TrendingUp className="text-[var(--secondary)]" size={24} />
                </div>

                {/* Documentation */}
                <div className="flex items-center gap-4 p-2 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">Documentation</span>
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">72% (Needs Attention)</span>
                    </div>
                    <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
                </div>
              </div>
            </section>

            {/* Recent Audits Table */}
            <section className="col-span-12 md:col-span-7 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Recent Audits</h3>
                <button className="text-[var(--primary)] font-semibold text-sm flex items-center gap-1 hover:underline">
                  View All <ArrowRight size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-zinc-50 dark:bg-zinc-900">
                    <tr>
                      <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Date</th>
                      <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Franchise ID</th>
                      <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Score</th>
                      <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">Oct 24, 2024</td>
                      <td className="px-4 py-4 font-mono text-sm text-zinc-500">PV-DEL-001</td>
                      <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">96/100</td>
                      <td className="px-4 py-4">
                        <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Pass</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">Oct 22, 2024</td>
                      <td className="px-4 py-4 font-mono text-sm text-zinc-500">PV-MUM-042</td>
                      <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">84/100</td>
                      <td className="px-4 py-4">
                        <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Pass</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-4 py-4 text-sm text-zinc-700 dark:text-zinc-300">Oct 21, 2024</td>
                      <td className="px-4 py-4 font-mono text-sm text-zinc-500">PV-BLR-019</td>
                      <td className="px-4 py-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">68/100</td>
                      <td className="px-4 py-4">
                        <span className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Fail</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Critical Issues */}
            <section className="col-span-12 md:col-span-5 p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">Critical Issues</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Urgent</span>
                    <span className="font-mono text-xs text-zinc-500">PV-DEL-001</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Missing Fire Safety Certificate</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Renewal overdue by 14 days. Immediate risk of closure.</p>
                </div>
                <div className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Urgent</span>
                    <span className="font-mono text-xs text-zinc-500">PV-BLR-019</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Cold Storage Temperature Violation</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Sensors detected fluctuations above 5°C for over 2 hours.</p>
                </div>
                <div className="p-4 rounded-lg border-l-4 border-[var(--secondary)] bg-[var(--secondary)]/5 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="bg-[var(--secondary)] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Warning</span>
                    <span className="font-mono text-xs text-zinc-500">GLOBAL</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Quarterly Training Deficit</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">12% of staff haven't completed the seasonal hygiene module.</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Actions */}
        <footer className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex justify-end gap-4 sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Close
          </button>
          <button className="px-6 py-2 rounded-lg bg-[var(--primary)] text-white font-semibold text-sm flex items-center gap-2 hover:brightness-110 shadow-sm active:scale-95 transition-all">
            <Download size={20} />
            Download PDF
          </button>
        </footer>
      </div>
    </div>
  );
}
