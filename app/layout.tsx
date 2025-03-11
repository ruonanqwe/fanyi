import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '言易',
  description: '多语言视频翻译与配音平台',
  generator: '言易',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
