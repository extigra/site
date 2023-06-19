import './styles.sass'

export default function ContactPage() {
  const contactsData = [
    {
      name: 'whatsapp',
      link: '#',
      info: '(51)9999-9999'
    },
    {
      name: 'phone',
      link: '#',
      info: '(51)9999-9999'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/extigraextintores/',
      info: '@extigraextintores'
    }
  ]

  return (
    <main>
      <section className="top-section">
        <h1 className="title">CONTATO</h1>
        <h3 className="subtitle">Entre em contato conosco!</h3>

        <div className="contacts-container">
          {contactsData &&
            contactsData.map((element, index) => {
              return (
                <div className="contact-card" key={index}>
                  <a href={element.link} className="contact-link">
                    <img src={`/icons/${element.name}.svg`} alt="" width={36} />
                    <span>{element.info}</span>
                  </a>
                </div>
              )
            })}
        </div>
      </section>

      <section className="maps-section">
        <div className="localization-container">
          <h2 className="title">Veja como chegar:</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2200.037331927894!2d-51.036472415512456!3d-29.91459732805142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951974a5c7b9c299%3A0x126fb8341f74d92!2sExtigra%20Seguran%C3%A7a%20Contra%20Inc%C3%AAndio%20%2F%20Extigra%20Extintores%20Gravataiense!5e0!3m2!1spt-BR!2sbr!4v1687186422196!5m2!1spt-BR!2sbr"
            width={1280}
            height="340"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
          <span className="adress">
            Rua Jorge Melo, 305 - Parque dos Eucaliptos, Gravataí - RS,
            94130-310
          </span>
        </div>

        <div className="hour-container">
          <h3 className="hour-title">Horário de funcionamento:</h3>
          <p>
            <strong>Segunda à Quinta:</strong> 08:00 às 12:00 - 13:00 às 18:00
          </p>
          <p>
            <strong>Sexta:</strong> 08:00 às 12:00 - 13:00 às 17:00
          </p>
          <p>
            <strong>Sábados e Domingos</strong> Fechado
          </p>
        </div>
      </section>
    </main>
  )
}
