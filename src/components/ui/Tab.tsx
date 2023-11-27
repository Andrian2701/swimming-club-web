import { useState } from "react";
import { NavButton } from "./NavButton";
import { tabs } from "../../const/tabs";
import "../../styles/components/ui/Tabs.scss";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState<any | null>(tabs[0]);

  const handleSelectedTeb = (val: any) => {
    setSelectedTab(val);
  };

  return (
    <div className="tabs">
      <div className="tab-list">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.title}
              className={`tab-item ${
                selectedTab.title === tab.title ? "active" : "inactive"
              }`}
              onClick={() => handleSelectedTeb(tab)}
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
        <NavButton destination="#" text="Learn more" />
      </div>
    </div>
  );
};
