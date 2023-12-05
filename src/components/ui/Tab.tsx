import { useState } from "react";
import { NavButton } from "./NavButton";
import { TABS } from "../../const/textContent";
import "../../styles/components/ui/Tab.scss";

export const Tab = () => {
  const [selectedTab, setSelectedTab] = useState<any>(TABS[0]);

  const handleSelectedTeb = (val: any) => {
    setSelectedTab(val);
  };

  return (
    <>
      <div className="tab-list">
        <ul>
          {TABS.map((tab) => (
            <li
              key={tab.link}
              className={`tab-item ${
                selectedTab.link === tab.link ? "active" : ""
              }`}
              onClick={() => handleSelectedTeb(tab)}
            >
              {tab.link}
              <div></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        <h4>{selectedTab.heading}</h4>
        <div>{selectedTab.desc}</div>
      </div>
      <div className="learn-more-btn">
        <NavButton destination="#" text="Learn more" />
      </div>
    </>
  );
};
