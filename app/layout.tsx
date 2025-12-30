import Link from 'next/link'
import Search from '@/app/ui/search'
import ThemeProvider from './theme-provider'
import AboutMe from '@/app/ui/about-me'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        
        <Search />
        <nav>
          <Link href="/"> Home </Link>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/experience">  Experience </Link>
          {/* No prefetching */}
          <Link href="/projects"> Projects </Link>
          <AboutMe />
        </nav>
        {/* server component wrapping children with context provider */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}