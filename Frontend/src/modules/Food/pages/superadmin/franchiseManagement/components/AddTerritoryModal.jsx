import React, { useState, useEffect } from "react";
import { X, Check, ArrowLeft, ArrowRight, Save, Landmark, AlertTriangle } from "lucide-react";

export default function AddTerritoryModal({
  isOpen,
  onClose,
  onSubmit,
  regions,
  zones,
  existingTerritories
}) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    status: "Active",
    regionId: "",
    zoneId: "",
    assignedFranchiseId: "",
    postalCodes: [],
    deliveryRadiusKm: 5,
    notes: ""
  });

  const [errors, setErrors] = useState({});
  const [postalInput, setPostalInput] = useState("");

  // Initialize if editing
  useEffect(() => {
    setFormData({
      id: "",
      name: "",
      description: "",
      status: "Active",
      regionId: "",
      zoneId: "",
      postalCodes: [],
      deliveryRadiusKm: 5,
      notes: ""
    });
    setStep(1);
    setErrors({});
  }, [isOpen]);

  // Validation routines per step
  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Territory Name is required.";
      } else {
        // Uniqueness check within the same zone
        const duplicate = existingTerritories.some(
          (t) =>
            t.name.toLowerCase().trim() === formData.name.toLowerCase().trim() &&
            t.zoneId === formData.zoneId &&
            t.id !== formData.id
        );
        if (duplicate && formData.zoneId) {
          newErrors.name = "A territory with this name already exists in the selected zone.";
        }
      }
    }

    if (currentStep === 2) {
      if (!formData.regionId) {
        newErrors.regionId = "Please select a region.";
      }
      if (!formData.zoneId) {
        newErrors.zoneId = "Please select a zone.";
      }
    }

    if (currentStep === 3) {
      if (formData.postalCodes.length === 0) {
        newErrors.postalCodes = "At least one postal code PIN is required.";
      }
      if (!formData.deliveryRadiusKm || formData.deliveryRadiusKm <= 0) {
        newErrors.deliveryRadiusKm = "Delivery radius must be greater than 0 km.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  // Add postal PIN chip
  const handleAddPostal = () => {
    const trimmed = postalInput.trim();
    if (!trimmed) return;
    
    // Simple Indian PIN validation (6 digits)
    if (!/^\d{6}$/.test(trimmed)) {
      setErrors({ ...errors, postalInput: "Pincode must be exactly 6 digits." });
      return;
    }

    if (formData.postalCodes.includes(trimmed)) {
      setErrors({ ...errors, postalInput: "Pincode is already added." });
      return;
    }

    setFormData({
      ...formData,
      postalCodes: [...formData.postalCodes, trimmed]
    });
    setPostalInput("");
    setErrors({ ...errors, postalInput: null, postalCodes: null });
  };

  // Remove postal PIN chip
  const handleRemovePostal = (code) => {
    setFormData({
      ...formData,
      postalCodes: formData.postalCodes.filter((c) => c !== code)
    });
  };

  // Bulk paste pincodes
  const handleBulkPaste = () => {
    const raw = prompt("Paste comma or space-separated 6-digit PIN codes:");
    if (!raw) return;
    const regex = /\b\d{6}\b/g;
    const found = raw.match(regex) || [];
    if (found.length === 0) {
      alert("No valid 6-digit postal codes detected.");
      return;
    }
    const combined = Array.from(new Set([...formData.postalCodes, ...found]));
    setFormData({ ...formData, postalCodes: combined });
    setErrors({ ...errors, postalCodes: null });
  };



  const handleFinalSubmit = () => {
    if (validateStep(step)) {
      onSubmit(formData);
    }
  };

  // Cascading dropdown filters
  const availableZones = formData.regionId
    ? zones.filter((z) => z.regionId === formData.regionId)
    : [];



  return (
    <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-[70] flex items-center justify-center p-3 sm:p-4 lg:pl-[280px] select-none">
      <div className="bg-white dark:bg-zinc-950 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-900 flex flex-col max-h-[90vh] animate-scaleUp">
        {/* Header */}
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/40 flex justify-between items-center">
          <div className="space-y-0.5">
            <h3 className="text-sm font-black text-black dark:text-zinc-100 uppercase tracking-wider">
              Add Territory
            </h3>
            <p className="text-[10px] text-zinc-500 font-bold">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-black dark:hover:text-zinc-200 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Wizard Stepper Progress Bar */}
        <div className="flex w-full h-1 bg-zinc-100 dark:bg-zinc-900">
          <div
            className="h-full bg-[var(--primary)] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Form Body Scroll area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin text-xs">
          {/* STEP 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Territory Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Bandra West Cluster"
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                />
                {errors.name && <p className="text-[9px] font-black text-rose-500">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Summarize the geographical boundaries or market segments covered."
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: Geographic Assignment */}
          {step === 2 && (
            <div className="space-y-4">


              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Select Region *
                </label>
                <select
                  value={formData.regionId}
                  onChange={(e) =>
                    setFormData({ ...formData, regionId: e.target.value, zoneId: "" })
                  }
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                >
                  <option value="">Choose Region...</option>
                  {regions.filter(r => r.status === "Active").map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
                {errors.regionId && (
                  <p className="text-[9px] font-black text-rose-500">{errors.regionId}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Select Zone *
                </label>
                <select
                  value={formData.zoneId}
                  onChange={(e) => setFormData({ ...formData, zoneId: e.target.value })}
                  disabled={!formData.regionId}
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] disabled:opacity-50 font-semibold"
                >
                  <option value="">Choose Zone...</option>
                  {availableZones.filter(z => z.status === "Active").map((z) => (
                    <option key={z.id} value={z.id}>
                      {z.name}
                    </option>
                  ))}
                </select>
                {errors.zoneId && (
                  <p className="text-[9px] font-black text-rose-500">{errors.zoneId}</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Coverage Area */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase flex justify-between">
                  <span>Covered Postal Codes (PINs) *</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={postalInput}
                    onChange={(e) => setPostalInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddPostal())}
                    placeholder="Type Pincode e.g. 400050"
                    maxLength={6}
                    className="flex-1 p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                  />
                  <button
                    onClick={handleAddPostal}
                    className="px-3.5 bg-zinc-150 dark:bg-zinc-800 hover:bg-zinc-200 rounded-lg text-xs font-bold transition-colors cursor-pointer text-black dark:text-zinc-200"
                  >
                    Add PIN
                  </button>
                </div>
                {errors.postalInput && (
                  <p className="text-[9px] font-black text-rose-500">{errors.postalInput}</p>
                )}
                {errors.postalCodes && (
                  <p className="text-[9px] font-black text-rose-500">{errors.postalCodes}</p>
                )}

                {/* PIN tags list container */}
                <div className="mt-2 flex flex-wrap gap-1 p-2 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-850 rounded-lg max-h-24 overflow-y-auto">
                  {formData.postalCodes.length > 0 ? (
                    formData.postalCodes.map((code) => (
                      <span
                        key={code}
                        className="px-2 py-0.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md text-[10px] font-black text-black dark:text-zinc-200 flex items-center gap-1 shadow-sm"
                      >
                        <span>{code}</span>
                        <button
                          onClick={() => handleRemovePostal(code)}
                          className="hover:text-red-500 cursor-pointer text-[10px]"
                        >
                          &times;
                        </button>
                      </span>
                    ))
                  ) : (
                    <span className="text-[9px] text-zinc-500 font-bold p-1">No pincodes added.</span>
                  )}
                </div>
              </div>

              {/* Delivery Radius */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase">
                  Delivery Radius (km) *
                </label>
                <input
                  type="number"
                  value={formData.deliveryRadiusKm}
                  onChange={(e) =>
                    setFormData({ ...formData, deliveryRadiusKm: parseFloat(e.target.value) || 0 })
                  }
                  className="w-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-black dark:text-zinc-100 outline-none focus:border-[var(--primary)] font-semibold"
                  min={1}
                />
                {errors.deliveryRadiusKm && (
                  <p className="text-[9px] font-black text-rose-500">{errors.deliveryRadiusKm}</p>
                )}
                <span className="text-[8px] text-zinc-500 leading-normal">
                  Defines the default delivery dispatch bounds mapped to stores in this territory.
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-200 rounded-lg text-xs font-bold hover:bg-zinc-300 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <div className="flex gap-2">
              {step > 1 && (
                <button
                  onClick={handlePrev}
                  className="px-4 py-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-black dark:text-zinc-200 rounded-lg text-xs font-bold hover:bg-zinc-50 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ArrowLeft size={12} />
                  <span>Prev</span>
                </button>
              )}

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-lg text-xs font-bold hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Next</span>
                  <ArrowRight size={12} />
                </button>
              ) : (
                <button
                  onClick={handleFinalSubmit}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Create Territory</span>
                  <Check size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
