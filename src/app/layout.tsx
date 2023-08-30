import Providers from "@utils/Providers"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shelter dogs",
  description: "Adopt Shelter dogs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
