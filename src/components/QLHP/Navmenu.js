import React from 'react'
import logo from "./ImgNav/Logo.png";
import money from "./ImgNav/money.png";
import basicMoney from "./ImgNav/basicMoney.png";
import folder from "./ImgNav/folder.png";
import "./Navmenu.css";

export default function Nav() {
    return (
        <div className='Navbar'>
            <div className='navbar-content'>
                <img className='navbar-logo' src={logo}></img>
                <div className="navbar-icons">
                  <img className="navbar-icon" src={money}></img>
                  <img className="navbar-icon" src={basicMoney}></img>
                  <img className="navbar-icon" src={folder}></img>
                </div>
              <div className="navbar-menu">
                <ul className="navbar-menu-list">
                  <li className="navbar-menu-title">
                    <img className="navbar-item" src={money}></img>
                    <span className="menu-title-content">
                      Quản lý học phí
                      <ul className="menu-title-list">
                        <li className="menu-title-item">Danh sách lớp học</li>
                        <li className="menu-title-item">Danh sách biểu phí</li>
                        <li className="menu-title-item">Danh sách khoản thu</li>
                        <li className="menu-title-item">Hình thức thu</li>
                        <li className="menu-title-item">
                          Danh sách chế độ miễn giảm
                        </li>
                        <li className="menu-title-item">Thu học phí</li>
                      </ul>
                    </span>
                  </li>
                  <li className="navbar-menu-title">
                    <img className="navbar-item" src={basicMoney}></img>

                    <span className="menu-title-content">Quản lý lương</span>
                  </li>
                  <li className="navbar-menu-title">
                  <img className="navbar-item" src={folder}></img>

                    <span className="menu-title-content">Đề xuất và phê duyệt</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    )
}
