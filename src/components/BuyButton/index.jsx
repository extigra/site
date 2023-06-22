import './styles.sass'
import Link from 'next/link'

export default function BuyButton(props) {
  const { text, slug } = props

  return (
    <Link href={`/produtos/${slug}`} className="buy-button">
      {text}
    </Link>
  )
}
