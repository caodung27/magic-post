import React from "react";
import Image from "next/image";

// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Button} from "@nextui-org/react";

export default function LocationList() {
    return (
        <div className="page-wrapper default-version">
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <FaBars className="res-sidebar-open-btn me-3" />
                </div>
                <div className="navbar__right">
                    <ul className="navbar__action-list">
                        <Button>
                            <span className="navbar-user">
                                <span className="navbar-user__thumb">
                                    <Image
                                        src={imageAsset}
                                        alt="image" 
                                    />
                                </span>
                                <span className="navbar-user__info">
                                    <span className="navbar-user__name">Quản lý</span>
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
                        <h6 className="page-title">Danh sách điểm tập kết/giao dịch</h6>
                        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="show-filter mb-3 text-end">
                                <button type="button" className="btn btn-outline--primary showFilterBtn btn-sm"> 
                                    Filter
                                </button>
                            </div>
                            <div className="card responsive-filter-card b-radius--10 mb-3">
                                <div className="card-body">
                                    <form action="">
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Số lượng nhân viên</label>
                                                <input type="text" name="search" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Số lượng hàng</label>
                                                <input type="text" name="search" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1 align-self-end">
                                                <button className="btn btn--primary w-100 h-45">Tìm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card b-radius--10 ">
                                <div className="card-body p-0">
                                    <div className="table-responsive--sm table-responsive">
                                        <table className="table table--light style--two">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Chi nhánh</th>
                                                    <th>Trưởng chi nhánh</th>
                                                    <th>Số lượng nhân viên</th>
                                                    <th>Số lương hàng</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>Cầu Giấy</span>
                                                    </td>
                                                    <td>
                                                        <span>Nguyễn Văn A</span>
                                                    </td>
                                                    <td>
                                                        <span>10</span>
                                                    </td>
                                                    <td>
                                                        <span>120</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                            Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span>2423553252</span>
                                                    </td>
                                                    <td>
                                                        <span>Cầu Giấy</span>
                                                    </td>
                                                    <td>
                                                        <span>Nguyễn Văn A</span>
                                                    </td>
                                                    <td>
                                                        <span>10</span>
                                                    </td>
                                                    <td>
                                                        <span>120</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                            Sửa
                                                        </a>
                                                        <a href="" title="" className="btn btn-sm btn-outline--primary">
                                                            Xóa
                                                        </a>
                                                    </td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer py-4">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
                                            <span className="page-link" aria-hidden="true">&lsaquo;</span>
                                        </li>
                                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=2">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=4">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=5">5</a>
                                        </li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=13">14</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="/location/agent/employee-list?page=14">15</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/location/agent/employee-list?page=2" rel="next" aria-label="Next &raquo;">
                                                &rsaquo;
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                        </div>
                    </div>            
                </div>            
            </div>
        </div>              
    )
}