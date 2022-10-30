import React from "react";
import Contents from "./Contents";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const MainLayout = () => {
  return (
    <div className="container custom-container">
      <div className="row header-row">
        <Header />
      </div>

      <div className="row">
        <div className="column custom-column column-xs-20">
          <Sidebar />
        </div>
        <div className="column custom-column column-xs-80">
          <Contents />
        </div>
      </div>
    </div>
  );
};
