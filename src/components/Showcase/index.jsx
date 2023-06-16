import BuyButton from '../BuyButton'
import Image from 'next/image'
import './styles.sass'

export default function Showcase(props) {
  const { name, price, imageSrc, productId } = props

  return (
    <div className="showcase">
      <a href={`/produtos/${productId}`}>
        <div className="product-image-container">
          <Image src={imageSrc} width={300} height={300} />
        </div>
        <div className="product-infos">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">R${price}</span>
          <BuyButton text="Comprar" />
        </div>
      </a>
    </div>
  )
}
