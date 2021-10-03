import React from "react";

export default function App(){
  return (
<div>
  <div className="sidebar">
    <div className="logo_content">
      <div className="logo">
          <div className="logo_name">fluxMusic</div>
      </div>
      <i class='bx bx-menu'></i>
    </div>
    <ul className="nav_list">
      <li>
        <i class='bx bx-search-alt-2' ></i>
          <input type="text" placeholder="Search..."></input>
        {/* <span className="tooltip">Albums</span> */}
      </li>
      <li>
        <a href="#">
        <i class='bx bx-music'></i>
          <span className="links_name">Timeline</span>
        </a>
        {/* <span className="tooltip">Timeline</span> */}
      </li>
      <li>
        <a href="#">
        <i class='bx bx-music'></i>
          <span className="links_name">Albums</span>
        </a>
        {/* <span className="tooltip">Albums</span> */}
      </li>
      <li>
        <a href="#">
        <i class='bx bx-user-voice'></i>
          <span className="links_name">Artist</span>
        </a>
        {/* <span className="tooltip">Artist</span> */}
      </li>
    </ul>
    <div className="profile_content">
      <div className="profile">
        <div className="profile_details">
          <img src="" alt="" />
          <div className="name_people">
            <div className="name">Iago Henrique</div>
            <div className="job">Front End</div>
          </div>
        </div>
        <i class='bx bx-log-out' id="log_out"></i>
      </div>
    </div>
  </div>
</div>
  )
}