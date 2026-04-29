import React, { useState } from 'react';
import { 
  Plus, 
  Thermometer, 
  Umbrella, 
  Palmtree, 
  X,
  ChevronDown,
  Check,
  
} from 'lucide-react';

const Leave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [isAdmin,setIsAdmin] = useState(true)
  const [formData, setFormData] = useState({
    type: 'Sick Leave',
    startDate: '',
    endDate: '',
    reason: ''
  });

  // Calculate totals based on leave type
  const totals = {
    'Sick Leave': leaves.filter(l => l.type === 'Sick Leave').length,
    'Casual Leave': leaves.filter(l => l.type === 'Casual Leave').length,
    'Annual Leave': leaves.filter(l => l.type === 'Annual Leave').length,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLeave = {
      id: Date.now(),
      ...formData,
      status: 'Pending',
      dates: `${formData.startDate} to ${formData.endDate}`
    };
    setLeaves([newLeave, ...leaves]);
    setIsModalOpen(false);
    setFormData({ type: 'Sick Leave', startDate: '', endDate: '', reason: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 ">
        <div>
          <h1 className="text-2xl font-bold text-[#1e293b]">Leave Management</h1>
          <p className="text-slate-500 text-sm">Your leave history and requests</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
        >
          <Plus size={18} />
          Apply for Leave
        </button>
      </div>

      {/* Summary Statistics Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard 
          icon={<Thermometer className="text-slate-600" size={24} />}
          title="Sick Leave"
          count={totals['Sick Leave']}
          borderColor="border-l-slate-400"
        />
        <SummaryCard 
          icon={<Umbrella className="text-slate-600" size={24} />}
          title="Casual Leave"
          count={totals['Casual Leave']}
          borderColor="border-l-slate-400"
        />
        <SummaryCard 
          icon={<Palmtree className="text-slate-600" size={24} />}
          title="Annual Leave"
          count={totals['Annual Leave']}
          borderColor="border-l-slate-400"
        />
      </div>

      {/* Leave History Table */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-1/4">Type</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-1/4">Dates</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-1/4">Reason</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-1/4">Status</th>
                {isAdmin && <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider w-1/4">Action</th>
}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {leaves.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-400 font-medium">
                    No leave applications found
                  </td>
                </tr>
              ) : (
                leaves.map((leave) => (
                  <tr key={leave.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-700">{leave.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{leave.dates}</td>
                    <td className="px-6 py-4 text-sm text-slate-500 truncate max-w-[200px]">{leave.reason}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        {leave.status}
                      </span>
                      </td>
                    {isAdmin && 
                    
                     <td>
                        <button 
                               
                                className="p-1.5 mx-1 bg-emerald-50 text-emerald-600 rounded-md hover:bg-emerald-100 transition-colors"
                                title="Approve"
                              >
                                <Check size={14} />
                              </button>
                                 <button 
                             
                              className="p-1.5 bg-rose-50 text-rose-600 rounded-md hover:bg-rose-100 transition-colors"
                              title="Reject"
                            >
                              <X size={14} />
                            </button>
                     </td>}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">Request Leave</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Leave Type</label>
                <div className="relative">
                  <select 
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none"
                  >
                    <option>Sick Leave</option>
                    <option>Casual Leave</option>
                    <option>Annual Leave</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Start Date</label>
                  <input 
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">End Date</label>
                  <input 
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Reason</label>
                <textarea 
                  required
                  rows="3"
                  placeholder="Tell us why you need leave..."
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-[#6366f1] text-white rounded-lg font-semibold hover:bg-[#4f46e5] shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Subcomponent for stats display
const SummaryCard = ({ icon, title, count, borderColor }) => (
  <div className={`bg-white p-6 rounded-xl border border-slate-200 border-l-4 ${borderColor} shadow-sm flex items-center gap-5 transition-transform hover:translate-y-[-2px]  hover:text-blue-400 hover:border-l-blue-400 `}>
    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
      {icon}
    </div>
    <div>
      <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-slate-800">{count}</span>
        <span className="text-xs text-slate-400 font-medium lowercase">taken</span>
      </div>
    </div>
  </div>
);

export default Leave;