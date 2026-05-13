import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DefaultDemo from '@/components/ui/demo'
import { LayoutPreloader } from '@/components/ui/layout-preloader'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LayoutPreloader>
      <DefaultDemo />
    </LayoutPreloader>
  </StrictMode>,
)
