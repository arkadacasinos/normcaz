import type { ReactNode } from 'react'
import '@fontsource-variable/inter'
import '@fontsource-variable/oswald'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <title>Norm Casino — официальный сайт: играть онлайн, зеркало рабочее и бонусы</title>
        <meta
          name="description"
          content="Norm Casino официальный сайт. Играть в Norm Casino онлайн: бонус 225% + 1000 FS, Norm Casino зеркало рабочее, быстрые выплаты, слоты и live-казино. Регистрируйтесь в Norm Casino сегодня."
        />
        <link rel="canonical" href="https://norm-casino-official.ru/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Norm Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Norm Casino — официальный сайт: играть онлайн, зеркало рабочее и бонусы" />
        <meta
          property="og:description"
          content="Norm Casino официальный сайт. Играть в Norm Casino онлайн: бонус 225% + 1000 FS, зеркало рабочее, быстрые выплаты, слоты и live-казино."
        />
        <meta property="og:url" content="https://norm-casino-official.ru/" />
        <meta property="og:image" content="https://norm-casino-official.ru/images/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Norm Casino — официальный сайт: играть онлайн, зеркало рабочее и бонусы" />
        <meta
          name="twitter:description"
          content="Norm Casino официальный сайт. Играть в Norm Casino онлайн: бонус 225% + 1000 FS, зеркало рабочее, быстрые выплаты, слоты и live-казино."
        />
        <meta name="theme-color" content="#0b0b0d" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
