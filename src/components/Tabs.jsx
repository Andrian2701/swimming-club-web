import { useState } from "react";
import { Link } from "react-router-dom";
import { tabs } from "../data/tabs";
import "../styles/components/Tabs.scss";

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="tabs">
      <div className="tab-list">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`tab-item ${
                selectedTab.id === tab.id ? "active" : ""
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab.title}
              <div></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        <h4>{selectedTab.heading}</h4>
        <div>{selectedTab.description}</div>
      </div>
      <div className="learn-more-btn">
        <Link href="/">Learn more</Link>
      </div>
    </div>
  );
}
