import { useState } from "react";

const defaultTabs = [
  { id: "posts", label: "Posts" },
  { id: "media", label: "Media" },
  { id: "liked", label: "Liked" },
];

function ProfileTabs({ tabs = defaultTabs, defaultTab = "posts", onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  function handleChange(tabId) {
    setActiveTab(tabId);

    if (onTabChange) {
      onTabChange(tabId);
    }
  }

  return (
    <section className="profile-card profile-tabs" aria-label="Profile tabs">
      <div className="tab-list" role="tablist" aria-label="Profile content tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-button${activeTab === tab.id ? " tab-button--active" : ""}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => handleChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProfileTabs;