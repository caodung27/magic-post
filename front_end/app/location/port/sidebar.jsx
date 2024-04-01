import react from "react";
import { useSideBar } from "@/store/useSidebar";
import Image from "next/image";

// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'

import imageAsset1 from './asset/imgs/aaa.png'
import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaFaxSolid  } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

export default function SideBar() {
  let { sideBar, setSideBar } = useSideBar();
  return (
            <div className="sidebar bg--dark">
                <button className="res-sidebar-close-btn"><FaTimes /></button>
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="/location/port" className="sidebar__main-logo">
                            <Image src={imageAsset1} />
                        </a>
                    </div>
                    <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
                        <ul className="sidebar__menu">
                            <li className="sidebar-menu-item nav-link"
                                onClick={() => setSideBar("dashboard")} 
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <IoHomeOutline size={22} className="mr-2" />
                                    <span className="menu-title">Dashboard</span>
                                </div>
                            </li>

                            <li 
                                className="sidebar-menu-item nav-link "
                                onClick={() => setSideBar("employee-list")}
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <LuUsers size={22} className="mr-2" />
                                    <span className="menu-title">Quản lý nhân viên</span>
                                </div>
                            </li>
            
                            <li
                                className="sidebar-menu-item nav-link"
                                onClick={() => setSideBar("order-list")}
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <LiaFaxSolid size={22} className="mr-2" />
                                    <span className="menu-title">Thống kê hàng</span>
                                </div>
                            </li>            
                        </ul>
                    </div>
                </div>
            </div>
    )
}