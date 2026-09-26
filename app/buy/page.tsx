"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { WhereToBuy } from "@/components/where-to-buy";
import {
  hardcoverBuyUrl,
  hardcoverAvailableFrom,
  hardcoverQrCodeUrl,
} from "@/lib/retailer-links";

function isLive(dateIso: string) {
  return new Date() >= new Date(`${dateIso}T00:00:00`);
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BuyPage() {
  const live = isLive(hardcoverAvailableFrom);

  return (
    <main className="grain mx-auto max-w-5xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
        Get Your Copy
      </p>
      <h1 className="mt-4 font-display text-5xl text-[#17203a]">
        Own ROLL CALL<span className="text-gold">!</span>
      </h1>
      <p className="mt-3 max-w-xl font-display text-xl italic text-[#17203a]/70">
        A 31-Day Gratitude Journey Through the Names of God &mdash; in
        hardcover.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
        <div className="mx-auto w-full max-w-sm border border-[#b8862f]/30 bg-white p-3">
          <Image
            src="https://g.tlcdn.com/gen/f6732b271108431ea335ebc845f110ca.png"
            alt="ROLL CALL! hardcover book cover"
            width={1536}
            height={2048}
            className="w-full"
          />
        </div>

        <div>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-[#17203a]/60">
            Hardcover Edition
          </p>

          {live ? (
            <a
              href={hardcoverBuyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.03]"
            >
              Buy the Hardcover <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <div className="mt-6">
              <span className="inline-flex cursor-not-allowed items-center gap-2 border border-[#17203a]/15 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#17203a]/40">
                Buy the Hardcover <Clock className="h-4 w-4" />
              </span>
              <p className="mt-3 font-body text-sm text-[#17203a]/60">
                Available {formatDate(hardcoverAvailableFrom)}. Join the
                launch list and we&apos;ll email you the moment it&apos;s
                live.
              </p>
            </div>
          )}

          <div className="mt-10 border border-[#b8862f]/25 bg-white/60 p-6">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#b8862f]">
              Scan to Order
            </p>
            <div className="mt-4 w-40">
              <Image
                src={hardcoverQrCodeUrl}
                alt="QR code to buy the ROLL CALL! hardcover"
                width={3180}
                height={3180}
                className="w-full"
              />
            </div>
            <p className="mt-3 font-body text-xs text-[#17203a]/50">
              Scan with your phone camera to order the hardcover directly.
            </p>
          </div>

          <div className="mt-10 gold-divider" />

          <div className="mt-10">
            <WhereToBuy />
          </div>

          <p className="mt-10 font-body text-sm text-[#17203a]/70">
            Not ready to buy yet?{" "}
            <Link href="/contact" className="text-[#b8862f] hover:underline">
              Join the launch list
            </Link>{" "}
            for updates and early access.
          </p>
        </div>
      </div>
    </main>
  );
}
