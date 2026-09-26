"use client";

import { ExternalLink, Clock } from "lucide-react";
import { retailerLinks } from "@/lib/retailer-links";

function isLive(availableFrom?: string) {
  if (!availableFrom) return true;
  return new Date() >= new Date(`${availableFrom}T00:00:00`);
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function WhereToBuy() {
  return (
    <div>
      <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
        Where to Buy
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {retailerLinks.map((r) => {
          const live = Boolean(r.url) && isLive(r.availableFrom);
          return live ? (
            <a
              key={r.name}
              href={r.url as string}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#b8862f]/40 px-6 py-3 font-body text-sm text-[#17203a] transition-colors hover:bg-[#b8862f] hover:text-white"
            >
              {r.name} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span
              key={r.name}
              className="inline-flex cursor-not-allowed items-center gap-2 border border-[#17203a]/15 px-6 py-3 font-body text-sm text-[#17203a]/40"
              title={
                r.url && r.availableFrom
                  ? `Available ${formatDate(r.availableFrom)}`
                  : "Link goes live at launch"
              }
            >
              {r.name} <Clock className="h-3.5 w-3.5" />
            </span>
          );
        })}
      </div>
      <p className="mt-3 font-body text-xs text-[#17203a]/45">
        Hardcover available September 28, 2026. Other retailer links go live
        October 1, 2026 — buttons activate automatically the moment each one
        is ready.
      </p>
    </div>
  );
}
