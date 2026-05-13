// UI components can be added here as needed

import * as React from "react"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export type LayoutPreloaderProps = {
  /** Minimum time (ms) the overlay stays visible so content does not flash */
  minMs?: number
  className?: string
  children: React.ReactNode
}

/**
 * Full-viewport preloader over children until fonts are ready (and optional minimum delay).
 * Uses global `noise-animation` keyframes from `src/index.css`.
 */
export function LayoutPreloader({
  minMs = 600,
  className,
  children,
}: LayoutPreloaderProps) {
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const start = performance.now()
    let raf = 0

    const finish = () => {
      const elapsed = performance.now() - start
      const wait = Math.max(0, minMs - elapsed)
      window.setTimeout(() => setVisible(false), wait)
    }

    raf = window.requestAnimationFrame(() => {
      if (document.fonts?.ready) {
        void document.fonts.ready.then(finish).catch(finish)
      } else {
        finish()
      }
    })

    return () => {
      window.cancelAnimationFrame(raf)
    }
  }, [minMs])

  return (
    <>
      {children}
      {visible ? (
        <div
          role="status"
          aria-live="polite"
          aria-busy="true"
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-background/90 text-foreground backdrop-blur-sm transition-opacity duration-500",
            className
          )}
        >
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay dark:opacity-[0.12]"
            style={{
              animation: "noise-animation 1.2s steps(10) infinite",
              backgroundImage:
                "radial-gradient(circle at 20% 20%, currentColor 0.6px, transparent 0.7px)",
              backgroundSize: "3px 3px",
            }}
            aria-hidden
          />
          <Loader2
            className="relative size-10 animate-spin text-primary"
            strokeWidth={2}
            aria-hidden
          />
        </div>
      ) : null}
    </>
  )
}
