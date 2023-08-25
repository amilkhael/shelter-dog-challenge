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
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
