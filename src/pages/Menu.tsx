import { useState } from "react";
import { menuItems, categories, formatCurrency } from "@/data/mockData";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");

  const allCategories = ["Tất cả", ...categories];
  const filtered = menuItems.filter(
    (item) =>
      (activeCategory === "Tất cả" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Quản lý Menu</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Thêm món
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thêm món mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <Input placeholder="Tên món" />
              <Input placeholder="Giá (VNĐ)" type="number" />
              <Input placeholder="Mô tả" />
              <Button className="w-full">Lưu</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Tìm món ăn..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-muted/50 border-0" />
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-thin pb-1">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((item) => (
          <div key={item.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 md:p-4">
            <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-xl shrink-0">
              🍽️
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{item.name}</p>
                {!item.available && <Badge variant="destructive" className="text-[10px] px-1.5">Hết</Badge>}
              </div>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <p className="text-sm font-semibold text-primary">{formatCurrency(item.price)}</p>
            </div>
            <div className="flex gap-1.5">
              <button className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent transition-colors">
                <Edit className="h-3.5 w-3.5" />
              </button>
              <button className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center hover:bg-destructive/20 hover:text-destructive transition-colors">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
