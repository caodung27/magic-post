import react from "react";
import { useSideBar } from "@/store/useSidebar";
import Image from "next/image";

// CSS
import './asset/css/bootstrap.min.css'
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/app.css'

import imageAsset1 from './asset/imgs/aaa.png'
import {FaTimes, FaWpforms } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LiaShippingFastSolid  } from "react-icons/lia";
import { LuCombine } from "react-icons/lu";

export default function SideBar() {
  let { sideBar, setSideBar } = useSideBar();
  return (
            <div className="sidebar bg--dark grid md:grid-cols-sidebar">
                <button className="res-sidebar-close-btn"><FaTimes /></button>
                <div className="sidebar__inner">
                    <div className="sidebar__logo">
                        <a href="/location" className="sidebar__main-logo">
                        <Image className="w-1/5 h-1/5" src={imageAsset1} />
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
                                onClick={() => setSideBar("receiving")}
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <LiaShippingFastSolid size={22} className="mr-2" />
                                    <span className="menu-title">Đơn hàng chuyển đến</span>
                                </div>
                            </li>
            
                            <li
                                className="sidebar-menu-item nav-link"
                                onClick={() => setSideBar("sending")}
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <LuCombine size={22} className="mr-2" />
                                    <span className="menu-title">Đơn hàng nhận về</span>
                                </div>
                            </li>       
                            
                            <li
                                className="sidebar-menu-item nav-link"
                                onClick={() => setSideBar("create-order")}
                            >
                                <div className="d-flex align-items-center cursor-pointer">
                                    <FaWpforms size={22} className="mr-2" />
                                    <span className="menu-title">Tạo đơn hàng</span>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
    )
}