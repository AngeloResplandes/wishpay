import { useRef } from 'react'
import styles from './CTABanner.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section className={styles['cta-section']} ref={sectionRef}>
      <div className="container">
        <div className={`${styles['cta-banner']} fade-in-up`}>
          <div className={styles['cta-shape'] + ' ' + styles['cta-shape-1']} />
          <div className={styles['cta-shape'] + ' ' + styles['cta-shape-2']} />
          <div className={styles['cta-shape'] + ' ' + styles['cta-shape-3']} />
          <div className={styles['cta-banner__content']}>
            <span className={styles['cta-banner__eyebrow']}>Comece Hoje</span>
            <h2>Simplifique a gestão de pagamentos</h2>
            <p>
              Sincronize e conecte sua conta empresarial internacional para receber dinheiro
              sempre que quiser ser pago.
            </p>
            <a href="#" className="btn-white">
              Começar Agora <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
