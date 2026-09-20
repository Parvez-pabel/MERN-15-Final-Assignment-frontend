import React, { useState } from "react";
import UploadNewsTab from "../components/News/UploadNewsTab";
import UserListTab from "../components/user/UserListTab";
import UserRequestTab from "../components/user/UserRequestTab";
import UserProfileTab from "../components/user/UserProfileTab";
import NewsCategoryTab from "../components/News/NewsCategoryTab";
import NewsListTab from "../components/News/NewsListTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("newsList");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="tabs tabs-lifted">
        <button
          className={`tab ${activeTab === "newsList" && "tab-active"}`}
          onClick={() => setActiveTab("newsList")}
        >
          NEWS LIST
        </button>
        <button
          className={`tab ${activeTab === "uploadNews" && "tab-active"}`}
          onClick={() => setActiveTab("uploadNews")}
        >
          UPLOAD NEWS
        </button>
        <button
          className={`tab ${activeTab === "userList" && "tab-active"}`}
          onClick={() => setActiveTab("userList")}
        >
          USER LIST
        </button>
        <button
          className={`tab ${activeTab === "userRequest" && "tab-active"}`}
          onClick={() => setActiveTab("userRequest")}
        >
          REQUESTS
        </button>
        <button
          className={`tab ${activeTab === "userProfile" && "tab-active"}`}
          onClick={() => setActiveTab("userProfile")}
        >
          PROFILE
        </button>
        <button
          className={`tab ${activeTab === "newsCategory" && "tab-active"}`}
          onClick={() => setActiveTab("newsCategory")}
        >
          CATEGORIES
        </button>
      </div>

      <div className="bg-base-100 p-6 border border-base-300 rounded-b-xl">
        {activeTab === "newsList" && (
          <NewsListTab setActiveTab={setActiveTab} />
        )}
        {activeTab === "uploadNews" && <UploadNewsTab />}
        {activeTab === "userList" && <UserListTab />}
        {activeTab === "userRequest" && <UserRequestTab />}
        {activeTab === "userProfile" && <UserProfileTab />}
        {activeTab === "newsCategory" && <NewsCategoryTab />}
      </div>
    </div>
  );
};

export default Dashboard;
