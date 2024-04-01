-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th12 28, 2023 lúc 10:28 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `testDT`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `accounts`
--

CREATE TABLE `accounts` (
  `account_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `roles` int(11) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `accounts`
--

INSERT INTO `accounts` (`account_id`, `name`, `password`, `roles`, `phone`, `email`) VALUES
(1, 'duongmanh', '123456', 0, NULL, NULL),
(2, 'caodung', '123456', 0, NULL, NULL),
(3, 'trantoan', '123456', 0, NULL, NULL),
(4, 'customer', '123456', 3, NULL, NULL),
(5, 'employee1', '123456', 2, NULL, NULL),
(6, 'employee2', '123456', 4, NULL, NULL),
(7, 'employee3', '123456', 4, NULL, NULL),
(8, 'employee4', '123456', 2, NULL, NULL),
(9, 'management', '123456', 1, NULL, NULL),
(10, 'management1', '123456', 3, NULL, NULL),
(11, 'management2', '123456', 3, NULL, NULL),
(12, 'management3', '123456', 3, NULL, NULL),
(13, 'management4', '123456', 1, NULL, NULL),
(14, 'employee5', '123456', 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `customers`
--

INSERT INTO `customers` (`customer_id`, `firstname`, `lastname`, `phone`, `address`) VALUES
(1, 'Tran', 'Toan', '0368432907', NULL),
(2, 'Nguyen Van', 'X', '0123456789', 'VP'),
(3, 'Duong', 'Manh', '0868716264', 'Bx, Vp'),
(6, 'Nguyen', 'Linh', '012345678910', 'Bo Cong An');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `account_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `employee`
--

INSERT INTO `employee` (`employee_id`, `firstname`, `lastname`, `account_id`, `location_id`) VALUES
(1, 'A', 'nguyen van', 5, 1),
(2, 'B', 'Le Hai', 8, 4),
(3, 'C', 'Tran', 6, 2),
(4, 'D', 'Tran', 7, 3),
(5, 'E', 'Cao', 14, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `locations`
--

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `type` varchar(50) NOT NULL,
  `account_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `locations`
--

INSERT INTO `locations` (`location_id`, `address`, `type`, `account_id`) VALUES
(1, 'Ha Noi', 'port', 9),
(2, 'Vinh Phuc', 'agent', 10),
(3, 'Bac Ninh', 'agent', 11),
(4, 'Tuyen Quang', 'agent', 12),
(5, 'Phu Tho', 'port', 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `status` varchar(50) NOT NULL,
  `sending_location` int(11) NOT NULL,
  `receiving_location` int(11) NOT NULL,
  `parcel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`order_id`, `order_date`, `status`, `sending_location`, `receiving_location`, `parcel_id`) VALUES
(1, '2023-11-11', 'shipping', 1, 2, 1),
(2, '2023-10-11', 'shipped', 3, 1, 1),
(3, '2023-10-10', 'shipped', 2, 3, 1),
(4, '2023-10-13', 'shipping', 2, 4, 2),
(6, '2023-11-13', 'cancelled', 4, 4, 3),
(7, '2023-12-29', 'shipping', 1, 2, 3),
(8, '2023-12-29', 'shipping', 1, 2, 3),
(9, '2023-12-29', 'shipping', 1, 2, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `parcels`
--

CREATE TABLE `parcels` (
  `parcel_id` int(11) NOT NULL,
  `record_date` date NOT NULL,
  `customer_id` int(11) NOT NULL,
  `parcel_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `parcels`
--

INSERT INTO `parcels` (`parcel_id`, `record_date`, `customer_id`, `parcel_code`) VALUES
(1, '2023-09-09', 1, 'MP2023TT123'),
(2, '2023-09-09', 1, 'MP2023TT123VN'),
(3, '2023-10-10', 1, 'MP2023VN432XX'),
(4, '2023-12-30', 3, 'zsdneslnfwqn'),
(6, '2023-12-30', 3, 'bwkafhlvsd'),
(7, '1970-01-01', 3, 'zefweefbiwe'),
(8, '1970-01-01', 3, 'u6fR3FRikc'),
(9, '1970-01-01', 3, 'ygLVxWuHgUmi3Sn'),
(10, '2023-12-30', 3, 'd2kX4ofyJbLwInN'),
(11, '2023-12-30', 2, 'Yx7kdkhdPInkPfC'),
(12, '2023-12-30', 6, '2vyVsfNCPlX8iLY'),
(13, '2023-12-30', 6, 'cb3WTV6mdzx0uXl'),
(14, '2023-12-30', 6, 'gZ6h0722A1dVMbt'),
(15, '2023-12-30', 6, 'R7aHeExAmTE4Deo'),
(16, '2023-12-30', 6, 'WEulpOyk2grI2Ls'),
(17, '2023-12-30', 6, 'itz4Ak7ak22DNIU');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Chỉ mục cho bảng `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Chỉ mục cho bảng `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Chỉ mục cho bảng `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_id`),
  ADD KEY `locations_ibfk_1` (`account_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `sending_location` (`sending_location`),
  ADD KEY `reciving_location` (`receiving_location`),
  ADD KEY `fk_parcel_constraint` (`parcel_id`);

--
-- Chỉ mục cho bảng `parcels`
--
ALTER TABLE `parcels`
  ADD PRIMARY KEY (`parcel_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `accounts`
--
ALTER TABLE `accounts`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `locations`
--
ALTER TABLE `locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `parcels`
--
ALTER TABLE `parcels`
  MODIFY `parcel_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`),
  ADD CONSTRAINT `employee_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`);

--
-- Các ràng buộc cho bảng `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`account_id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_parcel_constraint` FOREIGN KEY (`parcel_id`) REFERENCES `parcels` (`parcel_id`),
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`sending_location`) REFERENCES `locations` (`location_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`receiving_location`) REFERENCES `locations` (`location_id`);

--
-- Các ràng buộc cho bảng `parcels`
--
ALTER TABLE `parcels`
  ADD CONSTRAINT `parcels_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
