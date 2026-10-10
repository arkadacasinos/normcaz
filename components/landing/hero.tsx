import { REF_URL } from '@/lib/site'

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-3 pt-3 sm:px-4 sm:pt-4" aria-label="Приветственный бонус Norm Casino">
      <div className="q7v2-hero-banner">
        <img
          src="/images/hero.jpg"
          alt="Norm Casino: бонус 225% + 1000 FS на четыре депозита"
          className="q7v2-hero-img"
          fetchPriority="high"
        />
        <div className="q7v2-hero-overlay" aria-hidden="true"></div>
        <div className="q7v2-hero-content">
          <h1 className="q7v2-hero-title">
            Мощный старт:
            <span className="q7v2-hero-sub">до 225% + 1000 FS на четыре депозита в Norm Casino официальном сайте</span>
          </h1>
          <a href={REF_URL} className="q7v2-btn-red q7v2-btn-lg">
            Зарегаться!
          </a>
        </div>
      </div>
    </section>
  )
}
