import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tables, formatCurrency } from "@/data/mockData";
import { ArrowLeft, Banknote, QrCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Checkout() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const table = tables.find((t) => t.id === Number(tableId));
  const total = table?.orderTotal || 350000;

  const [method, setMethod] = useState<"cash" | "qr">("cash");
  const [cashGiven, setCashGiven] = useState("");
  const [done, setDone] = useState(false);

  const change = Number(cashGiven) - total;

  const quickAmounts = [500000, 1000000, 200000];

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-6">
        <CheckCircle2 className="h-20 w-20 text-success" />
        <h2 className="text-xl font-bold">Thanh toán thành công!</h2>
        <p className="text-muted-foreground">{table?.name} - {formatCurrency(total)}</p>
        <Button onClick={() => navigate("/")} size="lg" className="mt-4">
          Về sơ đồ bàn
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-xl font-bold">Thanh toán - {table?.name}</h1>
      </div>

      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Tổng tiền</span>
            <span className="text-primary">{formatCurrency(total)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Method selection */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => setMethod("cash")}
          className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
            method === "cash" ? "border-primary bg-primary/10" : "border-border hover:border-primary/30"
          }`}
        >
          <Banknote className="h-8 w-8" />
          <span className="text-sm font-medium">Tiền mặt</span>
        </button>
        <button
          onClick={() => setMethod("qr")}
          className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
            method === "qr" ? "border-primary bg-primary/10" : "border-border hover:border-primary/30"
          }`}
        >
          <QrCode className="h-8 w-8" />
          <span className="text-sm font-medium">Chuyển khoản / QR</span>
        </button>
      </div>

      {method === "cash" ? (
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Tiền khách đưa</label>
            <Input
              type="number"
              placeholder="Nhập số tiền..."
              value={cashGiven}
              onChange={(e) => setCashGiven(e.target.value)}
              className="text-lg h-12"
            />
          </div>
          <div className="flex gap-2">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setCashGiven(String(amt))}
                className="flex-1 rounded-lg bg-muted py-2 text-sm font-medium hover:bg-accent transition-colors"
              >
                {formatCurrency(amt)}
              </button>
            ))}
          </div>
          {Number(cashGiven) > 0 && (
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tiền thừa</span>
                  <span className={`text-lg font-bold ${change >= 0 ? "text-success" : "text-destructive"}`}>
                    {change >= 0 ? formatCurrency(change) : "Chưa đủ"}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
          <Button className="w-full" size="lg" disabled={change < 0 || !cashGiven} onClick={() => setDone(true)}>
            Xác nhận thanh toán
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6">
            <div className="h-48 w-48 rounded-xl bg-white flex items-center justify-center mb-4">
              <QrCode className="h-36 w-36 text-foreground" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Quét mã QR để chuyển khoản {formatCurrency(total)}
            </p>
          </div>
          <Button className="w-full" size="lg" onClick={() => setDone(true)}>
            Xác nhận đã nhận tiền
          </Button>
        </div>
      )}
    </div>
  );
}
