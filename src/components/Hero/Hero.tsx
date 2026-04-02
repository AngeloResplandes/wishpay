import { useRef } from 'react'
import styles from './Hero.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

const PARTNERS = [
  {
    name: 'OpenAI',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#10A37F" />
        <path d="M9 5v8M5 9h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Raycast',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect width="18" height="18" rx="4" fill="#FF6363" />
        <path d="M5 13l8-8M9 5h4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Ramp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect width="18" height="18" rx="4" fill="#00B140" />
        <path d="M4 12L8 8l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className="container">
        <div className={styles['hero__inner']}>
          <div className={styles['hero__content']}>
            <div className={`${styles['hero__eyebrow']} fade-in-up`}>
              <span className={styles['hero__eyebrow-dot']} />
              Novo · Wishpay 2.0 chegou →
            </div>

            <h1 className={`${styles['hero__title']} fade-in-up`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              <span className={styles['hero__title-line']}>Potencialize sua</span>
              <span className={styles['hero__title-line']}>vida financeira com</span>
              <span className={`${styles['hero__title-line']} ${styles['hero__title-accent']}`}>Wishpay</span>
            </h1>

            <p className={`${styles['hero__subtitle']} fade-in-up`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
              Movimentar dinheiro nunca deve levar mais do que alguns toques. Transferências são sempre gratuitas
              entre amigos.
            </p>

            <div className={`${styles['hero__actions']} fade-in-up`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
              <a href="#" className="btn-primary btn-lg">
                Enviar Dinheiro Agora <ArrowRightIcon />
              </a>
            </div>

            <div className={`${styles['hero__partners']} fade-in-up`} style={{ '--delay': '0.25s' } as React.CSSProperties}>
              <span className={styles['hero__partners-label']}>Confiado por</span>
              <div className={styles['hero__partners-divider']} />
              {PARTNERS.map((p) => (
                <a key={p.name} href="#" className={styles['partner-logo']}>
                  {p.icon}
                  <span>{p.name}</span>
                </a>
              ))}
            </div>

            <div className={`${styles['hero__stats']} fade-in-up`} style={{ '--delay': '0.3s' } as React.CSSProperties}>
              <div className="stat-block">
                <span className={styles['stat-value']}>75K+</span>
                <span className={styles['stat-label']}>Usuários satisfeitos</span>
              </div>
              <div className={styles['stat-divider']} />
              <div className="stat-block">
                <span className={styles['stat-value']}>92%</span>
                <span className={styles['stat-label']}>Aprovação dos clientes</span>
              </div>
            </div>
          </div>

          <div className={`${styles['hero__visual']} fade-in-up`} style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <div className={styles['hero-blob'] + ' ' + styles['hero-blob-1']} />
            <div className={styles['hero-blob'] + ' ' + styles['hero-blob-2']} />

            <div className={styles['hero-cards-container']}>
              <div className={`${styles['hero-card']} ${styles['hero-card-back']}`} />

              <div className={`${styles['hero-card']} ${styles['hero-card-main']}`}>
                <div className={styles['card-chip']} />
                <div className={styles['card-number']}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={styles['card-number-group']}>
                      {[0, 1, 2, 3].map((j) => (
                        <div key={j} className={styles['card-dot']} />
                      ))}
                    </div>
                  ))}
                  <span className={styles['card-last']}>8821</span>
                </div>
                <div className={styles['card-info']}>
                  <span className={styles['card-holder']}>A. Morrison</span>
                  <div className={styles['card-brand']}>
                    <div className={styles['card-brand-circle']} />
                    <div className={styles['card-brand-circle']} />
                  </div>
                </div>
              </div>

              <div className={styles['hero-card-balance']}>
                <div className={styles['hero-balance-icon']}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="20" height="14" rx="2" stroke="#7B3FB5" strokeWidth="2" />
                    <path d="M2 10h20" stroke="#7B3FB5" strokeWidth="2" />
                    <circle cx="7" cy="15" r="1.5" fill="#7B3FB5" />
                  </svg>
                </div>
                <div>
                  <div className={styles['hero-balance-label']}>Saldo Total</div>
                  <div className={styles['hero-balance-amount']}>$24.890,00</div>
                </div>
              </div>

              <div className={styles['hero-card-transfer']}>
                <div className={styles['hero-transfer-dot']} />
                <span className={styles['hero-transfer-text']}>Pagamento recebido</span>
                <span className={styles['hero-transfer-amount']}>+$1,250.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
