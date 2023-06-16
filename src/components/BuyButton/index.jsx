import './styles.sass'

export default function BuyButton(props) {
  const { text } = props

  return (
    <a href="#" className="buy-button">
      {text}
    </a>
  )
}
