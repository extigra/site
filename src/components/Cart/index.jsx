'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './styles.sass'

export default function Cart(props) {
  const { cartItems } = props

  const [customerName, setCustomerName] = useState()
  const [customerContact, setCustomerContact] = useState()
  const [customerStreet, setCustomerStreet] = useState()
  const [customerStreetNumber, setCustomerStreetNumber] = useState()
  const [customerNeighborhood, setCustomerNeighborhood] = useState()
  const [customerCity, setCustomerCity] = useState()
  const [customerCep, setCustomerCep] = useState()

  function sendSolicitation(event) {
    event.preventDefault()

    function generateHTML(dataList) {
      const html = dataList
        .map(
          (item) => `
        <div class="item">
          <p><strong>Produto:</strong>${item.name}</p>
          <p><strong>Quantiade:</strong> ${item.quantity}</p>
          <p><strong>Atributo:</strong> ${item.attribute}</p>
          <p><strong>Observação:</strong> ${item.observation}</p>
        </div>
      `
        )
        .join('')

      return html
    }

    const products = generateHTML(cartItems)

    const templateParams = {
      from_name: customerName,
      contact_phone: customerContact,
      adress: {
        street: customerStreet,
        number: customerStreetNumber,
        neighborhood: customerNeighborhood,
        city: customerCity,
        cep: customerCep
      },
      products: products
    }

    emailjs
      .send(
        'service_uy1a94b',
        'template_oyiz6zg',
        templateParams,
        'UMFR4Sf_Y-D79bb6T'
      )
      .then(
        () => {
          console.log('enviar para pagina de confirmação')
          setCustomerContact('')
          setCustomerName('')

          localStorage.clear()
          window.location.href = '/confirmacao'
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h1>Produtos:</h1>
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
          value={customerName}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="Telefone"
          onChange={(event) => setCustomerContact(event.target.value)}
          value={customerContact}
          className="form-input"
          required
        />

        <p>Endereço:</p>

        <input
          type="text"
          placeholder="Rua"
          onChange={(event) => setCustomerStreet(event.target.value)}
          value={customerStreet}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="Número"
          onChange={(event) => setCustomerStreetNumber(event.target.value)}
          value={customerStreetNumber}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Bairro"
          onChange={(event) => setCustomerNeighborhood(event.target.value)}
          value={customerNeighborhood}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Cidade"
          onChange={(event) => setCustomerCity(event.target.value)}
          value={customerCity}
          className="form-input"
          required
        />
        <input
          type="number"
          placeholder="CEP"
          onChange={(event) => setCustomerCep(event.target.value)}
          value={customerCep}
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
