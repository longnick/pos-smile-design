export interface Table {
  id: number;
  name: string;
  seats: number;
  status: "empty" | "occupied" | "paid";
  orderTotal?: number;
  guests?: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
  description?: string;
  available: boolean;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  note?: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  unit: string;
  quantity: number;
  minQuantity: number;
  price: number;
}

export interface Staff {
  id: number;
  name: string;
  role: "admin" | "cashier" | "waiter";
  phone: string;
  status: "active" | "inactive";
  avatar?: string;
}

export const tables: Table[] = [
  { id: 1, name: "Bàn 1", seats: 2, status: "empty" },
  { id: 2, name: "Bàn 2", seats: 4, status: "occupied", orderTotal: 350000, guests: 3 },
  { id: 3, name: "Bàn 3", seats: 4, status: "occupied", orderTotal: 520000, guests: 4 },
  { id: 4, name: "Bàn 4", seats: 2, status: "empty" },
  { id: 5, name: "Bàn 5", seats: 6, status: "paid", orderTotal: 780000 },
  { id: 6, name: "Bàn 6", seats: 4, status: "empty" },
  { id: 7, name: "Bàn 7", seats: 8, status: "occupied", orderTotal: 1250000, guests: 7 },
  { id: 8, name: "Bàn 8", seats: 2, status: "empty" },
  { id: 9, name: "Bàn 9", seats: 4, status: "paid", orderTotal: 430000 },
  { id: 10, name: "Bàn 10", seats: 6, status: "empty" },
  { id: 11, name: "Bàn 11", seats: 4, status: "occupied", orderTotal: 680000, guests: 2 },
  { id: 12, name: "Bàn 12", seats: 8, status: "empty" },
  { id: 13, name: "Bàn VIP 1", seats: 10, status: "occupied", orderTotal: 2500000, guests: 8 },
  { id: 14, name: "Bàn VIP 2", seats: 10, status: "empty" },
  { id: 15, name: "Bàn 15", seats: 4, status: "empty" },
];

export const categories = ["Khai vị", "Món chính", "Lẩu", "Đồ uống", "Tráng miệng"];

export const menuItems: MenuItem[] = [
  { id: 1, name: "Gỏi cuốn tôm thịt", price: 45000, category: "Khai vị", available: true, description: "6 cuốn, nước chấm đậu phộng" },
  { id: 2, name: "Chả giò chiên", price: 55000, category: "Khai vị", available: true, description: "6 cuốn, giòn rụm" },
  { id: 3, name: "Súp hải sản", price: 65000, category: "Khai vị", available: true },
  { id: 4, name: "Cơm chiên dương châu", price: 75000, category: "Món chính", available: true },
  { id: 5, name: "Bò lúc lắc", price: 185000, category: "Món chính", available: true, description: "Bò Úc, khoai tây chiên" },
  { id: 6, name: "Cá lóc kho tộ", price: 155000, category: "Món chính", available: true },
  { id: 7, name: "Sườn xào chua ngọt", price: 145000, category: "Món chính", available: true },
  { id: 8, name: "Gà nướng mật ong", price: 195000, category: "Món chính", available: false },
  { id: 9, name: "Tôm rang muối", price: 220000, category: "Món chính", available: true },
  { id: 10, name: "Lẩu thái hải sản", price: 350000, category: "Lẩu", available: true, description: "2-4 người" },
  { id: 11, name: "Lẩu gà lá é", price: 280000, category: "Lẩu", available: true, description: "2-4 người" },
  { id: 12, name: "Lẩu bò nhúng dấm", price: 320000, category: "Lẩu", available: true },
  { id: 13, name: "Trà đá", price: 5000, category: "Đồ uống", available: true },
  { id: 14, name: "Nước ngọt", price: 15000, category: "Đồ uống", available: true },
  { id: 15, name: "Bia Sài Gòn", price: 20000, category: "Đồ uống", available: true },
  { id: 16, name: "Sinh tố bơ", price: 35000, category: "Đồ uống", available: true },
  { id: 17, name: "Nước ép cam", price: 30000, category: "Đồ uống", available: true },
  { id: 18, name: "Chè thái", price: 30000, category: "Tráng miệng", available: true },
  { id: 19, name: "Kem dừa", price: 25000, category: "Tráng miệng", available: true },
  { id: 20, name: "Bánh flan", price: 20000, category: "Tráng miệng", available: true },
];

export const inventoryItems: InventoryItem[] = [
  { id: 1, name: "Gạo", unit: "kg", quantity: 50, minQuantity: 10, price: 18000 },
  { id: 2, name: "Thịt bò", unit: "kg", quantity: 8, minQuantity: 5, price: 280000 },
  { id: 3, name: "Thịt heo", unit: "kg", quantity: 15, minQuantity: 5, price: 120000 },
  { id: 4, name: "Tôm sú", unit: "kg", quantity: 3, minQuantity: 5, price: 350000 },
  { id: 5, name: "Cá lóc", unit: "kg", quantity: 6, minQuantity: 3, price: 85000 },
  { id: 6, name: "Rau muống", unit: "bó", quantity: 20, minQuantity: 10, price: 8000 },
  { id: 7, name: "Hành lá", unit: "bó", quantity: 15, minQuantity: 5, price: 5000 },
  { id: 8, name: "Dầu ăn", unit: "lít", quantity: 2, minQuantity: 5, price: 35000 },
  { id: 9, name: "Nước mắm", unit: "lít", quantity: 4, minQuantity: 3, price: 45000 },
  { id: 10, name: "Bia Sài Gòn", unit: "thùng", quantity: 10, minQuantity: 5, price: 280000 },
  { id: 11, name: "Nước ngọt", unit: "thùng", quantity: 1, minQuantity: 3, price: 180000 },
  { id: 12, name: "Trứng gà", unit: "vỉ", quantity: 5, minQuantity: 3, price: 35000 },
];

export const staffList: Staff[] = [
  { id: 1, name: "Nguyễn Văn An", role: "admin", phone: "0901234567", status: "active" },
  { id: 2, name: "Trần Thị Bình", role: "cashier", phone: "0912345678", status: "active" },
  { id: 3, name: "Lê Văn Cường", role: "waiter", phone: "0923456789", status: "active" },
  { id: 4, name: "Phạm Thị Dung", role: "waiter", phone: "0934567890", status: "active" },
  { id: 5, name: "Hoàng Văn Em", role: "waiter", phone: "0945678901", status: "inactive" },
];

export const revenueData = [
  { date: "T2", revenue: 4500000, orders: 25 },
  { date: "T3", revenue: 3800000, orders: 20 },
  { date: "T4", revenue: 5200000, orders: 30 },
  { date: "T5", revenue: 6100000, orders: 35 },
  { date: "T6", revenue: 7800000, orders: 42 },
  { date: "T7", revenue: 9500000, orders: 55 },
  { date: "CN", revenue: 8200000, orders: 48 },
];

export const topItems = [
  { name: "Bò lúc lắc", count: 45, revenue: 8325000 },
  { name: "Lẩu thái hải sản", count: 32, revenue: 11200000 },
  { name: "Tôm rang muối", count: 28, revenue: 6160000 },
  { name: "Cơm chiên dương châu", count: 55, revenue: 4125000 },
  { name: "Bia Sài Gòn", count: 120, revenue: 2400000 },
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

export const roleLabels: Record<string, string> = {
  admin: "Quản lý",
  cashier: "Thu ngân",
  waiter: "Phục vụ",
};

export const statusLabels: Record<string, string> = {
  empty: "Trống",
  occupied: "Đang dùng",
  paid: "Đã thanh toán",
};
