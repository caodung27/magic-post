import React, { useState, useEffect } from 'react';
import Image from "next/image";

// CSS
import '../asset/css/bootstrap.min.css'
import '../asset/css/bootstrap-toggle.min.css'
import '../asset/css/app.css'
import axios from 'axios';
import imageAsset from '../asset/imgs/profile.jpg';
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { data } from "autoprefixer";

let myVariable = 1;

export default function OrderListPort() {

    const handleLogout =() => {
        localStorage.removeItem("accessToken");
        window.location.href = "/home";
    };
    
    const [parcel, setParcel] = useState();
    const [address, setAddress] = useState();
    const [order, setOrder] = useState();
    const [urlData, setUrlData] = useState();

    useEffect(() => {
        const url = new URL(window.location.href);
        const dataFromUrl = url.searchParams.get('data');
        setUrlData(dataFromUrl);
        myVariable = dataFromUrl;
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8000/order/getByReceivingLocation', {
            params: {
                id: myVariable
            }
        })
            .then(response => {
                setOrder(response.data.orders);
                console.log(response.data);
            })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log(order);

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
                                    <span className="navbar-user__name">Trưởng điểm tập kết</span>
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
                        <h6 className="page-title">Danh sách hàng đi, hàng đến</h6>
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
                                                <input type="text" name="search" className="form-control" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Trạng thái đơn hàng</label>
                                                <select name="status" className="form-control" 
                                                    defaultValue={'0'}>
                                                    <option value="0">Tất cả</option>
                                                    <option value="shipped">Đã giao</option>
                                                    <option value="shipping">Đang giao</option>
                                                    <option value="cancelled">Không giao được</option>
                                                </select>
                                            </div>
                                            <div className="flex-grow-1">
                                                <label>Loại hàng</label>
                                                <select name="type" className="form-control" defaultValue={'0'}>
                                                    <option value="0">Tất cả</option>
                                                    <option value="1">Hàng chuyển</option>
                                                    <option value="2">Hàng nhận</option>
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
                                                    <th>Mã đơn hàng</th>
                                                    <th>Mã bưu phẩm</th>
                                                    <th>Địa điểm gửi</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Trạng thái đơn hàng</th>
                                                    <th>Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {order && order.map((i, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{i.order_id}</td>
                                                                <td><span>{i.parcel.parcel_code}</span></td>
                                                                <td><span>{i.location.address}</span></td>
                                                                <td><span>{i.order_date}</span></td>
                                                                <td><span>{i.status}</span></td>
                                                            </tr>
                                                        )
                                                    })}
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
                                                <a className="page-link" href="/location/agent/order-list?page=2">2</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/location/agent/order-list?page=3">3</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/location/agent/order-list?page=4">4</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/location/agent/order-list?page=5">5</a>
                                            </li>
                                            <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/location/agent/order-list?page=13">14</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/location/agent/order-list?page=14">15</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/location/agent/order-list?page=2" rel="next" aria-label="Next &raquo;">
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