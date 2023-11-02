import { useState } from "react";
import { Link } from "react-router-dom";
import { tabsData } from "../const/contentData";
import "../styles/TabbedContent.scss";

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(tabsData[0]);

  return (
    <div className="tab-content">
      <div className="tab-list">
        <ul>
          {tabsData.map((tab) => (
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
      <div className="tab-text">
        <h4>{selectedTab.heading}</h4>
        <div>{selectedTab.description}</div>
      </div>
      <div className="learn-more-btn">
        <Link href="/">Learn more</Link>
      </div>
    </div>
  );
}
