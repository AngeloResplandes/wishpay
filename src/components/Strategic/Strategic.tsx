import { useRef } from 'react'
import styles from './Strategic.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8 4v6c0 5-3.6 9-8 10C7.6 21 4 17 4 12V6l8-4z" stroke="#7B3FB5" strokeWidth="2" fill="none" />
        <path d="M9 12l2 2 4-4" stroke="#7B3FB5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Equipes de Segurança',
    desc: 'Equipes de segurança trabalham para manter seu dinheiro seguro a todo momento.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#7B3FB5" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#7B3FB5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1" fill="#7B3FB5" />
      </svg>
    ),
    title: 'Autenticação',
    desc: 'Utilizamos autenticação de ponta para proteger a sua conta.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="#7B3FB5" strokeWidth="2" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="#7B3FB5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="#7B3FB5" />
      </svg>
    ),
    title: 'Fundos Protegidos',
    desc: 'Nunca se preocupe com instituições financeiras consolidadas.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#7B3FB5" strokeWidth="2" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#7B3FB5" strokeWidth="2" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#7B3FB5" strokeWidth="2" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#7B3FB5" strokeWidth="2" />
      </svg>
    ),
    title: 'Central de Contas',
    desc: 'Centralize todas as suas contas em um único lugar com facilidade.',
  },
]

const TRANSACTIONS = [
  {
    initials: 'JW',
    name: 'Jenny Wilson',
    date: 'Hoje',
    amount: '+$250',
    positive: true,
    bg: 'linear-gradient(135deg, #FF6B6B, #EE0979)',
  },
  {
    initials: 'AM',
    name: 'Alex Morgan',
    date: 'Ontem',
    amount: '-$89',
    positive: false,
    bg: 'linear-gradient(135deg, #6C63FF, #3F3D9B)',
  },
  {
    initials: 'RC',
    name: 'Ryan Clark',
    date: 'Há 2 dias',
    amount: '+$1.100',
    positive: true,
    bg: 'linear-gradient(135deg, #11998E, #38EF7D)',
  },
]

export function Strategic() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section id="strategic" className={styles.strategic} ref={sectionRef}>
      <div className="container">
        <div className={styles['strategic__inner']}>
          <div className={styles['strategic__content']}>
            <span className={`section-label fade-in-up`}>Nosso Valor</span>
            <h2 className={`${styles['strategic__title']} fade-in-up`} style={{ '--delay': '0.1s' } as React.CSSProperties}>
              A escolha estratégica
            </h2>
            <p className={`${styles['strategic__subtitle']} fade-in-up`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
              Somos comprometidos em trazer transparência às finanças de mais de 64 mil usuários.
            </p>
            <div className={styles['strategic__features']}>
              {FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  className="feature-item fade-in-up"
                  style={{ '--delay': `${0.2 + i * 0.05}s` } as React.CSSProperties}
                >
                  <div className="feature-icon">{feat.icon}</div>
                  <div className="feature-text">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['strategic__visual']}>
            <div className={styles['strat-blob']} />

            <div className={styles['phone-mockup']}>
              <div className={styles['phone-status']}>
                <div className={styles['phone-status-dots']}>
                  {[0, 1, 2].map((i) => (
                    <div key={i} className={styles['phone-status-dot']} />
                  ))}
                </div>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <rect x="0" y="3" width="3" height="7" rx="1" fill="rgba(255,255,255,0.4)" />
                  <rect x="4.5" y="2" width="3" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
                  <rect x="9" y="1" width="3" height="9" rx="1" fill="rgba(255,255,255,0.6)" />
                  <rect x="13" y="0" width="3" height="10" rx="1" fill="rgba(255,255,255,0.8)" />
                </svg>
              </div>

              <div className={styles['phone-balance-label']}>Saldo Total</div>
              <div className={styles['phone-balance-amount']}>$12.480,00</div>

              <div className={styles['phone-actions']}>
                {([
                  {
                    label: 'Adicionar',
                    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                  },
                  {
                    label: 'Enviar',
                    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  },
                  {
                    label: 'Solicitar',
                    svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 7H2M6 3l-4 4 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  },
                ] as const).map((action) => (
                  <div key={action.label} className={styles['phone-action']}>
                    <div className={styles['phone-action-btn']}>{action.svg}</div>
                    <span className={styles['phone-action-label']}>{action.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles['phone-divider']} />

              {TRANSACTIONS.map((tx) => (
                <div key={tx.initials} className={styles['phone-tx']}>
                  <div className={styles['phone-tx-left']}>
                    <div
                      className={styles['phone-tx-avatar']}
                      style={{ background: tx.bg }}
                    >
                      {tx.initials}
                    </div>
                    <div>
                      <div className={styles['phone-tx-info-name']}>{tx.name}</div>
                      <div className={styles['phone-tx-info-date']}>{tx.date}</div>
                    </div>
                  </div>
                  <span
                    className={`${styles['phone-tx-amount']} ${tx.positive ? styles.positive : styles.negative}`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles['strat-card-float']}>
              <div className={styles['strat-card-float-chip']} />
              <div className={styles['strat-card-float-text']}>WISHPAY</div>
              <div className={styles['strat-card-float-text']} style={{ fontSize: '0.55rem', marginTop: '2px', opacity: 0.6 }}>
                **** **** **** 8821
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
