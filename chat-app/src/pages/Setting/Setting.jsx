import { useState } from 'react';
import { User, Lock, Bell, Monitor } from 'lucide-react';
import './Setting.modal.css';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'privacy', label: 'Privacy', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Monitor },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Settings</h1>
        <p className="subtitle">Manage your account and preferences</p>
      </header>

      <main className="mainContent">
        {/* Navigation Tabs */}
        <div className="tabsContainer">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabBtn ${activeTab === tab.id ? 'activeTab' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Profile Information */}
        {activeTab === 'profile' && (
          <div className="formCard">
            <h2 className="sectionTitle">Profile Information</h2>
            
            <div className="profilePhotoSection">
              <div className="avatarWrapper">
                <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="avatar" />
              </div>
              <div className="photoDetails">
                <h3 className="userName">Manish Mahato</h3>
                <p className="userEmail">manish@example.com</p>
              </div>
              <button className="changePhotoBtn">Change Photo</button>
            </div>

            <form className="profileForm">
              <div className="inputGroup">
                <label className="label">Full Name</label>
                <input type="text" defaultValue="Manish Mahato" className="input" />
              </div>
              
              <div className="inputGroup">
                <label className="label">Email Address</label>
                <input type="email" defaultValue="manish@example.com" className="input" />
              </div>

              <div className="inputGroup">
                <label className="label">Phone Number</label>
                <input type="tel" defaultValue="+91 98765 43210" className="input" />
              </div>

              <div className="actionButtons">
                <button type="button" className="saveBtn">Save Changes</button>
                <button type="button" className="cancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}