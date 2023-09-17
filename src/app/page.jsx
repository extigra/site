import BannersCarousel from '@/components/BannersCarousel'
import CatalogsSection from './sections/CatalogsSection'
import './styles.sass'

export default function Home() {
  return (
    <main>
      <BannersCarousel />
      <CatalogsSection />
    </main>
  )
}
