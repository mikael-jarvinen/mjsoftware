import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEventHandler, useState } from 'react'
import styles from '../styles/Home.module.scss'
import dictionary from '../dictionary'
import { disconnect } from 'process'

const Home: NextPage = () => {
  const router = useRouter()
  const [sending, setSending] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const { locale } = router

  const dict = locale === 'en-US' ? dictionary['en-US'] : dictionary.fi

  const handleContactFormSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    setSending(true)
    try {
      const email = e.currentTarget.email.value
      const phoneNumber = e.currentTarget.phoneNumber.value
      const message = e.currentTarget.message.value

      const body = JSON.stringify({
        email,
        phoneNumber,
        message,
      })
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body,
      })

      if (response.status !== 200) {
        throw new Error()
      }
    } catch {
      setSending(false)
    }
    setSending(false)
    setContactSent(true)
  }

  return (
    <div>
      <Head>
        <meta key="og:title" name='title' content={dict.metaTitle} />
        <title>{dict.metaTitle}</title>
        <meta
          name='description'
          content={dict.metaDescription}
        />
      </Head>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroHeader}>
          <hgroup>
            <h1>{dict.title}</h1>
            <hr className='divider' />
            <h6>
              {dict.subtitle}
            </h6>
          </hgroup>
        </div>
      </div>
      <div className={styles.flexCenter}>
        <a href='#contact-form'>
          <button>
            {dict.heroContactButton}
          </button>
        </a>
      </div>
      <div className='spacer' />
      <div className='spacer' />
      <div>
        <div className={styles.centerText}>
          <h3>{dict.section1Title}</h3>
        </div>
        <div className='spacer' />
        <div className='container'>
          <div className={styles.panel1}>
            <div>
              <h4>{dict.section1Card1Title}</h4>
              <br></br>
              <p>
                {dict.section1Card1Content} <b>React</b>, <b>NextjS</b>, <b>GraphQL</b>,{' '}
                <b>Rest</b>, <b>Node</b>, <b>JVM</b>...
              </p>
            </div>
            <div>
              <h4>{dict.section1Card2Title}</h4>
              <br></br>
              <p>
                {dict.section1Card2Content}
              </p>
            </div>
            <div>
              <h4>{dict.section1Card3Title}</h4>
              <br></br>
              <p>
                {dict.section1Card3Content}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='spacer' />
      <div className='spacer' />
      <div>
        <div className={styles.centerText}>
          <h3>{dict.section2Title}</h3>
        </div>
        <div className='spacer' />
        <div className='container'>
          <div className={styles.panel2}>
            <div className={styles.description}>
              <a href='https://freelanceri.net/'>
                <h4>Freelanceri.net</h4>
              </a>
              <br></br>
              <br></br>
              <p>
                {dict.section2Card1Content1}
              </p>
              <br></br>
              <h5>{dict.section2Card1Title2}</h5>
              <br></br>
              <p>
                {dict.section2Card1Content2}
                <br></br>
                {dict.section2Card1front}
                <b>NextJS</b>, <b>Typescript</b>, <b>Apollo</b>
                <br></br>
                {dict.section2Card1back}
                <b>Scala</b>, <b>Akka</b>, <b>Sangria(GraphQL)</b>
              </p>
            </div>
            <div className={styles.websitePreview}>
              <Image
                
                src='/freelanceri.net.webp'
                width={884}
                height={920}
                alt='freelanceri.net'
              />
            </div>
          </div>
        </div>
        <div className='spacer' />
        <div className='spacer' />
        <div className='container'>
          <div className={styles.panel3}>
            <div className={styles.description}>
              <a style={{ wordBreak: 'break-word' }} href="https://asiakastyytyvaisyystutkimukset.fi/">
                <h4>Asiakastyytyvaisyystutkimukset.fi</h4>
              </a>
              <br></br>
              <br></br>
              <p>
                {dict.section2Card2Content1}
              </p>
              <br></br>
              <h5>{dict.section2Card2Title2}</h5>
              <br></br>
              <p>
                {dict.section2Card2front}
                <b>NextJS</b>, <b>Javascript</b>, <b>Apollo</b>
                <br></br>
                {dict.section2Card2back}
                <b>NodeJs</b>, <b>Strapi(GraphQL)</b>
              </p>
            </div>
            <div className={styles.websitePreview}>
              <Image
                
                src='/asiakastyytyväisyystutkimukset.fi.webp'
                width={884}
                height={920}
                alt='freelanceri.net'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='spacer' />
      <div className='spacer' />
      <div id='about' className='container'>
        <div className={styles.panel4}>
          <div className={styles.column}>
            <h5>{dict.section3Column1Title}</h5>
            <br></br>
            <br></br>
            <p>React</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills90}`}>
                90%
              </div>
            </div>
            <p>HTML</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills90}`}>
                90%
              </div>
            </div>
            <p>Typescript</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills90}`}>
                90%
              </div>
            </div>
            <p>CSS</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills80}`}>
                80%
              </div>
            </div>
            <p>GraphQL</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills80}`}>
                80%
              </div>
            </div>
            <p>Automated tests</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills80}`}>
                80%
              </div>
            </div>
            <p>Scala</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills75}`}>
                75%
              </div>
            </div>
            <p>Python</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills75}`}>
                75%
              </div>
            </div>
            <p>Java</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills60}`}>
                60%
              </div>
            </div>
            <p>C++</p>
            <div className={styles.skills}>
              <div className={`${styles.allSkills} ${styles.skills35}`}>
                35%
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <h5>{dict.section3Column2Title}</h5>
            <small>Mikael Järvinen</small>
            <br></br>
            <br></br>
            <p>
              {dict.section3Column2Paragraph1}
            </p>
            <ul>
              <li>TDD</li>
              <li>DRY</li>
              <li>MVC</li>
              <li>Mikro palvelut</li>
            </ul> 
            <p>
              <br></br>
              <br></br>
              {dict.section3Column2Paragraph2}
            </p>
          </div>
        </div>
      </div>
      <div className='spacer' />
      <div className='container'>
        {contactSent ? (
          <div className={styles.centerText}>
            <h5>{dict.contactFormSubmitted}</h5>
          </div>
        ) : (
          <form id='contact-form' onSubmit={handleContactFormSubmit}>
            <div className={styles.panel5}>
              <div className={styles.centerText}>
                <h4>{dict.contactFormTitle}</h4>
                <div className='spacer' />
              </div>
              <div className={styles.gridContainer}>
                <div className='textInput'>
                  <label htmlFor='email-input'>{dict.contactFormEmail}</label>
                  <input
                    id='email-input'
                    type='text'
                    name='email'
                    placeholder={dict.contactFormRequired}
                    required
                    minLength={6}
                  />
                </div>
                <div className='textInput'>
                  <label htmlFor='phoneNumber-input'>{dict.contactFormPhonenumber}</label>
                  <input
                    id='phoneNumber-input'
                    type='tel'
                    name='phoneNumber'
                    placeholder={dict.contactFormRequired}
                    required
                    minLength={7}
                  />
                </div>
                <div className='textInput'>
                  <label htmlFor='message-input'>{dict.contactFormMessage}</label>
                  <textarea
                    id='message-input'
                    name='message'
                    rows={5}
                    placeholder={dict.contactFormRequired}
                    required
                    minLength={50}
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div className={styles.flexCenter}>
                <button type="submit">{dict.contactFormSubmit}</button>
              </div>
            </div>
          </form>
        )}
      </div>
      <div className='spacer' />
      <div className='spacer' />
    </div>
  )
}

export default Home
