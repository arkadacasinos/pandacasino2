import { Coins, Cookie, Crown, Download, Gift, Megaphone, Target, Wallet } from 'lucide-react'

const railLinks = [
  { href: '#sloty', label: 'Слоты и игры', Icon: Coins },
  { href: '#zerkalo', label: 'Панда Казино зеркало', Icon: Target },
  { href: '#platezhi', label: 'Платежи и вывод', Icon: Wallet },
  { href: '#mobile', label: 'Мобильная версия', Icon: Download },
  { href: '#bonus', label: 'Бонусы и акции', Icon: Crown },
  { href: '#demo', label: 'Демо режим бесплатно', Icon: Gift },
  { href: '#onlain', label: 'Панда Казино онлайн', Icon: Megaphone },
  { href: '#voprosy', label: 'Поддержка и вопросы', Icon: Cookie },
]

export default function SiteRail() {
  return (
    <nav
      aria-label="Разделы сайта"
      className="q8v3-noscroll flex shrink-0 items-center gap-1 overflow-x-auto border-b border-paper/10 bg-ink p-2 md:sticky md:top-0 md:h-screen md:w-16 md:flex-col md:overflow-y-auto md:border-b-0 md:border-r md:py-3"
    >
      <a
        href="#top"
        aria-label="Panda Casino — наверх"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber/15"
      >
        <img src="/icon.png" alt="" width={28} height={28} className="h-7 w-7" />
      </a>
      {railLinks.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-paper/60 transition-colors hover:bg-panel hover:text-jade"
        >
          <Icon size={18} aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}
