"use client";

import { useEffect, useState } from "react";
import { Megaphone, X } from "lucide-react";

export default function UrgentBanner() {
  const [banner, setBanner] = useState<{ active: boolean; text: string }>({
    active: false,
    text: "",
  });
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    async function loadBanner() {
      try {
        const res = await fetch("/api/settings");
        const json = await res.json();
        if (json.success && json.data) {
          setBanner({
            active: Boolean(json.data.urgentBannerActive),
            text: json.data.urgentBannerText || "",
          });
        }
      } catch (e) {
        // fail silently
      }
    }
    loadBanner();
  }, []);

  if (!banner.active || !banner.text || dismissed) return null;

  return (
    <div className="bg-gold text-slate-950 text-xs md:text-[13px] font-semibold py-2 px-4 border-b border-gold-dark/20 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 justify-center text-center">
          <Megaphone className="w-4 h-4 text-slate-950 flex-shrink-0" />
          <span className="tracking-wide">{banner.text}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded hover:bg-black/10 transition-colors flex-shrink-0 text-slate-950"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
