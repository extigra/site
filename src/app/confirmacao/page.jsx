import Link from 'next/link'
import './styles.sass'

export default function ConfirmationCart() {
  return (
    <main className="confirmation">
      <h3 className="title">Sua solicitação foi enviada com sucesso!</h3>

      <p className="paragraph">
        Em breve entraremos em contato através do número de seu telefone!
      </p>
      <p className="paragraph">Obrigado!</p>

      <Link href={'/'} className="button">
        Voltar para a Home
      </Link>
    </main>
  )
}
