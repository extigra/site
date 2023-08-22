import Link from 'next/link'
import './styles.sass'

export default function CartEmpity() {
  return (
    <div className="cart-empity">
      <h1 className="title">Ops! Seu carrinho está vázio</h1>
      <p className="cart-empity-message">
        Adicione produtos ao carrinho para conseguir solicitar seu orçamento
      </p>
      <Link href={'/produtos'} className="cart-empity-link">
        Escolher produtos
      </Link>
    </div>
  )
}
