'use client'
export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Showcase from '@/components/Showcase'
import { useState, useEffect } from 'react'

import 'swiper/css'
import './styles.sass'

const GET_CATALOGS = gql`
  query MyQuery {
    catalogos {
      id
      nome
      produtos {
        id
        nome
        slug
        imagens {
          url
        }
      }
    }
  }
`

export default function CatalogsSection() {
  const [slidesPerPage, setSlidesPerPage] = useState(4)

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      setSlidesPerPage(1)
    }
  })

  const { data } = useSuspenseQuery(GET_CATALOGS)

  return (
    <section className="catalogs-section">
      {data.catalogos &&
        data.catalogos.map((catalog, index) => {
          return (
            <div className="catalog-container" key={index}>
              <h2 className="catalog-name">{catalog.nome}</h2>
              <Swiper
                slidesPerView={slidesPerPage}
                modules={[Autoplay]}
                navigation
                autoplay={{ delay: 5000 }}
                loop={true}
              >
                {catalog.produtos.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Showcase
                        name={product.nome}
                        imageSrc={product.imagens[0]?.url}
                        slug={product.slug}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          )
        })}
    </section>
  )
}
