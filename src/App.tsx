import { LayoutPreloader } from '@/components/ui/layout-preloader'
import { Button } from '@/components/ui/button'

/** Hero image — landscape, fixed aspect; Unsplash serves width/quality only */
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&h=720&q=80'

function App() {
  return (
    <LayoutPreloader>
      <div className="flex min-h-svh flex-col bg-background text-foreground">
        <header className="border-b border-border px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">Ezrajohn</span>
        </header>

        <main className="flex flex-1 flex-col">
          <div className="w-full px-6 pt-8 pb-0 sm:px-10">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border shadow-sm">
              <img
                src={HERO_IMAGE}
                alt=""
                width={1600}
                height={720}
                className="aspect-[20/9] w-full object-cover sm:aspect-[21/9]"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          <section className="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 py-14 text-left sm:px-10">
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
