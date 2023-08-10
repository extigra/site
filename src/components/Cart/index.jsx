import { useState, useEffect } from 'react'
import './styles.sass'

export default function Cart(props) {
  const { cartItems } = props

  const [customerName, setCustomerName] = useState()
  const [customerContact, setCustomerContact] = useState()

  useEffect(() => {
    console.log(customerName)
    console.log(customerContact)
  }, [customerContact, customerName])

  function sendSolicitation(event) {
    event.preventDefault()
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((element, index) => {
            return (
              <div key={index} className="cart-item">
                <h3 className="product-name">{element.name}</h3>
                <p className="product-attribute">
                  <strong>{element.attribute}</strong>
                </p>
                <span className="product-quantity">
                  <strong>Quantidade: </strong>
                  {element.quantity}
                </span>
                {element.observation ? (
                  <span className="product-obs">
                    <strong>OBS:</strong> {element.observation}
                  </span>
                ) : null}
              </div>
            )
          })}
      </div>

      <form className="cart-form" onSubmit={sendSolicitation}>
        <h4 className="form-title">
          Para solicitar o orçamento, é necessário que você preencha as
          informações abaixo:
        </h4>

        <input
          type="text"
          placeholder="Nome"
          onChange={(event) => setCustomerName(event.target.value)}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="Telefone"
          onChange={(event) => setCustomerContact(event.target.value)}
          className="form-input"
          required
        />
        <input
          type="submit"
          value="SOLICITAR ORÇAMENTO"
          className="confirm-button"
        />
      </form>
    </div>
  )
}
