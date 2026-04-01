import styles from './Footer.module.css'
import { LogoIcon } from '../../icons/LogoIcon'

const FOOTER_COLUMNS = [
  {
    title: 'Account',
    links: [
      { label: 'My Account', href: '#' },
      { label: 'All Products', href: '#' },
      { label: 'My Profile', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Site Map', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Finance',
    links: [
      { label: 'Crypto/Bitcoin', href: '#' },
      { label: 'Ethereum', href: '#' },
      { label: 'Stocks', href: '#' },
      { label: 'Bonds', href: '#' },
      { label: 'ETFs', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Legal', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer__inner']}>
          <div className={styles['footer__brand']}>
            <div className={styles['footer__brand-logo']}>
              <LogoIcon />
              <span className={styles['footer__brand-logo-text']}>Wishpay</span>
            </div>
            <p className={styles['footer__brand-desc']}>
              The smart payment platform for modern teams and businesses worldwide.
            </p>
            <p className={styles['footer__follow-label']}>Follow Us</p>
            <div className={styles['footer__socials']}>
              <a href="#" className={styles['footer__social-link']} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" className={styles['footer__social-link']} aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 10v7M7 7v.5M12 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4M12 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" className={styles['footer__social-link']} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles['footer__links']}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles['footer__col']}>
                <h5>{col.title}</h5>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['footer__bottom']}>
        <div className="container">
          <div className={styles['footer__bottom-inner']}>
            <span className={styles['footer__copyright']}>©2024 Wishpay Payment Technologies</span>
            <div className={styles['footer__legal']}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
