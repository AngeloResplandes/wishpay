import { useRef } from 'react'
import styles from './Integrations.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ArrowRightIcon } from '../../icons/ArrowRightIcon'

const APPS = [
  {
    name: 'Gmail',
    bg: '#EA4335',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16l-8 7L4 4z" fill="white" opacity="0.9" />
        <rect x="4" y="4" width="16" height="16" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M4 4l8 7 8-7" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    bg: '#5865F2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.3 4.2A19.5 19.5 0 0016 3a.07.07 0 00-.07.04c-.18.32-.38.73-.52 1.06a18 18 0 00-5.42 0 11.3 11.3 0 00-.53-1.06A.07.07 0 009.4 3a19.4 19.4 0 00-4.3 1.2A.07.07 0 005.06 4.3C2.6 8 1.94 11.6 2.27 15.1a.08.08 0 00.03.05 19.6 19.6 0 005.9 2.98.07.07 0 00.08-.03c.45-.62.86-1.28 1.2-1.98a.07.07 0 00-.04-.1 12.9 12.9 0 01-1.84-.88.07.07 0 010-.12l.36-.29a.07.07 0 01.07-.01c3.86 1.76 8.03 1.76 11.85 0a.07.07 0 01.08.01l.35.29a.07.07 0 010 .12 12.1 12.1 0 01-1.85.88.07.07 0 00-.04.1c.35.7.76 1.36 1.2 1.98a.07.07 0 00.08.03 19.5 19.5 0 005.9-2.98.08.08 0 00.04-.05c.4-4.06-.67-7.59-2.83-10.72a.06.06 0 00-.04-.03zM8.52 13c-.93 0-1.7-.86-1.7-1.91s.75-1.91 1.7-1.91 1.72.86 1.7 1.91c0 1.05-.75 1.91-1.7 1.91zm6.27 0c-.93 0-1.7-.86-1.7-1.91s.75-1.91 1.7-1.91 1.72.86 1.7 1.91c0 1.05-.75 1.91-1.7 1.91z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Dropbox',
    bg: '#0061FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 3l6 4-6 4-6-4 6-4zM18 3l6 4-6 4-6-4 6-4zM6 15l6 4 6-4-6-4-6 4zM0 11l6 4 6-4" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'PayPal',
    bg: '#003087',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M19.5 9.5c.5-3-1.5-5-5.5-5H7a1 1 0 00-1 .85L4 19h3l.75-5h2.5c4.5 0 7.5-2 8.25-5.5z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M17 13.5c.5-3-1.5-5-5.5-5H5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    bg: '#4A154B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="9" width="4" height="6" rx="2" fill="white" opacity="0.9" />
        <rect x="9" y="3" width="4" height="6" rx="2" fill="white" opacity="0.7" />
        <rect x="15" y="9" width="4" height="6" rx="2" fill="white" opacity="0.9" />
        <rect x="9" y="15" width="4" height="6" rx="2" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: 'Billing',
    bg: '#00B140',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    bg: '#96BF48',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M15 4c.5-1.5-1-2.5-2-2s-1.5 1-2 2.5" stroke="white" strokeWidth="1.5" />
        <path d="M4 6l1.5 13h13L20 6l-2-.5c0 0-.5-2-3-2.5L15 4 4 6z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M9 19v2m6-2v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Manage',
    bg: '#6B7280',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export function Integrations() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)

  return (
    <section id="integrations" className={styles.integrations} ref={sectionRef}>
      <div className="container">
        <div className={styles['integrations__inner']}>
          <div className={`${styles['integrations__content']} fade-in-up`}>
            <span className="section-label section-label--light">Integrations</span>
            <h2 className={styles['integrations__title']}>Shop everywhere, anywhere</h2>
            <p className={styles['integrations__desc']}>
              It's new and better to pay anywhere. All you need is an email address to send and
              receive payments in your 10 connected bank accounts, anywhere.
            </p>
            <a href="#" className="btn-outline">
              Explore More <ArrowRightIcon />
            </a>
          </div>

          <div
            className={`${styles['integrations__grid']} fade-in-up`}
            style={{ '--delay': '0.2s' } as React.CSSProperties}
          >
            {APPS.map((app) => (
              <div key={app.name} className={styles['app-tile']}>
                <div
                  className={styles['app-tile-icon']}
                  style={{ background: app.bg }}
                >
                  {app.icon}
                </div>
                <span className={styles['app-tile-name']}>{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
