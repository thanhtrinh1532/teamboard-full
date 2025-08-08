# 🧠 TeamBoard - Ứng Dụng Quản Lý Công Việc Nhóm

TeamBoard là một ứng dụng web hỗ trợ các nhóm làm việc hiệu quả thông qua việc tạo bảng, phân chia nhiệm vụ, theo dõi tiến độ và cộng tác trực tuyến. Giao diện thân thiện, hiện đại giúp người dùng dễ dàng quản lý dự án và công việc hàng ngày.

## 🚀 Tính Năng Nổi Bật

- 📋 Tạo bảng công việc theo từng dự án
- 🧩 Thêm, chỉnh sửa và xoá các thẻ (task)
- 👥 Phân công công việc cho từng thành viên
- 📌 Kéo và thả thẻ giữa các cột (drag & drop)
- ⏰ Thiết lập deadline, nhắc nhở công việc
- 🔐 Đăng ký, đăng nhập và phân quyền người dùng

## 🛠 Công Nghệ Sử Dụng

- **Frontend:** ReactJS, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Cơ sở dữ liệu:** MongoDB
- **Authentication:** JWT
- **Realtime (tùy chọn):** Socket.IO
- **Triển khai:** Vercel (Frontend), Render/Heroku (Backend)

## ⚙️ Hướng Dẫn Cài Đặt

### 1. Clone repository

```bash
git clone https://github.com/thanhtrinh1532/teamboard-full.git
cd teamboard-full
### 2. Cài đặt
# Cài đặt frontend
cd client
npm install

# Cài đặt backend
cd ../server
npm install
### 3. Cấu trình môi trường
PORT=5000
MONGO_URI=mongodb://localhost:27017/teamboard
JWT_SECRET=your_jwt_secret_key
### 4. Chạy ứng dụng
# Khởi chạy backend
cd server
npm start

# Khởi chạy frontend
cd ../client
npm start

---

Nếu bạn đang xây dựng **website quản lý cho mục đích khác** (nhà hàng, thư viện, nhân sự, học sinh...), chỉ cần nói rõ, mình sẽ điều chỉnh nội dung phù hợp giúp bạn.
