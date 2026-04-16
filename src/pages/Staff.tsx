import { staffList, roleLabels } from "@/data/mockData";
import { Plus, Phone, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const roleBadgeColor: Record<string, string> = {
  admin: "bg-primary/15 text-primary",
  cashier: "bg-warning/15 text-warning",
  waiter: "bg-success/15 text-success",
};

export default function Staff() {
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Quản lý Nhân viên</h1>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Thêm NV
        </Button>
      </div>

      <div className="space-y-2">
        {staffList.map((s) => (
          <div key={s.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 md:p-4">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
              <UserCircle className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{s.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleBadgeColor[s.role]}`}>
                  {roleLabels[s.role]}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  {s.phone}
                </span>
              </div>
            </div>
            <Badge variant={s.status === "active" ? "default" : "secondary"} className="text-[10px]">
              {s.status === "active" ? "Hoạt động" : "Nghỉ"}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
