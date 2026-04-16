import { inventoryItems, formatCurrency } from "@/data/mockData";
import { Plus, AlertTriangle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Inventory() {
  const lowStock = inventoryItems.filter((i) => i.quantity <= i.minQuantity);

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Quản lý Kho</h1>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Nhập kho
        </Button>
      </div>

      {lowStock.length > 0 && (
        <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-destructive">Cảnh báo sắp hết hàng</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {lowStock.map((i) => i.name).join(", ")}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {inventoryItems.map((item) => {
          const isLow = item.quantity <= item.minQuantity;
          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 rounded-xl border p-3 md:p-4 ${
                isLow ? "border-destructive/30 bg-destructive/5" : "border-border bg-card"
              }`}
            >
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${isLow ? "bg-destructive/10" : "bg-muted"}`}>
                <Package className={`h-5 w-5 ${isLow ? "text-destructive" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{formatCurrency(item.price)}/{item.unit}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${isLow ? "text-destructive" : "text-foreground"}`}>
                  {item.quantity} {item.unit}
                </p>
                {isLow && <Badge variant="destructive" className="text-[10px] mt-0.5">Sắp hết</Badge>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
