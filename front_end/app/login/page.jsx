// pages/login.js
'use client'
import '/app/global.css'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

import { TiPhone } from 'react-icons/ti';
import { FaLock } from 'react-icons/fa';

import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
let ID = 1, IDemployee = 1;
let dataID = 0;
const Login = () => {
  
  // const navigate = useNavigate();
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [alertLogin, setAlertLogin] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      const token = localStorage.getItem("accessToken");

      if (localStorage.getItem("data")) dataID = localStorage.getItem("data");
      console.log(localStorage.getItem("data"));

      if (jwtDecode(token).role == 0) {
        window.location.href = "/admin";
      } else if (jwtDecode(token).role == 5) {
        window.location.href = "/home";
      } else if (jwtDecode(token).role == 4) {
        window.location.href = `/employee/agent?data=${encodeURIComponent(dataID)}`;
      } else if (jwtDecode(token).role == 3) {
        window.location.href = `/location/agent?data=${encodeURIComponent(dataID)}`;
      } else if (jwtDecode(token).role == 2) {
        window.location.href = `/employee/port?data=${encodeURIComponent(dataID)}`;
      } else if (jwtDecode(token).role == 1) {
        window.location.href = `/location/port?data=${encodeURIComponent(dataID)}`;
      } 
    }
  },[])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    
    if (!name || !password) {
      setLoginError("Tên tài khoản hoặc mật khẩu không hợp lệ!");
    } else {
      axios.post("http://localhost:8000/user/login", {
          name,
          password,
        })
        .then((response) => { 
          if (response.data.accessToken) {
            const accessToken = response.data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            
            // console.log("response.data.account_id");
            // console.log(response.data.location);
            
            if (response.data.location != null) {
              ID = response.data.location.location_id;
              localStorage.setItem("data", ID);
            }
            if (response.data.employee != null){
              IDemployee = response.data.employee.location_id;
              localStorage.setItem("data", IDemployee);
            }
            console.log(ID);
            console.log(IDemployee);

            console.log(localStorage.getItem("data"));

            const storedAccessToken = localStorage.getItem("accessToken");
            if (storedAccessToken) {
                if (jwtDecode(storedAccessToken).role === 0) {
                  window.location.href = "/admin";
                } else if (jwtDecode(storedAccessToken).role === 5) {
                  window.location.href = "/home";
                } else if (jwtDecode(storedAccessToken).role === 4) {
                  window.location.href = `/employee/agent?data=${encodeURIComponent(IDemployee)}`;
                  //window.location.href = "/employee/agent";
                } else if (jwtDecode(storedAccessToken).role === 3) {
                  window.location.href = `/location/agent?data=${encodeURIComponent(ID)}`;
                 // router.push(`/location/agent?data=${encodeURIComponent(ID)}`);
                } else if (jwtDecode(storedAccessToken).role === 2) {
                  window.location.href = `/employee/port?data=${encodeURIComponent(IDemployee)}`;
                } else if (jwtDecode(storedAccessToken).role === 1) {
                  window.location.href = `/location/port?data=${encodeURIComponent(ID)}`;
                } 
              }
            
          }
        })
        .catch((error) => {
          console.log(error);
          setLoginError("Tên đăng nhập hoặc mật khẩu không hợp lệ!");
        });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor=""
              className="absolute top-0 left-2 -mt-2 text-xs text-gray-600"
            >
              Tên đăng nhập
            </label>
            <div className="">
              <TiPhone
                size={30}
                className="absolute top-5 left-1 text-gray-600"
              />
              <input
                type="tel"
                id=""
                name=""
                className="w-full pl-8 mt-3 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600"
                placeholder="Nhập tên đăng nhập của bạn"
                value={name}
                onChange={handleUsernameChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute top-0 left-2 -mt-2 text-xs text-gray-600"
            >
              Mật khẩu
            </label>
            <div>
              <FaLock
                size={25}
                className="absolute top-5 left-1 text-gray-600"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-8 mt-3 border-2 border-blue-400 rounded-md p-2 focus:outline-none focus:border-blue-600"
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link legacyBehavior href="/forgot-password">
              <a className="text-blue-500 text-xs hover:underline">
                Quên mật khẩu?
              </a>
            </Link>
            <Link legacyBehavior href="/register">
              <a className="text-blue-500 text-xs hover:underline">Đăng ký</a>
            </Link>
          </div>
          <button
            
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={ handleLogin}
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;