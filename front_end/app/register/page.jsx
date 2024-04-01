// pages/register.js
import '/app/global.css'

import React from 'react';
import Link from "next/link";

import { TiPhone } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng ký</h2>
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute top-0 left-2 text-xs text-gray-600"
            >
              Số điện thoại
            </label>
            <div>
              <TiPhone
                size={30}
                className="absolute top-[30px] left-1 text-gray-600"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full pl-8 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600 mt-6"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute top-0 left-2 text-xs text-gray-600"
            >
              Email
            </label>
            <div>
              <MdEmail
                size={25}
                className="absolute top-[32px] left-[5px] text-gray-600"
              />

              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-8 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600 mt-6"
                placeholder="Nhập địa chỉ email của bạn"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="dob"
              className="absolute top-0 left-2 text-xs text-gray-600"
            >
              Ngày tháng năm sinh
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600 mt-6"
            />
          </div>
          <div className="pl-2">
            <p className="text-xs text-gray-600 mb-1">Giới tính</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-1"
              />
              <label htmlFor="male" className="mr-4 text-sm">
                Nam
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-1"
              />
              <label htmlFor="female" className="text-sm">
                Nữ
              </label>
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute top-0 left-2 text-xs text-gray-600"
            >
              Mật khẩu
            </label>
            <div>
              <FaLock
                size={25}
                className="absolute top-8 left-1 text-gray-500"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-8 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600 mt-6"
                placeholder="Nhập mật khẩu của bạn"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="absolute top-0 left-2 text-xs text-gray-600"
            >
              Xác nhận mật khẩu
            </label>
            <div>
              <FaLock
                size={25}
                className="absolute top-8 left-1 text-gray-500"
              />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full pl-8 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600 mt-6"
                placeholder="Xác nhận lại mật khẩu"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-6"
          >
            Đăng ký
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm">Đã có tài khoản?</p>
          <Link legacyBehavior href="/login">
            <a className="text-blue-500 hover:underline">Đăng nhập ngay</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
