import React from "react";
import 'boxicons';
import photoProfile from  "../assets/img/Iago.PNG";

export default function App(){
  return (
<div>
  <div className="sidebar">
    <div className="logo_content">
      <div className="logo">
          <i class='bx bx-search-alt-2'></i>
          <div className="logo_name">fluxMusic</div>
      </div>
      <i class='bx bx-menu' id="btn"></i>
    </div>
    <ul className="nav_list">
      <li>
          <i class='bx bx-search-alt-2'></i>
          <input type="text" placeholder="Search..."></input>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-news'></i>
          <span className="links_name">Timeline</span>
        </a>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-disc'></i>
          <span className="links_name">Popular Albums</span>
        </a>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-microphone'></i>
          <span className="links_name">Top 10 Artist</span>
        </a>
      </li>
      <hr className="hr"></hr>
      <span className="yourMusic">Your Music</span>
      <li>
        <a href="#">
        <i class='bx bx-music' ></i>
          <span className="links_name">Songs</span>
        </a>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-microphone'></i>
          <span className="links_name">Artist</span>
        </a>
      </li>
      <li>
        <a href="#">
        <i class='bx bx-disc'></i>
          <span className="links_name">Albums</span>
        </a>
      </li>
    </ul>
    <div className="profile_content">
      <div className="profile">
        <div className="profile_details">
          <img src={photoProfile} alt="" />
          <div className="name_people">
            <div className="name">Iago Henrique</div>
          </div>
        </div>
        <i class='bx bx-log-out' id="log_out"></i>
      </div>
    </div>
  </div>
  <div className="home_content">
  <div className="text">Timeline</div>  
  </div>  
</div>
  )
}