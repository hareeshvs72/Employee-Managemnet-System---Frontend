
import React, { useState } from 'react';
import { Download, FileText, ChevronRight, User, Bell, LogOut } from 'lucide-react';
import GeneratePayslip from '../components/GeneratePayslip';

const Payslip = () => {
  // Mock data representing the payslip history
  const [isAdmin,setIsAdmin]= useState(true)
  const [isOpen, setIsOpen] = useState(true);
  const [payslips] = useState([
    { id: 1, period: 'January 2026', basicSalary: 1000, netSalary: 1000 },
    { id: 2, period: 'December 2025', basicSalary: 1000, netSalary: 1000 },
    { id: 3, period: 'November 2025', basicSalary: 1000, netSalary: 1000 },
  ]);

  const handleDownload = (period) => {
    // In a real Payslip, this would trigger a PDF generation or download link
    console.log(`Downloading payslip for ${period}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      

      <main className="max-w-6xl mx-auto p-6 md:p-10 ">
        {/* Header Section */}
        <header className="mb-8 flex justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Payslips</h1>
            <p className="text-slate-500">Your payslip history</p>
          </div>
      {isAdmin &&     <button onClick={()=>setIsOpen(true)} className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md 
                   hover:bg-indigo-700 active:scale-95 transition duration-200">
  Generate Payslip
</button>}
        </header>

        {/* Table Container */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                { isAdmin && <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Employee</th>}
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Period</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Basic Salary</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">Net Salary</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {payslips.map((slip) => (
                  <tr 
                    key={slip.id} 
                    className="hover:bg-slate-50/30 transition-colors group"
                  >
                    {isAdmin && <td className="px-6 py-5 text-sm font-medium text-slate-600">
                     emply name
                    </td>}
                    <td className="px-6 py-5 text-sm font-medium text-slate-600">
                      {slip.period}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-500">
                      ${slip.basicSalary.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-slate-900">
                      ${slip.netSalary.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button 
                        onClick={() => handleDownload(slip.period)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#eff6ff] text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-transparent"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {payslips.length === 0 && (
            <div className="py-20 text-center">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-slate-400 w-6 h-6" />
              </div>
              <p className="text-slate-500 text-sm">No payslips found for your account.</p>
            </div>
          )}
        </div>

      
      </main>

        {isOpen &&
        
         <GeneratePayslip setIsOpen={setIsOpen}/>
        }

    </div>
  );
};

export default Payslip;