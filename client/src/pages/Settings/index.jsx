import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../../components/ui/Toast';
import { User, Shield, LogOut, Trash2, Moon, Sparkles } from 'lucide-react';
import PageTransition from '../../components/animations/PageTransition';

const Settings = () => {
  const { user, logout } = useAuthStore();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  const handleMockAction = (action) => {
    toast.success(`${action} updated successfully (Mock)`);
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast.error('Account deletion is disabled in this demo.');
    }
  };

  return (
    <PageTransition className="flex-grow bg-[#0B0C10] text-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account, preferences, and workspace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Settings Navigation */}
          <div className="col-span-1 md:col-span-3 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/10 text-white font-medium text-sm transition-colors text-left">
              <User size={18} />
              Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors text-left">
              <Shield size={18} />
              Account & Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors text-left">
              <Moon size={18} />
              Appearance
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 font-medium text-sm transition-colors text-left">
              <Sparkles size={18} className="text-purple-400" />
              AI Preferences
            </button>
          </div>

          {/* Settings Content */}
          <div className="col-span-1 md:col-span-9 space-y-8">
            
            {/* Profile Section */}
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleMockAction('Profile'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue={user?.fullName || user?.name || ''}
                    className="w-full bg-[#1a1c23] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={user?.email || ''}
                    disabled
                    className="w-full bg-[#1a1c23]/50 border border-white/5 rounded-lg px-4 py-2.5 text-gray-400 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-2">Email address cannot be changed.</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-end">
                  <button type="submit" className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Account Management */}
            <div className="bg-[#12131a] border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Account Management</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <h3 className="font-medium text-white mb-1">Change Password</h3>
                    <p className="text-sm text-gray-400">Update your password to keep your account secure.</p>
                  </div>
                  <button onClick={() => handleMockAction('Password')} className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                    Update Password
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                  <div>
                    <h3 className="font-medium text-white mb-1">Sign Out</h3>
                    <p className="text-sm text-gray-400">Log out of your account on this device.</p>
                  </div>
                  <button onClick={handleLogout} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-red-400 mb-1">Delete Account</h3>
                    <p className="text-sm text-gray-400">Permanently delete your account and all resumes.</p>
                  </div>
                  <button onClick={handleDeleteAccount} className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                    <Trash2 size={16} />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Settings;
