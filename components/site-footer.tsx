const hashtags = [
  { tag: '#pandacasino', href: '#official' },
  { tag: '#pandacasinozerkalo', href: '#zerkalo' },
  { tag: '#pandacasinoigrat', href: '#igrat' },
  { tag: '#pandacasinooficialny', href: '#bezopasnost' },
  { tag: '#pandacasinooficialnysayt', href: '#official' },
  { tag: '#pandakazino', href: '#sloty' },
  { tag: '#pandakazinozerkalo', href: '#zerkalo' },
  { tag: '#pandakazinozerkalorabochee', href: '#zerkalo-rabochee' },
  { tag: '#pandakazinoigrat', href: '#igrat' },
  { tag: '#pandakazinoonlain', href: '#onlain' },
  { tag: '#pandakazinooficialny', href: '#bezopasnost' },
  { tag: '#pandakazinooficialnysayt', href: '#official' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 px-4 py-8 md:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <nav aria-label="Поиск по разделам сайта">
          <ul className="flex flex-wrap gap-2">
            {hashtags.map((item) => (
              <li key={item.tag}>
                <a
                  href={item.href}
                  className="inline-block rounded-full bg-panel px-3 py-1.5 text-xs font-semibold text-paper/60 transition-colors hover:text-jade"
                >
                  {item.tag}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs leading-relaxed text-paper/40">
          Материалы страницы носят информационный характер. Азартные игры могут вызывать зависимость: играйте
          ответственно. 18+
        </p>
        <p className="text-xs text-paper/40">© 2026 Panda Casino. Панда Казино онлайн — официальная информация о клубе.</p>
      </div>
    </footer>
  )
}
