import React from "react";
import { NavLink } from "react-router-dom";
import "boxicons";
import photoProfile from "../../assets/img/Iago.PNG";
import SideLogo from "../../assets/img/favicon-32x32.png";
import searchStore from "../../store/searchStore";

class Layout extends React.Component {
  //função
  search(e) {
    const addSearch = searchStore((state) => state.addSearch);
    const input = document.querySelector("#searchHeader");

    const search = input.value;

    addSearch({
      search,
    });
  }

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
              <div className="logo_name">Flux and Morty</div>
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
                to="/episodes"
              >
                <i class="bx bx-video"></i>
                <span className="links_name">Episodes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links_name"
                activeClassName="is-active"
                to="/characters"
              >
                <i class="bx bx-face"></i>
                <span className="links_name"> Characters</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="links_name"
                activeClassName="is-active"
                to="/locations"
              >
                <i class="bx bx-current-location"></i>
                <span className="links_name">Locations</span>{" "}
              </NavLink>
            </li>
            <hr />
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
                <h1>Flux and Morty</h1>
              </div>
              <div className="header-content__header-painel__search-header">
                <i class="bx bx-search-alt-2"></i>
                <input
                  type="text"
                  id="searchHeader"
                  onClick={this.search}
                  placeholder="Search..."
                ></input>
              </div>
            </div>
          </div>
          <div className="main-painel__main-content">{this.props.children}</div>
          <a className="voltaTopo" href="#">
            <i class="bx bx-up-arrow"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Layout;
