import { useRef, useState } from 'react'
import styles from './FAQ.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ChevronDownIcon } from '../../icons/ChevronDownIcon'

const FAQ_ITEMS = [
  {
    question: 'What is Wishpay?',
    answer:
      'Wishpay is a payment platform that helps individuals and businesses manage their money — making it easy to send money from your account. Your transactions are always transparent and secure, protected by industry-leading encryption.',
  },
  {
    question: 'How do I send money to share it account?',
    answer:
      'Simply tap "Send Money", enter the recipient\'s email or phone number, type in the amount, and hit send. The money arrives instantly for Wishpay users, and within 1-2 business days for external bank accounts.',
  },
  {
    question: 'What happens when I go over the block limit on my Free plan?',
    answer:
      'You cannot exceed your sending limit on the Free plan. You\'ll receive a notification before you hit the limit, and you can easily upgrade to the Business plan for unlimited transfers and expanded access.',
  },
  {
    question: 'How do I verify my identity?',
    answer:
      'Identity verification takes just a few minutes. Upload a government-issued ID and a selfie through the app. Our automated system verifies your identity securely and you\'ll be approved within minutes.',
  },
]

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  useIntersectionObserver(sectionRef)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className={styles.faq} ref={sectionRef}>
      <div className="container">
        <div className={styles['faq__inner']}>
          <div className={`${styles['faq__header']} fade-in-up`}>
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about Wishpay and how it works.</p>
          </div>

          <div className={`${styles['faq__list']} fade-in-up`} style={{ '--delay': '0.15s' } as React.CSSProperties}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`${styles['faq-item']} ${isOpen ? styles['faq-item-open'] : ''}`}
                >
                  <button
                    className={styles['faq-question']}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    {item.question}
                    <ChevronDownIcon className={styles['faq-chevron']} />
                  </button>
                  <div className={styles['faq-answer']}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
