import React, { useState } from 'react';
import api from '../services/axios';
import toast from 'react-hot-toast';

const LockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className="w-6 h-6 text-slate-800"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const CloseIcon = ({ onClick }) => (
  <button 
    onClick={onClick} 
    className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-50 focus:outline-none"
    aria-label="Close modal"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function Changepassword({ isModal ,setIsModal }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  if (!isModal) return null;

  const handleSubmit = async (e) => {
          e.preventDefault();

    try {
    setError('');
      
    if (!currentPassword) {
      setError('Current password is required.');
      return;
    }
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
      return;
    }
const reqBoady = {
    currentPassword,
    newPassword
    
}
  const result = await api.put("/auth/chnage-password",reqBoady) 
  console.log(result);
     
    // Reset state & Close
    setCurrentPassword('');
    setNewPassword('');
    isModal(false)
    } catch (error) {
               toast.error(error?.response?.data?.error)

    }
   };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Darkened Backdrop with blur mimicking image_00d21c.png */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-300"
        onClick={(e)=>setIsModal(false)}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[500px] rounded-[32px] shadow-2xl border border-slate-100 p-8 transform transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <LockIcon />
            <span className="text-[20px] font-semibold text-slate-900 tracking-tight">
              Change Password
            </span>
          </div>
          <CloseIcon  onClick={(e)=>setIsModal(false)} />
        </div>

        {/* Input Form Segment */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold animate-pulse">
              {error}
            </div>
          )}

          {/* Current Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 tracking-wide">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-12 px-4 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-300 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* New Password Field - Styled Active to match screenshot glow */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 tracking-wide">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              autoFocus
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-12 px-4 bg-white border border-indigo-400 rounded-xl text-slate-800 placeholder-slate-300 focus:outline-none ring-2 ring-indigo-100 dark:ring-indigo-950/40 transition-all duration-200"
            />
          </div>

          {/* Bottom Button Row */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
               onClick={(e)=>setIsModal(false)}
              className="flex-1 h-12 inline-flex items-center justify-center font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 h-12 inline-flex items-center justify-center font-semibold text-white bg-[#5551ff] rounded-xl hover:bg-[#433eff] active:scale-[0.98] transition-all duration-150 shadow-md shadow-indigo-600/10"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

