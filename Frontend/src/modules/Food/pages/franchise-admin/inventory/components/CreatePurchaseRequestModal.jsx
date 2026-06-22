import React, { useState, useEffect } from "react";
import { X, AlertCircle, ShoppingBag, Truck } from "lucide-react";
import { useCreatePurchaseRequestMutation } from "../hooks/useAlerts";
import { mockSuppliers } from "../mockData";

export default function CreatePurchaseRequestModal({ isOpen, onClose, alertRecord }) {
  const createMutation = useCreatePurchaseRequestMutation();

  const [quantity, setQuantity] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [validationError, setValidationError] = useState("");

  const ingredient = alertRecord?.ingredient;
  const unit = ingredient?.unit || "Units";
  const costPerUnit = ingredient?.costPerUnit || 0;
  
  // Find supplier
  const supplier = mockSuppliers.find(s => s._id === ingredient?.supplierId) || {
    name: "Standard Franchise Supplier",
    contact: "General Orders"
  };

  // Pre-calculate suggested quantity: Ideal Stock - Current Stock
  const currentStock = alertRecord?.currentStock || 0;
  const idealStock = alertRecord?.reorderLevel ? (alertRecord.reorderLevel * 4) : 100; // fallback if idealStock is missing in alert
  const suggestedQty = Math.max(0, idealStock - currentStock);

  useEffect(() => {
    if (isOpen && alertRecord) {
      setQuantity(suggestedQty.toString());
      setEstimatedCost(suggestedQty * costPerUnit);
      setValidationError("");
    }
  }, [isOpen, alertRecord, suggestedQty, costPerUnit]);

  if (!isOpen || !alertRecord) return null;

  const handleQtyChange = (e) => {
    const val = e.target.value;
    if (val === "" || /^\d*\.?\d*$/.test(val)) {
      setQuantity(val);
      const qtyNum = Number(val) || 0;
      setEstimatedCost(qtyNum * costPerUnit);
      setValidationError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const qtyNum = Number(quantity);
    if (isNaN(qtyNum) || qtyNum <= 0) {
      setValidationError("Please enter a valid requested quantity.");
      return;
    }
    
    createMutation.mutate({
      alertId: alertRecord._id,
      ingredientId: alertRecord.ingredientId,
      storeId: alertRecord.storeId,
      suggestedQuantity: qtyNum,
      supplierId: ingredient?.supplierId || "SUP-001",
      estimatedCost: estimatedCost
    }, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <div className="fixed inset-y-0 right-0 left-0 lg:left-[280px] z-50 overflow-hidden text-xs font-semibold text-zinc-700 dark:text-zinc-350">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-xs z-40 animate-fade-in" onClick={onClose} />

      {/* Modal Container */}
      <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-[650px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-up"
        >
          {/* Header */}
          <header className="p-4 border-b border-zinc-150 dark:border-zinc-850 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/30">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl">
                <ShoppingBag size={16} />
              </span>
              <div>
                <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white">
                  Create Purchase Request
                </h3>
                <p className="text-[9.5px] text-zinc-450 font-bold mt-0.5">
                  Requesting replenishment for <span className="text-[var(--primary)]">{ingredient?.name}</span> at <span className="text-zinc-650 dark:text-zinc-200">{alertRecord.storeName}</span>
                </p>
              </div>
            </div>
            <button type="button" onClick={onClose} className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-400">
              <X size={15} />
            </button>
          </header>

          {/* Body */}
          <div className="p-5 space-y-4 overflow-y-auto max-h-[70vh] bg-white dark:bg-zinc-950">
            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-3 p-3 bg-zinc-55 dark:bg-zinc-900/40 rounded-xl border border-zinc-150 dark:border-zinc-850">
              <div>
                <span className="text-[8.5px] uppercase text-zinc-400 font-extrabold block">Current Stock</span>
                <span className="text-xs font-black text-zinc-800 dark:text-white mt-0.5 block">
                  {currentStock} {unit}
                </span>
              </div>
              <div>
                <span className="text-[8.5px] uppercase text-zinc-400 font-extrabold block">Ideal Stock</span>
                <span className="text-xs font-black text-zinc-800 dark:text-white mt-0.5 block">
                  {idealStock} {unit}
                </span>
              </div>
              <div>
                <span className="text-[8.5px] uppercase text-zinc-400 font-extrabold block">Suggested Qty</span>
                <span className="text-xs font-black text-[var(--primary)] mt-0.5 block">
                  {suggestedQty} {unit}
                </span>
              </div>
            </div>

            {/* Input fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9.5px] text-zinc-450 font-extrabold uppercase tracking-wider block">Requested Purchase Quantity *</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0"
                    value={quantity}
                    onChange={handleQtyChange}
                    className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 rounded-xl font-bold text-zinc-800 dark:text-white pr-12 focus:border-[var(--primary)] outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-extrabold text-zinc-400 bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 text-[10px]">
                    {unit}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9.5px] text-zinc-450 font-extrabold uppercase tracking-wider block">Supplier (Prefilled)</label>
                <div className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-extrabold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                  <Truck size={13} className="text-zinc-400" />
                  <span className="truncate">{supplier.name}</span>
                </div>
              </div>
            </div>

            {/* Cost Summary Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/30 rounded-xl border border-zinc-150 dark:border-zinc-850">
                <span className="text-[8.5px] uppercase text-zinc-400 font-extrabold block">Rate Per Unit</span>
                <span className="text-xs font-black text-zinc-850 dark:text-white mt-1 block">
                  ₹{costPerUnit} / {unit}
                </span>
              </div>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-900/30 rounded-xl border border-zinc-150 dark:border-zinc-850">
                <span className="text-[8.5px] uppercase text-zinc-400 font-extrabold block">Estimated Total Cost</span>
                <span className="text-xs font-black text-[var(--primary)] mt-1 block">
                  ₹{estimatedCost.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Warning Message */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-900/40 rounded-xl flex gap-2">
              <AlertCircle size={15} className="shrink-0 mt-0.5 text-amber-500" />
              <div>
                <p className="font-extrabold text-[10.5px]">Request Submission Info</p>
                <p className="text-[9.5px] font-bold mt-0.5 leading-normal">
                  Submitting this request will create a pending purchase order. The alert status will transition to <span className="font-extrabold">PURCHASE REQUEST CREATED</span>. You will need to resolve this alert once stock is physically received.
                </p>
              </div>
            </div>

            {validationError && (
              <p className="text-[10.5px] text-rose-600 font-extrabold flex items-center gap-1 mt-1">
                <AlertCircle size={11} />
                <span>{validationError}</span>
              </p>
            )}
          </div>

          {/* Footer */}
          <footer className="p-4 border-t border-zinc-150 dark:border-zinc-850 flex justify-end gap-2 bg-zinc-50/30 dark:bg-zinc-900/10 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-zinc-250 dark:border-zinc-800 rounded-xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-500 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={createMutation.isPending}
              className="px-5 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-black rounded-xl shadow-md active:scale-98 transition-all cursor-pointer disabled:opacity-50"
            >
              {createMutation.isPending ? "Creating PR..." : "Create Request"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
