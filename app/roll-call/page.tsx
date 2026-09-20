import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Story — ROLL CALL! | DinahMight Books",
  description:
    "She had one meal left. The prophet asked for it first. Watch the Widow of Zarephath cliffhanger and get the free Day 1 chapter of ROLL CALL.",
};

export default function RollCallStoryPage() {
  return (
    <main className="grain">
      {/* Hero teaser */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
          Day 1 &middot; Jehovah Jireh
        </p>
        <h1 className="mt-4 font-display text-5xl text-[#17203a] md:text-6xl">
          She had one meal left.
        </h1>
        <p className="mt-4 font-display text-2xl italic text-[#17203a]/70">
          He asked for it first.
        </p>
        <p className="mx-auto mt-6 max-w-xl font-body leading-relaxed text-[#17203a]/75">
          Watch the moment the Widow of Zarephath faced the end of everything
          &mdash; then join the launch list to find out what she did next.
        </p>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-sm px-6 pb-20">
        <div className="border-4 border-[#b8862f]/60 bg-white p-1 shadow-lg">
          <video
            src="https://g.tlcdn.com/gen/d11a70aff8a74b2bbf30dd0ecaff0b3a.mp4"
            controls
            playsInline
            muted
            loop
            className="w-full"
          />
        </div>
      </section>

      {/* Story tease with illustration */}
      <section className="border-y border-[#b8862f]/25 bg-[#f1e8d2] px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="border border-[#b8862f]/30 bg-white p-2">
            <Image
              src="https://g.tlcdn.com/gen/477d2c9117f34594bfa42b50aa77701c.png"
              alt="The Widow of Zarephath facing the prophet Elijah"
              width={1024}
              height={1536}
              className="w-full"
            />
          </div>
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
              Biblical Illustration &middot; 1 Kings 17:8&ndash;16
            </p>
            <h2 className="mt-4 font-display text-3xl text-[#17203a] md:text-4xl">
              Provision Requires Participation
            </h2>
            <p className="mt-6 font-display text-xl italic leading-relaxed text-[#17203a]/80">
              &ldquo;As the Lord your God lives, I do not have bread, only a
              handful of flour in a bin, and a little oil in a jar&hellip;
              that we may eat it, and die.&rdquo;
            </p>
            <p className="mt-2 font-body text-sm text-[#17203a]/50">
              &mdash; 1 Kings 17:12, NKJV
            </p>
            <p className="mt-6 font-body leading-relaxed text-[#17203a]/80">
              What the prophet Elijah asked her to do next required
              impossible faith. This is Day 1 of ROLL CALL! &mdash;{" "}
              <em>Jehovah Jireh: The Lord Who Provides</em>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl text-[#17203a] md:text-4xl">
          Get the Free Day 1 Chapter
        </h2>
        <p className="mt-4 font-body leading-relaxed text-[#17203a]/75">
          Join the launch list and read the rest of the Widow of Zarephath&apos;s
          story &mdash; plus the Feeding of the 5,000 and a modern-day
          illustration of God&apos;s provision &mdash; free.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.03]"
          >
            Join the Launch List
          </Link>
          <a
            href="https://g.tlcdn.com/gen/3d7f2c774e684bb0b69d8f3ba9957b35.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#17203a]/30 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#17203a] transition-colors hover:border-[#b8862f] hover:text-[#b8862f]"
          >
            Preview the Chapter (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
