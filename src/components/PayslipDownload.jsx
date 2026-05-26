import React, { useEffect, useState } from 'react';
import { Printer } from 'lucide-react'; // Optional: for a nice icon
import { useParams } from 'react-router-dom';
import api from '../services/axios';

const PayslipDownload = () => {
    const [loading,setLoading] = useState(false)
    const [data,setData]= useState()
//   const data = {
//     name: "David Musk",
//     position: "Software Developer",
//     email: "david@example.com",
//     period: "January 2026",
//     basicSalary: 1000,
//     allowances: 100,
//     deductions: 0,
//     netSalary: 0
//   };
  const {id}= useParams()

  const handlePrint = () => {
    window.print();
  };

   const getMonthYear = (month, year) => {
  const date = new Date(year, month - 1);

  return date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
};
const handilePaySlip = async () => {
    try {
        setLoading(true)
        if(id){
            const {data}= await  api.get(`/payslips/${id}`)
            console.log(data.data);
            setData(data.data)
        }
    } catch (error) {
        console.log(error);
        
    }
}
useEffect(()=>{
    handilePaySlip()
},[])
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-2xl font-bold text-slate-800 uppercase tracking-wider">Payslip</h1>
          <p className="text-slate-500 mt-1">{data?.period}</p>
        </div>

        <hr className="mx-8 border-gray-100" />

        {/* Employee Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">Employee Name</p>
            <p className="text-lg font-bold text-slate-800 mt-1">{data?.employeeId?.firstName}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">Position</p>
            <p className="text-lg font-bold text-slate-800 mt-1">{data?.employeeId?.position}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">Email</p>
            <p className="text-lg font-bold text-slate-800 mt-1">{data?.employeeId?.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">Period</p>
            <p className="text-lg font-bold text-slate-800 mt-1">{getMonthYear(data?.month, data?.year)}</p>
                                 

          </div>
        </div>

        {/* Salary Breakdown Table */}
        <div className="px-8 pb-8">
          <div className="border border-slate-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-50 p-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase">Description</span>
              <span className="text-xs font-bold text-slate-500 uppercase text-right">Amount</span>
            </div>
            
            <div className="space-y-0">
              <div className="grid grid-cols-2 p-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <span className="text-slate-600">Basic Salary</span>
                <span className="font-bold text-slate-800 text-right">${data?.basicSalary?.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <span className="text-slate-600">Allowances</span>
                <span className="font-bold text-green-600 text-right">+${data?.allowance?.toLocaleString()}</span>
              </div>
              <div className="grid grid-cols-2 p-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <span className="text-slate-600">Deductions</span>
                <span className="font-bold text-red-500 text-right">-${data?.deduction}</span>
              </div>
              <div className="grid grid-cols-2 p-4 bg-slate-50/30">
                <span className="text-lg font-bold text-slate-800">Net Salary</span>
                <span className="text-lg font-extrabold text-slate-900 text-right">
                  ${data?.netSalary.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Button - Hidden during print */}
      <div className="mt-8 flex justify-center print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform transition-all active:scale-95"
        >
          <Printer size={18} />
          Print Payslip
        </button>
      </div>

      {/* Print-specific Styles */}
      <style jsx global>{`
        @media print {
          body { background: white; }
          .print\:hidden { display: none !important; }
          .shadow-sm { shadow: none !important; border: 1px solid #eee; }
        }
      `}</style>
    </div>
  );
};

export default PayslipDownload;