import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="grain">
      {/* Hero — full-quality image, lighter overlay for readability without washing it out */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://g.tlcdn.com/gen/7e41df2adeed49fe8df47d9b7cf3169a.png"
            alt="Golden scroll of light bearing the names of God"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0b1220]/70 via-[#0b1220]/35 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-end justify-center px-6 py-24 text-right">
          <p className="animate-fade-up font-body text-sm uppercase tracking-[0.3em] text-[#d4af5a]">
            Discover Who God Is, One Name at a Time
          </p>
          <h1
            className="animate-fade-up mt-6 max-w-2xl font-display text-6xl font-medium leading-[1.05] text-[#f4ecd8] md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            ROLL CALL<span className="text-[#d4af5a]">!</span>
          </h1>
          <p
            className="animate-fade-up mt-4 max-w-xl font-display text-2xl italic text-[#f4ecd8]/90"
            style={{ animationDelay: "0.2s" }}
          >
            A 31-Day Gratitude Journey Through the Names of God
          </p>
          <p
            className="animate-fade-up mt-6 max-w-lg font-body text-base leading-relaxed text-[#f4ecd8]/75"
            style={{ animationDelay: "0.3s" }}
          >
            There is a difference between knowing facts about God and truly
            knowing Him. This 31-day journey is built to close that distance —
            one name, one story, one gratitude prayer at a time.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap justify-end gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#d4af5a] px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#0b1220] transition-transform hover:scale-[1.03]"
            >
              Get the Discount (15-20% Off) <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 border border-[#f4ecd8]/40 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-[#f4ecd8] transition-colors hover:border-[#d4af5a] hover:text-[#d4af5a]"
            >
              Explore the Book
            </Link>
          </div>
        </div>
      </section>

      {/* Snapshot stats */}
      <section className="border-y border-[#b8862f]/25 bg-[#f1e8d2] px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {[
            { n: "31", label: "Days" },
            { n: "31", label: "Names of God" },
            { n: "6", label: "Ways to Engage" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl text-gold">{s.n}</p>
              <p className="mt-2 font-body text-sm uppercase tracking-[0.2em] text-[#17203a]/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-[#b8862f]">
          Who This Book Is For
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl text-[#17203a] md:text-5xl">
          Whether you&apos;ve known Him for decades, or you&apos;re just
          starting to listen.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "New Believers",
              body: "A gentle, honest starting point for anyone asking, “how do I actually get to know God?”",
            },
            {
              icon: Heart,
              title: "Readers in Hard Seasons",
              body: "For hurt, discouragement, grief, and spiritual dryness — met with truth, not platitudes.",
            },
            {
              icon: Users,
              title: "Groups & Churches",
              body: "Built for Bible studies, men’s and women’s groups, small groups, and discipleship classes.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="border border-[#b8862f]/25 bg-white/60 p-8 transition-colors hover:border-[#b8862f]/60"
            >
              <c.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-display text-2xl text-[#17203a]">
                {c.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#17203a]/65">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission strip — full-quality image, lighter overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://g.tlcdn.com/gen/cc2cdda7c14c4183962f610c71587d34.png"
            alt="Hands reaching together in warm light, symbolizing restoration and community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/60 via-[#0b1220]/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-lg">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-[#d4af5a]">
              A Message With a Mission
            </p>
            <h2 className="mt-4 font-display text-4xl text-[#f4ecd8]">
              Every book purchased fuels real restoration.
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-[#f4ecd8]/80">
              All proceeds support I Know A Guy Ministries, Inc. &mdash; a
              faith-based nonprofit walking people from &ldquo;who I
              was&rdquo; into who God says they are, through faith,
              community, and service.
            </p>
            <Link
              href="/ministry"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-[#d4af5a] hover:underline"
            >
              Learn About the Ministry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
