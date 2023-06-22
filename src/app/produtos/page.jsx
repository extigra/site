'use client'
export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'
import Showcase from '@/components/Showcase'
import './styles.sass'

const query = gql`
  query {
    produtos(first: 50) {
      id
      nome
      slug
      imagens {
        url
      }
    }
  }
`

export default function ProductsListPage() {
  const { data } = useSuspenseQuery(query)

  console.log(data)

  return (
    <main>
      <section className="products-list">
        <h1 className="title">NOSSOS PRODUTOS</h1>
        <div className="showcase-container">
          {data &&
            data.produtos.map((element, index) => {
              return (
                <Showcase
                  product={element.slug}
                  name={element.nome}
                  imageSrc={element.imagens && element.imagens[0]?.url}
                  key={index}
                  slug={element.slug}
                />
              )
            })}
        </div>
      </section>
    </main>
  )
}
