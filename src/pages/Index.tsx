import { useNavigate } from "react-router-dom";
import { tables, formatCurrency, statusLabels } from "@/data/mockData";
import { Users, Clock } from "lucide-react";

const statusColors = {
  empty: "border-success/40 bg-success/5 hover:bg-success/10",
  occupied: "border-warning/40 bg-warning/5 hover:bg-warning/10",
  paid: "border-muted-foreground/30 bg-muted/30 hover:bg-muted/50",
};

const statusDot = {
  empty: "bg-success",
  occupied: "bg-warning animate-pulse-glow",
  paid: "bg-muted-foreground",
};

export default function Index() {
  const navigate = useNavigate();

  const stats = {
    empty: tables.filter((t) => t.status === "empty").length,
    occupied: tables.filter((t) => t.status === "occupied").length,
    paid: tables.filter((t) => t.status === "paid").length,
  };

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Sơ đồ bàn</h1>
        <div className="mt-3 flex gap-4 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            Trống ({stats.empty})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-warning" />
            Đang dùng ({stats.occupied})
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
            Đã TT ({stats.paid})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() =>
              table.status === "empty"
                ? navigate(`/order/${table.id}`)
                : table.status === "occupied"
                ? navigate(`/order/${table.id}`)
                : navigate(`/order/${table.id}`)
            }
            className={`relative flex flex-col items-center justify-center rounded-xl border-2 p-4 md:p-5 transition-all duration-200 ${statusColors[table.status]}`}
          >
            <div className={`absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full ${statusDot[table.status]}`} />
            <span className="text-sm font-semibold text-foreground">{table.name}</span>
            <span className="mt-1 text-xs text-muted-foreground">
              {table.seats} ghế
            </span>
            {table.status === "occupied" && (
              <div className="mt-2 flex flex-col items-center gap-0.5">
                <span className="flex items-center gap-1 text-xs text-warning">
                  <Users className="h-3 w-3" />
                  {table.guests} khách
                </span>
                <span className="text-xs font-medium text-foreground">
                  {formatCurrency(table.orderTotal || 0)}
                </span>
              </div>
            )}
            {table.status === "paid" && (
              <span className="mt-2 text-xs font-medium text-muted-foreground">
                {formatCurrency(table.orderTotal || 0)}
              </span>
            )}
            {table.status === "empty" && (
              <span className="mt-2 text-xs text-success font-medium">
                {statusLabels.empty}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
