import { useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'
import { LogoIcon } from '../../icons/LogoIcon'
import { useScrolled } from '../../hooks/useScrolled'
import { smoothScrollTo } from '../../utils/smoothScroll'

const NAV_LINKS = [
  { label: 'Pessoal', href: '#strategic' },
  { label: 'Negócios', href: '#features' },
  { label: 'Empresarial', href: '#integrations' },
  { label: 'Desenvolvedor', href: '#pricing' },
]

export function Navbar() {
  const scrolled = useScrolled()
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href)
    setIsOpen(false)
  }

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      ref={navRef}
    >
      <div className="container">
        <div className={styles['navbar__inner']}>
          <a href="#" className={styles['navbar__logo']}>
            <LogoIcon />
            <span className={styles['navbar__logo-text']}>Wishpay</span>
          </a>

          <ul className={`${styles['navbar__links']} ${isOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={`${styles['navbar__actions']} ${isOpen ? 'is-open' : ''}`}>
            <a href="#" className="btn-ghost">Entrar</a>
            <a href="#" className="btn-primary">Começar Agora</a>
          </div>

          <button
            className={`${styles['navbar__hamburger']} ${isOpen ? styles['hamburger-active'] : ''}`}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
