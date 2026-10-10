import { REF_URL } from '@/lib/site'
import { IconChevronRight } from './icons'

const GAMES = [
  { img: '/images/game-dog-house.jpg', name: 'The Dog House Megaways', provider: 'Pragmatic Play' },
  { img: '/images/game-crown-coins.jpg', name: 'Crown Coins', provider: 'Endorphina' },
  { img: '/images/game-le-digger.jpg', name: 'Le Digger', provider: 'Hacksaw' },
  { img: '/images/game-hit-hot-fruit.jpg', name: 'Hit Hot Fruit', provider: 'SpinJoy' },
  { img: '/images/game-hell-hot-100.jpg', name: 'Hell Hot 100', provider: 'Endorphina' },
  { img: '/images/game-jade-legends.jpg', name: 'Jade Legends', provider: 'Pragmatic Play' },
  { img: '/images/game-le-zeus.jpg', name: 'Le Zeus', provider: 'Hacksaw' },
]

export function TopGames() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 sm:px-4" aria-label="Топ слотов Norm Casino">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="q7v2-section-title">Топ</h2>
        <a href={REF_URL} className="q7v2-more">
          Больше
          <IconChevronRight className="h-4 w-4" />
        </a>
      </div>
      <ul className="q7v2-scroll flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-7 lg:overflow-visible">
        {GAMES.map((game) => (
          <li key={game.name}>
            <a href={REF_URL} className="q7v2-tile">
              <img
                src={game.img}
                alt={`Слот ${game.name} — играть в Norm Casino`}
                className="q7v2-tile-img"
                loading="lazy"
              />
              <span className="q7v2-tile-name">{game.name}</span>
              <span className="q7v2-tile-provider">{game.provider}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
