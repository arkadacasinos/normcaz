import { REF_URL } from '@/lib/site'
import { IconArrowUpRight, IconStar } from './icons'

const WINNERS = [
  { mult: 'x3,6', id: 'ID 51••••••56', sum: '3 640 RUB', dep: '1 000 RUB депозит' },
  { mult: 'x21,5', id: 'ID 11••••••67', sum: '7 400 RUB', dep: '344 RUB депозит' },
  { mult: 'x20', id: 'ID 65••••••47', sum: '9 000 RUB', dep: '451 RUB депозит' },
  { mult: 'x3,4', id: 'ID 15••••••32', sum: '4 000 RUB', dep: '1 163 RUB депозит' },
  { mult: 'x4,3', id: 'ID 63••••••62', sum: '3 500 RUB', dep: '804 RUB депозит' },
  { mult: 'x6,3', id: 'ID 98••••••92', sum: '5 000 RUB', dep: '800 RUB депозит' },
  { mult: 'x3', id: 'ID 98••••••63', sum: '4 600 RUB', dep: '1 555 RUB депозит' },
]

export function Payouts() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 sm:px-4" aria-label="Топ-выплаты игроков Norm Casino">
      <div className="q7v2-payouts-card">
        <p className="q7v2-payouts-label">
          Топ-выплаты
          <IconStar className="h-4 w-4 text-accent" />
        </p>
        <p className="q7v2-payouts-total">7 010 198 RUB</p>
        <ul className="q7v2-scroll mt-3 flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-7 lg:gap-2 lg:overflow-visible">
          {WINNERS.map((winner) => (
            <li key={winner.id}>
              <a href={REF_URL} className="q7v2-winner">
                <span className="q7v2-badge">
                  <span>{winner.mult}</span>
                </span>
                <span className="q7v2-winner-body">
                  <span className="q7v2-winner-id">{winner.id}</span>
                  <span className="q7v2-winner-sum">
                    {winner.sum}
                    <IconArrowUpRight className="h-3 w-3 text-accent" />
                  </span>
                  <span className="q7v2-winner-dep">{winner.dep}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
