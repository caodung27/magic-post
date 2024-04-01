import Image from "next/image"
import imageAsset1 from './assets/imgs/logos/monst-logo.svg'
import imageAsset12 from './assets/imgs/icons/facebook-blue.svg'
import imageAsset13 from './assets/imgs/icons/instagram-blue.svg'
import imageAsset14 from './assets/imgs/icons/twitter-blue.svg'

export default function Footer() {
    return (
        <>
            <section className="py-20" id="contact">
                <div className="container">
                    <div className="max-w-2xl lg:max-w-3xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">Hãy liên lạc ngay!</h2>
                            <p className="text-blueGray-400 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">Chúng tôi luôn sẵn sàng lắng nghe bạn</p>
                        </div>
                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Phone</span>
                                    <p>+ 1900545433</p>
                                    <p>+ 1900545433</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">E-mail</span>
                                    <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="93f0fcfde7f2f0e7d3fefcfde0e7bdf0fcfe">cskh@ems.vn</a></p>
                                    <p><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="fb8b9a8fbb9e839a968b979ed5989496">cskh@ems.vn</a></p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Address</span>
                                    <p>Lê Đức Thọ, Mỹ Đình 2, </p>
                                    <p> Nam Từ Liêm, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form>
                                <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Chủ đề" />
                                        </div>
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Tên" />
                                        </div>
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                        </div>
                                        <div>
                                            <label className="flex px-2 bg-blueGray-50 rounded">
                                                <input className="hidden" type="file" name="Choose file" />
                                                <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-3">
                                        <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Văn bản..."></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label>
                                        <input className="mr-1" type="checkbox" name="terms" value="1" />
                                        <span className="text-sm font-semibold">Tôi đồng ý với điều khoản & dịch vụ</span>
                                    </label>
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>            
            <section className="relative footer-2 border-t border-gray-100">
                <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
                <div className="container">
                    <div className="relative flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                            <a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s" href="index">
                                <Image className="h-10" src={imageAsset1} alt="" />
                            </a>
                            <div className="mt-12 mb-16">
                                <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                                <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                                    <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                                        <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                                    </div>
                                    <button className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Sign Up</button>
                                </div>
                            </div>
                            <div className="hidden lg:block wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
                                <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                                <div className="-mx-2 mt-4">
                                    <a className="inline-block px-2" href="#">
                                        <Image src={imageAsset12} alt="" />
                                    </a>
                                    <a className="inline-block px-2" href="#">
                                        <Image src={imageAsset13} alt="" />
                                    </a>
                                    <a className="inline-block px-2" href="#">
                                        <Image src={imageAsset14} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                            <div className="flex flex-row flex-wrap justify-around mb-12">
                                <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">
                                    <h5 className="mb-6 text-lg font-bold font-heading">Giới thiệu</h5>
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about-1">Lịch sử</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about-2">Tầm nhìn</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about-3">Ban lãnh đạo</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about-4">Văn hóa</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                                    <h5 className="mb-6 text-lg font-bold font-heading">Đối tác</h5>
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="ems">EMS</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="jt">J&T Express</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="vnpost">Vietnam Post</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="lalamove">Lalamove</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-auto mb-4 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
                                    <h5 className="mb-6 text-lg font-bold font-heading">Tin tức</h5>
                                    <ul className="space-y-3">
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="news-1">Tin nội bộ</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="news-2">Tin dịch vụ mới</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="news-3">Tin ngành</a>
                                        </li>
                                        <li>
                                            <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="news-3">Tin quốc tế</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}