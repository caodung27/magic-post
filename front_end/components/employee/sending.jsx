// Diem tap ket

'use client'
import Image from "next/image";
import React , {useState} from "react";
import Link from "next/link";


// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'

import imageAsset from './asset/imgs/profile.jpg';
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import {Button} from "@nextui-org/react";

export default function Sending() {

    const [selectedOption1, setSelectedOption1] = useState('0');
    const [selectedOption2, setSelectedOption2] = useState('0');

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
    };
    
    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleSubmit = (event) => {
        // Xử lý logic khi biểu mẫu được gửi đi
        event.preventDefault();
        console.log('Selected Option 2:', selectedOption2);
    };

    return (
        <section className="page-wrapper default-version">
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
                                    <span className="navbar-user__name">Nhân viên</span>
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
                        <h6 className="page-title">Danh sách đơn hàng chuyển đi</h6>
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
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="d-flex flex-wrap gap-4">
                                            <div className="flex-grow-1">
                                                <label>Tìm kiếm</label>
                                                <input type="text" name="search" className="form-control"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái</label>
                                                    <select name="status" className="form-control" value={selectedOption1} onChange={handleOption1Change}>
                                                        <option value="0">Tất cả</option>
                                                        <option value="1">Đã gửi</option>
                                                        <option value="2">Đã giao</option>
                                                        <option value="3">Đã nhận</option>
                                                    </select>
                                            </div>
                                            <div className="flex-grow-1 align-self-end">
                                                <button type="submit" className="btn btn--primary w-100 h-45">Tìm</button>
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
                                                    <th>Mã bưu phẩm</th>
                                                    <th>Chi nhánh gửi</th>
                                                    <th>Chi nhánh nhận</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Trạng thái đơn hàng</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span>123456789</span>
                                                    </td>
                                                    <td>
                                                        <span>Văn Quán, Hà Đông</span>
                                                    </td>
                                                    <td>
                                                        <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                    </td>
                                                    <td>
                                                        <span>28/11/2023</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge--danger">Đang giao</span>
                                                    </td>
                                                    <td>
                                                        <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                            Chỉnh sửa
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                    <span>123456789</span>
                                                </td>
                                                <td>
                                                    <span>Văn Quán, Hà Đông</span>
                                                </td>
                                                <td>
                                                    <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                </td>
                                                <td>
                                                    <span>28/11/2023</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                        Chỉnh sửa
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span>123456789</span>
                                                </td>
                                                <td>
                                                    <span>Văn Quán, Hà Đông</span>
                                                </td>
                                                <td>
                                                    <span>Mai Dịch, Cầu Giấy</span> <br/>
                                                </td>
                                                <td>
                                                    <span>28/11/2023</span>
                                                </td>
                                                <td>
                                                    <span className="badge badge--danger">Đang giao</span>
                                                </td>
                                                <td>
                                                    <a href="" title="" className="btn btn-sm btn-outline--info mr-2">
                                                        Chỉnh sửa
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
                                            <a className="page-link" href="/employee/dispatch?page=2">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/dispatch?page=3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/dispatch?page=4">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/dispatch?page=5">5</a>
                                        </li>
                                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/dispatch?page=13">14</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="/employee/dispatch?page=14">15</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="/employee/dispatch?page=2" rel="next" aria-label="Next &raquo;">
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
        </section>
    )
}