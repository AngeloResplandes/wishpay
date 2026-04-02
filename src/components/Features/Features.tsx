import { useRef } from 'react'
import styles from './Features.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section id="features" className={styles.features} ref={sectionRef}>
      <div className="container">
        <div className={`${styles['features__header']} fade-in-up`}>
          <span className="section-label">Funcionalidades</span>
          <h2>O banco do futuro que você precisa</h2>
          <p>
            Seja uma pequena empresa ou uma grande corporação, temos um plano ideal
            para você.
          </p>
        </div>

        <div className={styles['features__grid']}>
          {/* Card 1: Earn Rewards (dark) */}
          <div
            className={`${styles['feat-card']} ${styles['feat-card--dark']} fade-in-up`}
            style={{ '--delay': '0.1s' } as React.CSSProperties}
          >
            <div className={styles['feat-card__label']}>Ganhe Recompensas</div>
            <h3 className={styles['feat-card__title']}>Ganhe Recompensas</h3>
            <p className={styles['feat-card__desc']}>
              Pequena empresa ou grande organização, você paga uma taxa reduzida em todas as
              transações e acumula recompensas no caminho.
            </p>
            <div className={styles['rewards-visual']}>
              <div className={styles['rewards-coin']}>⭐</div>
              <div className={styles['rewards-badge']}>
                <span className={styles['rewards-badge-label']}>Your rewards</span>
                <span className={styles['rewards-badge-value']}>2.5%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Always Protected (light) */}
          <div
            className={`${styles['feat-card']} ${styles['feat-card--light']} fade-in-up`}
            style={{ '--delay': '0.2s' } as React.CSSProperties}
          >
            <div className={styles['feat-card__label']}>Segurança</div>
            <h3 className={styles['feat-card__title']}>Sempre Protegido</h3>
            <p className={styles['feat-card__desc']}>
              Compras mais fáceis com proteção em duas etapas e monitoramento de transações
              em tempo real para sua tranquilidade.
            </p>
            <div className={styles['protected-visual']}>
              <div className={styles['protected-header']}>
                <div className={styles['protected-icon']}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l8 4v6c0 5-3.6 9-8 10C7.6 21 4 17 4 12V6l8-4z" stroke="#7B3FB5" strokeWidth="2" fill="none" />
                    <path d="M9 12l2 2 4-4" stroke="#7B3FB5" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className={styles['protected-info-title']}>Solicitação de Jenny Wilson → Você</div>
                  <div className={styles['protected-info-sub']}>Transação segura</div>
                </div>
              </div>
              <div className={styles['protected-status']}>
                <div className={styles['protected-status-dot']} />
                <span className={styles['protected-status-text']}>Transação Segura ✓</span>
              </div>
            </div>
          </div>

          {/* Card 3: No Asset Volatility (light) */}
          <div
            className={`${styles['feat-card']} ${styles['feat-card--light']} fade-in-up`}
            style={{ '--delay': '0.3s' } as React.CSSProperties}
          >
            <div className={styles['feat-card__label']}>Portfólio</div>
            <h3 className={styles['feat-card__title']}>Sem volatilidade de ativos</h3>
            <p className={styles['feat-card__desc']}>
              Retornos generosos sobre seu saldo financeiro com crescimento consistente e previsível.
            </p>
            <div className={styles['chart-header']}>
              <span className={styles['chart-value']}>$1,876,580</span>
              <span className={styles['chart-change']}>+3.2%</span>
            </div>
            <div className={styles['chart-svg-wrap']}>
              <svg width="100%" height="60" viewBox="0 0 240 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B3FB5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#7B3FB5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 50 C40 50 60 30 80 25 S120 10 160 15 S200 5 240 2"
                  stroke="#7B3FB5"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 50 C40 50 60 30 80 25 S120 10 160 15 S200 5 240 2 L240 60 L0 60 Z"
                  fill="url(#chartGrad)"
                />
              </svg>
            </div>
          </div>

          {/* Card 4: Get Paid Faster (light) */}
          <div
            className={`${styles['feat-card']} ${styles['feat-card--light']} fade-in-up`}
            style={{ '--delay': '0.4s' } as React.CSSProperties}
          >
            <div className={styles['feat-card__label']}>Pagamentos</div>
            <h3 className={styles['feat-card__title']}>Receba mais rápido</h3>
            <p className={styles['feat-card__desc']}>
              Divida pagamentos flexíveis entre equipes e fornecedores com liquidação instantânea.
            </p>
            <div className={styles['paid-visual']}>
              <div className={styles['paid-header']}>
                <div className={styles['paid-user']}>
                  <div className={styles['paid-avatar']}>JW</div>
                  <div>
                    <div className={styles['paid-name']}>Jenny Wilson</div>
                    <div className={styles['paid-date']}>28 mar. 2026</div>
                  </div>
                </div>
              </div>
              <div className={styles['paid-amount-box']}>
                <div className={styles['paid-amount-label']}>Valor devido</div>
                <div className={styles['paid-amount-value']}><sup>$</sup>5</div>
              </div>
              <button className={styles['paid-btn']}>Pagar Agora</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
