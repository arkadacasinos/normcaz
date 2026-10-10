import { REF_URL } from '@/lib/site'
import {
  IconBolt,
  IconBurger,
  IconCards,
  IconClose,
  IconCrown,
  IconGift,
  IconGrid,
  IconLive,
  IconSearch,
  IconSlot,
  IconTrophy,
} from './icons'

const NAV_ITEMS = [
  { label: 'Бонусы', icon: IconGift },
  { label: 'Казино', icon: IconCards },
  { label: 'Live Казино', icon: IconLive },
]

const DRAWER_ITEMS = [
  { label: 'Бонусы', icon: IconGift },
  { label: 'Казино', icon: IconCards },
  { label: 'Live Казино', icon: IconLive },
  { label: 'Слоты', icon: IconSlot },
  { label: 'Быстрые игры', icon: IconBolt },
  { label: 'Турниры', icon: IconTrophy },
  { label: 'VIP Клуб', icon: IconCrown },
  { label: 'Провайдеры', icon: IconGrid },
]

function Logo() {
  return (
    <a href={REF_URL} className="q7v2-logo" aria-label="Norm Casino — официальный сайт">
      <span className="q7v2-logo-main">NORM</span>
      <span className="q7v2-logo-sub">CASINO</span>
    </a>
  )
}

export function Topbar() {
  return (
    <>
      <header className="q7v2-topbar">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-2 px-3 sm:px-4">
          <a href="#q7v2-menu" className="q7v2-iconbtn lg:hidden" aria-label="Открыть меню">
            <IconBurger className="h-6 w-6" />
          </a>
          <Logo />
          <nav className="ml-4 hidden items-center gap-1 lg:flex" aria-label="Основное меню">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={REF_URL} className="q7v2-navlink">
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href={REF_URL} className="q7v2-iconbtn hidden sm:inline-flex" aria-label="Поиск игр">
              <IconSearch className="h-5 w-5" />
            </a>
            <a href={REF_URL} className="q7v2-btn-ghost">
              Вход
            </a>
            <a href={REF_URL} className="q7v2-btn-red">
              Регистрация
            </a>
          </div>
        </div>
      </header>
      <div>
        <nav id="q7v2-menu" className="q7v2-drawer" aria-label="Меню казино">
          <div className="mb-2 flex items-center justify-between">
            <Logo />
            <a href="#!" className="q7v2-iconbtn" aria-label="Закрыть меню">
              <IconClose className="h-6 w-6" />
            </a>
          </div>
          {DRAWER_ITEMS.map((item) => (
            <a key={item.label} href={REF_URL} className="q7v2-drawerlink">
              <item.icon className="h-5 w-5" />
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a href={REF_URL} className="q7v2-btn-red q7v2-btn-lg">
              Регистрация
            </a>
            <a href={REF_URL} className="q7v2-btn-ghost q7v2-btn-lg">
              Вход
            </a>
          </div>
        </nav>
        <a href="#!" className="q7v2-scrim" aria-hidden="true" tabIndex={-1}></a>
      </div>
    </>
  )
}
