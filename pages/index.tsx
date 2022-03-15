import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEventHandler, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [sending, setSending] = useState(false)
  const [contactSent, setContactSent] = useState(false)

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
        <meta key="og:title" name='title' content='M.J. Web&Software fullstack developer' />
        <title>M.J. Web&Software fullstack developer</title>
        <meta
          name='description'
          content='Rääätälöidyt websivut ja ohjelmistot moderneilla teknologioilla. React, Node, Rest, GraphQL...'
        />
      </Head>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroHeader}>
          <hgroup>
            <h1>M.J. Web&Software</h1>
            <hr className='divider' />
            <h6>
              Räätälöidyt websivut ja ohjelmistot
            </h6>
          </hgroup>
        </div>
      </div>
      <div className={styles.flexCenter}>
        <a href='#contact-form'>
          <button>
            Ota yhteyttä
          </button>
        </a>
      </div>
      <div className='spacer' />
      <div className='spacer' />
      <div>
        <div className={styles.centerText}>
          <h3>Kaikki ominaisuudet, joita tarvitset</h3>
        </div>
        <div className='spacer' />
        <div className='container'>
          <div className={styles.panel1}>
            <div>
              <h4>Moderni</h4>
              <br></br>
              <p>
                Nettisivut joita tuotan ovat rakennettu moderneimmilla teknologioilla
                mitä saattaa löytää esim. <b>React</b>, <b>NextjS</b>, <b>GraphQL</b>,{' '}
                <b>Rest</b>, <b>Node</b>, <b>JVM</b>...
              </p>
            </div>
            <div>
              <h4>Nopea</h4>
              <br></br>
              <p>
                Modernit teknologiat ja käytännöt sekoitettuna huolelliseen ja tarkkaan 
                kehitystyöhön mahdollistavat tuotosteni suuren nopeuden ja pienen viiveen.
              </p>
            </div>
            <div>
              <h4>Siisti</h4>
              <br></br>
              <p>
                Nettisivut joita tuotan ovat tyylikkäitä ja käyttäjäystävällisiä, ja koodi, jota 
                kirjoitan on siistiä ja helpostiluettavaa. Kädenjäljissäni silmä lepää.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='spacer' />
      <div className='spacer' />
      <div>
        <div className={styles.centerText}>
          <h3>Referenssit</h3>
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
                Uusin rakentamani sivusto. Sivusto toimii ilmaisena palveluna freelancereille, 
                kevytyrittäjille, pienyrityksille... Työnantajat julkaisevat tarjouspyyntöjä ja 
                freelancerit lähettävät tarjouksia.
              </p>
              <br></br>
              <h5>Teknologia</h5>
              <br></br>
              <p>
                Sivusto pyörii <b>Docker</b> containereilla ja hyödyntää googlen Recaptcha 
                rajapintaa, google-analytics ja search-console työkaluja. Sivusto on myös 
                toimiva PWA.
                <br></br>
                Frontendin &rdquo;stäkki&rdquo;:{' '}
                <b>NextJS</b>, <b>Typescript</b>, <b>Apollo</b>
                <br></br>
                Backendin &rdquo;stäkki&rdquo;:{' '}
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
                Asiakkaalleni tuottama sivusto, jolla kerätään asiakaspalautteita suomen 
                yrityksistä. Sivu hakee YTJ:n rajapinnasta saatavat yritykset ja rakentaa näille 
                yrityksille omat sivut, jonne voi mennä antamaan yrityksestä palautetta.
              </p>
              <br></br>
              <h5>Teknologia</h5>
              <br></br>
              <p>
                Frontendin &rdquo;stäkki&rdquo;:{' '}
                <b>NextJS</b>, <b>Javascript</b>, <b>Apollo</b>
                <br></br>
                Backendin &rdquo;stäkki&rdquo;:{' '}
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
            <h5>Taidot & Osaaminen</h5>
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
            <h5>Itsestäni</h5>
            <small>Mikael Järvinen</small>
            <br></br>
            <br></br>
            <p>
              Olen Naantalilainen freelance fullstack-ohjelmoija.
              Olen ohjelmoinut harrastus mielessä 2 vuotta ja työ mielessä 2 vuotta. Painotuksena
              on ollut web-ohjelmointi. Hallitsen hyvin nykyaikaisia menetelmiä ja käytäntöjä kuten:
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
              Tämän sivuston rakentamiseen meni alle 9 tuntia.
            </p>
          </div>
        </div>
      </div>
      <div className='spacer' />
      <div className='container'>
        {contactSent ? (
          <div className={styles.centerText}>
            <h5>Yhteydenottopyyntö lähetetty</h5>
          </div>
        ) : (
          <form id='contact-form' onSubmit={handleContactFormSubmit}>
            <div className={styles.panel5}>
              <div className={styles.centerText}>
                <h4>Ota yhteyttä</h4>
                <div className='spacer' />
              </div>
              <div className={styles.gridContainer}>
                <div className='textInput'>
                  <label htmlFor='email-input'>Sähköposti*</label>
                  <input
                    id='email-input'
                    type='text'
                    name='email'
                    placeholder='(pakollinen)'
                    required
                    minLength={6}
                  />
                </div>
                <div className='textInput'>
                  <label htmlFor='phoneNumber-input'>Puhelinnumero*</label>
                  <input
                    id='phoneNumber-input'
                    type='tel'
                    name='phoneNumber'
                    placeholder='(pakollinen)'
                    required
                    minLength={7}
                  />
                </div>
                <div className='textInput'>
                  <label htmlFor='message-input'>Viesti*</label>
                  <textarea
                    id='message-input'
                    name='message'
                    rows={5}
                    placeholder='(pakollinen)'
                    required
                    minLength={50}
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <div className={styles.flexCenter}>
                <button type="submit">Lähetä</button>
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
