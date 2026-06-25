import React from "react";
import { Badge } from "@food/components/ui/badge";

export function StatusBadge({ status }) {
  switch (status) {
    case "available":
      return (
        <Badge className="bg-emerald-50 hover:bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 rounded-xl px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider select-none">
          Available
        </Badge>
      );
    case "low_stock":
      return (
        <Badge className="bg-amber-50 hover:bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 rounded-xl px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider select-none">
          Low Stock
        </Badge>
      );
    case "out_of_stock":
      return (
        <Badge className="bg-rose-50 hover:bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider select-none animate-pulse">
          Out of Stock
        </Badge>
      );
    default:
      return (
        <Badge className="bg-slate-50 hover:bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 rounded-xl px-2.5 py-0.5 text-[10px] select-none capitalize">
          {status}
        </Badge>
      );
  }
}
