import BuyButton from '../BuyButton'
import Image from 'next/image'
import './styles.sass'

export default function Showcase(props) {
  const { name, imageSrc, slug } = props

  return (
    <div className="showcase">
      <a href={`/produtos/${slug}`}>
        <div className="product-image-container">
          {imageSrc && <Image src={imageSrc} width={300} height={300} />}
        </div>
        <div className="product-infos">
          <h3 className="product-name">{name}</h3>
          <BuyButton text="Comprar" slug={slug} />
        </div>
      </a>
    </div>
  )
}
