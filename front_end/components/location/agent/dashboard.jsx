import React from "react";
import Image from "next/image";

// CSS
import '../asset/css/bootstrap-toggle.min.css'
import '../asset/css/bootstrap.min.css'
import '../asset/css/app.css'

import imageAsset from '../asset/imgs/profile.jpg';
import { FaBars, FaDollyFlatbed, FaMoneyBillWave, FaUserCheck, FaUniversity, FaHourglassStart, FaDolly, FaAccessibleIcon   } from "react-icons/fa";
import {FaListCheck} from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import {Button} from "@nextui-org/react";

export default function DashBoard() {

    const handleLogout =() => {
        localStorage.removeItem("accessToken");
        window.location.href = "/home";
    };

    return (
        <div className="page-wrapper default-version">
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <FaBars className="res-sidebar-open-btn me-3" />
                </div>
                <div className="navbar__right">
                    <ul className="navbar__action-list">
                        <Button>
                            <span className="navbar-user" onClick={handleLogout}>
                                <span className="navbar-user__thumb">
                                    <Image
                                        src={imageAsset}
                                        alt="image" 
                                    />
                                </span>
                                <span className="navbar-user__info">
                                    <span className="navbar-user__name">Trưởng điểm giao dịch</span>
                                </span>
                                <a href="/home" className="icon"><IoIosLogOut size={24} /></a>
                            </span>
                        </Button>
                    </ul>
                </div>
            </nav>  

            <div className="body-wrapper">
                <div className="bodywrapper__inner">
                    <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                        <h6 className="page-title">Dashboard</h6>
                        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>

                    <div className="row gy-4">
                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--purple has-link overflow-hidden box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaHourglassStart size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Sent In Queue</span>
                                        <h2 className="text-white">0</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--green has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaDolly size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Shipped Courier</span>
                                        <h2 className="text-white">284</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--deep-purple has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaAccessibleIcon size={56}/>
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Waiting for Delivery</span>
                                        <h2 className="text-white">14</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--info has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaListCheck size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Delivered</span>
                                        <h2 className="text-white">66</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--primary has-link overflow-hidden box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaUniversity size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Total Branch</span>
                                        <h2 className="text-white">4</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--cyan has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaUserCheck size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Total manager</span>
                                        <h2 className="text-white">2</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--orange has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaMoneyBillWave size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Total Income</span>
                                        <h2 className="text-white">6,000,000</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-3 col-sm-6">
                        <div className="card bg--pink has-link box--shadow2">
                            <a href="" className="item-link"></a>
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-4">
                                        <FaDollyFlatbed size={56} />
                                    </div>
                                    <div className="col-8 text-end">
                                        <span className="text-white text--small">Total Courier</span>
                                        <h2 className="text-white">364</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-none-30">
                    <div className="col-lg-12 col-md-12 mt-30 mb-30">
                        <div className="card b-radius--10 ">
                            <div className="card-body p-0">
                                <div className="table-responsive--sm table-responsive">
                                    <table className="table table--light style--two">
                                        <thead>
                                            <tr>
                                                <th>Chi nhánh</th>
                                                <th>Email - SĐT</th>
                                                <th>Trạng thái</th>
                                                <th>Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="fw-bold">Mai Dịch</span> <br />
                                                    <span>Cầu Giấy</span>
                                                </td>
                                                <td>
                                                    <span>
                                                        <a href="" className="__cf_email__">
                                                            location1@email.com
                                                        </a>
                                                    </span> <br />
                                                    <span>6444564545</span>
                                                </td>
                                                <td> <span className="badge badge--success">Enabled</span> </td>
                                                <td>
                                                    <button className="btn btn-sm btn-outline--primary" id="actionButton"
                                                        data-bs-toggle="dropdown">
                                                        Quản lý
                                                    </button>
                                                    <div className="dropdown-menu p-0">
                                                        <a href=""
                                                            className="dropdown-item">
                                                            Nhân viên                                                
                                                        </a>
                                                        <a href=""
                                                            className=" dropdown-item">
                                                            Đơn hàng                                                
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>                    
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>             
    )
}