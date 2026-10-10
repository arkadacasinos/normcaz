import { Categories } from '@/components/landing/categories'
import { Footer } from '@/components/landing/footer'
import { Hero } from '@/components/landing/hero'
import { Payouts } from '@/components/landing/payouts'
import { SeoArticle } from '@/components/landing/seo-article'
import { TopGames } from '@/components/landing/top-games'
import { Topbar } from '@/components/landing/topbar'

export default function Page() {
  return (
    <>
      <Topbar />
      <main className="flex flex-col gap-4 pb-10 sm:gap-5">
        <Hero />
        <Payouts />
        <Categories />
        <TopGames />
        <SeoArticle />
      </main>
      <Footer />
    </>
  )
}
