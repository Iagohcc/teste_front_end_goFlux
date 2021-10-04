import React from "react";
import {Link} from "react-router-dom";
import 'boxicons';
import photoProfile from  "../../assets/img/Iago.PNG";

class Layout extends React.Component {
  
  //função
  abreSide(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  };

  searchBtn(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  }

  render (){
    return (
      <div>
        <div className="sidebar">
          <div className="logo_content">
            <div className="logo">
                <i class='bx bx-search-alt-2'></i>
                <div className="logo_name">fluxMusic</div>
            </div>
            <i class='bx bx-menu' id="btn" onClick={this.abreSide}></i>
          </div>
          <ul className="nav_list">
            <li>
                <i class='bx bx-search-alt-2' onClick={this.searchBtn}></i>
                <input type="text" placeholder="Search..."></input>
            </li>
            <li>
              <Link className="links_name" to="/"> Timeline </Link>    
              {/* <a href="/">
              <i class='bx bx-news'></i>
                <span className="links_name">Timeline</span>
              </a>      */}
            </li>
            <li>
            <Link className="links_name" to="/albums"> Popular Albums </Link>
              {/* <a href="/albums">
              <i class='bx bx-disc'></i>
                <span className="links_name">Popular Albums</span>
              </a> */}
            </li>
            <li>
            <Link className="links_name" to="/artist"> Top 10 Artist </Link>
              {/* <a href="/artist">
              <i class='bx bx-microphone'></i>
                <span className="links_name">Top 10 Artist</span>
              </a> */}
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
      </div>
    )
  }
}

export default Layout;