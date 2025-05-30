"use client"

import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

import { ThemeProvider } from "./theme-provider"

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider storageKey="theme-ui" attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </RouterProvider>
  )
}
