import React from "react";
import { CircularAvatarStack } from "../components/Avatar";
import Button from "../components/Button";

function Dashboard() {
  return (
    <div className=" h-screen w-screen flex">
      <div className="left w-[16%] bg-[#1C2536] text-[#9CA4AE] p-4">
        <div className="lefttop h-[10%] w-full text-[#FFFFFF] ">
          subsurf .in
        </div>
        <div className="leftmiddle h-[75%] w-full">
          <h1>components here</h1>
        </div>
        <div className="leftbottom h-[15%] w-full flex items-center justify-center">
          <Button />
        </div>
      </div>
      <div className="right w-[84%] h-full">
        <div className="righttop h-[10%] w-full  flex items-center  justify-end px-6  ">
          <CircularAvatarStack />
        </div>
        <div className="rightbottom h-[90%] w-full">
          <h1>bottom herre </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
