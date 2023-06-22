import CatalogsSection from './sections/CatalogsSection'
import './styles.sass'

export default function Home() {
  return (
    <main>
      <section className="banners-section">
        <div className="banner-container" style={{ margin: 'auto' }}>
          <picture>
            <source
              srcSet="/images/banner-mobile.png"
              media="(max-width: 600px)"
              width={'100%'}
            />
            <img src="/images/banner-desktop.png" width="100%" />
          </picture>
        </div>
      </section>
      <CatalogsSection />
    </main>
  )
}
