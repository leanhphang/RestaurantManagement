# Ứng dụng quản lý nhà hàng – kiến trúc Microservices

## Mô tả
Đây là hệ thống web quản lý nhà hàng – khách sạn được thiết kế theo mô hình Microservice kết hợp với kiến trúc MVC, sử dụng MERN stack nhằm hỗ trợ quy trình đặt bàn, phục vụ món ăn và quản lý vận hành nhà hàng một cách linh hoạt và mở rộng dễ dàng.

## Cấu trúc thư mục

```
Restaurant-Management/
│
├── backend/
│   ├── api-gateway/
│   ├── user-service/
│   ├── reservation-service/
│   ├── food-service/
│   └── order-service/
│
├── frontend/
│
├── docker-compose.yml
└── README.md
```

- **backend/**: Chứa toàn bộ mã nguồn backend (các microservice và API Gateway)
- **frontend/**: Ứng dụng React giao diện người dùng
- **docker-compose.yml**: Quản lý các container

## Các service backend & cổng sử dụng
- **api-gateway**: Định tuyến request giữa frontend và các service (**cổng 3000**)
- **user-service**: Đăng ký, đăng nhập, phân quyền, quản lý người dùng (**cổng 3001**)
- **reservation-service**: Đặt bàn, check-in, hủy lịch, kiểm tra bàn trống (**cổng 3002**)
- **food-service**: Quản lý thực đơn, trạng thái món ăn (**cổng 3003**)
- **order-service**: Gọi món, chỉnh sửa đơn hàng, cập nhật trạng thái đơn (**cổng 3004**)
- **frontend**: Giao diện người dùng (**cổng 4000**)

## Hướng dẫn khởi chạy

### 1. Clone dự án
```bash
git clone <link-repo>
cd Restaurant-Management
```

### 2. Cài đặt package chung (nếu có)
```bash
npm init -y
npm install
```

### 3. Cài đặt và cấu hình từng service
- Vào thư mục service bạn phụ trách, ví dụ:
  ```bash
  cd backend/user-service
  npm install
  cp .env.example .env # hoặc tự tạo file .env theo mẫu
  # Chỉnh sửa các biến môi trường nếu cần
  ```
- Làm tương tự với các service khác: reservation-service, food-service, order-service, api-gateway

### 4. Chạy service ở chế độ dev
```bash
npm run dev
```

### 5. (Hiện tại chưa cần dùng) Chạy toàn bộ hệ thống bằng Docker Compose
- Ở thư mục gốc dự án:
  ```bash
  docker-compose up --build
  ```
- Docker sẽ tự động build và chạy tất cả các service, MongoDB và frontend.

### 6. Truy cập các service
- User Service: http://localhost:3001
- Reservation Service: http://localhost:3002
- Food Service: http://localhost:3003
- Order Service: http://localhost:3004
- API Gateway: http://localhost:3000
- Frontend: http://localhost:4000

> **Lưu ý:**
> - Đảm bảo port trên máy bạn không bị chiếm trước khi chạy.
> - Nếu có lỗi port, hãy kiểm tra và kill tiến trình chiếm port đó.
> - Mỗi service cần file `.env` riêng, tham khảo mẫu trong từng thư mục service.
