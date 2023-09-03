import Providers from "@utils/Providers"
import "./globals.css"
import type { Metadata } from "next"
import { SelectedDogsProvider } from "@context/selectedDogs"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Shelter dogs",
  description: "Adopt Shelter dogs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <SelectedDogsProvider>
          <Providers>{children}</Providers>
        </SelectedDogsProvider>
        <Analytics />
      </body>
    </html>
  )
}
