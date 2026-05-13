import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { supabase } from '@/lib/supabase'

import profilePhoto from '@/assets/me.webp'
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
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    countryCode: '+63',
    phone: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  return (
    <LayoutPreloader>
      <div id="top" className="relative flex min-h-svh flex-col text-foreground">
        {/* Full-width grid: hero + header backdrop */}
        <div className="absolute inset-x-0 top-0 z-0 h-[min(92vh,56rem)] min-h-[480px] w-full overflow-hidden">
          <TheInfiniteGrid />
        </div>

        <header className="relative z-20 flex w-full flex-col gap-3 border-0 bg-transparent px-6 py-4 md:px-10 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Ezra Digital Solutions
            </a>
            <div className="inline-flex items-center gap-1 rounded-full text-xs font-semibold text-emerald-500 lg:hidden animate-pulse">
              <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Available
            </div>
          </div>

          <nav
            className="flex w-full min-w-0 flex-nowrap items-center justify-between gap-x-2 overflow-x-auto [scrollbar-width:none] sm:justify-start sm:overflow-visible md:w-auto [&::-webkit-scrollbar]:hidden"
            aria-label="Main"
          >
            <div className="hidden items-center gap-1 rounded-full text-sm font-semibold text-emerald-500 lg:inline-flex lg:mr-4 animate-pulse">
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

          <div className="flex flex-col gap-8 bg-background px-6 py-8 text-base md:px-10">
          <section
            aria-labelledby="about-me"
            className="mx-auto w-full scroll-mt-24 rounded-xl py-8 text-left"
          >
            <div className="grid grid-cols-[minmax(80px,1fr)_2fr] gap-6 sm:grid-cols-[minmax(120px,180px)_1fr]">
              <div className="rounded-3xl overflow-hidden bg-muted">
                <img
                  src={profilePhoto}
                  alt="Ezra John Gubatanga"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    About Me
                  </p>
                </div>
                <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <p>
                    I&#8217;m <b>Ezra John Gubatanga</b>, a digital marketing and web specialist focused on building modern, conversion-focused digital experiences.
                  </p>
                  <p>
                    I combine web development, Meta Ads, automation, and branding to help businesses grow online.
                  </p>
                  <p>
                    Based in the Philippines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="services-overview"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border px-6 py-8 text-left"
          >
            <h2 id="services-overview" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Services
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Placeholder sections for main-menu links. Replace with your real service pages or
              routes when ready.
            </p>
            <ul className="mt-6 space-y-6 text-base">
              <li id="web-development" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">Web Development</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe your web builds here.</p>
              </li>
              <li id="social-media-marketing" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">Social Media Marketing</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe SMM offerings here.</p>
              </li>
              <li id="graphic-design" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">Graphic Design</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe design work here.</p>
              </li>
              <li id="e-commerce" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">E-Commerce</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe Shopify, online store, and sales optimization services here.</p>
              </li>
              <li id="paid-ads" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">Paid Ads</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe paid media here.</p>
              </li>
              <li id="eventful" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">Eventful</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe event planning and promotion services here.</p>
              </li>
              <li id="seo" className="scroll-mt-24">
                <h3 className="text-base font-medium text-foreground sm:text-xl">SEO</h3>
                <p className="mt-1 text-base text-muted-foreground">Describe search optimization services here.</p>
              </li>
            </ul>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border px-6 py-8 text-left"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Contact Me
              </p>
              <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Send a message and I’ll get back to you shortly.
              </h2>
            </div>

            <form
              className="mt-8 grid gap-4"
              onSubmit={async (event) => {
                event.preventDefault()
                setFormStatus('loading')
                const { error } = await supabase
                  .from('contact_submissions')
                  .insert({
                    full_name: contactData.fullName,
                    email: contactData.email,
                    country_code: contactData.countryCode,
                    phone: contactData.phone || null,
                    message: contactData.message,
                  })
                if (error) {
                  console.error(error)
                  setFormStatus('error')
                } else {
                  setFormStatus('success')
                  setContactData({ fullName: '', email: '', countryCode: '+63', phone: '', message: '' })
                }
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Full name</span>
                  <input
                    type="text"
                    name="full_name"
                    required
                    value={contactData.fullName}
                    onChange={(event) =>
                      setContactData((current) => ({
                        ...current,
                        fullName: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={contactData.email}
                    onChange={(event) =>
                      setContactData((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-[150px_minmax(0,_1fr)]">
                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Country</span>
                  <select
                    name="country_code"
                    value={contactData.countryCode}
                    onChange={(event) =>
                      setContactData((current) => ({
                        ...current,
                        countryCode: event.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+91">🇮🇳 +91</option>
                  </select>
                </label>

                <label className="space-y-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Contact number (optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    value={contactData.phone}
                    onChange={(event) =>
                      setContactData((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="923 456 7890"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={contactData.message}
                  onChange={(event) =>
                    setContactData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="min-h-[160px] w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" disabled={formStatus === 'loading'} className="w-full sm:w-auto">
                  {formStatus === 'loading' ? 'Sending…' : 'Send message'}
                </Button>
                {formStatus === 'success' && (
                  <p className="text-sm font-medium text-emerald-500">Message sent! I'll get back to you soon.</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-sm font-medium text-red-500">Something went wrong. Please try again.</p>
                )}
              </div>
            </form>
          </section>

          <section
            aria-labelledby="featured-projects"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border px-6 py-8 text-left"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Featured Projects
              </p>
              <h2 id="featured-projects" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Selected work across web development, digital marketing, and automation.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-border bg-background p-6 shadow-sm shadow-muted/20">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">Eventful</h3>
                <p className="mt-3 text-sm text-muted-foreground">Landing pages for modern events.</p>
                <p className="mt-6 text-sm font-medium text-foreground">React • Vite</p>
                <a
                  href="https://eventful.page"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Project
                </a>
              </article>

              <article className="rounded-3xl border border-border bg-background p-6 shadow-sm shadow-muted/20">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">RRAC Campaigns</h3>
                <p className="mt-3 text-sm text-muted-foreground">Ads + branding + social campaigns.</p>
                <p className="mt-6 text-sm font-medium text-foreground">Meta Ads • SMM</p>
                <a
                  href="#case-studies"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Project
                </a>
              </article>

              <article className="rounded-3xl border border-border bg-background p-6 shadow-sm shadow-muted/20">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">Funnel Systems</h3>
                <p className="mt-3 text-sm text-muted-foreground">Automation & lead conversion systems.</p>
                <p className="mt-6 text-sm font-medium text-foreground">Workflow • Conversion</p>
                <a
                  href="#case-studies"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Project
                </a>
              </article>

              <article className="rounded-3xl border border-border bg-background p-6 shadow-sm shadow-muted/20">
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">E-commerce Work</h3>
                <p className="mt-3 text-sm text-muted-foreground">Shopify + ads + sales optimization.</p>
                <p className="mt-6 text-sm font-medium text-foreground">Shopify • Ads</p>
                <a
                  href="#case-studies"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  View Project
                </a>
              </article>
            </div>
          </section>

          <section
            id="case-studies"
            className="mx-auto w-full max-w-2xl scroll-mt-24 rounded-xl border border-border bg-muted/30 px-6 py-10 text-left"
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Case Studies</h2>
            <p className="mt-2 text-base text-muted-foreground">
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
