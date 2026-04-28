import React, { useState, useEffect } from 'react';
import {
  Calendar,
  AlertCircle,
  Clock,
  LogIn,
  LogOut,
  CheckCircle2,
  UserCircle
} from 'lucide-react';

const Attendence = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState({
    daysPresent: 0,
    lateArrivals: 0,
    avgWorkHrs: 8.5
  });

  // Calculate stats based on records
  useEffect(() => {
    const present = records.length;
    const late = records.filter(r => {
      const checkInHour = parseInt(r.checkIn.split(':')[0]);
      return checkInHour >= 9 && parseInt(r.checkIn.split(':')[1]) > 0; // Assuming 9:00 AM is late
    }).length;

    setStats(prev => ({
      ...prev,
      daysPresent: present,
      lateArrivals: late
    }));
  }, [records]);

const calculateWorkingHours = (checkIn, checkOut) => {
  const inTime = new Date(`2024-01-01T${checkIn}`);
  let outTime = new Date(`2024-01-01T${checkOut}`);

  if (outTime < inTime) {
    outTime.setDate(outTime.getDate() + 1);
  }

  const diffMs = outTime - inTime;

  const hours = diffMs / (1000 * 60 * 60);
  const displayHours = Math.floor(hours);
  const minutes = Math.floor((hours % 1) * 60);

  return {
    totalHours: hours,
    formatted: `${displayHours}h ${minutes}m`
  };
};

  const handleClockToggle = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit',hour12:false });
    const dateString = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    if (!isClockedIn) {
      // Clocking In
      setIsClockedIn(true);
      const newRecord = {
        id: Date.now(),
        date: dateString,
        checkIn: timeString,
        checkOut: '-',
        workingHours: '-',
        dayType: 'Regular',
        status: 'On Duty'
      };
      setRecords([newRecord, ...records]);
    } else {
      // Clocking Out
      setIsClockedIn(false);
   setRecords(prev =>
  prev.map((rec, index) => {
    if (index === 0 && rec.checkOut === '-') {
      const result = calculateWorkingHours(rec.checkIn, timeString);

      let dayType = "Absent";
      if (result.totalHours >= 8) {
        dayType = "Regular";
      } else if (result.totalHours >= 4) {
        dayType = "Half Day";
      }

      return {
        ...rec,
        checkOut: timeString,
        workingHours: result.formatted,
        dayType: dayType,
        status: 'Completed'
      };
    }
    return rec;
  })
);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Attendance</h1>
          <p className="text-slate-500">Track your work hours and daily check-ins</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Days Present */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
            <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Days Present</p>
              <p className="text-3xl font-bold text-slate-900">{stats.daysPresent}</p>
            </div>
          </div>

          {/* Late Arrivals */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-400"></div>
            <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
              <AlertCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Late Arrivals</p>
              <p className="text-3xl font-bold text-slate-900">{stats.lateArrivals}</p>
            </div>
          </div>

          {/* Avg Work Hrs */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
            <div className="p-3 bg-slate-100 rounded-lg text-slate-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Avg. Work Hrs</p>
              <p className="text-3xl font-bold text-slate-900">{stats.avgWorkHrs} Hrs</p>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="font-bold text-slate-900">Recent Activity</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Check In</th>
                  <th className="px-6 py-4 font-semibold">Check Out</th>
                  <th className="px-6 py-4 font-semibold">Working Hours</th>
                  <th className="px-6 py-4 font-semibold">Day Type</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                      No records found
                    </td>
                  </tr>
                ) : (
                  records.map((record) => (
                    <tr key={record.id} className="text-sm hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 text-slate-600 font-medium">{record.date}</td>
                      <td className="px-6 py-4 text-slate-600">{record.checkIn}</td>
                      <td className="px-6 py-4 text-slate-600">{record.checkOut}</td>
                      <td className="px-6 py-4 text-slate-600">{record.workingHours}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">
                          {record.dayType}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-1.5 font-medium ${record.status === 'On Duty' ? 'text-blue-600' : 'text-emerald-600'
                          }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${record.status === 'On Duty' ? 'bg-blue-600' : 'bg-emerald-600'
                            }`}></div>
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={handleClockToggle}
          className={`fixed bottom-8 right-8 flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl transition-all active:scale-95 group ${isClockedIn
            ? 'bg-rose-600 hover:bg-rose-700'
            : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white`}
        >
          <div className="p-2 bg-white/20 rounded-lg">
            {isClockedIn ? <LogOut size={24} /> : <LogIn size={24} />}
          </div>
          <div className="text-left leading-tight pr-4">
            <p className="font-bold text-lg">{isClockedIn ? 'Clock Out' : 'Clock In'}</p>
            <p className="text-xs text-white/80">
              {isClockedIn ? 'finish your work day' : 'start your work day'}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Attendence;