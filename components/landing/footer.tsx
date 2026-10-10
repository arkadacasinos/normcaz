import { REF_URL } from '@/lib/site'
import { IconArrowUpRight } from './icons'

const HASHTAGS = [
  { tag: '#normcasino', href: '#norm-casino' },
  { tag: '#normcasinoофициальныйсайт', href: '#norm-casino-oficialnyj-sajt' },
  { tag: '#normcasinoзеркало', href: '#norm-casino-zerkalo' },
  { tag: '#normcasinoиграть', href: '#norm-casino-igrat' },
  { tag: '#normcasinoофициальный', href: '#norm-casino-oficialnyj' },
  { tag: '#normcasinoонлайн', href: '#norm-casino-onlajn' },
  { tag: '#normcasinoзеркалорабочее', href: '#norm-casino-zerkalo' },
  { tag: '#normcasinoбонусы', href: '#norm-casino-bonusy' },
  { tag: '#normcasinoвыплаты', href: '#norm-casino-vyplaty' },
  { tag: '#normcasinoмобильнаяверсия', href: '#norm-casino-mobile' },
  { tag: '#normcasinolive', href: '#norm-casino-live' },
  { tag: '#normcasinovip', href: '#norm-casino-vip' },
]

export function Footer() {
  return (
    <footer className="q7v2-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-3 py-8 sm:px-4">
        <div className="flex flex-wrap items-center gap-3">
          <a href={REF_URL} className="q7v2-btn-red q7v2-btn-lg">
            Регистрация в Norm Casino
          </a>
          <a href={REF_URL} className="q7v2-btn-ghost q7v2-btn-lg">
            Вход
          </a>
          <a href={REF_URL} className="q7v2-more">
            Рабочее зеркало
            <IconArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <nav aria-label="Хэштеги разделов сайта">
          <ul className="flex flex-wrap gap-2">
            {HASHTAGS.map((item) => (
              <li key={item.tag}>
                <a href={item.href} className="q7v2-hashtag">
                  {item.tag}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="q7v2-note">
          18+ Азартные игры могут вызывать игровую зависимость. Играйте ответственно: устанавливайте лимиты депозитов
          и не пытайтесь отыграться. Бонусные предложения и условия предоставляет игровой клуб на своём официальном
          сайте — проверяйте актуальные правила перед активацией бонусов.
        </p>
        <p className="q7v2-note">© 2026 Norm Casino. Официальный сайт, рабочее зеркало и обзор бонусов казино Norm.</p>
      </div>
    </footer>
  )
}
