import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700', '900'],
  variable: '--font-unbounded',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-ink">
      <head>
        <title>Panda Casino — официальный сайт и рабочее зеркало | играть онлайн в Панда Казино</title>
        <meta
          name="description"
          content="Panda Casino официальный сайт: рабочее зеркало, регистрация, бонус до 225% + 1500 FS на первый депозит. Играть в Панда Казино онлайн: слоты, платежи СБП и МИР, мобильная версия."
        />
        <link rel="canonical" href="https://pandacasino2.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pandacasino2.vercel.app/" />
        <meta property="og:title" content="Panda Casino — официальный сайт и рабочее зеркало | играть онлайн в Панда Казино" />
        <meta
          property="og:description"
          content="Panda Casino официальный сайт: рабочее зеркало, регистрация, бонус до 225% + 1500 FS на первый депозит. Играть в Панда Казино онлайн: слоты, платежи СБП и МИР, мобильная версия."
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Panda Casino" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Panda Casino — официальный сайт и рабочее зеркало | играть онлайн в Панда Казино" />
        <meta
          name="twitter:description"
          content="Panda Casino официальный сайт: рабочее зеркало, регистрация, бонус до 225% + 1500 FS на первый депозит. Играть в Панда Казино онлайн: слоты, платежи СБП и МИР, мобильная версия."
        />
        <meta name="theme-color" content="#0b0b0c" />
      </head>
      <body className={`${manrope.variable} ${unbounded.variable} bg-ink font-sans text-paper antialiased`}>
        {children}
      </body>
    </html>
  )
}
