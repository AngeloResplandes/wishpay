import { useRef } from 'react'
import styles from './Pricing.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { CheckIcon } from '../../icons/CheckIcon'

interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaClass: string
  featured?: boolean
  badge?: string
}

const PLANS: PricingPlan[] = [
  {
    name: 'Pessoal',
    price: '5',
    period: '/mês',
    description: 'Ideal para pessoas físicas e freelancers que querem transferências simples e baratas.',
    features: [
      'Sem necessidade de equipe de pagamentos',
      'Pagamentos mais rápidos e configuração em grupo',
      'Suporte com resposta em até 2 horas',
    ],
    cta: 'Testar Grátis',
    ctaClass: 'pricing-btn-outline',
  },
  {
    name: 'Negócios',
    price: '20',
    period: '/mês',
    description: 'Tudo que você precisa para conectar serviços financeiros e escalar seu negócio.',
    features: [
      'Sem necessidade de equipe de pagamentos',
      'Pagamentos mais rápidos e configuração em grupo',
      'Suporte completo a qualquer hora',
      'Aproveite sempre as melhores tarifas e funcionalidades',
    ],
    cta: 'Começar Agora',
    ctaClass: 'pricing-btn-primary',
    featured: true,
    badge: 'Mais Popular',
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    period: 'fale com vendas',
    description: 'Soluções sob medida para grandes organizações com fluxos financeiros complexos.',
    features: [
      'Sem necessidade de equipe de pagamentos',
      'Pagamentos mais rápidos e configuração em grupo',
      'Suporte completo a qualquer hora',
      'Aproveite sempre as melhores tarifas e funcionalidades',
    ],
    cta: 'Falar com Vendas',
    ctaClass: 'pricing-btn-outline',
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section id="pricing" className={styles.pricing} ref={sectionRef}>
      <div className="container">
        <div className={`${styles['pricing__header']} fade-in-up`}>
          <span className="section-label">Planos</span>
          <h2>Planos para todo orçamento</h2>
          <p>Seja uma pequena empresa ou uma grande corporação, temos um plano ideal para você.</p>
        </div>

        <div className={styles['pricing__grid']}>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''} fade-in-up`}
              style={{ '--delay': `${0.1 + i * 0.1}s` } as React.CSSProperties}
            >
              {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
              <div className="pricing-plan">{plan.name}</div>
              <div className="pricing-price">
                {plan.price !== 'Personalizado' && <span className="pricing-currency">$</span>}
                <span className="pricing-amount">{plan.price}</span>
              </div>
              <div className="pricing-period">{plan.period}</div>
              <p className="pricing-desc">{plan.description}</p>
              <div className="pricing-divider" />
              <ul className="pricing-features">
                {plan.features.map((feat) => (
                  <li key={feat} className="pricing-feature">
                    <span className="pricing-check">
                      <CheckIcon stroke={plan.featured ? 'white' : '#7B3FB5'} />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={plan.ctaClass}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
