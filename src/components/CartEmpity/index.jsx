import Link from 'next/link'

export default function CartEmpity() {
  return (
    <div>
      <h1>Ops! Seu carrinho está vázio</h1>
      <p>
        Adicione produtos ao carrinho para conseguir solicitar seu orçamento
      </p>
      <Link href={'/produtos'}>Escolher produtos</Link>
    </div>
  )
}
