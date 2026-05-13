import * as React from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from 'framer-motion'

import { cn } from '@/lib/utils'

type GridPatternProps = {
  offsetX: MotionValue<number>
  offsetY: MotionValue<number>
  patternId: string
}

const GridPattern = ({ offsetX, offsetY, patternId }: GridPatternProps) => {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

export function TheInfiniteGrid({ className }: { className?: string }) {
  const [count, setCount] = React.useState(0)
  const patternId = React.useId().replace(/:/g, '')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  const speedX = 0.5
  const speedY = 0.5

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get()
    const currentY = gridOffsetY.get()
    gridOffsetX.set((currentX + speedX) % 40)
    gridOffsetY.set((currentY + speedY) % 40)
  })

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        'relative flex h-full min-h-full w-full flex-col items-center justify-center overflow-hidden bg-background',
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          patternId={`grid-${patternId}-a`}
        />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          patternId={`grid-${patternId}-b`}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-20%] h-[40%] w-[40%] rounded-full bg-orange-500/40 blur-[120px] dark:bg-orange-600/20" />
        <div className="absolute top-[-10%] right-[10%] h-[20%] w-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/40 blur-[120px] dark:bg-blue-600/20" />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-6 px-4 text-center">
        <div className="space-y-3">
          <h2 className="text-5xl font-extrabold tracking-tight text-foreground drop-shadow-sm sm:text-6xl md:text-7xl">
            Digital Marketing & Web Specialist
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl md:leading-9">
            I build conversion-focused websites, funnels, and digital growth systems.
            Combining web development, Meta Ads, automation, and modern design to help businesses grow online.
          </p>
        </div>

        <div className="pointer-events-auto flex gap-4">
          <button
            type="button"
            className="rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95"
          >
            View Projects (7)
          </button>
          <button
            type="button"
            className="rounded-md bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-all hover:bg-secondary/80 active:scale-95"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}

/** Registry default export name */
export const Component = TheInfiniteGrid
