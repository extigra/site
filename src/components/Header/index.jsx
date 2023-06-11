import Link from 'next/link'
import './styles.sass'

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link href={'/'}>
          <img src="/images/logo.png" alt="logo" width={140} />
        </Link>
      </div>
      <div className="menus-container">
        <nav className="menu">
          <Link href={'/produtos'} className="menu-item">
            PRODUTOS
          </Link>
        </nav>

        <nav className="menu">
          <Link href={'/contato'} className="menu-item">
            CONTATO
          </Link>
        </nav>
      </div>
    </header>
  )
}
