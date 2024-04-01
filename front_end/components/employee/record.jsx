// Diem giao dich
'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import axios from "axios";
// CSS
import './asset/css/bootstrap-toggle.min.css'
import './asset/css/bootstrap.min.css'
import './asset/css/app.css'
import "./custom.210823.css"
import imageAsset from './asset/imgs/profile.jpg';
import { FaBars } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { CgPlayTrackNextO } from "react-icons/cg";

export default function Record() {

    const [provinces, setProvinces] = useState();
    // const [selectedOption2, setSelectedOption2] = useState('0');

    // const handleOption1Change = (event) => {
    //     setSelectedOption1(event.target.value);
    // };

    // const handleOption2Change = (event) => {
    //     setSelectedOption2(event.target.value);
    // };

    // useEffect(() => {
    //     axios.get('https://provinces.open-api.vn/api/depth==2')
    //         .then(response => {
    //             setProvinces(response.data.data);
    //         })
    //         .catch(error => {
    //             // Xử lý lỗi nếu có
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    const handleSubmit = (event) => {
        // Xử lý logic khi biểu mẫu được gửi đi
        event.preventDefault();
        console.log('Selected Option 2:', selectedOption2);
    };

    return (
        <section className="page-wrapper default-version">
            <nav className="navbar-wrapper bg--dark">
                <div className="navbar__left">
                    <button type="button" className="res-sidebar-open-btn me-3"><FaBars /></button>
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
                        <h6 className="page-title">Ghi nhận đơn hàng</h6>
                    </div>
                    <form
                        method="POST"
                        action=""
                        acceptCharset="UTF-8"
                        id="frmCreate"
                        className="form-horizontal form-label-left input_mask"
                        noValidate=""
                        siq_id="autopick_7122"
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="_token"
                            type="hidden"
                            defaultValue="po4tHJptc7HOuW4PfNQ2JOkPOzdefUIFABcAudpN"
                        />
                        <div className="col-xs-12 col-md-12">
                            <div className="row">
                                <div className="col-xs-12 col-md-5 w-1/2">
                                    <div className="x_panel full-h">
                                        <div className="x_title text-info">
                                            <h2>Người gửi</h2>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="x_content">
                                            <div className="row">
                                                <div className="col-xs-6 col-md-6">
                                                    <div className="form-group text-info">
                                                        <label className="control-label" htmlFor="from_name">
                                                            Họ <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="from_firstname"
                                                            name="from_firstname"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                            placeholder="Họ tên"
                                                        />
                                                        <label className="control-label" htmlFor="from_name">
                                                            Tên <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="from_lastname"
                                                            name="from_lastname"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                            placeholder="Họ tên"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-6">
                                                    <div className="form-group text-info">
                                                        <label className="control-label" htmlFor="from_phone">
                                                            Điện thoại{" "}
                                                            <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="from_phone"
                                                            name="from_phone"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                            placeholder="Điện thoại người gửi"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" id="new_inventory">
                                                <div className="col-xs-12 col-md-12">
                                                    <div className="form-group text-info item">
                                                        <label className="control-label" htmlFor="from_location">
                                                            Tỉnh/TP
                                                            <span className="required text-danger">*</span>
                                                        </label>

                                                        <select id="to_local"
                                                            className="form-control"
                                                            autoComplete="off"
                                                            placeholder="Chọn tỉnh" name="calc_shipping_provinces">
                                                            <option value="">Tỉnh / Thành phố</option>
                                                            <option value="1">An Giang</option><option value="2">Bà Rịa - Vũng Tàu</option><option value="3">Bạc Liêu</option><option value="4">Bắc Kạn</option><option value="5">Bắc Giang</option><option value="6">Bắc Ninh</option><option value="7">Bến Tre</option><option value="8">Bình Dương</option><option value="9">Bình Định</option><option value="10">Bình Phước</option><option value="11">Bình Thuận</option><option value="12">Cà Mau</option><option value="13">Cao Bằng</option><option value="14">Cần Thơ</option><option value="15">Đà Nẵng</option><option value="16">Đắk Lắk</option><option value="17">Đắk Nông</option><option value="18">Đồng Nai</option><option value="19">Đồng Tháp</option><option value="20">Điện Biên</option><option value="21">Gia Lai</option><option value="22">Hà Giang</option><option value="23">Hà Nam</option><option value="24">Hà Nội</option><option value="25">Hà Tĩnh</option><option value="26">Hải Dương</option><option value="27">Hải Phòng</option><option value="28">Hòa Bình</option><option value="29">Hậu Giang</option><option value="30">Hưng Yên</option><option value="31">Thành phố Hồ Chí Minh</option><option value="32">Khánh Hòa</option><option value="33">Kiên Giang</option><option value="34">Kon Tum</option><option value="35">Lai Châu</option><option value="36">Lào Cai</option><option value="37">Lạng Sơn</option><option value="38">Lâm Đồng</option><option value="39">Long An</option><option value="40">Nam Định</option><option value="41">Nghệ An</option><option value="42">Ninh Bình</option><option value="43">Ninh Thuận</option><option value="44">Phú Thọ</option><option value="45">Phú Yên</option><option value="46">Quảng Bình</option><option value="47">Quảng Nam</option><option value="48">Quảng Ngãi</option><option value="49">Quảng Ninh</option>
                                                            <option value="50">Quảng Trị</option><option value="51">Sóc Trăng</option><option value="52">Sơn La</option>
                                                            <option value="53">Tây Ninh</option><option value="54">Thái Bình</option><option value="55">Thái Nguyên</option>
                                                            <option value="56">Thanh Hóa</option><option value="57">Thừa Thiên - Huế</option><option value="58">Tiền Giang</option>
                                                            <option value="59">Trà Vinh</option><option value="60">Tuyên Quang</option><option value="61">Vĩnh Long</option>
                                                            <option value="62">Vĩnh Phúc</option><option value="63">Yên Bái</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-info item">
                                                <label className="control-label" htmlFor="to_postal">
                                                    Quận/Huyện
                                                </label>
                                                <select id="from_postal"
                                                    className="form-control"
                                                    autoComplete="off" name="calc_shipping_district">
                                                    <option value="">Quận / Huyện</option>
                                                    <option value="Quận Ba Đình">Quận Ba Đình</option><option value="Huyện Ba Vì">Huyện Ba Vì</option>
                                                    <option value="Quận Bắc Từ Liêm">Quận Bắc Từ Liêm</option>
                                                    <option value="Quận Cầu Giấy">Quận Cầu Giấy</option>
                                                    <option value="Huyện Chương Mỹ">Huyện Chương Mỹ</option>
                                                    <option value="Huyện Đan Phượng">Huyện Đan Phượng</option>
                                                    <option value="Huyện Đông Anh">Huyện Đông Anh</option>
                                                    <option value="Quận Đống Đa">Quận Đống Đa</option>
                                                    <option value="Huyện Gia Lâm">Huyện Gia Lâm</option>
                                                    <option value="Quận Hà Đông">Quận Hà Đông</option>
                                                    <option value="Quận Hai Bà Trưng">Quận Hai Bà Trưng</option>
                                                    <option value="Huyện Hoài Đức">Huyện Hoài Đức</option>
                                                    <option value="Quận Hoàn Kiếm">Quận Hoàn Kiếm</option>
                                                    <option value="Quận Hoàng Mai">Quận Hoàng Mai</option>
                                                    <option value="Quận Long Biên">Quận Long Biên</option><option value="Huyện Mê Linh">Huyện Mê Linh</option><option value="Huyện Mỹ Đức">Huyện Mỹ Đức</option><option value="Quận Nam Từ Liêm">Quận Nam Từ Liêm</option><option value="Huyện Phú Xuyên">Huyện Phú Xuyên</option><option value="Huyện Phúc Thọ">Huyện Phúc Thọ</option>
                                                    <option value="Huyện Quốc Oai">Huyện Quốc Oai</option><option value="Huyện Sóc Sơn">Huyện Sóc Sơn</option><option value="Thị xã Sơn Tây">Thị xã Sơn Tây</option><option value="Quận Tây Hồ">Quận Tây Hồ</option><option value="Huyện Thạch Thất">Huyện Thạch Thất</option>
                                                    <option value="Huyện Thanh Oai">Huyện Thanh Oai</option><option value="Huyện Thanh Trì">Huyện Thanh Trì</option>
                                                    <option value="Quận Thanh Xuân">Quận Thanh Xuân</option><option value="Huyện Thường Tín">Huyện Thường Tín</option>
                                                    <option value="Huyện Ứng Hòa">Huyện Ứng Hòa</option>
                                                </select>
                                            </div>
                                            <div className="form-group text-info hidden" id="old_inventory">
                                                <label className="control-label">
                                                    Khu vực <span className="required text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    defaultValue=""
                                                    autoComplete="off"
                                                    className="form-control"
                                                    disabled=""
                                                />
                                            </div>
                                            <div className="form-group text-info">
                                                <label className="control-label" htmlFor="from_address">
                                                    Địa chỉ <span className="required text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="from_address"
                                                    name="from_address"
                                                    defaultValue=""
                                                    autoComplete="off"
                                                    className="form-control"
                                                    required=""
                                                    placeholder="Số nhà, tên đường/thôn, ấp..."
                                                />
                                            </div>
                                            <input
                                                type="hidden"
                                                name="inventory"
                                                defaultValue=""
                                                autoComplete="off"
                                            />
                                            <input
                                                type="hidden"
                                                name="from_province"
                                                defaultValue=""
                                                autoComplete="off"
                                            />
                                            <input
                                                type="hidden"
                                                name="from_district"
                                                defaultValue=""
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-5 w-1/2">
                                    <div className="x_panel full-h">
                                        <div className="x_title text-info">
                                            <h2>Người nhận</h2>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="x_content">
                                            <div className="row">
                                                <div className="col-xs-6 col-md-6">
                                                    <div className="form-group text-info item">
                                                        <label className="control-label" htmlFor="to_name">
                                                            Họ <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="to_firstname"
                                                            name="to_firstname"
                                                            defaultValue=""
                                                            placeholder="Họ tên"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                        <label className="control-label" htmlFor="from_name">
                                                            Tên <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="to_lastname"
                                                            name="to_lastname"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                            placeholder="Họ tên"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6 col-md-6">
                                                    <div className="form-group text-info item">
                                                        <label className="control-label" htmlFor="to_phone">
                                                            Số điện thoại{" "}
                                                            <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="to_phone"
                                                            name="to_phone"
                                                            defaultValue=""
                                                            placeholder="Số điện thoại"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-info item">
                                                <label className="control-label" htmlFor="to_location">
                                                    Tỉnh/TP
                                                    <span className="required text-danger">*</span>
                                                </label>
                                                <select id="to_local"
                                                    className="form-control"
                                                    autoComplete="off"
                                                    placeholder="Chọn tỉnh" name="calc_shipping_provinces">
                                                    <option value="">Tỉnh / Thành phố</option>
                                                    <option value="1">An Giang</option><option value="2">Bà Rịa - Vũng Tàu</option><option value="3">Bạc Liêu</option><option value="4">Bắc Kạn</option><option value="5">Bắc Giang</option><option value="6">Bắc Ninh</option><option value="7">Bến Tre</option><option value="8">Bình Dương</option><option value="9">Bình Định</option><option value="10">Bình Phước</option><option value="11">Bình Thuận</option><option value="12">Cà Mau</option><option value="13">Cao Bằng</option><option value="14">Cần Thơ</option><option value="15">Đà Nẵng</option><option value="16">Đắk Lắk</option><option value="17">Đắk Nông</option><option value="18">Đồng Nai</option><option value="19">Đồng Tháp</option><option value="20">Điện Biên</option><option value="21">Gia Lai</option><option value="22">Hà Giang</option><option value="23">Hà Nam</option><option value="24">Hà Nội</option><option value="25">Hà Tĩnh</option><option value="26">Hải Dương</option><option value="27">Hải Phòng</option><option value="28">Hòa Bình</option><option value="29">Hậu Giang</option><option value="30">Hưng Yên</option><option value="31">Thành phố Hồ Chí Minh</option><option value="32">Khánh Hòa</option><option value="33">Kiên Giang</option><option value="34">Kon Tum</option><option value="35">Lai Châu</option><option value="36">Lào Cai</option><option value="37">Lạng Sơn</option><option value="38">Lâm Đồng</option><option value="39">Long An</option><option value="40">Nam Định</option><option value="41">Nghệ An</option><option value="42">Ninh Bình</option><option value="43">Ninh Thuận</option><option value="44">Phú Thọ</option><option value="45">Phú Yên</option><option value="46">Quảng Bình</option><option value="47">Quảng Nam</option><option value="48">Quảng Ngãi</option><option value="49">Quảng Ninh</option>
                                                    <option value="50">Quảng Trị</option><option value="51">Sóc Trăng</option><option value="52">Sơn La</option>
                                                    <option value="53">Tây Ninh</option><option value="54">Thái Bình</option><option value="55">Thái Nguyên</option>
                                                    <option value="56">Thanh Hóa</option><option value="57">Thừa Thiên - Huế</option><option value="58">Tiền Giang</option>
                                                    <option value="59">Trà Vinh</option><option value="60">Tuyên Quang</option><option value="61">Vĩnh Long</option>
                                                    <option value="62">Vĩnh Phúc</option><option value="63">Yên Bái</option>
                                                </select>
                                            </div>
                                            <div className="form-group text-info item">
                                                <label className="control-label" htmlFor="to_postal">
                                                    Quận/Huyện
                                                </label>


                                                <select id="from_postal"
                                                    className="form-control"
                                                    autoComplete="off" name="calc_shipping_district">
                                                    <option value="">Quận / Huyện</option><option value="Thành phố Vĩnh Yên">Thành phố Vĩnh Yên</option>
                                                    <option value="Thị xã Phúc Yên">Thị xã Phúc Yên</option><option value="Huyện Bình Xuyên">Huyện Bình Xuyên</option><option value="Huyện Lập Thạch">Huyện Lập Thạch</option><option value="Huyện Sông Lô">Huyện Sông Lô</option><option value="Huyện Tam Đảo">Huyện Tam Đảo</option><option value="Huyện Tam Dương">Huyện Tam Dương</option><option value="Huyện Vĩnh Tường">Huyện Vĩnh Tường</option>
                                                    <option value="Huyện Yên Lạc">Huyện Yên Lạc</option>
                                                </select>
                                            </div>
                                            <div className="form-group text-info item">
                                                <label className="control-label" htmlFor="to_address">
                                                    Địa chỉ <span className="required text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="to_address"
                                                    name="to_address"
                                                    defaultValue=""
                                                    placeholder="Số nhà, tên đường/thôn, ấp..."
                                                    autoComplete="off"
                                                    className="form-control"
                                                    required=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">&nbsp;</div>
                            <div className="row flex">
                                <div className="col-xs-12 col-md-4 w-2/3">
                                    <div className="x_panel full-h">
                                        <div className="x_title text-info">
                                            <h2>Thông tin đơn hàng</h2>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="x_content">
                                            <div className="form-group text-info item" id="__product_0">
                                                <label className="control-label" htmlFor="product_name">
                                                    Tên sản phẩm <span className="required text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="product_name"
                                                    name="product_name"

                                                    autoComplete="off"
                                                    className="form-control"
                                                    required=""
                                                    placeholder="Tên đơn hàng"
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-4 col-md-5">
                                                    <div className="form-group text-info">
                                                        <label className="control-label" htmlFor="total_amount">
                                                            Giá trị
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="total_amount"
                                                            name="total_amount"
                                                            className="form-control text-right calculator"
                                                            autoComplete="off"
                                                            data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                            placeholder="vnd"

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-md-4">
                                                    <div className="form-group text-info">
                                                        <label className="control-label" htmlFor="total_weight">
                                                            K.lượng <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="total_weight"
                                                            name="total_weight"

                                                            autoComplete="off"
                                                            className="form-control text-right calculator"
                                                            data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                            placeholder="gram"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-4 col-md-3">
                                                    <div className="form-group text-info item">
                                                        <label className="control-label" htmlFor="total_quantity">
                                                            S.lượng
                                                            <span className="required text-danger">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="total_quantity"
                                                            name="total_quantity"

                                                            autoComplete="off"
                                                            className="form-control text-right"
                                                            required=""
                                                            data-inputmask="'alias': 'decimal', 'groupSeparator': ',', 'autoGroup': true"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="sku"
                                                    defaultValue=""
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <div className="form-group text-info text-left">
                                                <label className="control-label pull-left" htmlFor="size">
                                                    Kích thước (nếu có)
                                                </label>
                                                <div className="clearfix" />
                                                <div className="row">
                                                    <div className="col-xs-4 col-md-4">
                                                        <input
                                                            type="text"
                                                            id="size_x"
                                                            name="size_x"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control text-right boxsize calculator"
                                                            placeholder="Dài (cm)"
                                                        />
                                                    </div>
                                                    <div className="col-xs-4 col-md-4">
                                                        <input
                                                            type="text"
                                                            id="size_y"
                                                            name="size_y"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control text-right boxsize calculator"
                                                            placeholder="Rộng (cm)"
                                                        />
                                                    </div>
                                                    <div className="col-xs-4 col-md-4">
                                                        <input
                                                            type="text"
                                                            id="size_z"
                                                            name="size_z"
                                                            defaultValue=""
                                                            autoComplete="off"
                                                            className="form-control text-right boxsize calculator"
                                                            placeholder="Cao (cm)"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-info">
                                                <label className="control-label" htmlFor="description">
                                                    Ghi chú
                                                </label>
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    className="form-control"
                                                    rows={3}
                                                    autoComplete="off"
                                                    defaultValue={""}
                                                    placeholder="Ghi chú thêm"
                                                />
                                            </div>
                                            <input
                                                type="hidden"
                                                name="item_code"
                                                defaultValue=""
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4 w-1/3">
                                    <div className="x_panel full-h">
                                        <div className="x_title text-info">
                                            <h2>Đơn hàng</h2>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="x_content col-xs-12">
                                            <div className="form-group text-info item">
                                                <label className="control-label" htmlFor="service">
                                                    Dịch vụ vận chuyển
                                                    <span className="required text-danger">*</span>
                                                </label>
                                                <select defaultValue={0} id="service" name="service" className="form-control select2_single" autoComplete="off">
                                                    <option value="0"> Lựa chọn dịch vụ</option>
                                                    <option value="2">
                                                        Chuyển phát nhanh EMS - Tài liệu (Không thu hộ)
                                                    </option>
                                                    <option value="1">
                                                        Chuyển phát nhanh EMS - Hàng Hoá
                                                    </option>
                                                </select>

                                            </div>
                                            <div className="form-group text-info">
                                                <label className="control-label" htmlFor="vas">
                                                    Dịch vụ cộng thêm
                                                </label>

                                                <select
                                                    id="service"
                                                    name="service"
                                                    className="form-control select2_single"
                                                    autoComplete="off"

                                                    defaultValue={'0'}
                                                >
                                                    <option value="0"> Chọn dịch vụ thêm</option>
                                                    <option value="2">Tài liệu (Không thu hộ)</option>
                                                    <option value="1">Hàng Hoá</option>
                                                </select>
                                            </div>

                                            <div className="form-group text-info">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="checked"
                                                        defaultValue={1}
                                                        className="js-switch"
                                                        data-switchery="true"

                                                    />
                                                    <span
                                                        className="switchery switchery-small"
                                                        style={{
                                                            boxShadow:
                                                                "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                                                            borderColor: "rgb(223, 223, 223)",
                                                            backgroundColor: "rgb(255, 255, 255)",
                                                            transition:
                                                                "border 0.4s ease 0s, box-shadow 0.4s ease 0s",
                                                        }}
                                                    >
                                                        <small
                                                            style={{
                                                                left: 0,
                                                                transition:
                                                                    "background-color 0.4s ease 0s, left 0.2s ease 0s",
                                                            }}
                                                        />
                                                    </span>
                                                    Cho khách xem hàng
                                                </label>
                                            </div>
                                            <div className="form-group text-info">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="fragile"
                                                        defaultValue={1}
                                                        className="js-switch"
                                                        data-switchery="true"
                                                    />
                                                    <span
                                                        className="switchery switchery-small"
                                                        style={{
                                                            boxShadow:
                                                                "rgb(223, 223, 223) 0px 0px 0px 0px inset",
                                                            borderColor: "rgb(223, 223, 223)",
                                                            backgroundColor: "rgb(255, 255, 255)",
                                                            transition:
                                                                "border 0.4s ease 0s, box-shadow 0.4s ease 0s",
                                                        }}
                                                    >
                                                        <small
                                                            style={{
                                                                left: 0,
                                                                transition:
                                                                    "background-color 0.4s ease 0s, left 0.2s ease 0s",
                                                            }}
                                                        />
                                                    </span>
                                                    Hàng chất lỏng,pin sạc
                                                </label>
                                            </div>

                                            <div className="form-group">
                                                {/* <button type="submit" class="btn btn--primary h-45 w-100 Submitbtn"> Tạo đơn</button> */}
                                                <Link
                                                    type="submit"
                                                    className="btn btn--primary h-45 w-100 Submitbtn "
                                                   href={"/receipt"}
                                                >
                                                    
                                                    GHI NHẬN ĐƠN HÀNG

                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}