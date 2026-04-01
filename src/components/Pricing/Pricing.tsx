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
    name: 'Personal',
    price: '5',
    period: '/month',
    description: 'Best for budgeting individuals and freelancers who want simple, low-cost transfers.',
    features: [
      'No payments team office needed',
      'Faster payments and group setup',
      '2-hour support response time',
    ],
    cta: 'Try for Free',
    ctaClass: 'pricing-btn-outline',
  },
  {
    name: 'Business',
    price: '20',
    period: '/month',
    description: 'Get everything you need to connect financial services and scale your business.',
    features: [
      'No payments team office needed',
      'Faster payments and group setup',
      'All-round support response time',
      'Always benefit from best rates and features',
    ],
    cta: 'Get Started',
    ctaClass: 'pricing-btn-primary',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'Tailored solutions for large organizations with complex financial workflows.',
    features: [
      'No payments team office needed',
      'Faster payments and group setup',
      'All-round support response time',
      'Always benefit from best rates and features',
    ],
    cta: 'Contact Sales',
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
          <span className="section-label">Pricing</span>
          <h2>Plans for every budget</h2>
          <p>Whether you're a small business, or a large corporation, we have a plan that's right for you.</p>
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
                {plan.price !== 'Custom' && <span className="pricing-currency">$</span>}
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
