import React from "react";
import { Link } from "react-router-dom";
import 'boxicons';
import photoProfile from "../../assets/img/Iago.PNG";
import logo from "../../assets/img/favicon-32x32.png"

class Layout extends React.Component {
  //função
  abreSide() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  };

  searchBtn() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  }

  render() {
    return (
      <div className="container-bd bd-layout">
        <div className="sidebar">
          <div className="logo_content">
            <div className="logo">
              <img src={logo} alt="" />
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
              <div className="item-side">
                <i class='bx bx-news'></i>
                <Link className="links_name" to="/timeline"> Timeline </Link>
              </div>
            </li>
            <li>
              <div className="item-side">
                <i class='bx bx-disc'></i>
                <Link className="links_name" to="/albums"> Popular Albums </Link>
              </div>
            </li>
            <li>
              <div className="item-side">
                <i class='bx bx-microphone'></i>
                <Link className="links_name" to="/artist"> Top 10 Artist </Link>
              </div>
            </li>
            <div class="myMusic">
              <hr className="hr"></hr>
              <i class='bx bx-headphone'></i>
              <span className="yourMusic ">My Music</span>
            </div>
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
        <div className="main-painel">
          <div className="header-content">
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;