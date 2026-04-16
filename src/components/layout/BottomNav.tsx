import { LayoutGrid, BookOpen, BarChart3, MoreHorizontal } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Package, Users, Settings } from "lucide-react";

const mainTabs = [
  { title: "Bàn", url: "/", icon: LayoutGrid },
  { title: "Menu", url: "/menu", icon: BookOpen },
  { title: "Báo cáo", url: "/reports", icon: BarChart3 },
];

const moreTabs = [
  { title: "Kho", url: "/inventory", icon: Package },
  { title: "Nhân viên", url: "/staff", icon: Users },
  { title: "Cài đặt", url: "/settings", icon: Settings },
];

export function BottomNav() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isMoreActive = moreTabs.some(
    (t) => location.pathname === t.url || location.pathname.startsWith(t.url + "/")
  );

  return (
    <>
      {showMore && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setShowMore(false)}
        />
      )}
      {showMore && (
        <div className="fixed bottom-16 left-0 right-0 z-50 border-t border-border bg-card p-2 animate-in slide-in-from-bottom-4">
          <div className="grid grid-cols-3 gap-2">
            {moreTabs.map((tab) => (
              <button
                key={tab.url}
                onClick={() => {
                  navigate(tab.url);
                  setShowMore(false);
                }}
                className={`flex flex-col items-center gap-1 rounded-lg p-3 text-xs transition-colors ${
                  location.pathname === tab.url
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-accent"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      )}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-card md:hidden">
        {mainTabs.map((tab) => (
          <NavLink
            key={tab.url}
            to={tab.url}
            end={tab.url === "/"}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            <tab.icon className="h-5 w-5" />
            {tab.title}
          </NavLink>
        ))}
        <button
          onClick={() => setShowMore(!showMore)}
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 text-xs transition-colors ${
            isMoreActive || showMore ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <MoreHorizontal className="h-5 w-5" />
          Thêm
        </button>
      </nav>
    </>
  );
}
