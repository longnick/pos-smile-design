import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menuItems, categories, tables, formatCurrency, type MenuItem, type OrderItem } from "@/data/mockData";
import { Search, Plus, Minus, Trash2, ShoppingCart, ArrowLeft, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Order() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const table = tables.find((t) => t.id === Number(tableId));

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<OrderItem[]>([]);

  const filteredItems = menuItems.filter(
    (item) =>
      item.category === activeCategory &&
      item.available &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((o) => o.menuItem.id === item.id);
      if (existing) return prev.map((o) => o.menuItem.id === item.id ? { ...o, quantity: o.quantity + 1 } : o);
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const updateQty = (itemId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((o) => o.menuItem.id === itemId ? { ...o, quantity: o.quantity + delta } : o)
        .filter((o) => o.quantity > 0)
    );
  };

  const total = cart.reduce((s, o) => s + o.menuItem.price * o.quantity, 0);
  const totalItems = cart.reduce((s, o) => s + o.quantity, 0);

  const CartContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto scrollbar-thin p-4 space-y-2">
        {cart.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm py-8">Chưa có món nào</p>
        ) : (
          cart.map((item) => (
            <div key={item.menuItem.id} className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.menuItem.name}</p>
                <p className="text-xs text-muted-foreground">{formatCurrency(item.menuItem.price)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(item.menuItem.id, -1)} className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center hover:bg-accent">
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                <button onClick={() => updateQty(item.menuItem.id, 1)} className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center hover:bg-accent">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <span className="text-sm font-medium w-24 text-right">{formatCurrency(item.menuItem.price * item.quantity)}</span>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-border p-4 space-y-3">
        <div className="flex justify-between text-base font-semibold">
          <span>Tổng cộng</span>
          <span className="text-primary">{formatCurrency(total)}</span>
        </div>
        <Button
          className="w-full"
          size="lg"
          disabled={cart.length === 0}
          onClick={() => navigate(`/checkout/${tableId}`)}
        >
          Thanh toán
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-3rem)] md:h-[calc(100vh-3rem)]">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border p-3 md:p-4 shrink-0">
        <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="font-semibold text-foreground">{table?.name || `Bàn ${tableId}`}</h1>
        <Badge variant="outline" className="text-xs">{table?.seats} ghế</Badge>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Menu section */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Search */}
          <div className="p-3 md:p-4 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm món..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-muted/50 border-0"
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 px-3 md:px-4 pb-3 overflow-x-auto scrollbar-thin shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items grid */}
          <div className="flex-1 overflow-auto scrollbar-thin p-3 md:p-4 pt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  className="flex flex-col rounded-xl border border-border bg-card p-3 text-left transition-all hover:border-primary/40 hover:bg-primary/5 active:scale-[0.98]"
                >
                  <span className="text-sm font-medium text-foreground line-clamp-2">{item.name}</span>
                  {item.description && (
                    <span className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.description}</span>
                  )}
                  <span className="mt-auto pt-2 text-sm font-semibold text-primary">{formatCurrency(item.price)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cart - desktop */}
        {!isMobile && (
          <div className="w-80 lg:w-96 border-l border-border flex flex-col bg-card/50">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Đơn hàng
                {totalItems > 0 && (
                  <Badge className="ml-auto">{totalItems}</Badge>
                )}
              </h2>
            </div>
            <CartContent />
          </div>
        )}
      </div>

      {/* Cart FAB - mobile */}
      {isMobile && cart.length > 0 && (
        <Sheet>
          <SheetTrigger asChild>
            <button className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg shadow-primary/25">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">{totalItems}</span>
              <span className="text-sm">• {formatCurrency(total)}</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[70vh] rounded-t-2xl p-0">
            <SheetHeader className="p-4 border-b border-border">
              <SheetTitle>Đơn hàng - {table?.name}</SheetTitle>
            </SheetHeader>
            <CartContent />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
