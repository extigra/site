'use client'
export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'

const query = gql`
  query {
    produtos {
      nome
      preco
      id
    }
  }
`

export default function ProductsListPage() {
  const { data } = useSuspenseQuery(query)

  return (
    <main>
      <div>
        {data &&
          data.produtos.map((element, index) => {
            return (
              <div key={index}>
                <p>{element.nome}</p>
                <p>{element.preco}</p>
              </div>
            )
          })}
      </div>
    </main>
  )
}
