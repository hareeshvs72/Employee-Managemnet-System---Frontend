import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const GeneratePayslip = ({setIsOpen}) => {
  const [formData, setFormData] = useState({
    employee: 'James Thomas (Marketing)',
    month: '1',
    year: '2026',
    basicSalary: '5000',
    allowances: '0',
    deductions: '0'
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification("Payslip generation started!");
    
    setTimeout(() => {
      setNotification(null);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      

      {/* Modal Overlay */}
       (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#1e293b]">Generate Monthly Payslip</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
              
              {/* Employee Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#475569]">Employee</label>
                <div className="relative">
                  <select 
                    name="employee"
                    value={formData.employee}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 bg-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all cursor-pointer"
                  >
                    <option>James Thomas (Marketing)</option>
                    <option>Sarah Jenkins (Design)</option>
                    <option>Michael Chen (Engineering)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Month & Year Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#475569]">Month</label>
                  <div className="relative">
                    <select 
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 bg-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all cursor-pointer"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#475569]">Year</label>
                  <input 
                    type="number" 
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  />
                </div>
              </div>

              {/* Basic Salary */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#475569]">Basic Salary</label>
                <input 
                  type="text" 
                  name="basicSalary"
                  value={formData.basicSalary}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                />
              </div>

              {/* Allowances & Deductions Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#475569]">Allowances</label>
                  <input 
                    type="text" 
                    name="allowances"
                    value={formData.allowances}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#475569]">Deductions</label>
                  <input 
                    type="text" 
                    name="deductions"
                    value={formData.deductions}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end items-center space-x-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-2.5 rounded-lg border border-slate-200 text-[#475569] font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-8 py-2.5 rounded-lg bg-[#5551ff] text-white font-medium hover:bg-[#4a46e5] shadow-lg shadow-indigo-100 transition-all active:scale-95"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default GeneratePayslip;