import { useRef, useState } from 'react'
import styles from './FAQ.module.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ChevronDownIcon } from '../../icons/ChevronDownIcon'

const FAQ_ITEMS = [
  {
    question: 'O que é o Wishpay?',
    answer:
      'O Wishpay é uma plataforma de pagamentos que ajuda pessoas físicas e empresas a gerenciar seu dinheiro — facilitando o envio de valores a partir da sua conta. Suas transações são sempre transparentes e seguras, protegidas por criptografia líder do setor.',
  },
  {
    question: 'Como envio dinheiro para outra conta?',
    answer:
      'Basta tocar em "Enviar Dinheiro", inserir o e-mail ou telefone do destinatário, digitar o valor e confirmar. O dinheiro chega instantaneamente para usuários Wishpay e em 1 a 2 dias úteis para contas bancárias externas.',
  },
  {
    question: 'O que acontece se eu atingir o limite do meu plano Gratuito?',
    answer:
      'Você não pode ultrapassar o limite de envio do plano Gratuito. Você receberá uma notificação antes de atingir o limite e poderá fazer upgrade para o plano Negócios para transferências ilimitadas e acesso ampliado.',
  },
  {
    question: 'Como verifico minha identidade?',
    answer:
      'A verificação de identidade leva apenas alguns minutos. Envie um documento oficial com foto e uma selfie pelo aplicativo. Nosso sistema automatizado verifica sua identidade com segurança e você será aprovado em minutos.',
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
            <h2>Perguntas Frequentes</h2>
            <p>Tudo que você precisa saber sobre o Wishpay e como ele funciona.</p>
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
