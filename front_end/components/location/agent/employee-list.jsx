'use client'
import React from "react";
import Image from "next/image";
import { useState , useEffect } from "react";
// CSS
import '../asset/css/bootstrap-toggle.min.css'
import '../asset/css/bootstrap.min.css'
import '../asset/css/app.css'
import axios from "axios";
import imageAsset from '../asset/imgs/profile.jpg';
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Button} from "@nextui-org/react";

let myVariable = 1;

export default function EmployeeListAgent() {

    const [employees, setEmployee] = useState();
    const [location, setLocation] = useState();
    useEffect(() => {
        const url = new URL(window.location.href);
        const dataFromUrl = url.searchParams.get('data');
        myVariable = dataFromUrl;
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/location/getEmployee', {
            params: {
                id: myVariable
            }
        })
            .then(response => {
                setEmployee(response.data.employee);
                setLocation(response.data.location);
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(employees);

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
                        <h6 className="page-title">Danh sách giao dịch viên</h6>
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
                                                <input type="text" name="search"  className="form-control"/>
                                            </div>
                                            
                                            <div className="flex-grow-1">
                                                <label>Trạng thái tài khoản</label>
                                                <select name="payment_status" className="form-control" defaultValue={'0'}>
                                                    <option value="0">Tất cả</option>
                                                    <option value="1">Đã kích hoạt</option>
                                                    <option value="2">Chưa kích hoạt</option>
                                                </select>
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
                                                    <th>Mã nhân viên</th>
                                                    <th>Họ tên</th>
                                                    <th>Username</th>
                                                    <th>Chi nhánh</th>
                                                    <th> Số điện thoại</th>
                                                    <th> Email </th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {employees && employees.map((i, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>  {i.employee_id} </td>
                                                            <td><span> {i.firstName}</span> {i.lastName} </td>
                                                            <td><span> {i.account.name}</span></td>
                                                            <td><span> {location.address} </span></td>
                                                            <td><span> {i.account.phone}</span></td>
                                                            <td><span> {i.account.email}</span></td>
                                                            <td>
                                                                <a href="" title="" className="btn btn-sm btn-outline--primary"> Xóa</a>
                                                            </td>
                                                        </tr>)
                                                    })
                                                }
                                              
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