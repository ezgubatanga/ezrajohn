import { ChevronDown } from 'lucide-react'

import { LayoutPreloader } from '@/components/ui/layout-preloader'
import { Button } from '@/components/ui/button'
import { TheInfiniteGrid } from '@/components/ui/the-infinite-grid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const CONTACT_EMAIL = 'ezgubatanga@gmail.com'

const navLinkClass =
  'shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground max-sm:px-0 max-sm:py-1.5 max-sm:text-xs'

function App() {
  return (
    <LayoutPreloader>
      <div id="top" className="relative flex min-h-svh flex-col text-foreground">
        {/* Full-width grid: hero + header backdrop */}
        <div className="absolute inset-x-0 top-0 z-0 h-[min(92vh,56rem)] min-h-[480px] w-full overflow-hidden">
          <TheInfiniteGrid />
        </div>

        <header className="relative z-20 flex w-full flex-col gap-3 border-0 bg-transparent px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-4 md:px-10">
          <div className="flex w-full items-center justify-between gap-3">
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Ezra Digital Solutions
            </a>
            <div className="inline-flex items-center gap-1 rounded-full px-1 py-0.5 text-[10px] font-semibold text-emerald-500 md:hidden animate-pulse">
              <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Available
            </div>
          </div>

          <nav
            className="flex w-full min-w-0 flex-nowrap items-center justify-between gap-x-0 overflow-x-auto [scrollbar-width:none] sm:w-auto sm:justify-end sm:gap-x-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            aria-label="Main"
          >
            <div className="hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-emerald-500 md:inline-flex animate-pulse">
              <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Available
            </div>
            <a href="#top" className={navLinkClass}>
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navLinkClass} inline-flex items-center gap-1 border-0 bg-transparent shadow-none outline-none ring-0 ring-offset-0 [-webkit-tap-highlight-color:transparent] focus:border-0 focus:outline-none focus:ring-0 data-[state=open]:border-0 data-[state=open]:ring-0 max-sm:gap-0.5 max-sm:focus-visible:ring-0 sm:focus-visible:ring-2 sm:focus-visible:ring-ring`}
              >
                Services
                <ChevronDown
                  className="size-4 shrink-0 opacity-60 max-sm:size-3.5"
                  aria-hidden
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-48 space-y-1">
                <DropdownMenuItem asChild>
                  <a href="#web-development">Web Development</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#social-media-marketing">Social Media Marketing</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#graphic-design">Graphic Design</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#paid-ads">E-Commerce</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#paid-ads">Paid Ads</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://eventful.page" target="_blank" rel="noreferrer">Eventful</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#seo">SEO</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#case-studies" className={navLinkClass}>
              Case Studies
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={navLinkClass}>
              Contact
            </a>
          </nav>
        </header>

        <main className="relative z-10 flex flex-1 flex-col">
          {/* Reserve hero height so the grid shows through above the fold */}
          <div
            className="pointer-events-none shrink-0 min-h-[calc(min(92vh,56rem)-5.5rem)] w-full"
            aria-hidden
          />

          <div className="flex flex-col gap-8 bg-background px-6 py-8 sm:px-10">
          <section
            aria-labelledby="services-overview"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border px-6 py-8 text-left"
          >
            <h2 id="services-overview" className="text-lg font-semibold tracking-tight">
              Services
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Placeholder sections for main-menu links. Replace with your real service pages or
              routes when ready.
            </p>
            <ul className="mt-6 space-y-6 text-sm">
              <li id="web-development" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">Web Development</h3>
                <p className="mt-1 text-muted-foreground">Describe your web builds here.</p>
              </li>
              <li id="social-media-marketing" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">Social Media Marketing</h3>
                <p className="mt-1 text-muted-foreground">Describe SMM offerings here.</p>
              </li>
              <li id="graphic-design" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">Graphic Design</h3>
                <p className="mt-1 text-muted-foreground">Describe design work here.</p>
              </li>
              <li id="paid-ads" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">Paid Ads</h3>
                <p className="mt-1 text-muted-foreground">Describe paid media here.</p>
              </li>
              <li id="eventful" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">Eventful</h3>
                <p className="mt-1 text-muted-foreground">Describe event planning and promotion services here.</p>
              </li>
              <li id="seo" className="scroll-mt-24">
                <h3 className="font-medium text-foreground">SEO</h3>
                <p className="mt-1 text-muted-foreground">Describe search optimization services here.</p>
              </li>
            </ul>
          </section>

          <section
            id="case-studies"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border bg-muted/30 px-6 py-10 text-left"
          >
            <h2 className="text-lg font-semibold tracking-tight">Case Studies</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Add project highlights here. This section is linked from the main menu.
            </p>
          </section>
          </div>
        </main>

        <footer className="relative z-10 border-t border-border bg-background px-6 py-6 text-left text-sm text-muted-foreground sm:px-10">
          © {new Date().getFullYear()} Ezra Digital Solutions
        </footer>
      </div>
    </LayoutPreloader>
  )
}

export default App
