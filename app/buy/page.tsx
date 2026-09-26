"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { WhereToBuy } from "@/components/where-to-buy";
import {
  hardcoverBuyUrl,
  hardcoverAvailableFrom,
  hardcoverQrCodeUrl,
  paperbackBuyUrl,
  paperbackAvailableFrom,
  paperbackQrCodeUrl,
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

type FormatCardProps = {
  label: string;
  buyUrl: string;
  availableFrom: string;
  qrCodeUrl: string;
};

function FormatCard({ label, buyUrl, availableFrom, qrCodeUrl }: FormatCardProps) {
  const live = isLive(availableFrom);

  return (
    <div className="border border-[#b8862f]/25 bg-white/60 p-8">
      <p className="font-body text-sm uppercase tracking-[0.2em] text-[#b8862f]">
        {label}
      </p>

      {live ? (
        <a
          href={buyUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.03]"
        >
          Buy the {label} <ArrowRight className="h-4 w-4" />
        </a>
      ) : (
        <div className="mt-5">
          <span className="inline-flex cursor-not-allowed items-center gap-2 border border-[#17203a]/15 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#17203a]/40">
            Buy the {label} <Clock className="h-4 w-4" />
          </span>
          <p className="mt-3 font-body text-sm text-[#17203a]/60">
            Available {formatDate(availableFrom)}.
          </p>
        </div>
      )}

      <div className="mt-8 w-32">
        <Image
          src={qrCodeUrl}
          alt={`QR code to buy the ROLL CALL! ${label.toLowerCase()}`}
          width={3180}
          height={3180}
          className="w-full"
        />
      </div>
      <p className="mt-3 font-body text-xs text-[#17203a]/50">
        Scan to order the {label.toLowerCase()} directly.
      </p>
    </div>
  );
}

export default function BuyPage() {
  return (
    <main className="grain mx-auto max-w-5xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
        Get Your Copy
      </p>
      <h1 className="mt-4 font-display text-5xl text-[#17203a]">
        Own ROLL CALL<span className="text-gold">!</span>
      </h1>
      <p className="mt-3 max-w-xl font-display text-xl italic text-[#17203a]/70">
        A 31-Day Gratitude Journey Through the Names of God &mdash; choose
        your format.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
        <div className="mx-auto w-full max-w-sm border border-[#b8862f]/30 bg-white p-3">
          <Image
            src="https://g.tlcdn.com/gen/f6732b271108431ea335ebc845f110ca.png"
            alt="ROLL CALL! book cover"
            width={1536}
            height={2048}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <FormatCard
            label="Hardcover"
            buyUrl={hardcoverBuyUrl}
            availableFrom={hardcoverAvailableFrom}
            qrCodeUrl={hardcoverQrCodeUrl}
          />
          <FormatCard
            label="Paperback"
            buyUrl={paperbackBuyUrl}
            availableFrom={paperbackAvailableFrom}
            qrCodeUrl={paperbackQrCodeUrl}
          />
        </div>
      </div>

      <div className="mt-16 gold-divider" />

      <div className="mt-14 max-w-3xl">
        <WhereToBuy />
      </div>

      <p className="mt-10 font-body text-sm text-[#17203a]/70">
        Not ready to buy yet?{" "}
        <Link href="/contact" className="text-[#b8862f] hover:underline">
          Join the launch list
        </Link>{" "}
        for updates and early access.
      </p>
    </main>
  );
}
