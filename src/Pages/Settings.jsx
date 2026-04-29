import React, { useState } from 'react';
import { User, Lock, Save, CheckCircle, ChevronRight } from 'lucide-react';

const Settings = () => {
  const [formData, setFormData] = useState({
    name: 'David Musk',
    email: 'david@example.com',
    position: 'Software Developer',
    bio: 'hi'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your account and preferences</p>
        </div>

        {/* Public Profile Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-50 rounded-lg">
                <User size={20} className="text-slate-400" />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">Public Profile</h2>
            </div>

            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <input
                  readOnly
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className=" w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-semibold text-slate-600/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input
                  readOnly
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-semibold text-slate-600/50"
                  />
                </div>
              </div>

              {/* Position */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Position</label>
                <input
                readOnly
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-semibold text-slate-600/50"
                />
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-600 resize-none"
                />
                <p className="text-xs text-slate-400 mt-1">This will be displayed on your profile.</p>
              </div>
            </div>
          </div>

          {/* Save Changes Button Container */}
          <div className="px-6 py-4 flex justify-end">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200 disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Save size={18} />
              )}
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <Lock size={22} className="text-slate-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800">Password</h2>
                <p className="text-sm text-slate-500">Update your account password</p>
              </div>
            </div>
            <button className="px-5 py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 active:bg-slate-100 transition-colors">
              Change
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl animate-bounce-short">
            <CheckCircle className="text-emerald-400" size={20} />
            <span className="font-medium">Changes saved successfully!</span>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-short {
          animation: bounce-short 0.5s ease-in-out 1;
        }
      `}} />
    </div>
  );
};

export default Settings;