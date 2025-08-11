import '../index.css'
import '../App.css'

export const metadata = {
  title: 'Danny Chen - Software Engineer & Blockchain Developer',
  description: 'Portfolio website of Danny (Zhuo) Chen - Full Stack Software Engineer, Blockchain Developer, and Finance Enthusiast. Experienced in React, Node.js, Python, and Web3 technologies.',
  keywords: 'Danny Chen, Zhuo Chen, Software Engineer, Portfolio, Blockchain, Finance, Full Stack Developer, React, Node.js, Python, Web3, Ethereum, Smart Contracts',
  authors: [{ name: 'Danny Chen' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Danny Chen - Software Engineer & Blockchain Developer',
    description: 'Full Stack Software Engineer specialized in blockchain technology and financial applications',
    url: 'https://dannychen.me',
    siteName: 'Danny Chen Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danny Chen - Software Engineer & Blockchain Developer',
    description: 'Full Stack Software Engineer specialized in blockchain technology and financial applications',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}