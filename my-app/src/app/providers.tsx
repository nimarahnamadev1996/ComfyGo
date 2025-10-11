import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import { ThemeProvider } from './theme-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Toaster/>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
            {children}
        </ThemeProvider>
    </div>
  )
}

export default Providers