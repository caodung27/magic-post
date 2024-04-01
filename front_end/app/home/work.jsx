import Image from "next/image";
import imageAsset15 from './assets/imgs/illustrations/eating.svg'
import imageAsset16 from './assets/imgs/illustrations/space.svg'
import imageAsset17 from './assets/imgs/illustrations/tasks.svg'
import imageAsset18 from './assets/imgs/placeholders/act.jpg'
import imageAssetNew from './assets/imgs/elements/news.jpg'

export default function Work() {
    return (
        <>
            <section className="py-20 bg-blueGray-50" id="how-we-work">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                <span>Nhanh chóng, </span>
                                <span className="text-blue-600">chính xác</span>
                                <br />
                                <span>an toàn và </span> 
                                <span className="text-blue-600">chuyên nghiệp</span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp">
                                Dịch vụ chuyển phát nhanh MagicPost cho phép vận chuyển tất cả các loại hàng hóa trong thời gian nhanh chóng, chính xác và chuyên nghiệp. 
                                Thời điểm hiện tại, dịch vụ chuyển phát nhanh MagicPost ở Việt Nam đang được 100% các bưu điện và bưu cục cung cấp trên 63 tỉnh thành. 
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                        <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                <Image className="h-48 mx-auto my-4" src={imageAsset15} alt="" />
                                <h3 className="mb-2 font-bold font-heading">Khách hàng tin dùng</h3>
                            </div>
                        </div>
                        <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                <Image className="h-48 mx-auto my-4" src={imageAsset16} alt="" />
                                <h3 className="mb-2 font-bold font-heading">Bưu gửi đã chuyển</h3>
                            </div>
                        </div>
                        <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                <Image className="h-48 mx-auto my-4" src={imageAsset17} alt="" />
                                <h3 className="mb-2 font-bold font-heading">Số lượng bưu cục</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12" id="works">
                <div className="container py-12 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                            <div className="max-w-md">
                                <h3 className="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    <span className="text-3xl text-blue-600">Các hoạt động </span>
                                </h3>
                                <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                    MagicPost là công ty hoạt động trong lĩnh vực chuyển phát. 
                                    Công ty này có các điểm giao dịch phủ khắp cả nước.
                                </p>
                                <ul>
                                    <li className="py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                        <span>Ước tính cước phí</span>
                                    </li>
                                    <li className="py-4 wow animate__animated animate__fadeInUp" data-wow-delay=".9s">
                                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                        <span>Tìm kiếm bưu cục</span>
                                    </li>
                                    <li className="pt-4 wow animate__animated animate__fadeInUp" data-wow-delay=".11s">
                                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                        <span>Tra hàng cấm gửi</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                            <Image className="sm:max-w-sm lg:max-w-full mx-auto" src={imageAsset18} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20" id="news">
                <div className="container">
                    <div className="flex flex-wrap -mx-8">
                        <div className="w-full lg:w-1/2 px-8">
                            <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    <span className="text-blue-600">Tin tức chính </span>
                                </h2>
                                <p className="mb-8 leading-loose text-blueGray-400 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    <strong>Hướng dẫn định vị bưu gửi với mã vận đơn vô cùng đơn giản</strong>
                                    <br/> Để yên tâm trong quá trình giao nhận hàng hóa, nhiều khách hàng thường có xu hướng tra cứu vận đơn bưu điện để xác định lộ trình của đơn hàng. 
                                    Hiện nay, Magic Post cung cấp rất nhiều cách để giúp bạn xác định được tiến độ giao nhận. 
                                    Trong đó phổ biến nhất là kiểm tra đơn hàng bưu điện thông qua website hoặc các nền tảng mạng xã hội khác. 
                                </p>
                                <Image src={imageAssetNew} width={650} className="mb-3"/>
                                <a className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeInUp" 
                                    data-wow-delay=".5s" href="#">
                                    Đọc thêm
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-8">
                            <ul className="space-y-12">
                                <li className="flex -mx-4 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    <div className="px-4">
                                        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">1</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">Tra cứu: Dịch vụ chuyển phát nhanh mất bao lâu?</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            Mọi thắc mắc sẽ dễ dàng được giải đáp thông qua vài thao tác click chuột trên nền tảng TRA CỨU thông minh từ website ems.com.vn.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                    <div className="px-4">
                                        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">2</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">Bảng báo giá cước phí dịch vụ chuyển phát nhanh</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            Magic Post chính thức công bố bảng giá cước dịch vụ chuyển phát nhanh trong nước và quốc tế. 
                                        </p>
                                    </div>
                                </li>
                                <li className="flex -mx-4 wow animate__animated animate__fadeInUp" data-wow-delay=".7s">
                                    <div className="px-4">
                                        <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">3</span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="my-4 text-xl font-semibold">Triển khai dịch vụ Báo phát ZNS cho người nhận</h3>
                                        <p className="text-blueGray-400 leading-loose">
                                            Bắt đầu từ ngày 5/8/2022,  Tổng công ty Magic Post đã chính thức bắt tay cùng Công ty cổ phần giải pháp phần mềm Mobisoft 
                                            cho ra mắt Dịch vụ GTGT Báo phát ZNS qua ứng dụng Zalo cho người nhận
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>    
    )
}