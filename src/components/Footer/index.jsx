import Link from 'next/link'
import './styles.sass'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="logo" width={180} />
        </div>

        <div className="footer-menus">
          <nav className="footer-menu">
            <Link className="footer-menu-item" href={'/contato'}>
              CONTATO
            </Link>
          </nav>

          <nav className="footer-menu">
            <Link className="footer-menu-item" href={'/produtos'}>
              PRODUTOS
            </Link>
          </nav>

          <nav className="footer-menu">
            <Link className="footer-menu-item" href={'/sobre'}>
              SOBRE
            </Link>
          </nav>
        </div>

        <div className="social-medias">
          <a href="" className="social-media-item">
            <img src="/icons/instagram.svg" alt="instagram" width={38} />
          </a>

          <a href="" className="social-media-item">
            <img src="/icons/whatsapp.svg" alt="whatsapp" width={34} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Extigra Extintores - Todos os direitos reservados</span>
        <div className="partner-container">
          <span>desenvolvido por</span>
          <img
            src="/images/zeelab-logo-white.png"
            alt="zeelab-logo"
            width={120}
          />
        </div>
      </div>
    </footer>
  )
}
