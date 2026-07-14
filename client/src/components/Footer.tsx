import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PixelStripe } from "@/components/ui/PixelBlocks";
import { PixelIcon } from "@/components/ui/PixelIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--bp-paper)] text-[var(--bp-ink)]">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="grid gap-8 border-t border-[var(--bp-hairline)] pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="mistral-section-label">
              <PixelIcon name="mail" size={12} color="var(--bp-cobalt)" />
              Contact
            </p>
            <h2 className="font-statement mt-4 text-[clamp(2.3rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Have a messy product space?
              <span className="block text-[var(--bp-cobalt)]">Let&apos;s make it shippable.</span>
            </h2>
            <p className="mt-5 max-w-[42rem] text-base leading-7 text-[var(--bp-ink-muted)]">
              Product strategy, systems thinking, and builder energy for work that needs clarity and momentum.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 border-l-2 border-[var(--bp-cobalt)] pl-3">
              <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--bp-ink-muted)]">
                Product judgment, backed by code.
              </span>
            </div>
          </div>
          <Link href="/contact">
            <span className="mistral-action cursor-pointer px-6">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[var(--bp-hairline)] pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-2xl">Nivedita<span className="text-[var(--bp-cobalt)]">_</span></div>
            <p className="mt-1 text-sm text-[var(--bp-ink-muted)]">Product manager + builder</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.75rem] text-[var(--bp-ink-muted)]" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="cursor-pointer transition-colors duration-200 hover:text-[var(--bp-cobalt)]">{item.name}</span>
              </Link>
            ))}
            {siteConfig.socials.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[var(--bp-cobalt)]">
                {social.name}
              </a>
            ))}
          </nav>
          <p className="font-mono text-[0.68rem] text-[var(--bp-ink-muted)]">© {currentYear} Nivedita</p>
        </div>
      </div>
      <PixelStripe />
    </footer>
  );
}
