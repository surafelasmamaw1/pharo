"use client";
import { CheckCircle, Sliders, Megaphone, Trash2, X } from "lucide-react";

interface SiteSettingsItem {
  urgentBannerActive: boolean;
  urgentBannerText: string;
  tuitionFeeText: string;
  admissionDeadline: string;
  contactPhone: string;
  contactEmail: string;
}

interface Props {
  settings: SiteSettingsItem;
  onSettingsChange: (settings: SiteSettingsItem) => void;
  onSave: (e: React.FormEvent) => void;
  onToggleBanner: (active: boolean) => void;
  onDeleteBanner: () => void;
  onResetAll: () => void;
  isSaving: boolean;
  successMsg: string;
}

export default function SettingsTab({
  settings,
  onSettingsChange,
  onSave,
  onToggleBanner,
  onDeleteBanner,
  onResetAll,
  isSaving,
  successMsg,
}: Props) {
  return (
    <div className="max-w-2xl bg-card border border-border rounded-3xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-scholarly-pale text-scholarly flex items-center justify-center">
          <Sliders className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Site Settings &amp; Announcement Banner</h2>
          <p className="text-xs text-muted">Control the top urgent notification banner, tuition fees, and deadlines.</p>
        </div>
      </div>

      {successMsg && (
        <div className="p-3 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          {successMsg}
        </div>
      )}

      <form onSubmit={onSave} className="space-y-6">
        {/* Banner control */}
        <div className="p-5 rounded-2xl border border-border bg-background space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-gold" />
                Top Urgent Announcement Banner
              </h4>
              <p className="text-xs text-muted">Displays a high-visibility announcement across the top of all pages.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${settings.urgentBannerActive ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30" : "bg-slate-100 text-slate-500 border-slate-300"}`}>
                {settings.urgentBannerActive ? "ON (VISIBLE)" : "OFF (HIDDEN)"}
              </span>
              <button
                type="button"
                onClick={onDeleteBanner}
                disabled={isSaving}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-semibold transition-colors border border-red-500/20"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Banner
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.urgentBannerActive}
                  onChange={(e) => onToggleBanner(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-scholarly"></div>
              </label>
            </div>
          </div>

          {settings.urgentBannerActive && (
            <div>
              <label className="block text-xs font-semibold text-muted mb-1">Banner Announcement Text</label>
              <div className="relative">
                <input
                  type="text"
                  value={settings.urgentBannerText}
                  onChange={(e) => onSettingsChange({ ...settings, urgentBannerText: e.target.value })}
                  placeholder="e.g. 📢 School reopens Monday, September 15!"
                  className="w-full px-4 py-2.5 pr-10 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
                />
                {settings.urgentBannerText && (
                  <button
                    type="button"
                    onClick={() => onSettingsChange({ ...settings, urgentBannerText: "" })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Fees & deadlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-muted mb-1">Tuition Fee Display Text</label>
            <input
              type="text"
              value={settings.tuitionFeeText}
              onChange={(e) => onSettingsChange({ ...settings, tuitionFeeText: e.target.value })}
              placeholder="e.g. ETB 9,700"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted mb-1">Admission Deadline</label>
            <input
              type="text"
              value={settings.admissionDeadline}
              onChange={(e) => onSettingsChange({ ...settings, admissionDeadline: e.target.value })}
              placeholder="e.g. Rolling Admissions"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted mb-1">Contact Phone</label>
            <input
              type="text"
              value={settings.contactPhone}
              onChange={(e) => onSettingsChange({ ...settings, contactPhone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted mb-1">Contact Email</label>
            <input
              type="email"
              value={settings.contactEmail}
              onChange={(e) => onSettingsChange({ ...settings, contactEmail: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-scholarly text-sm"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-scholarly text-white font-semibold text-sm hover:bg-scholarly-light transition-colors shadow-sm disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save All Settings"}
          </button>
          <button
            type="button"
            onClick={onResetAll}
            disabled={isSaving}
            className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 font-semibold text-sm transition-colors border border-red-500/20"
          >
            Reset to Defaults
          </button>
        </div>
      </form>
    </div>
  );
}
