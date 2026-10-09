import CasinoHero from '@/components/casino-hero'
import SeoArticle from '@/components/seo-article'
import SiteFooter from '@/components/site-footer'
import SiteRail from '@/components/site-rail'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ink md:flex-row">
      <SiteRail />
      <div className="flex min-w-0 flex-1 flex-col">
        <CasinoHero />
        <SeoArticle />
        <SiteFooter />
      </div>
    </div>
  )
}
