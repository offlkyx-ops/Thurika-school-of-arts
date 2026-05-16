import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, RotateCcw, Download, AlertCircle, Loader2, Trophy, GraduationCap, FileText, Medal, Crown, Star } from 'lucide-react';
import { RESULTS_DATA, StudentResult } from '../data/results';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function Results() {
  const [searchName, setSearchName] = useState('');
  const [searchRoll, setSearchRoll] = useState('');
  const [searchGrade, setSearchGrade] = useState('');
  const [result, setResult] = useState<StudentResult | null>(null);
  const [searching, setSearching] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pdfTemplateRef = useRef<HTMLDivElement>(null);

  const getRankInfo = (student: StudentResult | null) => {
    if (!student) return null;
    const studentsInGrade = RESULTS_DATA.filter(s => s.grade === student.grade)
      .sort((a, b) => b.total - a.total);
    const index = studentsInGrade.findIndex(s => s.roll === student.roll);
    if (index >= 0 && index < 3) {
      return {
        rank: index + 1,
        isTopper: true
      };
    }
    return { rank: index + 1, isTopper: false };
  };

  const rankInfo = getRankInfo(result);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setError(null);
    setResult(null);

    // Simulate network delay for professional feel
    setTimeout(() => {
      let found: StudentResult | undefined;

      if (searchRoll) {
        found = RESULTS_DATA.find(s => s.roll.toString() === searchRoll);
      } else if (searchName && searchGrade) {
        found = RESULTS_DATA.find(s => 
          s.name.toLowerCase().includes(searchName.toLowerCase()) && 
          s.grade === searchGrade
        );
      }

      if (found) {
        setResult(found);
      } else {
        setError("Student not found. Please verify the Roll Number or Name & Grade.");
      }
      setSearching(false);
    }, 800);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setSearchName('');
    setSearchRoll('');
    setSearchGrade('');
  };

  const handleDownloadPDF = async () => {
    if (!pdfTemplateRef.current || !result) return;
    
    setDownloading(true);
    try {
      const element = pdfTemplateRef.current;
      // Temporarily remove hidden and off-screen positioning to capture
      element.classList.remove('hidden');
      element.classList.add('block');
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Thurika_Result_${result.roll}_${result.name.replace(/\s+/g, '_')}.pdf`);
      
      element.classList.add('hidden');
      element.classList.remove('block');
    } catch (err) {
      console.error("PDF Generation failed:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-charcoal/5 text-charcoal/40 font-black text-[10px] uppercase tracking-widest mb-8">
              Official Portal
            </div>
            <h1 className="text-4xl md:text-8xl font-medium text-charcoal tracking-tight mb-6">
              EXAM RESULTS.
            </h1>
            <p className="text-charcoal/40 text-xl max-w-md mx-auto italic font-serif">
              A secure environment for accessing official academic performance evaluations.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!result && (
              <motion.div
                key="search-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-zinc-50 rounded-3xl p-6 md:p-16 border border-charcoal/5"
              >
                <form onSubmit={handleSearch} className="space-y-8 md:space-y-12">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Candidate ID (Roll)</label>
                      <input 
                        type="number"
                        value={searchRoll}
                        onChange={(e) => setSearchRoll(e.target.value)}
                        placeholder="e.g. 1115"
                        className="w-full bg-white border border-charcoal/10 px-8 py-5 rounded-2xl focus:border-charcoal outline-none transition-all placeholder:text-charcoal/10 font-bold text-xl"
                      />
                    </div>

                    <div className="flex items-center justify-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">OR</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Candidate Name</label>
                      <input 
                        type="text"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        placeholder="e.g. Mruthula R"
                        className="w-full bg-white border border-charcoal/10 px-8 py-5 rounded-2xl focus:border-charcoal outline-none transition-all placeholder:text-charcoal/10 font-bold text-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">Grade / Class</label>
                      <select 
                        value={searchGrade}
                        onChange={(e) => setSearchGrade(e.target.value)}
                        className="w-full bg-white border border-charcoal/10 px-8 py-5 rounded-2xl focus:border-charcoal outline-none transition-all font-bold text-xl appearance-none cursor-pointer"
                      >
                        <option value="">Select Category</option>
                        <option value="PRE">PRE</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-xs font-black uppercase tracking-widest text-center"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button 
                    type="submit"
                    disabled={searching || (!searchRoll && (!searchName || !searchGrade))}
                    className="w-full bg-charcoal text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    {searching ? "Authentication in progress..." : "Verify Identity"}
                  </button>
                </form>
              </motion.div>
            )}

            {result && (
              <motion.div
                key="result-display"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 md:space-y-12"
              >
                <div className={`bg-white border rounded-3xl p-6 md:p-16 shadow-2xl relative overflow-hidden transition-all duration-700 ${
                  rankInfo?.rank === 1 ? 'border-yellow-200 ring-4 ring-yellow-400/10' : 
                  rankInfo?.rank === 2 ? 'border-slate-200 ring-4 ring-slate-400/10' :
                  rankInfo?.rank === 3 ? 'border-orange-200 ring-4 ring-orange-400/10' :
                  'border-charcoal/5'
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-8 md:gap-12 relative z-0">
                    <div className="space-y-2 md:space-y-4 w-full">
                      <div className="flex flex-wrap gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">ID: {result.roll}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">CLASS {result.grade}</span>
                        {rankInfo?.isTopper && (
                          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                            rankInfo.rank === 1 ? 'bg-yellow-400/10 text-yellow-600' :
                            rankInfo.rank === 2 ? 'bg-slate-400/10 text-slate-600' :
                            'bg-orange-400/10 text-orange-600'
                          }`}>
                            Topper List
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-charcoal break-words">{result.name}</h2>
                    </div>
                    <div className="text-left md:text-right w-full md:w-auto flex flex-col items-start md:items-end gap-6">
                      {rankInfo?.isTopper && (
                        <motion.div 
                          initial={{ scale: 0, y: 10 }}
                          animate={{ scale: 1, y: 0 }}
                          className={`p-3 md:p-4 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-xl border ${
                            rankInfo.rank === 1 ? 'bg-yellow-400/10 text-yellow-600 border-yellow-200' :
                            rankInfo.rank === 2 ? 'bg-slate-400/10 text-slate-600 border-slate-200' :
                            'bg-orange-400/10 text-orange-600 border-orange-200'
                          }`}
                        >
                          {rankInfo.rank === 1 ? <Crown size={20} className="md:w-6 md:h-6" /> : rankInfo.rank === 2 ? <Medal size={20} className="md:w-6 md:h-6" /> : <Star size={20} className="md:w-6 md:h-6" />}
                          <div className="flex flex-col items-start md:items-end">
                            <span className="text-[8px] font-black opacity-40 uppercase tracking-widest">Merit Rank</span>
                            <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">
                              {rankInfo.rank === 1 ? 'First Place' : rankInfo.rank === 2 ? 'Second Place' : 'Third Place'}
                            </span>
                          </div>
                        </motion.div>
                      )}
                      <div>
                        <p className="text-6xl md:text-8xl font-medium text-charcoal leading-none whitespace-nowrap">{result.final}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/20 mt-2 md:mt-4">OVERALL GRADE</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto -mx-6 md:-mx-16 px-6 md:px-16">
                    <table className="w-full text-left min-w-[320px]">
                      <thead>
                        <tr className="border-b border-charcoal/5">
                          <th className="pb-4 md:pb-8 text-[10px] font-black uppercase tracking-widest text-charcoal/30">Component</th>
                          <th className="pb-4 md:pb-8 text-[10px] font-black uppercase tracking-widest text-charcoal/30 text-center">Max</th>
                          <th className="pb-4 md:pb-8 text-[10px] font-black uppercase tracking-widest text-charcoal/30 text-center px-4">Obtained</th>
                          <th className="pb-4 md:pb-8 text-[10px] font-black uppercase tracking-widest text-charcoal/30 text-right">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-charcoal/5 group">
                          <td className="py-6 md:py-10 text-sm md:text-xl font-bold italic font-serif leading-tight">Practical Assessment</td>
                          <td className="py-6 md:py-10 text-center font-bold text-charcoal/30 text-sm md:text-base">40</td>
                          <td className="py-6 md:py-10 text-center font-bold text-xl md:text-3xl px-4">{result.practical}</td>
                          <td className="py-6 md:py-10 text-right">
                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 md:px-4 md:py-2 bg-green-50 text-green-500 rounded-full">Pass</span>
                          </td>
                        </tr>
                        <tr className="border-b border-charcoal/5 group">
                          <td className="py-6 md:py-10 text-sm md:text-xl font-bold italic font-serif leading-tight">Theory Examination</td>
                          <td className="py-6 md:py-10 text-center font-bold text-charcoal/30 text-sm md:text-base">60</td>
                          <td className="py-6 md:py-10 text-center font-bold text-xl md:text-3xl px-4">{result.theory}</td>
                          <td className="py-6 md:py-10 text-right">
                            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 md:px-4 md:py-2 bg-green-50 text-green-500 rounded-full">Pass</span>
                          </td>
                        </tr>
                        <tr className="bg-zinc-50/50">
                          <td className="p-6 md:p-10 text-base md:text-2xl font-black uppercase tracking-tighter leading-tight">Grand Total</td>
                          <td className="p-6 md:p-10 text-center text-sm md:text-xl font-bold text-charcoal/20">100</td>
                          <td className="p-6 md:p-10 text-center text-3xl md:text-5xl font-black px-4">{result.total}</td>
                          <td className="p-6 md:p-10 text-right">
                            <div className="flex flex-col items-end">
                              <span className="text-xl md:text-3xl font-black text-charcoal">{((result.total / 100) * 100).toFixed(1)}%</span>
                              <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/20">Mean</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
                  <button 
                    onClick={handleReset}
                    className="w-full sm:w-auto px-12 py-5 bg-white border border-charcoal/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-charcoal transition-colors order-2 sm:order-1"
                  >
                    Search Again
                  </button>
                  <button 
                    onClick={handleDownloadPDF}
                    disabled={downloading}
                    className="w-full sm:w-auto px-12 py-5 bg-charcoal text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors shadow-2xl disabled:opacity-30 order-1 sm:order-2"
                  >
                    {downloading ? "Generating..." : "Download Transcript"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hidden PDF Template Section (This will be captured by html2canvas) */}
          {result && (
            <div 
              ref={pdfTemplateRef}
              className="hidden fixed -left-[9999px] top-0 w-[210mm] bg-white p-[20mm]"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#ffffff',
                color: '#1A1A1A'
              }}
            >
              <div className="text-center mb-12 border-b-2 border-[#1A1A1A] pb-8">
                <h1 className="text-4xl font-black mb-2 tracking-tighter" style={{ color: '#1A1A1A' }}>THURIKA SCHOOL OF ARTS</h1>
                <p className="text-sm tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>Official Examination Transcript</p>
                <div className="flex justify-center gap-8 text-xs font-bold" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>
                  <span>TERM: MAY 2026</span>
                  <span>BOARD: ARTISTIC EXCELLENCE</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-12">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: 'rgba(26, 26, 26, 0.3)' }}>Candidate Name</p>
                  <p className="text-3xl font-black" style={{ color: '#1A1A1A' }}>{result.name}</p>
                </div>
                <div className="flex justify-end gap-12">
                  {rankInfo?.isTopper && (
                    <div className="space-y-2 text-right">
                      <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: '#ec4899' }}>Class Rank</p>
                      <p className="text-xl font-bold" style={{ color: '#1A1A1A' }}>{rankInfo.rank}</p>
                    </div>
                  )}
                  <div className="space-y-2 text-right">
                    <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: 'rgba(26, 26, 26, 0.3)' }}>Roll Number</p>
                    <p className="text-xl font-bold" style={{ color: '#1A1A1A' }}>{result.roll}</p>
                  </div>
                  <div className="space-y-2 text-right">
                    <p className="text-[10px] uppercase font-black tracking-widest" style={{ color: 'rgba(26, 26, 26, 0.3)' }}>Grade / Class</p>
                    <p className="text-xl font-bold" style={{ color: '#1A1A1A' }}>{result.grade}</p>
                  </div>
                </div>
              </div>

              <table className="w-full border-collapse mb-16" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(26, 26, 26, 0.05)' }}>
                    <th className="p-4 text-left text-xs font-black uppercase tracking-widest">Subject / Component</th>
                    <th className="p-4 text-center text-xs font-black uppercase tracking-widest">Max Marks</th>
                    <th className="p-4 text-center text-xs font-black uppercase tracking-widest">Obtained</th>
                    <th className="p-4 text-center text-xs font-black uppercase tracking-widest">Result Status</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid rgba(26, 26, 26, 0.1)' }}>
                  <tr style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
                    <td className="p-4 py-8 font-bold" style={{ color: 'rgba(26, 26, 26, 0.7)' }}>Practical Assessment</td>
                    <td className="p-4 py-8 text-center font-mono">40</td>
                    <td className="p-4 py-8 text-center font-mono font-black text-xl">{result.practical}</td>
                    <td className="p-4 py-8 text-center">
                      <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ backgroundColor: '#f0fdf4', color: '#22c55e', border: '1px solid #dcfce7' }}>Distinction</span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
                    <td className="p-4 py-8 font-bold" style={{ color: 'rgba(26, 26, 26, 0.7)' }}>Theory Examination</td>
                    <td className="p-4 py-8 text-center font-mono">60</td>
                    <td className="p-4 py-8 text-center font-mono font-black text-xl">{result.theory}</td>
                    <td className="p-4 py-8 text-center">
                      <span className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ backgroundColor: '#f0fdf4', color: '#22c55e', border: '1px solid #dcfce7' }}>Distinction</span>
                    </td>
                  </tr>
                  <tr className="font-bold" style={{ backgroundColor: 'rgba(26, 26, 26, 0.05)' }}>
                    <td className="p-6 py-10 text-2xl font-black">Grand Total</td>
                    <td className="p-6 py-10 text-center text-2xl font-mono" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>100</td>
                    <td className="p-6 py-10 text-center text-4xl font-mono font-black">{result.total}</td>
                    <td className="p-6 py-10 text-center">
                      <div className="flex flex-col items-center">
                        <p className="text-3xl font-black">GRADE {result.final}</p>
                        <p className="text-[10px] uppercase font-black tracking-[0.3em]" style={{ color: 'rgba(26, 26, 26, 0.3)' }}>Overall Result</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid grid-cols-2 gap-24 pt-24">
                <div className="text-center pt-8" style={{ borderTop: '2px dashed rgba(26, 26, 26, 0.1)' }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>Authenticated By</p>
                  <p className="text-sm font-bold" style={{ color: '#1A1A1A' }}>Controller of Examinations</p>
                </div>
                <div className="text-center pt-8" style={{ borderTop: '2px dashed rgba(26, 26, 26, 0.1)' }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'rgba(26, 26, 26, 0.4)' }}>School Seal</p>
                  <p className="text-sm font-bold" style={{ color: '#1A1A1A' }}>Principal Signature</p>
                </div>
              </div>

              <div className="mt-32 text-center">
                <div className="inline-block p-4 border rounded-2xl" style={{ borderColor: 'rgba(26, 26, 26, 0.1)' }}>
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black" style={{ color: 'rgba(26, 26, 26, 0.2)' }}>
                    Verification Code: {result.roll}-{Math.random().toString(36).substring(7).toUpperCase()}
                  </p>
                </div>
                <p className="mt-6 text-[8px] uppercase tracking-widest" style={{ color: 'rgba(26, 26, 26, 0.3)' }}>
                  This is a secure electronic transcript generated by the Thurika School of Arts management portal.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
