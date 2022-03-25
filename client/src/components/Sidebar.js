import "./Sidebar.css";
import React from "react";

export default function Sidebar(props) {
  console.log(props.visible);
  return (
    <div className="sidebar">
      <div className="toggleSidebarContent">
        <button onClick={props.toggleSidebar}>
          {props.visible ? "Hide sidebar" : "Show sidebar"}
        </button>
      </div>
      {props.visible && (
        <div className="mainSidebarContent">
          TEST
          CONTENEssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </div>
      )}
    </div>
  );
}
