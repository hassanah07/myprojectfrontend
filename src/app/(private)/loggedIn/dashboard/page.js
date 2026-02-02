import SideBar from "../../../../../components/Sidebar";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <div className="flex relative">
          <SideBar />
          <div className="flex-1 p-6 text-gray-700"> this is div</div>
        </div>
      </div>
    </>
  );
};

export default page;
