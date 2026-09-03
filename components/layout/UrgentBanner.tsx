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
        const res = await fetch("/api/settings", { cache: "no-store" });
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

    window.addEventListener("settings-updated", loadBanner);
    return () => window.removeEventListener("settings-updated", loadBanner);
  }, []);

  if (!banner.active || !banner.text || banner.text.trim() === "" || dismissed) {
    return null;
  }

  return (
    <div className="bg-[#162D4A] text-white text-xs md:text-[13px] font-medium py-2.5 px-4 border-b border-gold/40 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 justify-center text-center">
          <Megaphone className="w-4 h-4 text-gold flex-shrink-0" />
          <span className="text-white/90 tracking-wide font-medium">{banner.text}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded hover:bg-white/10 transition-colors flex-shrink-0 text-white/70 hover:text-white"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
