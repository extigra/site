import Link from 'next/link'

export default function ConfirmationCart() {
  return (
    <main>
      <h3>Sua solicitação foi enviada com sucesso!</h3>

      <p>Em breve entraremos em contato através do número de seu telefone!</p>
      <p>Obrigado!</p>

      <Link href={'/'}>Voltar para a Home</Link>
    </main>
  )
}
