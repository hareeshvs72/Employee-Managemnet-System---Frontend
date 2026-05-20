import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import api from '../services/axios';
import { useEffect } from 'react';

const AddEmployee = ({ setIsOpen , id ,setId,selectedEmployee,setSellectedEmployee}) => {
  const [load, setLoad] = useState(false)
  // console.log(id);
  
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    password: "",
    basicSalary: 0,
    allowance: 0,
    deduction: 0,
    role: "",
    joinDate: "",
    bio: "",
  })
  console.log(newEmployee);


  const handileGenerateEmployees = async (e) => {
  e.preventDefault();

  try {
    if (
      !newEmployee.firstName ||
      !newEmployee.lastName ||
      !newEmployee.email ||
      !newEmployee.joinDate
    ) {
      return alert("fill the form");
    }

    setLoad(true);

    let result;

    if (id) {
      // ✅ UPDATE API
      result = await api.put(`/employees/${id}`, newEmployee);
    } else {
      // ✅ CREATE API
      result = await api.post("/employees", newEmployee);
    }

    console.log(result);

    // ✅ close modal after success
    setIsOpen(false);
    setId(null);
    setSellectedEmployee(null)

  } catch (error) {
    console.log(error);
  } finally {
    setLoad(false);
  }
};

useEffect(() => {
  if (selectedEmployee) {
    setNewEmployee(selectedEmployee);
  }
}, [selectedEmployee]);
  return (
    <div className="fixed inset-0 z-50 overflow-y-hidden flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="px-8 pt-6 pb-4 flex justify-between items-start border-b border-gray-50">
          <div>
            <h2 className="text-xl font-bold text-gray-900"> {id ? "Edit Employee" :" Add New Employee"}</h2>
            <p className="text-sm text-gray-500 mt-1">Create a user account and employee profile</p>
          </div>
          <button
            onClick={() => {setIsOpen(false); setId(null)}}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handileGenerateEmployees}>

          <div className="px-8 py-6 space-y-8 max-h-[70vh] overflow-y-auto">

            {/* Section 1: Personal Information */}
            <div className="space-y-6">
              <h3 className="text-md font-semibold text-gray-800 border-b border-gray-100 pb-3">Personal Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">First Name</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, firstName: e.target.value }) }}
                    value={newEmployee?.firstName}
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Last Name</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, lastName: e.target.value }) }}
                    value={newEmployee?.lastName}
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Phone Number</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, phone: e.target.value }) }}
                    value={newEmployee?.phone}
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Join Date</label>
                  <div className="relative">
                    <input
                      onChange={(e) => { setNewEmployee({ ...newEmployee, joinDate: e.target.value }) }}
                      value={newEmployee?.joinDate}
                      type="date"
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all pr-10"
                    />
                    {/* <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /> */}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Bio (Optional)</label>
                <textarea
                  onChange={(e) => { setNewEmployee({ ...newEmployee, bio: e.target.value }) }}
                  value={newEmployee?.bio}
                  placeholder="Brief description..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Section 2: Employment Details */}
            <div className="space-y-6">
              <h3 className="text-md font-semibold text-gray-800 border-b border-gray-100 pb-3">Employment Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Department</label>
                  <select
                    onChange={(e) => { setNewEmployee({ ...newEmployee, department: e.target.value }) }}
                    value={newEmployee?.department}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white appearance-none cursor-pointer">
                    <option >Select Department</option>
                    <option value="engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value=" marketing">Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Position</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, position: e.target.value }) }}
                    value={newEmployee?.position}
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Basic Salary</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, basicSalary: e.target.value }) }}
                    value={newEmployee?.basicSalary}
                    type="number"

                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Allowances</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, allowance: e.target.value }) }}
                    value={newEmployee?.allowance}
                    type="number"

                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Deductions</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, deduction: e.target.value }) }}
                    value={newEmployee?.deduction}
                    type="number"

                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Account Setup */}
            <div className="space-y-6">
              <h3 className="text-md font-semibold text-gray-800 border-b border-gray-100 pb-3">Account Setup</h3>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Work Email</label>
                <input
                  onChange={(e) => { setNewEmployee({ ...newEmployee, email: e.target.value }) }}
                  value={newEmployee?.email}
                  type="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Temporary Password</label>
                  <input
                    onChange={(e) => { setNewEmployee({ ...newEmployee, password: e.target.value }) }}
                    value={newEmployee?.password}
                    type="password"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">System Role</label>
                  <select
                    onChange={(e) => { setNewEmployee({ ...newEmployee, role: e.target.value }) }}
                    value={newEmployee?.role}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none bg-white appearance-none cursor-pointer">
                    <option value="Employee">Employee</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-8 py-5 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
            <button
              onClick={() => {setIsOpen(false);setId(null)}}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-white hover:border-gray-400 transition-all active:scale-95"
            >
              Cancel
            </button>
            {id ? 
              <button type='submit'
              disabled={load}
              className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
            >
             {load ? (
  <div className="flex justify-center items-center">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
) : (
  "Update Employee"
)}
            </button>
            :
            
            <button type='submit'
              disabled={load}
              className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
            >
             {load ? (
  <div className="flex justify-center items-center">
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
) : (
  "Create Employee"
)}
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;