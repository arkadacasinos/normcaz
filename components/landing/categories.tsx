import { REF_URL } from '@/lib/site'
import { IconBolt, IconCards, IconCrown, IconGift, IconGrid, IconLive, IconSlot, IconTrophy } from './icons'

const CATEGORIES = [
  { label: 'Слоты', icon: IconSlot },
  { label: 'Live-казино', icon: IconLive },
  { label: 'Быстрые игры', icon: IconBolt },
  { label: 'Бонусы', icon: IconGift },
  { label: 'VIP Клуб', icon: IconCrown },
  { label: 'Турниры', icon: IconTrophy },
  { label: 'Провайдеры', icon: IconGrid },
  { label: 'Казино', icon: IconCards },
]

export function Categories() {
  return (
    <nav className="mx-auto w-full max-w-6xl px-3 sm:px-4" aria-label="Разделы Norm Casino">
      <ul className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <li key={category.label}>
            <a href={REF_URL} className="q7v2-chip">
              <category.icon className="h-4 w-4" />
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
