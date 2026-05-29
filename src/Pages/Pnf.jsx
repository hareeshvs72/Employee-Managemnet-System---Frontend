import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- CUSTOM SVG ICONS (Exclusively styled for dark theme integration) ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 18H10c-3 0-5.5-2.467-5.5-5.511C4.5 10.5 6 8 10 8s5.5 2.5 5.5 4.489c0 .491-.077.962-.219 1.409M20.354 9.6a4.5 4.5 0 00-8.196-3.732m8.196 3.732A4.498 4.498 0 0120.354 12M12 5.25a3 3 0 100-6 3 3 0 000 6zm0 0v1.5m-3.75 3a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-red-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const ShieldAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export function PNF() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAlert, setShowAlert] = useState(false);
const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-8 py-12 text-slate-100">
      {/* Dark Toast Alert for simulated recovery */}
      {showAlert && (
        <div className="fixed bottom-5 right-5 flex items-center p-4 space-x-3 bg-indigo-600 text-white rounded-xl shadow-2xl animate-bounce z-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z" />
          </svg>
          <div>
            <p className="font-semibold text-sm">Searching global EMS database...</p>
            <p className="text-xs text-indigo-200">Looking for "{searchQuery}"</p>
          </div>
        </div>
      )}

      {/* Main Content Card Container - Exclusively Dark Styled */}
      <div className="w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Side: Modern SVG 404 Illustration with EMS Themes */}
        <div className="w-full md:w-1/2 flex justify-center flex-col items-center select-none">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Glowing background circles for modern tech depth */}
            <div className="absolute inset-0 bg-indigo-500/5 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-10 right-10 w-24 h-24 bg-teal-500/5 rounded-full filter blur-2xl animate-pulse delay-75"></div>
            
            {/* Dark Styled Flat-Vector SVG Illustration */}
            <svg viewBox="0 0 400 400" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desk Frame */}
              <rect x="80" y="260" width="240" height="12" rx="6" fill="#475569" />
              <path d="M110 272L100 340M290 272L300 340" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
              
              {/* Computer Monitor */}
              <rect x="130" y="110" width="140" height="96" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="4" />
              <rect x="140" y="120" width="120" height="70" rx="4" fill="#38BDF8" fillOpacity="0.1" />
              <rect x="185" y="206" width="30" height="40" fill="#475569" />
              <ellipse cx="200" cy="246" rx="35" ry="8" fill="#1e293b" />
              
              {/* Glowing "404" Screen Content */}
              <text x="200" y="165" fill="#818CF8" fontSize="32" fontWeight="900" textAnchor="middle" fontFamily="sans-serif" className="animate-pulse">404</text>
              <text x="200" y="182" fill="#64748B" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">OUT OF OFFICE</text>
              
              {/* Empty Ergonomic Office Chair */}
              <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                {/* Backrest */}
                <rect x="220" y="140" width="48" height="64" rx="12" fill="#4F46E5" />
                <rect x="226" y="146" width="36" height="52" rx="8" fill="#818CF8" />
                {/* Seat Cushion */}
                <rect x="210" y="200" width="68" height="16" rx="8" fill="#4F46E5" />
                {/* Armrest */}
                <path d="M214 180H220V200" stroke="#312E81" strokeWidth="4" strokeLinecap="round" />
                {/* Chair Stand / Hydraulic Cylinder */}
                <line x1="244" y1="216" x2="244" y2="258" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
                <path d="M220 258H268" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
              </g>

              {/* Speech bubble: "Where is everyone?" */}
              <path d="M60 85C60 68.4315 73.4315 55 90 55H180C196.569 55 210 68.4315 210 85C210 101.569 196.569 115 180 115H102.414L71.7071 145.707C65.4128 152.001 54.5 147.537 54.5 138.621V127.348C54.5 125.045 53.5181 122.85 51.8152 121.298C44.4055 114.542 40 105.061 40 95C40 91.5 40.7 88.1 42 85" fill="#1E293B" />
              <text x="125" y="94" fill="#CBD5E1" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Employee Missing?</text>
              
              {/* Floating Warning Badges */}
              <g className="animate-pulse">
                <circle cx="310" cy="90" r="14" fill="#EF4444" />
                <text x="310" y="95" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">!</text>
              </g>
              <g className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                <circle cx="80" cy="190" r="18" fill="#F59E0B" opacity="0.9" />
                <text x="80" y="195" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">?</text>
              </g>
            </svg>
          </div>
          <span className="mt-2 text-xs text-slate-500 font-mono select-none">Error Reference: HTTP_404_NOT_FOUND</span>
        </div>

        {/* Right Side: Informative Error Actions & Explanations */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 bg-red-950/40 text-red-400 rounded-full w-fit mx-auto md:mx-0 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-900/30">
            <AlertCircleIcon />
            <span>Resource Out of Directory</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Whoops! This employee has left the grid.
          </h1>
          
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            The page, user record, or system portal you are attempting to locate is currently unavailable, archived, or has migrated to a new department.
          </p>

      

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold rounded-2xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-150 text-sm"
            >
              <HomeIcon />
              <span>Back to Dashboard</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700/80 active:scale-[0.98] text-slate-200 font-semibold rounded-2xl border border-slate-700 transition-all duration-150 text-sm"
            >
              <ArrowLeftIcon />
              <span>Go Back</span>
            </button>
          </div>

       

        </div>
      </div>
    </div>
  );
}

