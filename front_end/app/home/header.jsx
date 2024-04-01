import React from 'react';
import Image from "next/image";
import imageAsset1 from './assets/imgs/logos/monst-logo.svg'
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="bg-transparent">
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <a className="text-3xl font-semibold leading-none" href="/home">
                        
                        </a>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <li className="pt-4 pb-4">
                                <a href="home" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Trang chủ</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a href="#how-we-work" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Giới thiệu</a>
                            </li>
                            <li className="pt-4 pb-4">
                                <a href="#search" className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">Tra cứu</a>
                            </li>
                            <li className="group relative pt-4 pb-4 has-child">
                                <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="news">Tin tức</a>
                                <ul className="drop-down-menu min-w-200">
                                    <li>
                                        <a href="#news" className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin nội bộ</a>
                                    </li>
                                    <li>
                                        <a href="#news" className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin dịch vụ mới</a>
                                    </li>
                                    <li>
                                        <a href="#news" className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin ngành</a>
                                    </li>
                                    <li>
                                        <a href="#news" className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Tin quốc tế</a>
                                    </li>
                                    <li>
                                        <a href="#news" className="menu-sub-item text-sm text-blueGray-600 hover:text-blueGray-500">Thông tin hữu ích</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="pt-4 pb-4"><a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500" href="#contact">Liên hệ</a></li>
                        </ul>
                        <div className="hidden lg:block">
                            <Link legacyBehavior href="/login">
                                <a className="btn-accent hover-up-2">Đăng nhập</a>
                            </Link>
                            <Link legacyBehavior href="/register">
                                <a className="btn-primary hover-up-2" >Đăng ký</a>
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="hidden navbar-menu relative z-50 transition duration-300">
                <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-semibold leading-none" href="#">
                        <Image className="w-1/5 h-1/5" src={imageAsset1} alt="" />
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className="mb-1 menu-item-has-children rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl" href="home">Trang chủ</a>
                            </li>
                            <li className="mb-1 menu-item-has-children rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="aboutus">Giới thiệu</a>
                                <ul className="dropdown pl-5">
                                    <li>
                                        <a href="about-1" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Lịch sử hình thành</a>
                                    </li>
                                    <li>
                                        <a href="about-2" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Cơ cấu tổ chức</a>
                                    </li>
                                    <li>
                                        <a href="about-3" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Ban lãnh đạo</a>
                                    </li>
                                    <li>
                                        <a href="about-4" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Văn hóa doanh nghiệp</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="services">Dịch vụ</a>
                            </li>
                            <li className="mb-1 menu-item-has-children rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="counter-partner">Đối tác</a>
                                <ul className="dropdown pl-5">
                                    <li>
                                        <a href="ems" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">EMS</a>
                                    </li>
                                    <li>
                                        <a href="jtexpress" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">J&T Express</a>
                                    </li>
                                    <li>
                                        <a href="vnpost" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Vietnam Post</a>
                                    </li>
                                    <li>
                                        <a href="lalamove" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Lalamove</a>
                                    </li>
                                    <li>
                                        <a href="hkpost" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Hongkong Post</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1 menu-item-has-children rounded-xl">
                                <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500" href="news">Tin tức</a>
                                <ul className="dropdown pl-5">
                                    <li>
                                        <a href="news-1" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin nội bộ</a>
                                    </li>
                                    <li>
                                        <a href="news-2" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin dịch vụ mới</a>
                                    </li>
                                    <li>
                                        <a href="news-3" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin ngành</a>
                                    </li>
                                    <li>
                                        <a href="news-4" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Tin quốc tế</a>
                                    </li>
                                    <li>
                                        <a href="news-5" className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Thông tin hữu ích</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="mt-4 pt-6 border-t border-blueGray-100">
                            <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded" href="signup">Đăng ký</a>
                            <a className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="login">Đăng nhập</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}