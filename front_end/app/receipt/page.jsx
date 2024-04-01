'use client'
import React from 'react'
import Image from 'next/image'
import '/app/global.css'
import imageAsset1 from 'app/home/assets/imgs/logos/aa.png'
// import '../../components/employee/asset/css/bootstrap-toggle.min.css'
// import '../../components/employee/asset/css/bootstrap.min.css'
// import '../../components/employee/asset/css/app.css'

import { Link } from 'react-router-dom'

export default function Receipt() {
  return (
    <section>
      <br />
      <a className="leading-none" href="/home">
        <Image className="w-1/5 h-1/5" src={imageAsset1} alt="" />
      </a>
      <br />
      <div className="flex justify-center ">
        <table className="border-collapse border-2 border-slate-600 w-4/5 bg-slate-100">
          <tbody className=''>
            <tr>
              <td className="font-normal text-left border-2 border-slate-600 pl-1 pr-2 w-1/2">
                <strong>1. Họ tên địa chỉ người gửi: </strong>
                <p className="whitespace-normal"> Tran Ba Toan </p>
                <br />
                <p><strong>Điện thoại: </strong>  0368432906</p>
                <div className='flex'>
                  <p className='pr-14'><strong>Mã khách hàng: 1</strong> </p>
                  <p className='pl-14'><strong>Mã bưu chính: 016</strong>  </p>
                </div>
              </td>

              <td className="font-normal text-left border-2 border-slate-600 pl-1 pr-2 w-1/2">
                <strong>2. Họ tên địa chỉ người nhận: </strong>
                <p className="whitespace-normal"> Cao Xuan Dung  </p>
                <br />
                <strong>Điện thoại:  </strong>  0123456789
                <br />
                <div className='flex'>
                  <p className='pr-14'><strong>Mã khách hàng: 2</strong> </p>
                  <p className='pl-14'><strong>Mã bưu chính: 102</strong>  </p>
                </div>
              </td>
            </tr>
          </tbody>

          <tbody className=''>
            <tr className=''>
              <td className="font-normal text-left border-2 border-slate-600 pl-1 pr-2 w-1/2">
                <strong>3. Loại hàng gửi: </strong> <br />
                <div className='flex justify-around'>
                  <p><input type="checkbox" checked /> Tài liệu </p>
                  <p><input type="checkbox" /> Hàng hóa </p>
                </div>

                <strong>4. Khối lượng(kg) / Số lượng(tờ): 10 </strong>
                <p></p>
                <br />
                <strong>5. Dịch vụ đặc biệt / Cộng thêm: </strong>
                <div className='whitespace-normal w-full'>
                  .....................................................................................................................................
                  .....................................................................................................................................
                </div>
              </td>

              <th className="flex font-normal text-left  border-slate-600 pl-1 pr-2">
                <div className='border-r-2 w-3/5 mr-1'>
                  <strong>8. Cước: 0</strong>
                  <br />
                  <div className='flex justify-between'>
                    <p>a. Cước chính: 0</p>
                    <p></p>
                  </div>
                  <div className='flex justify-between'>
                    <p>b. Phụ phí: 0</p>
                    <p></p>
                  </div>
                  <div className='flex justify-between'>
                    <p>c. Cước GTGT: 0</p>
                    <p></p>
                  </div>
                  <div className='flex justify-between'>
                    <p>d. Tổng cước (gồm VAT): 0</p>
                    <p></p>
                  </div>
                  <div className='flex justify-between'>
                    <p>e. Thu khác: 0</p>
                    <p></p>
                  </div>
                  <div className='flex justify-between'>
                    <p><strong>f. Tổng thu: 0</strong></p>
                    <p></p>
                  </div>
                </div >

                <div>
                  <strong>9. Chú dẫn nghiệp vụ: </strong>
                </div >
              </th>
            </tr>
          </tbody>

          <tbody>
            <tr className=''>
              <th className="font-normal text-left border-2 border-slate-600 pl-1 pr-2">
                <strong>6. Cam kết của người gửi: </strong>
                <p>
                  Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi và
                  cam đoan bưu gửi này không chứa những mặt hàng nguy hiểm, cấm gửi.
                </p>
                <div className='flex'>
                  <p className='pr-14'><strong>7. Ngày giờ gửi: </strong> </p>
                  <p className='pl-20'><strong>Chữ ký người gửi </strong>  </p>
                </div>
                <p> 23h10 29/12/2023</p>
                <br /><br />
              </th>

              <th className="flex font-normal border-t-2 border-slate-600 pl-1">
                <div className='text-center border-r-2 w-1/2 mr-1'>
                  <strong>10. Bưu cục chấp nhận: </strong>
                </div>

                <div className="text-center w-1/2">
                  <strong>11. Ngày giờ nhận</strong>
                  <p>....h...../...../...../20.....</p>
                  <p>Người nhận/được ủy quyền nhận</p>
                  <p>(Ký và ghi rõ họ tên)</p>
                  <br />
                  <br />
                  <br />
                </div>

              </th>
            </tr>
          </tbody>
        </table>

        

      </div>
      <br />
      <br />
      <button className="ml-40 h-45 w-100 justify-center flex">In giấy biên nhận</button>
    </section>
  )
}
