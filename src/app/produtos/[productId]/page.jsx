'use client'
export const dynamic = 'force-dynamic'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { gql } from '@apollo/client'

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    produtos(where: { id: $id }) {
      id
      nome
      atributos {
        nome
      }
      descricao {
        html
      }
      imagens {
        url
      }
    }
  }
`

export default function ProductDetailsPage({ params }) {
  const { data } = useSuspenseQuery(GET_PRODUCT_BY_ID, {
    variables: { id: params.productId }
  })

  console.log('data', data)
  return <div>detalhes do produto</div>
}
