'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import './styles.sass'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function BannersCarousel() {
  const photos = ['1', '2', '3']

  return (
    <section className="banners-carrousel-section">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={true}
        delay={7000}
        loop={true}
      >
        {photos &&
          photos.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <picture>
                  <source
                    srcSet={`/images/mobile/${element}.png`}
                    media="(max-width: 600px)"
                  />
                  <img
                    src={`/images/desktop/${element}.png`}
                    alt=""
                    loading="lazy"
                  />
                </picture>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </section>
  )
}
