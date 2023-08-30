import Providers from "@utils/Providers"
import "./globals.css"
import type { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Shelter dogs",
  description: "Adopt Shelter dogs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
