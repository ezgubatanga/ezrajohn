import { LayoutPreloader } from '@/components/ui/layout-preloader'
import { Button } from '@/components/ui/button'
import { TheInfiniteGrid } from '@/components/ui/the-infinite-grid'

function App() {
  return (
    <LayoutPreloader>
      <div className="flex min-h-svh flex-col bg-background text-foreground">
        <header className="border-b border-border px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">Ezra Digital Solutions</span>
        </header>

        <main className="flex flex-1 flex-col gap-8 px-6 py-8 sm:px-10">
          <div className="relative h-[min(72vh,820px)] min-h-[420px] w-full overflow-hidden rounded-2xl border border-border shadow-sm">
            <TheInfiniteGrid />
          </div>

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
        </main>

        <footer className="border-t border-border px-6 py-6 text-left text-sm text-muted-foreground sm:px-10">
          © {new Date().getFullYear()} Ezrajohn
        </footer>
      </div>
    </LayoutPreloader>
  )
}

export default App
