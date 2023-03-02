import './globals.css'

export const metadata = {
  title: 'CryptoPlaza Leaderboard',
  description: 'Most followed CryptoPlaza Lens Profiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
