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

        <header className="relative z-20 flex w-full flex-col gap-3 border-0 bg-transparent px-6 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-10">
          <a
            href="#top"
            className="self-start text-sm font-semibold tracking-tight text-foreground sm:mr-auto"
          >
            Ezra Digital Solutions
          </a>

          <nav
            className="flex w-full min-w-0 flex-nowrap items-center justify-between gap-x-0 overflow-x-auto [scrollbar-width:none] sm:w-auto sm:justify-end sm:gap-x-2 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
            aria-label="Main"
          >
            <a href="#top" className={navLinkClass}>
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${navLinkClass} inline-flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-ring max-sm:gap-0.5`}
              >
                Services
                <ChevronDown
                  className="size-4 shrink-0 opacity-60 max-sm:size-3.5"
                  aria-hidden
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-48">
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
                  <a href="#paid-ads">Paid Ads</a>
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
            </ul>
          </section>

          <section className="mx-auto flex max-w-2xl flex-col text-left">
            <p className="text-sm font-medium text-muted-foreground">Home</p>
            <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Build your next page here
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              This replaces the default Vite starter. Edit copy, links, and the hero image
              in <code className="rounded-md bg-muted px-1.5 py-0.5 text-sm">src/App.tsx</code>
              to match your product or portfolio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button">Primary action</Button>
              <Button type="button" variant="outline">
                Secondary
              </Button>
            </div>
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
