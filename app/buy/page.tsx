import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Clock, Heart } from "lucide-react";
import { retailerLinks } from "@/lib/retailer-links";

function isLive(availableFrom?: string) {
  if (!availableFrom) return true;
  return new Date() >= new Date(`${availableFrom}T00:00:00`);
}

export default function BuyPage() {
  return (
    <main className="grain mx-auto max-w-5xl px-6 py-24">
      <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
        Get Your Copy
      </p>
      <h1 className="mt-4 font-display text-5xl text-[#17203a]">
        Buy ROLL CALL<span className="text-gold">!</span>
      </h1>
      <p className="mt-3 max-w-xl font-display text-xl italic text-[#17203a]/70">
        A 31-Day Gratitude Journey Through the Names of God
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

        <div>
          <p className="font-display text-2xl text-[#17203a]">
            Available in hardcover, paperback, and digital formats.
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-[#17203a]/70">
            Choose your favorite retailer below to get your copy today.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {retailerLinks.map((r) => {
              const live = Boolean(r.url) && isLive(r.availableFrom);
              return live ? (
                <a
                  key={r.name}
                  href={r.url as string}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.02]"
                >
                  Buy on {r.name} <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <span
                  key={r.name}
                  className="inline-flex cursor-not-allowed items-center justify-between gap-2 border border-[#17203a]/15 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#17203a]/40"
                >
                  {r.name} <Clock className="h-4 w-4" />
                </span>
              );
            })}
          </div>

          <div className="mt-10 border border-[#b8862f]/30 bg-white/70 p-6">
            <p className="flex items-center gap-2 font-display text-xl text-[#17203a]">
              <Heart className="h-5 w-5 text-gold" /> Join the RollCall! Family
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-[#17203a]/70">
              Get additional devotionals, gratitude prayers, and updates on how
              your purchase is impacting lives through I Know A Guy Ministries.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 border border-[#17203a]/30 px-6 py-3 font-body text-sm uppercase tracking-[0.15em] text-[#17203a] transition-colors hover:border-[#b8862f] hover:text-[#b8862f]"
            >
              Join the RollCall! Family <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
