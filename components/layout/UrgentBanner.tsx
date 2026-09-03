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
    <div className="bg-gradient-to-r from-scholarly via-scholarly-light to-gold text-white text-xs md:text-sm font-medium py-2 px-4 relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 justify-center text-center">
          <Megaphone className="w-4 h-4 text-gold-light animate-pulse flex-shrink-0" />
          <span>{banner.text}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
