

## App POS Nhà Hàng - Kế hoạch thiết kế

### Tổng quan
Xây dựng giao diện POS chuyên nghiệp cho quán ăn/nhà hàng với dark mode, responsive trên mobile/tablet/PC.

### Thiết kế hệ thống
- **Dark mode chuyên nghiệp**: Nền tối (#0F172A), accent màu xanh dương (#3B82F6), text trắng/xám
- **Font**: Inter cho toàn bộ, icon Lucide React
- **Responsive**: Mobile-first, grid tự động điều chỉnh theo kích thước màn hình

### Các trang chính

#### 1. **Trang chủ - Sơ đồ bàn** (`/`)
- Hiển thị sơ đồ các bàn dạng grid
- Mỗi bàn hiển thị trạng thái: trống (xanh), đang dùng (cam), đã thanh toán (xám)
- Nhấn vào bàn → mở giao diện gọi món
- Mobile: grid 2 cột, Tablet: 3-4 cột, PC: 5-6 cột

#### 2. **Gọi món & Thanh toán** (`/order/:tableId`)
- **Trái**: Menu món ăn theo danh mục (tabs), có ô tìm kiếm
- **Phải**: Giỏ hàng/đơn hàng hiện tại với số lượng, ghi chú
- Mobile: menu full screen, giỏ hàng dạng bottom sheet
- Nút thanh toán nổi bật, hỗ trợ tiền mặt & chuyển khoản/QR

#### 3. **Thanh toán** (`/checkout/:tableId`)
- Tổng tiền, chọn phương thức (tiền mặt / QR)
- Tiền mặt: nhập số tiền khách đưa, tự tính tiền thừa
- QR: hiển thị mã QR để quét
- Nút xác nhận thanh toán

#### 4. **Quản lý Menu** (`/menu`)
- Danh sách món ăn theo danh mục
- Thêm/sửa/xóa món (dialog form)
- Upload ảnh món, giá, mô tả
- Quản lý danh mục

#### 5. **Quản lý Kho** (`/inventory`)
- Danh sách nguyên liệu, số lượng tồn
- Cảnh báo hết hàng (highlight đỏ)
- Nhập/xuất kho

#### 6. **Báo cáo Doanh thu** (`/reports`)
- Biểu đồ doanh thu theo ngày/tuần/tháng (Recharts)
- Top món bán chạy
- Tổng đơn hàng, doanh thu trung bình

#### 7. **Quản lý Nhân viên** (`/staff`)
- Danh sách nhân viên, vai trò (admin/thu ngân/phục vụ)
- Thêm/sửa/xóa nhân viên

#### 8. **Cài đặt** (`/settings`)
- Thông tin nhà hàng (tên, địa chỉ, logo)
- Cấu hình thuế, tiền tệ
- Quản lý tài khoản QR

### Navigation
- **PC/Tablet**: Sidebar bên trái với icon + text, thu gọn được
- **Mobile**: Bottom navigation bar với 5 tab chính (Bàn, Gọi món, Menu, Báo cáo, Thêm)

### Giai đoạn 1 (UI tĩnh - mock data)
Xây dựng toàn bộ giao diện với dữ liệu mẫu, đảm bảo responsive hoàn chỉnh trước khi kết nối backend.

