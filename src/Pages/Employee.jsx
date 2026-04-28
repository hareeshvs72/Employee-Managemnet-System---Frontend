import React, { useMemo, useState } from 'react'
import { initialEmployees } from '../assets/DummyData/AdminDummyData'




import {
  Pencil,
  Trash2,
  Search,
  Plus,
  UserPlus,
  MoreVertical,
  ChevronDown
} from 'lucide-react';
import AddEmployee from '../components/AddEmployee';




export default function Employee() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [employees, setEmployees] = useState(initialEmployees);
  const [isOpen, setIsOpen] = useState(true);

  // Get unique departments for the dropdown
  const departments = useMemo(() => {
    const depts = new Set(initialEmployees.map(emp => emp.dept));
    return ["All Departments", ...Array.from(depts)];
  }, []);

  // Filter logic for the search bar AND department dropdown
  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === "All Departments" || emp.dept === selectedDept;

      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept, employees]);

  const handleDelete = (id) => {
    setEmployees(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Employees</h1>
            <p className="text-slate-500 text-sm">Manage your team members and their roles</p>
          </div>
          <button onClick={()=>{setIsOpen(true)}} className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm active:scale-95">
            <Plus size={20} />
            Add Employee
          </button>
        </div>

        {/* Search & Department Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search by name or role..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-600 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Department Dropdown Menu */}
          <div className="relative min-w-[200px]">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-slate-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all cursor-pointer shadow-sm font-medium"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Upper Section (Gray area with Tag & Avatar) */}
              <div className="h-44 bg-[#F1F5F9] p-4 flex flex-col items-center justify-center relative">
                {/* Department Tag */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-slate-600 shadow-sm border border-slate-100">
                  {emp.dept}
                </span>

                {/* Avatar Circle */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold ${emp.color} shadow-inner`}>
                  {emp.initials}
                </div>

                {/* HOVER ACTIONS OVERLAY */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    title="Edit Employee"
                    className="p-3 bg-white text-indigo-600 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    title="Delete Employee"
                    className="p-3 bg-white text-red-500 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              {/* Lower Section (White area with Details) */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="pb-2">
                    <h3 className="text-lg font-bold text-slate-800 leading-tight">{emp.name}</h3>
                    <p className="text-sm text-slate-500 mt-1 font-medium">{emp.role}</p>
                  </div>
                  <button className="text-slate-300 hover:text-slate-500 transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredEmployees.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-400 bg-white border border-dashed border-slate-200 rounded-2xl">
              <UserPlus size={48} className="mb-4 opacity-20" />
              <p className="text-lg">No employees found in this department.</p>
              <button
                onClick={() => { setSearchTerm(""); setSelectedDept("All Departments"); }}
                className="mt-2 text-indigo-600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {isOpen && <AddEmployee setIsOpen={setIsOpen}/>}
    </div>
  );
  
}