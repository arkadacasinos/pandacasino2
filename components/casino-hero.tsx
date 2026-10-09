import {
  Circle,
  CircleCheck,
  Diamond,
  Layers,
  MessageCircle,
  Search,
  ShoppingBag,
  Target,
  Triangle,
} from 'lucide-react'

const winners = [
  { tile: '/images/tile-1.jpg', game: 'Magic Ape', user: 'user***84', sum: '1999 ₽' },
  { tile: '/images/tile-2.jpg', game: 'Book of Panda', user: 'user***01', sum: '20573 ₽' },
  { tile: '/images/tile-3.jpg', game: 'Fortune Gems', user: 'user***59', sum: '944 ₽' },
  { tile: '/images/tile-4.jpg', game: 'Coins of Fortune', user: 'user***64', sum: '1484 ₽' },
  { tile: '/images/tile-5.jpg', game: 'Jungle Treasure', user: 'user***44', sum: '1379 ₽' },
  { tile: '/images/tile-6.jpg', game: 'Sparta Gold', user: 'di**m', sum: '528 ₽' },
  { tile: '/images/tile-2.jpg', game: 'Book of Panda', user: 'user***14', sum: '2865 ₽' },
  { tile: '/images/tile-4.jpg', game: 'Coins of Fortune', user: 'user***70', sum: '648 ₽' },
]

export default function CasinoHero() {
  return (
    <header id="top" className="flex flex-col gap-4 px-3 pb-6 pt-3 md:gap-5 md:px-6 md:pb-8 md:pt-4">
      <div className="flex items-center gap-2 md:gap-3">
        <label className="relative min-w-0 flex-1 md:max-w-sm">
          <span className="sr-only">Искать игры</span>
          <Search
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-paper/40"
          />
          <input
            type="search"
            placeholder="Искать игры"
            className="w-full rounded-lg bg-panel py-2.5 pl-9 pr-3 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:ring-1 focus:ring-jade/60"
          />
        </label>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a href="#igrat" className="rounded-lg bg-panel px-3 py-2.5 text-sm font-semibold text-paper md:px-5">
            Вход
          </a>
          <a href="#igrat" className="rounded-lg bg-amber px-3 py-2.5 text-sm font-bold text-ink md:px-5">
            Регистрация
          </a>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-4">
        <section
          aria-label="Приветственный бонус Panda Casino"
          className="q8v3-banner relative flex min-h-[17rem] flex-col overflow-hidden rounded-2xl p-5 md:min-h-[19rem] md:p-8"
        >
          <div className="relative z-10 flex flex-col items-start gap-1.5 md:max-w-[58%]">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-paper">БОНУС</span>
            <p className="whitespace-nowrap font-sans leading-tight">
              <span className="text-3xl font-extrabold text-jade md:text-[2.5rem]">ДО 225%</span>{' '}
              <span className="text-base font-extrabold text-paper md:text-xl">+1500ФС</span>
            </p>
            <span className="text-sm font-semibold text-paper/90">на первый депозит</span>
            <a href="#bonus" className="mt-3 rounded-lg bg-amber px-5 py-3 text-sm font-bold text-ink">
              Забрать бонус
            </a>
            <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-paper/85" aria-label="Платежные методы">
              <li className="flex items-center gap-1 text-xs font-bold">
                <Diamond size={12} aria-hidden="true" />
                СБП
              </li>
              <li className="flex items-center gap-1 text-xs font-bold">
                <CircleCheck size={14} aria-hidden="true" />
                Pay
              </li>
              <li className="font-display text-xs font-black italic tracking-tight">МИР</li>
              <li className="flex items-center gap-1 text-xs font-bold">
                <Triangle size={12} aria-hidden="true" />
                TRON
              </li>
              <li className="flex items-center gap-1 text-xs font-bold">
                <Circle size={12} aria-hidden="true" />
                tether
              </li>
            </ul>
          </div>
          <img
            src="/images/panda-hero.jpg"
            alt="Panda Casino бонус — панда с деньгами"
            width={1000}
            height={700}
            className="q8v3-panda"
          />
        </section>

        <a
          href="#onlain"
          className="relative flex min-h-[9rem] items-center justify-center overflow-hidden rounded-2xl bg-panel md:min-h-[19rem]"
        >
          <Target size={130} aria-hidden="true" className="absolute text-paper/10" />
          <span className="relative font-display text-lg font-bold text-paper md:text-xl">МИССИИ</span>
        </a>
        <a
          href="#bonus"
          className="relative flex min-h-[9rem] items-center justify-center overflow-hidden rounded-2xl bg-panel md:min-h-[19rem]"
        >
          <ShoppingBag size={130} aria-hidden="true" className="absolute text-paper/10" />
          <span className="relative px-4 text-center font-display text-lg font-bold leading-snug text-paper md:text-xl">
            МАГАЗИН БОНУСОВ
          </span>
        </a>
      </div>

      <ul aria-label="Последние выигрыши игроков" className="q8v3-noscroll flex gap-2 overflow-x-auto pb-1 md:gap-3">
        {winners.map((win, index) => (
          <li key={`${win.user}-${index}`} className="flex shrink-0 items-center gap-2 rounded-xl bg-panel p-2 pr-3">
            <img
              src={win.tile}
              alt={'Слот ' + win.game}
              loading="lazy"
              width={56}
              height={56}
              className="h-14 w-14 rounded-lg object-cover"
            />
            <span className="flex flex-col">
              <span className="text-[11px] font-medium text-paper/50">{win.user}</span>
              <span className="text-sm font-bold text-jade">{win.sum}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 md:gap-3">
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Искать игры по названию</span>
          <Search
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-paper/40"
          />
          <input
            type="search"
            placeholder="Искать игры"
            className="w-full rounded-lg bg-panel py-3 pl-9 pr-3 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:ring-1 focus:ring-jade/60"
          />
        </label>
        <a
          href="#sloty"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-panel px-3 py-3 text-sm font-semibold text-paper md:px-5"
        >
          <Layers size={16} aria-hidden="true" />
          Провайдеры
        </a>
      </div>

      <a
        href="#voprosy"
        aria-label="Чат поддержки"
        className="fixed bottom-5 right-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-jade text-ink shadow-lg shadow-jade/30"
      >
        <MessageCircle size={22} aria-hidden="true" />
      </a>
    </header>
  )
}
