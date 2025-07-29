import React, { useState } from 'react';
import './settings.css';

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [username, setUsername] = useState("johndoe");

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted (not really, this is just a demo).");
    }
  };

  const handleSave = () => {
    alert("Settings saved (demo only).");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <section className="settings-section">
        <h3>Preferences</h3>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <span className="slider" />
          Email Notifications
        </label>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider" />
          Dark Mode
        </label>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={privacyMode}
            onChange={() => setPrivacyMode(!privacyMode)}
          />
          <span className="slider" />
          Privacy Mode
        </label>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={() => setTwoFactorAuth(!twoFactorAuth)}
          />
          <span className="slider" />
          Two-Factor Authentication
        </label>

        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </label>

        <label>
          Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </label>
      </section>

      <section className="settings-section">
        <button className="save-btn" onClick={handleSave}>
          Save Settings
        </button>
      </section>

      <section className="settings-section danger-zone">
        <h3>Danger Zone</h3>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </section>
    </div>
  );
};

export default SettingsPage;
