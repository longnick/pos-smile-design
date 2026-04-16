import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, QrCode, Receipt } from "lucide-react";

export default function Settings() {
  return (
    <div className="p-4 md:p-6 space-y-4 max-w-2xl">
      <h1 className="text-xl md:text-2xl font-bold">Cài đặt</h1>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Store className="h-4 w-4" />
            Thông tin nhà hàng
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Tên nhà hàng" defaultValue="Nhà hàng Phương Nam" />
          <Input placeholder="Địa chỉ" defaultValue="123 Nguyễn Huệ, Q1, TP.HCM" />
          <Input placeholder="Số điện thoại" defaultValue="028 1234 5678" />
          <Button size="sm">Lưu thay đổi</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Receipt className="h-4 w-4" />
            Thuế & Tiền tệ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="Thuế VAT (%)" defaultValue="10" type="number" />
            <Input placeholder="Tiền tệ" defaultValue="VND" disabled />
          </div>
          <Button size="sm">Lưu</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <QrCode className="h-4 w-4" />
            Tài khoản QR thanh toán
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Ngân hàng" defaultValue="Vietcombank" />
          <Input placeholder="Số tài khoản" defaultValue="0123456789" />
          <Input placeholder="Tên chủ tài khoản" defaultValue="NGUYEN VAN A" />
          <Button size="sm">Lưu</Button>
        </CardContent>
      </Card>
    </div>
  );
}
