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
            <span className={styles['cta-banner__eyebrow']}>Get Started Today</span>
            <h2>Simplify payments management</h2>
            <p>
              Sync and link your international business account that wires you money whenever
              you want to get paid.
            </p>
            <a href="#" className="btn-white">
              Start Now <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
