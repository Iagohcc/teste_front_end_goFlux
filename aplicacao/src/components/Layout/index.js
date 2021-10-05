import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";
import photoProfile from "../../assets/img/Iago.PNG";
import SideLogo from "../../assets/img/favicon-32x32.png";

class Layout extends React.Component {
  //função
  abreSide() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  }

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
              <img src={SideLogo} alt="" />
              <div className="logo_name">FluxMusic</div>
            </div>
            <i class="bx bx-menu" id="btn" onClick={this.abreSide}></i>
          </div>
          <ul className="side__nav_list">
            <li>
              <i class="bx bx-search-alt-2" onClick={this.searchBtn}></i>
              <input type="text" placeholder="Search..."></input>
            </li>
            <li>
              <NavLink
                className="links_name"
                activeClassName="is-active"
                to="/timeline"
              >
                <i class="bx bx-news"></i>{" "}
                <span className="links_name">Timeline</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links_name"
                activeClassName="is-active"
                to="/albums"
              >
                <i class="bx bx-disc"></i>
                <span className="links_name"> Popular Albums</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links_name"
                activeClassName="is-active"
                to="/artist"
              >
                <i class="bx bx-microphone"></i>
                <span className="links_name">Top 10 Artist</span>{" "}
              </NavLink>
            </li>
            <div class="myMusic">
              <hr className="hr"></hr>
              <i class="bx bx-headphone"></i>
              <span className="yourMusic ">My Music</span>
            </div>
            <li>
              <a href="#">
                <i class="bx bx-music"></i>
                <span className="links_name">Songs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-microphone"></i>
                <span className="links_name">Artist</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-disc"></i>
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
              <i class="bx bx-log-out" id="log_out"></i>
            </div>
          </div>
        </div>
        <div className="main-painel">
          <div className="header-content">
            <div className="header-content__header-painel">
              <div className="header-content__header-painel__Logo-header">
                <h1>FluxMusic</h1>
              </div>
              <div className="header-content__header-painel__search-header">
                <i class="bx bx-search-alt-2"></i>
                <input type="text" placeholder="Search..."></input>
              </div>
            </div>
          </div>
          <div className="main-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
