'use client'
export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'
import Showcase from '@/components/Showcase'

const query = gql`
  query {
    produtos {
      id
      nome
      preco
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
        {data &&
          data.produtos.map((element, index) => {
            return (
              <Showcase
                productId={element.id}
                name={element.nome}
                price={element.preco}
                imageSrc={element.imagens[0].url}
                key={index}
              />
            )
          })}
      </section>
    </main>
  )
}
